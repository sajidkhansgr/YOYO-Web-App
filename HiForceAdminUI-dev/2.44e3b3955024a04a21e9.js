(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Amnm:function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var n=i("ofXK"),r=i("3Pt+"),s=i("kmnG"),o=i("qFsG"),a=i("bSwM"),c=i("A5z7"),l=i("T/Ok"),d=i("liE0"),b=i("zJym"),h=i("CFzk"),p=i("fXoL");let u=(()=>{class t{}return t.\u0275mod=p.Lb({type:t}),t.\u0275inj=p.Kb({factory:function(e){return new(e||t)},providers:[l.a,d.a,h.a],imports:[[n.c,r.h,r.s,s.e,o.c,a.b,c.e,b.a]]}),t})()},CFzk:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("tk/3"),r=i("lJxs"),s=i("aZQB"),o=i("fXoL");let a=(()=>{class t{constructor(t){this.http=t}addContentColctn(t){return this.http.post(""+s.a.ADD_CONTENT_COLCT,t)}delContentColctn(t){return this.http.post(""+s.a.REM_CONTENT_COLCT,t)}getContentColctn(t){return this.http.get(`${s.a.GET_CONTENT_COLCT}?id=${t}`)}colctnList(t){let e=new n.e;for(let i in t)(t[i]||"pageNo"==i||"isActive"==i)&&(e=e.set(i,t[i]));return this.http.get(""+s.a.LIST_COLCT,{params:e}).pipe(Object(r.a)(t=>t))}actDeactColctn(t,e){return this.http.post(""+(e?s.a.ACT_COLCT:s.a.DEACT_COLCT),t)}getColctn(t){return this.http.get(`${s.a.GET_COLCT}?id=${t}`)}}return t.\u0275fac=function(e){return new(e||t)(o.bc(n.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"E/a4":function(t,e,i){"use strict";i.d(e,"a",(function(){return y}));var n=i("vLcq"),r=i("s0Cq"),s=i("3Pt+"),o=i("fXoL"),a=i("1kSV"),c=i("CFzk"),l=i("5eHb"),d=i("liE0"),b=i("ofXK"),h=i("kmnG"),p=i("qFsG"),u=i("bSwM"),f=i("668k");function m(t,e){1&t&&(o.Tb(0,"mat-error"),o.Lc(1," Name is required "),o.Sb())}function g(t,e){1&t&&o.Ob(0,"app-loader",28),2&t&&o.pc("type","div")}function v(t,e){if(1&t&&(o.Tb(0,"div",39),o.Lc(1),o.Sb()),2&t){const t=o.ic().$implicit;o.Ab(1),o.Nc("Page ",t.pageNo,"")}}function S(t,e){if(1&t){const t=o.Ub();o.Tb(0,"div",31),o.Tb(1,"div",32),o.Ob(2,"img",33),o.Sb(),o.Tb(3,"div",34),o.Tb(4,"div",35),o.Lc(5),o.Sb(),o.Jc(6,v,2,1,"div",36),o.Sb(),o.Tb(7,"div",37),o.Tb(8,"i",38),o.ec("click",(function(){o.Ac(t);const i=e.$implicit;return o.ic(3).removeMe(i)})),o.Sb(),o.Sb(),o.Sb()}if(2&t){const t=e.$implicit,i=o.ic(3);o.Ab(2),o.qc("src",t.pdfImagePath?t.pdfImagePath:t.pdfImage?t.pdfImage:i.defImg,o.Cc),o.Ab(3),o.Mc(t.name),o.Ab(1),o.pc("ngIf",t.pageNo)}}function A(t,e){if(1&t&&(o.Tb(0,"div",29),o.Jc(1,S,9,3,"div",30),o.Sb()),2&t){const t=o.ic(2);o.Ab(1),o.pc("ngForOf",t.viewSel)}}function C(t,e){if(1&t){const t=o.Ub();o.Rb(0),o.Tb(1,"mat-form-field",12),o.Tb(2,"mat-label"),o.Lc(3,"Name"),o.Sb(),o.Ob(4,"input",13),o.Jc(5,m,2,0,"mat-error",14),o.Sb(),o.Tb(6,"mat-checkbox",15),o.Lc(7,"Allow downloads"),o.Sb(),o.Tb(8,"div",16),o.Tb(9,"div",17),o.Lc(10,"Resources"),o.Sb(),o.Sb(),o.Tb(11,"div",18),o.Tb(12,"div",19),o.Tb(13,"div",20),o.Tb(14,"mat-form-field",21),o.Ob(15,"i",22),o.Ob(16,"input",23),o.Sb(),o.Sb(),o.Tb(17,"div",24),o.Tb(18,"div",25),o.ec("click",(function(){return o.Ac(t),o.ic().openRsrcModal()})),o.Ob(19,"i",26),o.Lc(20,"Add resource "),o.Sb(),o.Sb(),o.Sb(),o.Jc(21,g,1,1,"app-loader",10),o.Jc(22,A,2,1,"div",27),o.Sb(),o.Qb()}if(2&t){const t=o.ic();o.Ab(5),o.pc("ngIf",t.linkForm.get("name").hasError("required")),o.Ab(9),o.pc("floatLabel","never"),o.Ab(7),o.pc("ngIf",t.loading),o.Ab(1),o.pc("ngIf",!t.loading)}}function T(t,e){if(1&t){const t=o.Ub();o.Tb(0,"div",40),o.Ob(1,"input",41,42),o.Tb(3,"div",43),o.ec("click",(function(){o.Ac(t);const e=o.xc(2);return o.ic().copyLink(e)})),o.Lc(4,"Copy Link"),o.Sb(),o.Sb()}if(2&t){const t=o.ic();o.Ab(1),o.qc("value",t.link)}}function w(t,e){1&t&&o.Ob(0,"app-loader",28),2&t&&o.pc("type","btn")}function k(t,e){if(1&t){const t=o.Ub();o.Tb(0,"button",44),o.ec("click",(function(){return o.Ac(t),o.ic().modalRef.dismiss()})),o.Lc(1,"Done"),o.Sb()}}let y=(()=>{class t{constructor(t,e,i,n,s,o){this.modalRef=t,this.modalService=e,this.colctnSrv=i,this.toastr=n,this.fb=s,this.shareSrv=o,this.defImg=r.b,this.copyLink=t=>{t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),this.toastr.success("Link copied","Copied!")}}ngOnInit(){this.initialiseState()}initialiseState(){this.viewSel=[],this.viewMe=!0,this.link="",this.disabled=!1,this.data&&(this.data.id&&"collection"===this.type?(this.loading=!0,this.getCntntByClctn(this.data.id)):"content"===this.type&&(this.viewSel=[this.data])),this.linkForm=this.fb.group({name:["",[s.u.required]],allowDownload:[!0]})}openRsrcModal(){this.modalService.open(n.a,{size:"lg"}).result.then(t=>{t&&this.viewSel.push(...t)})}removeMe(t){this.viewSel=this.viewSel.filter(e=>t.contentId&&t.contentId==e.contentId?t.pageNo||e.pageNo?e.pageNo!==t.pageNo:e.contentId!==t.contentId:!t.id||t.id!=e.id||(t.pageNo||e.pageNo?e.pageNo!==t.pageNo:e.id!==t.id))}getCntntByClctn(t){this.viewSel=[],this.colctnSrv.getContentColctn(t).subscribe(t=>{t&&t.result&&Array.isArray(t.result)?this.viewSel.push(...t.result):(this.toastr.error(t.message||"Something went wrong","Error!"),this.modalRef.dismiss()),this.loading=!1},t=>{this.loading=!1,this.modalRef.dismiss()})}rsrcBtn(t){"done"==t?this.getContentLink():"change"==t&&this.removeLink()}getContentLink(){this.disabled=!0;let t=Object.assign(Object.assign({},this.linkForm.value),{shareContents:[]});for(let e=0;e<this.viewSel.length;e++)t.shareContents.push({contentId:this.viewSel[e].contentId?this.viewSel[e].contentId:this.viewSel[e].id,pageNumber:this.viewSel[e].pageNo||0});this.shareSrv.addShare(t).subscribe(t=>{t&&t.result?(this.link=t.result,this.viewMe=!1):(this.toastr.error(t.message||"Something went wrong","Error!"),this.viewMe=!0),this.disabled=!1},t=>{this.viewMe=!0,this.disabled=!1})}removeLink(){this.disabled=!0;let t=this.link.split("/")[this.link.split("/").length-1];this.shareSrv.delLink(t).subscribe(t=>{t?(this.link="",this.viewMe=!0):this.toastr.error(t.message||"Something went wrong","Error!"),this.disabled=!1},t=>{this.link="",this.disabled=!1})}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(a.b),o.Nb(a.f),o.Nb(c.a),o.Nb(l.b),o.Nb(s.d),o.Nb(d.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-get-link"]],inputs:{type:"type",data:"data"},decls:16,vars:10,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["name","linkForm",3,"formGroup"],["ngbAutofocus","",1,"modal-body"],[4,"ngIf","ngIfElse"],["elseNotMe",""],[1,"modal-footer"],["type","button",3,"disabled","click"],[3,"type",4,"ngIf"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["appearance","outline",1,"w-100"],["type","text","matInput","","placeholder","Name","formControlName","name","required",""],[4,"ngIf"],["formControlName","allowDownload",1,"ml-3"],[1,"bg-hi-grey","p-2","rounded","d-flex","mt-3"],[1,"ml-3","align-self-center"],[1,"rounded","border","m-2","p-2"],[1,"row","mt-2"],[1,"col-8"],["appearance","outline",1,"custom-mat-input","w-100","mb-2",3,"floatLabel"],["matPrefix","",1,"fas","fa-search"],["matInput","","placeholder","Search Content"],[1,"col-4"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-file-medical","mr-1"],["class","view-selected",4,"ngIf"],[3,"type"],[1,"view-selected"],["class","d-flex bg-hi-grey border rounded px-3 py-1 my-2",4,"ngFor","ngForOf"],[1,"d-flex","bg-hi-grey","border","rounded","px-3","py-1","my-2"],[1,"align-self-center"],[3,"src"],[1,"ml-2","align-self-center","w-75"],[1,"text-truncate"],["class","text-secondary",4,"ngIf"],[1,"ml-auto","align-self-center"],[1,"fas","fa-trash-alt","curs-ptr",3,"click"],[1,"text-secondary"],[1,"d-flex","px-4","py-3"],["type","text","readonly","",1,"w-75",3,"value"],["copyMe",""],[1,"btn","btn-primary","ml-auto",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){if(1&t&&(o.Tb(0,"div",0),o.Tb(1,"h4",1),o.Lc(2,"Get a Link"),o.Sb(),o.Tb(3,"button",2),o.ec("click",(function(){return e.modalRef.dismiss("Cross click")})),o.Tb(4,"span",3),o.Lc(5,"\xd7"),o.Sb(),o.Sb(),o.Sb(),o.Tb(6,"form",4),o.Tb(7,"div",5),o.Jc(8,C,23,4,"ng-container",6),o.Jc(9,T,5,1,"ng-template",null,7,o.Kc),o.Sb(),o.Tb(11,"div",8),o.Tb(12,"button",9),o.ec("click",(function(){return e.rsrcBtn(e.viewMe?"done":"change")})),o.Jc(13,w,1,1,"app-loader",10),o.Lc(14),o.Sb(),o.Jc(15,k,2,0,"button",11),o.Sb(),o.Sb()),2&t){const t=o.xc(10);o.Ab(6),o.pc("formGroup",e.linkForm),o.Ab(2),o.pc("ngIf",e.viewMe)("ngIfElse",t),o.Ab(4),o.Db("btn btn-",e.viewMe?"primary":"secondary",""),o.pc("disabled",e.linkForm.invalid||e.disabled||0==e.viewSel.length),o.Ab(1),o.pc("ngIf",e.disabled),o.Ab(1),o.Nc(" ",e.viewMe?"Next":"Back"," "),o.Ab(1),o.pc("ngIf",!e.viewMe)}},directives:[s.w,s.n,s.g,b.m,h.c,h.g,p.b,s.c,s.m,s.f,s.t,u.a,h.h,h.b,f.a,b.l],styles:[".view-selected[_ngcontent-%COMP%]   .bg-hi-grey[_ngcontent-%COMP%]{min-height:3.45rem}.view-selected[_ngcontent-%COMP%]   .bg-hi-grey[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:2rem;max-height:3rem}.view-selected[_ngcontent-%COMP%]   .bg-hi-grey[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%]{font-size:12px}"]}),t})()},FGg4:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("tk/3"),r=i("lJxs"),s=i("aZQB"),o=i("fXoL");let a=(()=>{class t{constructor(t){this.http=t}freezeFormObj(t){const e=new FormData;for(let i in t)(t[i]||"IsUrl"===i)&&("folderIcon"===i||"content"===i||"urlIcon"===i&&t[i]&&t[i].name?e.append(i,t[i],t[i].name):e.append(i,t[i]));return e}myFiles(t){let e=new n.e;for(let i in t)t[i]&&(e=e.set(i,t[i]));return this.http.get(""+s.a.MY_FILES,{params:e}).pipe(Object(r.a)(t=>t))}addFldr(t){return this.http.post(""+s.a.ADD_FLDR_EMPL,t)}updFldr(t){return this.http.post(""+s.a.UPD_FLDR_EMPL,t)}addMyCntnt(t){return this.http.post(""+s.a.ADD_CNTNT_EMPL,this.freezeFormObj(t))}}return t.\u0275fac=function(e){return new(e||t)(o.bc(n.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},IpHC:function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));var n=i("3Pt+"),r=i("ofXK"),s=i("kmnG"),o=i("qFsG"),a=i("bSwM"),c=i("CFzk"),l=i("zJym"),d=i("fXoL");let b=(()=>{class t{}return t.\u0275mod=d.Lb({type:t}),t.\u0275inj=d.Kb({factory:function(e){return new(e||t)},providers:[c.a],imports:[[r.c,s.e,o.c,a.b,l.a,n.h,n.s]]}),t})()},"OQ+D":function(t,e,i){"use strict";i.d(e,"a",(function(){return D}));var n=i("3Pt+"),r=i("FtGj"),s=i("vLcq"),o=i("s0Cq"),a=i("NpNY"),c=i("fXoL"),l=i("1kSV"),d=i("T/Ok"),b=i("5eHb"),h=i("liE0"),p=i("CFzk"),u=i("kmnG"),f=i("A5z7"),m=i("ofXK"),g=i("qFsG"),v=i("bSwM"),S=i("668k");function A(t,e){if(1&t){const t=c.Ub();c.Tb(0,"mat-chip",29),c.ec("removed",(function(){c.Ac(t);const i=e.$implicit;return c.ic().removeChip(i)})),c.Lc(1),c.Ob(2,"i",30),c.Sb()}if(2&t){const t=e.$implicit;c.Ab(1),c.Nc(" ",t," ")}}function C(t,e){1&t&&(c.Tb(0,"mat-error"),c.Lc(1," Email Address is required "),c.Sb())}function T(t,e){1&t&&(c.Tb(0,"mat-error"),c.Lc(1," Please enter a valid email address "),c.Sb())}function w(t,e){1&t&&(c.Tb(0,"mat-error"),c.Lc(1," Subject is required "),c.Sb())}function k(t,e){1&t&&c.Ob(0,"app-loader",31),2&t&&c.pc("type","btn")}function y(t,e){if(1&t){const t=c.Ub();c.Tb(0,"div",32),c.Tb(1,"div",33),c.Tb(2,"mat-form-field",34),c.Ob(3,"i",35),c.Ob(4,"input",36),c.Sb(),c.Sb(),c.Tb(5,"div",37),c.Tb(6,"div",38),c.ec("click",(function(){return c.Ac(t),c.ic().openRsrcModal()})),c.Ob(7,"i",39),c.Lc(8,"Add resource "),c.Sb(),c.Sb(),c.Sb()}2&t&&(c.Ab(2),c.pc("floatLabel","never"))}function L(t,e){1&t&&c.Ob(0,"app-loader",31),2&t&&c.pc("type","div")}function F(t,e){if(1&t&&(c.Tb(0,"div",49),c.Lc(1),c.Sb()),2&t){const t=c.ic().$implicit;c.Ab(1),c.Nc("Page ",t.pageNo,"")}}function I(t,e){if(1&t){const t=c.Ub();c.Tb(0,"div",50),c.Tb(1,"i",51),c.ec("click",(function(){c.Ac(t);const e=c.ic().$implicit;return c.ic(2).removeMe(e)})),c.Sb(),c.Sb()}}function O(t,e){if(1&t&&(c.Tb(0,"div",42),c.Tb(1,"div",43),c.Ob(2,"img",44),c.Sb(),c.Tb(3,"div",45),c.Tb(4,"div",46),c.Lc(5),c.Sb(),c.Jc(6,F,2,1,"div",47),c.Sb(),c.Jc(7,I,2,0,"div",48),c.Sb()),2&t){const t=e.$implicit,i=c.ic(2);c.Ab(2),c.qc("src",t.pdfImagePath?t.pdfImagePath:t.pdfImage?t.pdfImage:i.defImg,c.Cc),c.Ab(3),c.Mc(t.name),c.Ab(1),c.pc("ngIf",t.pageNo),c.Ab(1),c.pc("ngIf",i.viewMe)}}function N(t,e){if(1&t&&(c.Tb(0,"div",40),c.Jc(1,O,8,4,"div",41),c.Sb()),2&t){const t=c.ic();c.Ab(1),c.pc("ngForOf",t.viewSel)}}function _(t,e){1&t&&(c.Tb(0,"mat-error"),c.Lc(1," Message is required "),c.Sb())}function M(t,e){1&t&&c.Ob(0,"app-loader",31),2&t&&c.pc("type","btn")}let D=(()=>{class t{constructor(t,e,i,n,s,a,c){this.modalRef=t,this.fb=e,this.mailSrv=i,this.toastr=n,this.modalService=s,this.shareSrv=a,this.colctnSrv=c,this.defImg=o.b,this.separatorKeysCodes=[r.g,r.c]}ngOnInit(){this.initialiseState()}initialiseState(){this.emailForm=this.fb.group({emailAddresses:["",[n.u.required,a.a.emailValidator]],title:["",[n.u.required]],body:["",[n.u.required]],sendMeCopy:[!1],allowDownload:[!0]}),this.disabled=!1,this.linkDisabled=!1,this.emailAddresses=[],this.viewMe=!0,this.link=void 0,"collection"===this.type?(this.loading=!0,this.getCntntByClctn(this.data.id)):"content"===this.type&&(this.viewSel=[this.data])}openRsrcModal(){this.modalService.open(s.a,{size:"lg"}).result.then(t=>{t&&this.viewSel.push(...t)})}removeMe(t){this.viewSel=this.viewSel.filter(e=>t.contentId&&t.contentId==e.contentId?t.pageNo||e.pageNo?e.pageNo!==t.pageNo:e.contentId!==t.contentId:!t.id||t.id!=e.id||(t.pageNo||e.pageNo?e.pageNo!==t.pageNo:e.id!==t.id))}sendMail(){if(this.emailForm.valid){this.disabled=!0;let t=Object.assign(Object.assign({},this.emailForm.value),{sendMeCopy:this.emailForm.get("sendMeCopy").value,emailAddresses:this.emailAddresses});t.body+=`\n      <br />\n      <br />\n      Attached Link:<br />\n      <a href="${this.link.link}">${this.link.name}</a>\n      `,this.mailSrv.sendMail(t).subscribe(t=>{t&&t.result?this.toastr.success(t.result||"Email sent successfully","Success!"):this.toastr.error(t.result||"Email not sent","Error!"),this.disabled=!1,this.modalRef.dismiss()},t=>{this.disabled=!1,this.modalRef.dismiss()})}}addChips(t){const e=t.input,i=t.value;(i||"").trim()&&!this.emailForm.get("emailAddresses").hasError("invalidEmail")&&this.emailAddresses.push(i.trim()),e&&!this.emailForm.get("emailAddresses").hasError("invalidEmail")&&(e.value="")}removeChip(t){const e=this.emailAddresses.indexOf(t);e>=0&&this.emailAddresses.splice(e,1)}getContentLink(){let t={allowDownload:this.emailForm.get("allowDownload").value,shareContents:[]};for(let e=0;e<this.viewSel.length;e++)t.shareContents.push({contentId:this.viewSel[e].contentId?this.viewSel[e].contentId:this.viewSel[e].id,pageNumber:this.viewSel[e].pageNo||0});this.shareSrv.addShare(t).subscribe(t=>{t&&t.result?this.link={name:this.data.name,link:t.result}:(this.toastr.error(t.message||"Something went wrong","Error!"),this.viewMe=!0),this.linkDisabled=!1},t=>{this.viewMe=!0,this.linkDisabled=!1})}removeLink(){let t=this.link.link.split("/")[this.link.link.split("/").length-1];this.shareSrv.delLink(t).subscribe(t=>{t?this.link=void 0:this.toastr.error(t.message||"Something went wrong","Error!")},t=>{this.link=void 0})}rsrcBtn(t){"done"==t?(this.viewMe=!1,this.linkDisabled=!0,this.getContentLink()):"change"==t&&(this.removeLink(),this.viewMe=!0)}getCntntByClctn(t){this.viewSel=[],this.colctnSrv.getContentColctn(t).subscribe(t=>{t&&t.result&&Array.isArray(t.result)?this.viewSel.push(...t.result):(this.toastr.error(t.message||"Something went wrong","Error!"),this.modalRef.dismiss()),this.loading=!1},t=>{this.loading=!1,this.modalRef.dismiss()})}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(l.b),c.Nb(n.d),c.Nb(d.a),c.Nb(b.b),c.Nb(l.f),c.Nb(h.a),c.Nb(p.a))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-share-mail"]],inputs:{type:"type",data:"data"},decls:51,vars:16,consts:[[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["name","emailForm",3,"formGroup","ngSubmit"],["ngbAutofocus","",1,"modal-body"],[1,"row"],[1,"col-9","border-right"],["appearance","outline",1,"w-100"],["aria-label","Email addresses","formControlName","emailAddresses"],["emailList",""],["selectable","","removable","",3,"removed",4,"ngFor","ngForOf"],["placeholder","Add Email Addresses (Separate by comma or enter)","matChipInputAddOnBlur","","formControlName","emailAddresses",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],[4,"ngIf"],["matInput","","type","text","placeholder","Subject","formControlName","title","required",""],[1,"bg-hi-grey","p-2","rounded","d-flex"],[1,"ml-3","align-self-center"],[1,"ml-auto"],["type","button",1,"btn","btn-primary","btn-sm",3,"disabled","click"],[3,"type",4,"ngIf"],[1,"rounded","border","m-2","p-2"],["class","row mt-2",4,"ngIf"],["class","view-selected",4,"ngIf"],["matInput","","type","text","placeholder","Message","formControlName","body"],[1,"col-3"],["formControlName","allowDownload",1,"ml-2"],["formControlName","sendMeCopy",1,"ml-2"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"],["selectable","","removable","",3,"removed"],["matChipRemove","",1,"fa","fa-times"],[3,"type"],[1,"row","mt-2"],[1,"col-8"],["appearance","outline",1,"custom-mat-input","w-100","mb-2",3,"floatLabel"],["matPrefix","",1,"fas","fa-search"],["matInput","","placeholder","Search Content"],[1,"col-4"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-file-medical","mr-1"],[1,"view-selected"],["class","d-flex bg-hi-grey border rounded px-3 py-1 my-2",4,"ngFor","ngForOf"],[1,"d-flex","bg-hi-grey","border","rounded","px-3","py-1","my-2"],[1,"align-self-center"],[3,"src"],[1,"ml-2","align-self-center","w-75"],[1,"text-truncate"],["class","text-secondary",4,"ngIf"],["class","ml-auto align-self-center",4,"ngIf"],[1,"text-secondary"],[1,"ml-auto","align-self-center"],[1,"fas","fa-trash-alt","curs-ptr",3,"click"]],template:function(t,e){if(1&t&&(c.Tb(0,"div",0),c.Tb(1,"h4",1),c.Lc(2,"Email"),c.Sb(),c.Tb(3,"button",2),c.ec("click",(function(){return e.modalRef.dismiss("Cross click")})),c.Tb(4,"span",3),c.Lc(5,"\xd7"),c.Sb(),c.Sb(),c.Sb(),c.Tb(6,"form",4),c.ec("ngSubmit",(function(){return e.sendMail()})),c.Tb(7,"div",5),c.Tb(8,"div",6),c.Tb(9,"div",7),c.Tb(10,"mat-form-field",8),c.Tb(11,"mat-label"),c.Lc(12,"To"),c.Sb(),c.Tb(13,"mat-chip-list",9,10),c.Jc(15,A,3,1,"mat-chip",11),c.Tb(16,"input",12),c.ec("matChipInputTokenEnd",(function(t){return e.addChips(t)})),c.Sb(),c.Sb(),c.Jc(17,C,2,0,"mat-error",13),c.Jc(18,T,2,0,"mat-error",13),c.Sb(),c.Tb(19,"mat-form-field",8),c.Tb(20,"mat-label"),c.Lc(21,"Subject"),c.Sb(),c.Ob(22,"input",14),c.Jc(23,w,2,0,"mat-error",13),c.Sb(),c.Tb(24,"div",15),c.Tb(25,"div",16),c.Lc(26,"Resources"),c.Sb(),c.Tb(27,"div",17),c.Tb(28,"button",18),c.ec("click",(function(){return e.rsrcBtn(e.viewMe?"done":"change")})),c.Jc(29,k,1,1,"app-loader",19),c.Lc(30),c.Sb(),c.Sb(),c.Sb(),c.Tb(31,"div",20),c.Jc(32,y,9,1,"div",21),c.Jc(33,L,1,1,"app-loader",19),c.Jc(34,N,2,1,"div",22),c.Sb(),c.Tb(35,"mat-form-field",8),c.Tb(36,"mat-label"),c.Lc(37,"Message"),c.Sb(),c.Ob(38,"textarea",23),c.Jc(39,_,2,0,"mat-error",13),c.Sb(),c.Sb(),c.Tb(40,"div",24),c.Tb(41,"h5"),c.Lc(42,"Sharing Settings"),c.Sb(),c.Tb(43,"mat-checkbox",25),c.Lc(44,"Allow downloads"),c.Sb(),c.Tb(45,"mat-checkbox",26),c.Lc(46,"Send me a copy"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(47,"div",27),c.Tb(48,"button",28),c.Jc(49,M,1,1,"app-loader",19),c.Lc(50," Save "),c.Sb(),c.Sb(),c.Sb()),2&t){const t=c.xc(14);c.Ab(6),c.pc("formGroup",e.emailForm),c.Ab(9),c.pc("ngForOf",e.emailAddresses),c.Ab(1),c.pc("matChipInputFor",t)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes),c.Ab(1),c.pc("ngIf",e.emailForm.get("emailAddresses").hasError("required")),c.Ab(1),c.pc("ngIf",!e.emailForm.get("emailAddresses").hasError("required")&&e.emailForm.get("emailAddresses").hasError("invalidEmail")),c.Ab(5),c.pc("ngIf",e.emailForm.get("title").hasError("required")),c.Ab(5),c.pc("disabled",e.linkDisabled||e.disabled||e.loading),c.Ab(1),c.pc("ngIf",e.linkDisabled),c.Ab(1),c.Nc(" ",e.viewMe||e.linkDisabled?"Done":"Change Resources"," "),c.Ab(2),c.pc("ngIf",e.viewMe),c.Ab(1),c.pc("ngIf",e.loading),c.Ab(1),c.pc("ngIf",!e.loading),c.Ab(5),c.pc("ngIf",e.emailForm.get("body").hasError("required")),c.Ab(9),c.pc("disabled",e.emailForm.invalid||e.disabled||e.viewMe||0==e.viewSel.length),c.Ab(1),c.pc("ngIf",e.disabled)}},directives:[n.w,n.n,n.g,u.c,u.g,f.c,n.m,n.f,m.l,n.c,f.b,m.m,g.b,n.t,v.a,f.a,f.d,u.b,S.a,u.h],styles:[".view-selected[_ngcontent-%COMP%]   .bg-hi-grey[_ngcontent-%COMP%]{min-height:3.45rem}.view-selected[_ngcontent-%COMP%]   .bg-hi-grey[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:2rem;max-height:3rem}.view-selected[_ngcontent-%COMP%]   .bg-hi-grey[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%]{font-size:12px}"]}),t})()},OraM:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("tk/3"),r=i("lJxs"),s=i("aZQB"),o=i("fXoL");let a=(()=>{class t{constructor(t){this.http=t}freezeFolderObj(t){const e=new FormData;for(let i in t)(t[i]||"IsUrl"===i)&&("folderIcon"===i||"content"===i||"urlIcon"===i&&t[i]&&t[i].name?e.append(i,t[i],t[i].name):e.append(i,t[i]));return e}getAllObjWrkspc(t){let e=new n.e;for(let i in t)t[i]&&(e=e.set(i,t[i]));return this.http.get(""+s.a.GET_OBJ_WRKSPC,{params:e}).pipe(Object(r.a)(t=>t))}actDeactSmtFldr(t,e){return this.http.patch(`${e?s.a.ACT_SMT_FLDR:s.a.DEACT_SMT_FLDR}?id=${t}`,{})}updSmartFolder(t){return this.http.put(""+s.a.UPD_SMT_FLDR,this.freezeFolderObj(t))}addSmartFolder(t){return this.http.post(""+s.a.ADD_SMT_FLDR,this.freezeFolderObj(t))}getSmtFolder(t){return this.http.get(`${s.a.GET_SMT_FLDR}?id=${t}`)}actDeactFldr(t,e){return this.http.patch(`${e?s.a.ACT_FLDR:s.a.DEACT_FLDR}?id=${t}`,{})}updFolder(t){return this.http.put(""+s.a.UPD_FLDR,this.freezeFolderObj(t))}addFolder(t){return this.http.post(""+s.a.ADD_FLDR,this.freezeFolderObj(t))}getFolder(t){return this.http.get(`${s.a.GET_FLDR}?id=${t}`)}actDeactWrkspc(t,e){return this.http.patch(`${e?s.a.ACT_WRKSPC:s.a.DEACT_WRKSPC}?id=${t}`,{})}wrkspcList(t){let e=new n.e;for(let i in t)(t[i]||"isActive"==i)&&(e=e.set(i,t[i]));return this.http.get(""+s.a.LIST_WRKSPC,{params:e}).pipe(Object(r.a)(t=>t))}addWrkspc(t){return this.http.post(""+s.a.ADD_WRKSPC,t)}updWrkspc(t){return this.http.put(""+s.a.UPD_WRKSPC,t)}contentByFolder(t){let e=new n.e;for(let i in t)t[i]&&(e=e.set(i,t[i]));return this.http.get(""+s.a.GET_CNTNT_FLDR,{params:e}).pipe(Object(r.a)(t=>t))}contentBySmartFolder(t){let e=new n.e;for(let i in t)t[i]&&(e=e.set(i,t[i]));return this.http.get(""+s.a.GET_CNTNT_SMT_FLDR,{params:e}).pipe(Object(r.a)(t=>t))}contentList(t){let e=new n.e;for(let i in t)if("fltrL"===i){if(t[i]&&t[i].length>0)for(let n=0;n<t[i].length;n++)"fT"===t[i][n].type?e=e.append("fileTypes",t[i][n].v):"allTags1"===t[i][n].type?e=e.append("tags.MatchAllTagIds",t[i][n].id):"anyTags1"===t[i][n].type?e=e.append("tags.MatchAnyTagIds",t[i][n].id):"noneTags1"===t[i][n].type&&(e=e.append("tags.MatchNoneTagIds",t[i][n].id))}else(t[i]||"IsAscending"==i)&&(e=e.set(i,t[i]));return this.http.get(""+s.a.LIST_CNTNT,{params:e}).pipe(Object(r.a)(t=>t))}addContent(t){return this.http.post(""+s.a.ADD_CNTNT,this.freezeFolderObj(t))}updContent(t){return this.http.post(""+s.a.UPD_CNTNT,t)}viewContent(t){return this.http.get(""+s.a.GET_CNTNT,{params:{id:t}})}addCmntToContent(t){return this.http.post(""+s.a.ADD_CMNT_CNTNT,t)}addCntntToWrkspcFldr(t){return this.http.post(""+s.a.ADD_CNTNT_WRKSPC,t)}updCntntStatusOrDel(t){return this.http.post(3==t.status?`${s.a.DEL_CNTNT}?id=${t.id}`:`${s.a.UPD_CNTNT_STATUS}?id=${t.id}&status=${t.status}`,{})}usrGrpWrkspcList(t){let e=new n.e;for(let i in t)t[i]&&(e=e.set(i,t[i]));return this.http.get(""+s.a.LIST_USR_GRP_WRKSPC,{params:e}).pipe(Object(r.a)(t=>t))}addUsrGrpWrkspc(t){return this.http.post(""+s.a.ADD_USR_GRP_WRKSPC,t)}remUsrGrpWrkspc(t){return this.http.post(""+s.a.REM_USR_GRP_WRKSPC,t)}deactCtntOrFldr(t){return t.isFldr?this.actDeactFldr(t.id,!1):this.updCntntStatusOrDel(t)}newVersion(t){return this.http.post(""+s.a.UPL_VER_CNTNT,this.freezeFolderObj(t))}}return t.\u0275fac=function(e){return new(e||t)(o.bc(n.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"P/0q":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("tk/3"),r=i("lJxs"),s=i("aZQB"),o=i("fXoL");let a=(()=>{class t{constructor(t){this.http=t}wrkspcListEmp(){return this.http.get(""+s.a.GET_WRKSPC_EMP).pipe(Object(r.a)(t=>t))}getAllObjWrkspc(t){let e=new n.e;for(let i in t)t[i]&&(e=e.set(i,t[i]));return this.http.get(""+s.a.GET_OBJ_WRKSPC_EMP,{params:e}).pipe(Object(r.a)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(o.bc(n.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"T/Ok":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("aZQB"),r=i("fXoL"),s=i("tk/3");let o=(()=>{class t{constructor(t){this.http=t}sendMail(t){return this.http.post(""+n.a.SEND_MAIL,t)}}return t.\u0275fac=function(e){return new(e||t)(r.bc(s.b))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"j+Cn":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("tk/3"),r=i("lJxs"),s=i("aZQB"),o=i("fXoL");let a=(()=>{class t{constructor(t){this.http=t}addColctn(t){return this.http.post(""+s.a.ADD_COLCT,t)}renColctn(t){return this.http.put(""+s.a.REN_COLCT,t)}duplColctn(t){return this.http.patch(""+s.a.DUPL_COLCT,t)}colctnList(t){let e=new n.e;for(let i in t)(t[i]||"pageNo"==i)&&(e=e.set(i,t[i]));return this.http.get(""+s.a.LIST_COLCT,{params:e}).pipe(Object(r.a)(t=>t))}addContentColctn(t){return this.http.post(""+s.a.ADD_CONTENT_COLCT,t)}}return t.\u0275fac=function(e){return new(e||t)(o.bc(n.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},liE0:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("aZQB"),r=i("fXoL"),s=i("tk/3");let o=(()=>{class t{constructor(t){this.http=t}addShare(t){return this.http.post(""+n.a.ADD_SHARE,t)}delLink(t){return this.http.post(`${n.a.DEL_SHARE}?identifier=${t}`,{})}}return t.\u0275fac=function(e){return new(e||t)(r.bc(s.b))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},vLcq:function(t,e,i){"use strict";i.d(e,"a",(function(){return I}));var n=i("fXoL"),r=i("1kSV"),s=i("P/0q"),o=i("FGg4"),a=i("CFzk"),c=i("OraM"),l=i("kmnG"),d=i("qFsG"),b=i("ofXK"),h=i("668k"),p=i("bSwM");function u(t,e){if(1&t){const t=n.Ub();n.Tb(0,"li",20),n.ec("click",(function(){return n.Ac(t),n.ic(2).backNav()})),n.Ob(1,"i",21),n.Sb()}}function f(t,e){if(1&t&&(n.Tb(0,"li",22),n.Lc(1),n.Sb()),2&t){const t=e.$implicit;n.Ab(1),n.Mc(t.name)}}function m(t,e){if(1&t&&(n.Tb(0,"nav",15),n.Tb(1,"ol",16),n.Jc(2,u,2,0,"li",17),n.Jc(3,f,2,1,"li",18),n.Sb(),n.Ob(4,"hr",19),n.Sb()),2&t){const t=n.ic();n.Ab(2),n.pc("ngIf",t.contentNav.length>0),n.Ab(1),n.pc("ngForOf",t.contentNav)}}function g(t,e){1&t&&(n.Rb(0),n.Ob(1,"app-loader",23),n.Qb()),2&t&&(n.Ab(1),n.pc("type","div"))}function v(t,e){if(1&t){const t=n.Ub();n.Tb(0,"div",27),n.ec("click",(function(){n.Ac(t);const i=e.$implicit;return n.ic(3).showWorkspcFldrs(i)})),n.Tb(1,"div",33),n.Ob(2,"img",34),n.Sb(),n.Tb(3,"div",30),n.Lc(4),n.Sb(),n.Tb(5,"div",31),n.Ob(6,"i",32),n.Sb(),n.Sb()}if(2&t){const t=e.$implicit;n.Ab(4),n.Nc(" ",t.name," ")}}function S(t,e){if(1&t){const t=n.Ub();n.Tb(0,"div",27),n.ec("click",(function(){n.Ac(t);const i=e.$implicit;return n.ic(3).getCntntColl(i)})),n.Tb(1,"div",33),n.Ob(2,"img",34),n.Sb(),n.Tb(3,"div",30),n.Lc(4),n.Sb(),n.Tb(5,"div",31),n.Ob(6,"i",32),n.Sb(),n.Sb()}if(2&t){const t=e.$implicit;n.Ab(4),n.Mc(t.name)}}function A(t,e){if(1&t){const t=n.Ub();n.Tb(0,"div"),n.Tb(1,"div",25),n.Lc(2,"Workspaces"),n.Sb(),n.Jc(3,v,7,1,"div",26),n.Tb(4,"div",25),n.Lc(5,"My Files"),n.Sb(),n.Tb(6,"div",27),n.ec("click",(function(){return n.Ac(t),n.ic(2).showMyFiles()})),n.Tb(7,"div",28),n.Ob(8,"i",29),n.Sb(),n.Tb(9,"div",30),n.Lc(10," My Files "),n.Sb(),n.Tb(11,"div",31),n.Ob(12,"i",32),n.Sb(),n.Sb(),n.Tb(13,"div",25),n.Lc(14,"Collections"),n.Sb(),n.Jc(15,S,7,1,"div",26),n.Sb()}if(2&t){const t=n.ic(2);n.Ab(3),n.pc("ngForOf",t.workspcArr),n.Ab(12),n.pc("ngForOf",t.colctnArr)}}function C(t,e){if(1&t){const t=n.Ub();n.Tb(0,"div",27),n.ec("click",(function(){n.Ac(t);const i=e.$implicit,r=n.ic(4);return!1===r.showAll?r.showWorkspcFldrs(void 0,i):r.showMyFiles(i)})),n.Tb(1,"div",33),n.Ob(2,"img",37),n.Sb(),n.Tb(3,"div",30),n.Lc(4),n.Sb(),n.Tb(5,"div",31),n.Ob(6,"i",32),n.Sb(),n.Sb()}if(2&t){const t=e.$implicit;n.Ab(2),n.qc("src",t.folderIconPath?t.folderIconPath:"assets/images/folderIcon.png",n.Cc),n.Ab(2),n.Nc(" ",t.name," ")}}function T(t,e){if(1&t){const t=n.Ub();n.Tb(0,"div",38),n.Tb(1,"mat-checkbox",39),n.ec("change",(function(i){n.Ac(t);const r=e.$implicit;return n.ic(4).selectContent(r,i.checked)})),n.Sb(),n.Tb(2,"div",33),n.Ob(3,"img",37),n.Sb(),n.Tb(4,"div",30),n.Lc(5),n.Sb(),n.Sb()}if(2&t){const t=e.$implicit;n.Ab(3),n.qc("src",t.pdfImages&&t.pdfImages.length>0?t.pdfImages[0].imagePath:t.urlIconPath,n.Cc),n.Ab(2),n.Nc(" ",t.name," ")}}function w(t,e){if(1&t&&(n.Rb(0),n.Jc(1,C,7,2,"div",26),n.Jc(2,T,6,2,"div",36),n.Qb()),2&t){const t=n.ic(3);n.Ab(1),n.pc("ngForOf",t.fldrArr),n.Ab(1),n.pc("ngForOf",t.mdlCntntArr)}}function k(t,e){1&t&&(n.Tb(0,"div",40),n.Lc(1," No Data Found "),n.Sb())}function y(t,e){if(1&t&&(n.Tb(0,"div"),n.Jc(1,w,3,2,"ng-container",10),n.Jc(2,k,2,0,"ng-template",null,35,n.Kc),n.Sb()),2&t){const t=n.xc(3),e=n.ic(2);n.Ab(1),n.pc("ngIf",e.fldrArr.length>0||e.mdlCntntArr.length>0)("ngIfElse",t)}}function L(t,e){if(1&t&&(n.Jc(0,A,16,2,"div",24),n.Jc(1,y,4,2,"div",24)),2&t){const t=n.ic();n.pc("ngIf",t.showAll),n.Ab(1),n.pc("ngIf",!t.showAll)}}function F(t,e){1&t&&n.Ob(0,"app-loader",23),2&t&&n.pc("type","btn")}let I=(()=>{class t{constructor(t,e,i,n,r){this.modalRef=t,this.expServ=e,this.fileServ=i,this.colctnSrv=n,this.cwServ=r}ngOnInit(){this.initialiseState(),this.getWrkspcList(),this.listColctn()}initialiseState(){this.wrkspcLoading=!0,this.colctnLoading=!0,this.fldrLoading=!1,this.cntntLoading=!1,this.workspcArr=[],this.colctnArr=[],this.fldrArr=[],this.selWrkspc=void 0,this.selFldr=void 0,this.mdlCntntArr=[],this.addContentArr=[],this.showAll=!0,this.contentNav=[],this.disabled=!1}addContent(){this.modalRef.close(this.addContentArr)}selectContent(t,e){e?this.addContentArr.push(t):this.addContentArr=this.addContentArr.filter(e=>e.id!=t.id)}showMyFiles(t,e){this.fldrLoading=!0,this.cntntLoading=!0,"back"!==e&&(t?this.contentNav.push(t):this.contentNav=[{name:"My Files"}]),this.fileServ.myFiles({folderId:t?t.id:void 0}).subscribe(t=>{t&&t.result&&(Array.isArray(t.result.contents)&&t.result.contents.length>0?this.mdlCntntArr=t.result.contents:Array.isArray(t.result.contents)&&0==t.result.contents.length&&(this.mdlCntntArr=[]),Array.isArray(t.result.folders)&&t.result.folders.length>0?this.fldrArr=t.result.folders:Array.isArray(t.result.folders)&&0==t.result.folders.length&&(this.fldrArr=[])),this.showAll=void 0,this.fldrLoading=!1,this.cntntLoading=!1},t=>{this.showAll=!1,this.fldrLoading=!1,this.cntntLoading=!1})}getWrkspcList(){this.wrkspcLoading=!0,this.expServ.wrkspcListEmp().subscribe(t=>{t&&t.result&&Array.isArray(t.result)&&t.result.length>0&&(this.workspcArr=t.result),this.wrkspcLoading=!1},t=>{this.wrkspcLoading=!1})}getAllObjWrkspc(){this.fldrLoading=!0,this.expServ.getAllObjWrkspc({workspaceId:this.selWrkspc.id,isActive:!0,folderId:this.selFldr?this.selFldr.id:void 0}).subscribe(t=>{if(t&&t.result){if(Array.isArray(t.result[0].contents)&&t.result[0].contents.length>0&&this.mdlCntntArr.push(...t.result[0].contents),Array.isArray(t.result[0].folders)&&t.result[0].folders.length>0)for(let e=0;e<t.result[0].folders.length;e++)this.fldrArr.push(Object.assign(Object.assign({},t.result[0].folders[e]),{key:"fldr"}));if(Array.isArray(t.result[0].smartFolders)&&t.result[0].smartFolders.length>0)for(let e=0;e<t.result[0].smartFolders.length;e++)this.fldrArr.push(Object.assign(Object.assign({},t.result[0].smartFolders[e]),{key:"smtFldr"}))}this.fldrLoading=!1},t=>{this.fldrLoading=!1})}listColctn(){this.colctnArr=[],this.colctnLoading=!0,this.colctnSrv.colctnList({pageNo:0}).subscribe(t=>{t&&t.result&&Array.isArray(t.result.results)&&t.result.results.length>0&&(this.colctnArr=t.result.results),this.colctnLoading=!1},t=>{this.colctnLoading=!1})}showWorkspcFldrs(t,e){e?(this.contentNav.push(e),this.selFldr=e,this.mdlCntntArr=[]):(this.selWrkspc=t,this.contentNav=[t]),e?"fldr"==this.selFldr.key?this.getAllObjWrkspc():this.getContentSmtFldr():this.getAllObjWrkspc(),this.fldrArr=[],this.showAll=!1}backNav(){this.contentNav.pop(),this.selFldr=this.contentNav.length>1?this.contentNav[this.contentNav.length-1]:void 0,this.fldrArr=[],this.mdlCntntArr=[],0==this.contentNav.length?(this.selFldr=void 0,this.showAll=!0):!1===this.showAll?this.getAllObjWrkspc():this.showMyFiles(this.selFldr,"back")}getCntntColl(t){let e=t.id;this.contentNav=[t],this.cntntLoading=!0,this.colctnSrv.getContentColctn(e).subscribe(t=>{t&&t.result&&Array.isArray(t.result)&&t.result.length>0?this.mdlCntntArr=t.result:t&&t.result&&Array.isArray(t.result)&&0==t.result.length&&(this.mdlCntntArr=[]),this.showAll=!1,this.cntntLoading=!1},t=>{this.showAll=!1,this.cntntLoading=!1})}getContentSmtFldr(){this.cntntLoading=!0,this.cwServ.contentBySmartFolder({workspaceId:this.selWrkspc.id,folderId:this.selFldr?this.selFldr.id:void 0}).subscribe(t=>{t&&t.result&&Array.isArray(t.result)&&t.result.length>0&&this.mdlCntntArr.push(...t.result),this.cntntLoading=!1},t=>{this.cntntLoading=!1})}}return t.\u0275fac=function(e){return new(e||t)(n.Nb(r.b),n.Nb(s.a),n.Nb(o.a),n.Nb(a.a),n.Nb(c.a))},t.\u0275cmp=n.Hb({type:t,selectors:[["app-add-rsrc"]],decls:19,vars:7,consts:[[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["ngbAutofocus","",1,"modal-body","min-height-val"],[1,"search"],["appearance","outline",1,"custom-mat-input","w-100","mb-2","bg-white",3,"floatLabel"],["matPrefix","",1,"fas","fa-search"],["matInput","","placeholder","Search"],["aria-label","breadcrumb",4,"ngIf"],[4,"ngIf","ngIfElse"],["loaded",""],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[3,"type",4,"ngIf"],["aria-label","breadcrumb"],[1,"breadcrumb","bg-white","mb-0","p-0","ml-1"],["class","curs-ptr text-primary mr-2","style","font-size: 16px;",3,"click",4,"ngIf"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[1,"mt-1"],[1,"curs-ptr","text-primary","mr-2",2,"font-size","16px",3,"click"],[1,"fa","fa-arrow-left","align-self-center"],[1,"breadcrumb-item"],[3,"type"],[4,"ngIf"],[1,"text-secondary","font-weight-bold","my-2"],["class","d-flex border-bottom p-2 dark-bg-hover",3,"click",4,"ngFor","ngForOf"],[1,"d-flex","border-bottom","p-2","dark-bg-hover",3,"click"],[1,"icon","text-center","mr-2",2,"height","50px","width","40px"],[1,"fas","fa-folder","mt-3"],[1,"name","align-self-center"],[1,"arrow","align-self-center","ml-auto","mr-3"],[1,"fa","fa-angle-right"],[1,"icon","align-self-center","mr-2"],["src","assets/images/discription.png",2,"max-height","50px","width","40px"],["noDATA",""],["class","d-flex border-bottom p-2 dark-bg-hover",4,"ngFor","ngForOf"],[2,"max-height","50px","width","40px",3,"src"],[1,"d-flex","border-bottom","p-2","dark-bg-hover"],[1,"align-self-center","mr-2",3,"change"],[1,"text-secondary","text-center","mt-5"]],template:function(t,e){if(1&t&&(n.Tb(0,"div",0),n.Tb(1,"h4",1),n.Lc(2,"Select Resource"),n.Sb(),n.Tb(3,"button",2),n.ec("click",(function(){return e.modalRef.dismiss("Cross click")})),n.Tb(4,"span",3),n.Lc(5,"\xd7"),n.Sb(),n.Sb(),n.Sb(),n.Tb(6,"div",4),n.Tb(7,"div",5),n.Tb(8,"mat-form-field",6),n.Ob(9,"i",7),n.Ob(10,"input",8),n.Sb(),n.Sb(),n.Jc(11,m,5,2,"nav",9),n.Jc(12,g,2,1,"ng-container",10),n.Jc(13,L,2,2,"ng-template",null,11,n.Kc),n.Sb(),n.Tb(15,"div",12),n.Tb(16,"button",13),n.ec("click",(function(){return e.addContent()})),n.Jc(17,F,1,1,"app-loader",14),n.Lc(18),n.Sb(),n.Sb()),2&t){const t=n.xc(14);n.Ab(8),n.pc("floatLabel","never"),n.Ab(3),n.pc("ngIf",!e.showAll),n.Ab(1),n.pc("ngIf",e.wrkspcLoading&&e.colctnLoading||e.fldrLoading||e.cntntLoading)("ngIfElse",t),n.Ab(4),n.pc("disabled",0==e.addContentArr.length||e.disabled),n.Ab(1),n.pc("ngIf",e.disabled),n.Ab(1),n.Nc(" ",0==e.addContentArr.length?"0 Items Selected":"Insert "+e.addContentArr.length+" item(s)"," ")}},directives:[l.c,l.h,d.b,b.m,b.l,h.a,p.a],styles:[""]}),t})()}}]);