(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"4di1":function(e,t,r){"use strict";r.r(t),r.d(t,"ImportModule",(function(){return m}));var n=r("ofXK"),i=r("tyNb"),a=r("kmnG"),o=r("bSwM"),s=r("oMea"),c=r("pdK0"),l=r("c2Mc"),p=r("fXoL");let f=(()=>{class e{constructor(){this.fileOver=!1,this.fileDropped=new p.n}onDragOver(e){e.preventDefault(),e.stopPropagation(),this.fileOver=!0}onDragLeave(e){e.preventDefault(),e.stopPropagation(),this.fileOver=!1}ondrop(e){e.preventDefault(),e.stopPropagation(),this.fileOver=!1;let t=e.dataTransfer.files;t.length>0&&this.fileDropped.emit(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=p.Ib({type:e,selectors:[["","appFileDnd",""]],hostVars:2,hostBindings:function(e,t){1&e&&p.ec("dragover",(function(e){return t.onDragOver(e)}))("dragleave",(function(e){return t.onDragLeave(e)}))("drop",(function(e){return t.ondrop(e)})),2&e&&p.Fb("fileover",t.fileOver)},outputs:{fileDropped:"fileDropped"}}),e})();var u=r("zkNt");function d(e,t){if(1&e){const e=p.Ub();p.Tb(0,"div",17),p.Tb(1,"div",18),p.Tb(2,"h6",19),p.Mc(3),p.Sb(),p.Tb(4,"p",20),p.Mc(5),p.Sb(),p.Ob(6,"app-file-progess",21),p.Sb(),p.Tb(7,"div"),p.Tb(8,"i",22),p.ec("click",(function(){p.Bc(e);const r=t.index;return p.ic().deleteFile(r)})),p.Sb(),p.Sb(),p.Sb()}if(2&e){const e=t.$implicit,r=p.ic();p.Ab(3),p.Oc(" ",null==e?null:e.name," "),p.Ab(2),p.Oc(" ",r.getSize(null==e?null:e.size)," "),p.Ab(1),p.pc("progress",null==e?null:e.progress)}}const b=[{path:"",component:(()=>{class e{constructor(){this.files=[]}ngOnInit(){}onFileDropped(e,t=!1){t||this.prepareFilesList(e,t)}fileBrowseHandler(e,t=!1){e.target&&e.target.files&&this.prepareFilesList(e.target.files,t)}deleteFile(e){this.files.splice(e,1)}uploadFilesSimulator(e){setTimeout(()=>{if(e!==this.files.length){const t=setInterval(()=>{100===this.files[e].progress?(clearInterval(t),this.uploadFilesSimulator(e+1)):this.files[e].progress+=20},100)}},300)}prepareFilesList(e,t){if(!t){for(const t of e)t.progress=0,this.files.push(t);this.uploadFilesSimulator(0)}}getSize(e){return l.a.formatBytes(e,2)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Hb({type:e,selectors:[["app-import"]],hostAttrs:[1,"w-100"],decls:29,vars:4,consts:[[1,"main","p-3"],[1,"mb-4","clearfix","heading"],[1,"container"],["appFileDnd","",1,"custom-file-select",3,"fileDropped"],["type","file","multiple","","accept","image/*",3,"change"],[1,"text-center","my-5"],[1,"fa","fa-upload"],[1,"btn","btn-primary","d-block","w-25","mx-auto","mt-3"],[1,"files-list"],["class","single-file mt-3 row mx-0 p-2",4,"ngFor","ngForOf"],[1,"mt-3"],[1,"d-block","ml-3"],[1,"mt-5"],[1,"btn","btn-secondary",3,"routerLink"],[1,"float-right"],[1,"btn","btn-secondary","mr-2",3,"routerLink"],[1,"btn","btn-primary",3,"routerLink"],[1,"single-file","mt-3","row","mx-0","p-2"],[1,"info","mx-auto"],[1,"name","mb-0","text-wrap"],[1,"size","mb-0"],[3,"progress"],[1,"fas","fa-trash","curs-ptr",3,"click"]],template:function(e,t){1&e&&(p.Tb(0,"div",0),p.Tb(1,"h3",1),p.Mc(2," Import "),p.Sb(),p.Tb(3,"form",2),p.Tb(4,"div",3),p.ec("fileDropped",(function(e){return t.onFileDropped(e)})),p.Tb(5,"input",4),p.ec("change",(function(e){return t.fileBrowseHandler(e)})),p.Sb(),p.Tb(6,"div",5),p.Tb(7,"h2"),p.Ob(8,"i",6),p.Sb(),p.Tb(9,"h5"),p.Mc(10,"Drag & Drop a user data file here"),p.Sb(),p.Mc(11," OR "),p.Tb(12,"div",7),p.Mc(13,"Browse"),p.Sb(),p.Sb(),p.Sb(),p.Tb(14,"div",8),p.Kc(15,d,9,3,"div",9),p.Sb(),p.Tb(16,"div",10),p.Tb(17,"mat-label"),p.Mc(18,"Settings"),p.Sb(),p.Tb(19,"mat-checkbox",11),p.Mc(20,"Send a notification mail with the login credentials to all users for whom a password is specified. "),p.Sb(),p.Sb(),p.Tb(21,"div",12),p.Tb(22,"button",13),p.Mc(23,"Cancel"),p.Sb(),p.Tb(24,"div",14),p.Tb(25,"button",15),p.Mc(26,"Back"),p.Sb(),p.Tb(27,"button",16),p.Mc(28,"Import"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb()),2&e&&(p.Ab(15),p.pc("ngForOf",t.files),p.Ab(7),p.pc("routerLink","/user"),p.Ab(3),p.pc("routerLink","/user"),p.Ab(2),p.pc("routerLink","/user"))},directives:[f,n.l,a.g,o.a,i.e,u.a],styles:[".fileover[_ngcontent-%COMP%]{animation:shake 1s;animation-iteration-count:infinite}@keyframes shake{0%{transform:translate(1px,1px) rotate(0deg)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0deg)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0deg)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0deg)}to{transform:translate(1px,-2px) rotate(-1deg)}}"]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=p.Lb({type:e}),e.\u0275inj=p.Kb({factory:function(t){return new(t||e)},imports:[[n.c,i.h.forChild(b),o.b,a.e,s.a,c.a]]}),e})()},c2Mc:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("s0Cq");class i{static formatBytes(e,t){if(0===e)return"0 Bytes";const r=t<=0?0:t||2,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(r))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}static getImg(e,t=""){if(e){if(e.folderIconPath)return e.folderIconPath;if(e.imagePath)return e.imagePath;if(e.pdfImagePath)return e.pdfImagePath;if(e.urlIconPath)return e.urlIconPath;if(2===e.contentType&&e.contentPath)return e.contentPath;if(e.pdfImage)return e.pdfImage;if(Array.isArray(e.pdfImages)&&e.pdfImages.length>0&&e.pdfImages[0].imagePath)return e.pdfImages[0].imagePath}return"icon"==t?n.b:"fldr"==t?n.f:n.c}static bytestoOther(e,t){let r=0;switch(t){case"kb":r=1;break;case"mb":r=2;break;case"gb":r=3}return parseFloat((e/Math.pow(1024,r)).toFixed(2))}}},s0Cq:function(e,t,r){"use strict";r.d(t,"h",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"k",(function(){return s})),r.d(t,"g",(function(){return c})),r.d(t,"j",(function(){return l})),r.d(t,"a",(function(){return f})),r.d(t,"i",(function(){return p})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return o})),r.d(t,"d",(function(){return d}));const n=[10,20,30],i="assets/images/def-img.png",a="assets/images/def-icon.png",o="assets/images/folderIcon.png",s=["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],c=[{v:1,n:"All Users"},{v:2,n:"Selected Workspaces"},{v:3,n:"Selected User Groups"}];var l=function(e){return e[e.Admin=2]="Admin",e[e.User=3]="User",e}({}),p=function(e){return e[e.English=1]="English",e[e.German=2]="German",e[e.French=3]="French",e[e.Spanish=4]="Spanish",e[e.Dutch=5]="Dutch",e[e.Italian=6]="Italian",e[e.Japanese=7]="Japanese",e[e["Chinese(China)"]=8]="Chinese(China)",e}({}),f=function(e){return e[e.Sent=1]="Sent",e[e.Scheduled=2]="Scheduled",e[e.Archived=3]="Archived",e}({}),u=function(e){return e[e.Document=1]="Document",e[e.Photo=2]="Photo",e[e.URL=3]="URL",e[e.Video=4]="Video",e}({});const d=[".jpeg",".png",".jpg",".mp4",".xls",".xlsx",".ppt",".pptx",".doc",".docx",".pdf"]}}]);