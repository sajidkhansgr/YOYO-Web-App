import { Component, OnInit, Inject } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
// import { version, PDFJSStatic, PDFDocumentProxy, PDFPromise } from 'pdfjs-dist';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
var pdfjs = require('pdfjs-dist/web/pdf_viewer');
// var PDFAnnotate = require('pdfAnnot/pdfannotate');

declare const fabric: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  document: Document;
  totalPages!: number;
  currPage!: number;
  pdfRef!: any;
  pdfURL: any = ''; cont: any = ''; auth: any = '';
  pdfFactory!: any;
  coordinates !: any;
  pdfViewer: any;
  doCircle!: boolean;
  otherPdfRef!:any;

  constructor(@Inject(DOCUMENT) document: any) {
    this.document = document;
    // const pdfWorkerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`;
    const pdfWorkerSrc = 'assets/pdfjs/pdf.worker.min.js';
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;
  }

  ngOnInit(): void {
    // pdfjsLib.disableWorker = true; // due to CORS
    // pdfjsLib.PDFJS.disableWorker = true;
    // this.initializeState();
  }

  initializeState() {
    this.currPage = 1;
    this.totalPages = 0;
    this.pdfRef = null;
    this.pdfFactory = null;
    this.coordinates = [0, 0];
    this.doCircle = false;
  }

  clearPdfRef() {
    if (this.pdfRef) {
      this.pdfRef.cleanup();
      this.pdfRef.destroy();
    }
  }

  pdfRender() {
    this.initializeState();
    const loadingTask = pdfjsLib.getDocument({
      url: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
      // httpHeaders: { Authorization: `Bearer ds}` },
      // withCredentials: true,
    });
    loadingTask.promise.then((pdfDocument: any) => {
      // Document loaded, retrieving the page.
      this.pdfRef = pdfDocument;
      this.totalPages = pdfDocument.numPages;
      console.log(pdfDocument.numPages, "pdf.numPages;")
      pdfDocument.getPage(1).then(this.handlePages);
    });
  }

  getPageID(type='page') {
    return type+"-d-" + (this.currPage - 1);
  }

  handlePages = (page: any) => {
    const scale = 1.0;
    console.log(page, "page")
    let pageId: any = this.getPageID();
    let viewport = page.getViewport({scale});
    // const container: any = this.document.querySelector('#' + pageId);
    // container.style.display = "block";
    const canvas: any = this.document.querySelector('#' + this.getPageID('canv'));
    canvas.style.display = "block";
    // const pdfPageView = new pdfjs.PDFPageView({
    //   container: container,
    //   id: this.currPage,
    //   scale,
    //   defaultViewport: page.getViewport({ scale }),
    //   // Enable text/annotations layers, if needed
    //   textLayerFactory: new pdfjs.DefaultTextLayerFactory(),
    //   annotationLayerFactory: new pdfjs.DefaultAnnotationLayerFactory(),
    // });
    // // Associates the actual page with the view, and drawing it
    // pdfPageView.setPdfPage(page);
    // pdfPageView.draw();
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    page.render({canvasContext: context, viewport: viewport})
    .then( ()=> {

    })
    // const scale = 1;
    // console.log(page, "page")
    // let pageId: any = this.getPageID();
    // var viewport = page.getViewport({scale});
    // var canvas:any = this.document.getElementById("canvas-id");
    // var context = canvas.getContext('2d');
    // canvas.height = viewport.height;
    // canvas.width = viewport.width;
    // // Render PDF page into canvas context
    //  var renderContext = {
    //      canvasContext: context,
    //      viewport: viewport
    //  };
    // var renderTask = page.render(renderContext);
    //              renderTask.promise.then(function () {
    //                  console.log('Page rendered');
    //                  //Now you can draw new rectangle
    //                  context.strokeStyle = "red";
    //                  context.strokeRect(10, 10, 100, 50);
    //              })
    // page.render({
    //   canvasContext: context,
    //   viewport: viewport
    // }).then(function() {
    //   var bg = canvas.toDataURL("image/png");
    //   var fcanvas = new fabric.Canvas("pdfcanvas", {
    //     selection: false
    //   });
    //   fcanvas.setBackgroundImage(bg,fcanvas.renderAll.bind(fcanvas));
    //       fcanvas.setWidth(300);
    //       fcanvas.setHeight(300);
    //       var rect = new fabric.Rect({
    //         left: 100,
    //         top: 100,
    //         width: 50,
    //         height: 50,
    //         fill: '#FF454F',
    //         opacity: 0.5,
    //         transparentCorners: true,
    //         borderColor: "gray",
    //         cornerColor: "gray",
    //         cornerSize: 5
    //       });
    //       fcanvas.add(rect);
    //       fcanvas.renderAll();
    //   });

  }

  getPage(type: string) {
    if (this.currPage && this.pdfRef) {
      if (type === 'prev')
        this.currPage--;
      else
        this.currPage++;
      var node: any = this.document.getElementById(this.getPageID());
      if (node.hasChildNodes()) {
        // It has at least one
        // this.document.getElementById(this.getPageID())!.scrollIntoView({behavior: 'smooth'});
      } else {
        this.pdfRef.getPage(this.currPage).then(this.handlePages);
      }
    }
  }
  

  counter(i: number) {
    return new Array(i);
  }
  enableSelector(event:any) {
      event.preventDefault();
      var element = ($(event.target).hasClass('tool-button')) ? $(event.target) : $(event.target).parents('.tool-button').first();
      $('.tool-button.active').removeClass('active');
      $(element).addClass('active');
      this.otherPdfRef.enableSelector();
  }

  enablePencil(event:any) {
      event.preventDefault();
      var element = ($(event.target).hasClass('tool-button')) ? $(event.target) : $(event.target).parents('.tool-button').first();
      $('.tool-button.active').removeClass('active');
      $(element).addClass('active');
      this.otherPdfRef.enablePencil();
  }

  enableAddText(event:any) {
      event.preventDefault();
      var element = ($(event.target).hasClass('tool-button')) ? $(event.target) : $(event.target).parents('.tool-button').first();
      $('.tool-button.active').removeClass('active');
      $(element).addClass('active');
      this.otherPdfRef.enableAddText();
  }

  enableAddArrow(event:any) {
      event.preventDefault();
      var element = ($(event.target).hasClass('tool-button')) ? $(event.target) : $(event.target).parents('.tool-button').first();
      $('.tool-button.active').removeClass('active');
      $(element).addClass('active');
      this.otherPdfRef.enableAddArrow();
  }

  enableRectangle(event:any) {
      event.preventDefault();
      var element = ($(event.target).hasClass('tool-button')) ? $(event.target) : $(event.target).parents('.tool-button').first();
      $('.tool-button.active').removeClass('active');
      $(element).addClass('active');
      this.otherPdfRef.setColor('rgba(255, 0, 0, 0.3)');
      this.otherPdfRef.setBorderColor('blue');
      this.otherPdfRef.enableRectangle();
  }

  deleteSelectedObject(event:any) {
      event.preventDefault();
      this.otherPdfRef.deleteSelectedObject();
  }

  savePDF() {
      this.otherPdfRef.savePdf();
  }

  clearPage() {
      this.otherPdfRef.clearActivePage();
  }

}
