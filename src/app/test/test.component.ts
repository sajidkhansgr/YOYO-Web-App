import { Component, OnInit, Inject } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
// import { DOCUMENT } from '@angular/common';
// import { version, PDFJSStatic, PDFDocumentProxy, PDFPromise } from 'pdfjs-dist';
import { DOCUMENT } from '@angular/common';
// import * as $ from 'jquery';
var pdfjs = require('pdfjs-dist/web/pdf_viewer');


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  document: Document;
  totalPages!: number;
  currPage!: number;
  pdfRef!:any;
  goTo: any='ds';
  pdfURL: any='';
  constructor(@Inject(DOCUMENT) document: any) {
    this.document = document;
    // const pdfWorkerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`;
    const pdfWorkerSrc = 'assets/js/pdf.worker.min.js';
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;
  }

  ngOnInit(): void {
    // pdfjsLib.disableWorker = true; // due to CORS
    // pdfjsLib.PDFJS.disableWorker = true;
    this.initializeState();

  }

  initializeState(){
    this.currPage = 1;
    this.totalPages = 0;
    this.pdfRef = null;
  }
  getBinaryData () {
    // body...
    var xhr = new XMLHttpRequest();

    xhr.open('GET', this.pdfURL, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = (e:any) => {
        //binary form of ajax response,
        this.callGetDocment(e.currentTarget.response);
    };

    xhr.onerror = function  () {
        // body...
        alert("xhr error");
    }

    xhr.send();
}


/* ---- customview.js ----- */
callGetDocment(response: any) {
  // body...

  const loadingTask = pdfjsLib.getDocument(response)
  loadingTask.promise.then((pdfDocument:any)=> {
    // Document loaded, retrieving the page.
    this.pdfRef = pdfDocument;
    this.totalPages = pdfDocument.numPages;
    console.log(pdfDocument.numPages, "pdf.numPages;")
    pdfDocument.getPage(1).then(this.handlePages);
  });
}

  pdfRender(){
    this.initializeState();
    // this.getBinaryData();
    // const url = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
    // Loading document.
    const loadingTask = pdfjsLib.getDocument({ url: this.pdfURL });
    loadingTask.promise.then((pdfDocument:any)=> {
      // Document loaded, retrieving the page.
      this.pdfRef = pdfDocument;
      this.totalPages = pdfDocument.numPages;
      console.log(pdfDocument.numPages, "pdf.numPages;")
      pdfDocument.getPage(1).then(this.handlePages);
    });
  }

  getPageID(){
    return "page-d-"+(this.currPage-1);
  }

  handlePages = (page:any) =>{
      const scale = 1.0;
      console.log(page, "page")
      let pageId:any= this.getPageID();
      //  //Add it to the web page)
       // var node:any = this.document.getElementById('pdf-wrapper');
       // while (node.hasChildNodes()) {
       //   node.removeChild(node.firstChild);
       // }
      const container: any = this.document.querySelector('#'+pageId);
      container.style.display = "block";

      const pdfPageView = new pdfjs.PDFPageView({
        container: container,
        id: this.currPage,
        scale,
        defaultViewport: page.getViewport({ scale }),
  			// Enable text/annotations layers, if needed
        textLayerFactory: new pdfjs.DefaultTextLayerFactory(),
        annotationLayerFactory: new pdfjs.DefaultAnnotationLayerFactory(),
      });
      // Associates the actual page with the view, and drawing it
      pdfPageView.setPdfPage(page);
      pdfPageView.draw();
      // setTimeout(()=>{container.scrollIntoView({behavior: 'smooth'});},300)
      //This gives us the page's dimensions at full scale
      // var viewport = page.getViewport({ scale: scale }); // Prepare canvas using PDF page dimensions
      // var $canvas = jQuery("<canvas></canvas>");
      // //Set the canvas height and width to the height and width of the viewport
      // var canvas:any = $canvas.get(0);
      // var context = canvas.getContext("2d");
      // canvas.height = viewport.height;
      // canvas.width = viewport.width;
      //
      // //Append the canvas to the pdf container div
      // jQuery("#pdfContainer").append($canvas);
      //   //The following few lines of code set up scaling on the context if we are on a HiDPI display
      // // var outputScale = pdfjs.getOutputScale();
      // // if (outputScale.scaled) {
      // //     var cssScale = 'scale(' + (1 / outputScale.sx) + ', ' +
      // //         (1 / outputScale.sy) + ')';
      // //     CustomStyle.setProp('transform', canvas, cssScale);
      // //     CustomStyle.setProp('transformOrigin', canvas, '0% 0%');
      // //
      // //     if ($textLayerDiv.get(0)) {
      // //         CustomStyle.setProp('transform', $textLayerDiv.get(0), cssScale);
      // //         CustomStyle.setProp('transformOrigin', $textLayerDiv.get(0), '0% 0%');
      // //     }
      // // }
      // //
      // // context._scaleX = outputScale.sx;
      // // context._scaleY = outputScale.sy;
      // // if (outputScale.scaled) {
      // //     context.scale(outputScale.sx, outputScale.sy);
      // // }
      //
      // var canvasOffset:any = $canvas.offset();
      // var $textLayerDiv = jQuery("<div />")
      //     .addClass("textLayer")
      //     .css("height", viewport.height + "px")
      //     .css("width", viewport.width + "px")
      //     .offset({
      //         top: canvasOffset.top,
      //         left: canvasOffset.left
      //     });
      //
      // jQuery("#pdfContainer").append($textLayerDiv);
      //
      // page.getTextContent().then((textContent:any) =>{
      //     var textLayer = new pdfjs.TextLayerBuilder($textLayerDiv.get(0), 0); //The second zero is an index identifying
      //                                                                    //the page. It is set to page.number - 1.
      //     textLayer.setTextContent(textContent);
      //
      //     var renderContext = {
      //         canvasContext: context,
      //         viewport: viewport,
      //         textLayer: textLayer
      //     };
      //
      //     page.render(renderContext);
      // });
     //  // //We'll create a canvas for each page to draw it on
     //  var canvas = this.document.createElement( "canvas" );
     //  canvas.style.display = "block";
     //  canvas.height = viewport.height;
     //  canvas.width = viewport.width; // Render PDF page into canvas context
     //
     //  var context: any = canvas.getContext('2d');
     //
     //  var canvasOffset: any = $(canvas).offset();
     //  var $textLayerDiv = $('#text-layer').css({
     //      height : viewport.height+'px',
     //      width : viewport.width+'px',
     //      top : canvasOffset.top,
     //      left : canvasOffset.left
     //  });
     //  //Draw it on the canvas
     //  page.render({canvasContext: context, viewport: viewport});
     //
     //  //Add it to the web page
     //  var node:any = this.document.getElementById('wrapper');
     //  while (node.hasChildNodes()) {
     //    node.removeChild(node.firstChild);
     //  }
     //  this.document.getElementById('wrapper')!.appendChild(canvas);
     //  page.getTextContent().then((textContent: any) =>{
     //    console.log( textContent );
     //    // Pass the data to the method for rendering of text over the pdf canvas.
     //    var textLayer = new pdfjs.TextLayerBuilder({
     //        textLayerDiv : $textLayerDiv.get(0),
     //        pageIndex : page - 1,
     //        viewport : viewport
     //    });
     //
     //    textLayer.setTextContent(textContent);
     //    textLayer.render();
     // });
  }

  getPage(type:string){
    if(this.currPage && this.pdfRef){
      if(type==='prev')
        this.currPage--;
      else
        this.currPage++;
      var node:any = this.document.getElementById(this.getPageID());
      if (node.hasChildNodes()) {
          // It has at least one
          // this.document.getElementById(this.getPageID())!.scrollIntoView({behavior: 'smooth'});
      }else{
        this.pdfRef.getPage(this.currPage).then(this.handlePages);
      }
    }
  }

  // gotoPage(event: any){
  //   // console.log(event, "e")
  //   // console.log(this.goTo)
  //   if(this.goTo && !isNaN(this.goTo)){
  //     console.log("valid number")
  //     this.goTo = parseInt(this.goTo);
  //     if(this.goTo>0 && this.goTo<=this.totalPages){
  //       console.log("")
  //       this.currPage = this.goTo;
  //       this.pdfRef.getPage(this.currPage).then(this.handlePages);
  //     }
  //   }else{
  //       console.log("not valid number")
  //   }
  // }
  //
  //

  counter(i: number) {
      return new Array(i);
  }

}
