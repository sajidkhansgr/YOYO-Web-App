/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

declare global { interface Window { AdobeDC: any; } }

@Injectable({
  providedIn: 'root'
})

export class ViewSDKClient {
  annotList: any = [];
  pdfRef: any;
  readyPromise: Promise<any> = new Promise((resolve) => {
    if (window.AdobeDC) {
      resolve();
    } else {
      /* Wait for Adobe Document Services PDF Embed API to be ready */
      document.addEventListener('adobe_dc_view_sdk.ready', () => {
        resolve();
      });
    }
  });
  adobeDCView: any;

  ready() {
    return this.readyPromise;
  }

  previewFile(data: any, list_of_annotations?: any) {
    const eventOptions = {
      // Pass the events to receive.
      // If no event is passed in listenOn, then all the annotation events will be received.
      listenOn: [
        "ANNOTATION_ADDED", "ANNOTATION_CLICKED", "ANNOTATION_UPDATED", "ANNOTATION_DELETED"
      ]
    }
    // const customFlags = {
    //   showToolbar: true,
    //   showCommentsPanel: true,
    //   downloadWithAnnotations: true,
    //   showToolsOnTextSelection: true,
    //   printWithAnnotations: true
    // }
    const config: any = {
      /* Pass your registered client id */
      clientId: environment.CLNT_ID, //'8c0cd670273d451cbc9b351b11d22318',
    };
    if (data.divId) { /* Optional only for Light Box embed mode */
      /* Pass the div id in which PDF should be rendered */
      config.divId = data.divId;
    }
    /* Initialize the AdobeDC View object */
    this.adobeDCView = new window.AdobeDC.View(config);
    // alert(fileName + "fileName");
    /* Invoke the file preview API on Adobe DC View object */
    const previewFilePromise = this.pdfRef = this.adobeDCView.previewFile({
      /* Pass information on how to access the file */
      content: {
        /* Location of file where it is hosted */
        location: {
          url: data.url, //'https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf',
          /*
          If the file URL requires some additional headers, then it can be passed as follows:-
          headers: [
              {
                  key: '<HEADER_KEY>',
                  value: '<HEADER_VALUE>',
              }
          ]
          */
        },
      },
      /* Pass meta data of file */
      metaData: {
        /* file name */
        fileName: data.name,
        /* file ID */
        id: 'file'+data.id
      }
    }, data.defConfg);
    this.registerSaveApiHandler();
    this.registerEventsHandler();

    previewFilePromise.then((adobeViewer: any) => {

      // adobeViewer.getAPIs().then((apis: any) => {
      //   apis.gotoLocation(3)
      //     .then(() => console.log("Success"))
      //     .catch((error: any) => console.log(error));
      // });

      // adobeViewer.getAnnotationManager().then((annotationManager: any) => {
      //   // console.log(annotationManager);
      //   annotationManager.addAnnotations(list_of_annotations)
      //     .then(() => console.log("Success"))
      //     .catch((error: any) => console.log(error));
      //
      //   // annotationManager.setConfig(customFlags)
      //   //   .then(() => console.log("Success"))
      //   //   .catch((error: any) => console.log(error));
      //
      //   annotationManager.registerEventListener((event: any) => {
      //     console.log(event.type, event.data);
      //     switch (event.type) {
      //       case "ANNOTATION_ADDED": this.annotList.push(event.data); break;
      //       case "ANNOTATION_UPDATED": this.updRemAnnot(event.data, 'upd'); break;
      //       case "ANNOTATION_DELETED": this.updRemAnnot(event.data, 'del'); break;
      //       default:
      //     }
      //   },
      //     eventOptions
      //   );
      //   // All annotation APIs can be invoked here
      // });
    });
    return previewFilePromise;
  }

  updRemAnnot(annotData: any, type: string) {
    // console.log(this.annotList, "before");
    const index = this.annotList.findIndex((ele: any) => ele.id == annotData.id);
    if (index >= 0) {
      if (type === 'upd') {
        this.annotList[index] = annotData;
      } else {
        //deleted
        this.annotList.splice(index, 1);
      }
      // console.log(this.annotList, "after");
    }
  }

  previewFileUsingFilePromise(divId: string, filePromise: Promise<string | ArrayBuffer>, fileName: any) {
    /* Initialize the AdobeDC View object */
    this.adobeDCView = new window.AdobeDC.View({
      /* Pass your registered client id */
      clientId: environment.CLNT_ID, // '8c0cd670273d451cbc9b351b11d22318',
      /* Pass the div id in which PDF should be rendered */
      divId
    });
    /* Invoke the file preview API on Adobe DC View object */
    this.adobeDCView.previewFile({
      /* Pass information on how to access the file */
      content: {
        /* pass file promise which resolve to arrayBuffer */
        promise: filePromise,
      },
      /* Pass meta data of file */
      metaData: {
        /* file name */
        fileName
      }
    }, {});
  }

  registerSaveApiHandler() {
    /* Define Save API Handler */
    const saveApiHandler = (metaData: any, content: any, options: any) => {
      console.log(metaData, content, options);
      return new Promise((resolve) => {
        alert("I saved the document don't worry")
        /* Dummy implementation of Save API, replace with your business logic */
        setTimeout(() => {
          const response = {
            code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: {
              metaData: Object.assign(metaData, { updatedAt: new Date().getTime() })
            },
          };
          resolve(response);
        }, 2000);
      });
    };
    this.adobeDCView.registerCallback(
      window.AdobeDC.View.Enum.CallbackType.SAVE_API,
      saveApiHandler,
      {}
    );
  }

  registerEventsHandler() {
    /* Register the callback to receive the events */
    this.adobeDCView.registerCallback(
      /* Type of call back */
      window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
      /* call back function */
      (event: any) => {
        console.log(event);
      },
      /* options to control the callback execution */
      {
        /* Enable PDF analytics events on user interaction. */
        enablePDFAnalytics: true,
      }
    );
  }

  goToPage(pageNo: number) {
    this.pdfRef.then((adobeViewer: any) => {
      adobeViewer.getAPIs().then((apis: any) => {
        apis.gotoLocation(pageNo)
          .then(() => console.log("Success"))
          .catch((error: any) => console.log(error));
      });
    })

  }
}
