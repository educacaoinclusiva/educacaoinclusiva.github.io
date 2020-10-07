function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"HJ/b":function(e,t,r){"use strict";r.r(t),r.d(t,"Tab2PageModule",(function(){return k}));var n,o=r("TEn/"),a=r("tyNb"),i=r("ofXK"),c=r("3Pt+"),s=r("mrSG"),u=r("gcOT"),l=r("fXoL"),h=u.e,f=h.Camera,b=h.Filesystem,p=h.Storage,d=((n=function(){function e(t){_classCallCheck(this,e),this.photos=[],this.PHOTO_STORAGE="photos",this.convertBlobToBase64=function(e){return new Promise((function(t,r){var n=new FileReader;n.onerror=r,n.onload=function(){t(n.result)},n.readAsDataURL(e)}))},this.platform=t}return _createClass(e,[{key:"loadSaved",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,r,n,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get({key:this.PHOTO_STORAGE});case 2:if(t=e.sent,this.photos=JSON.parse(t.value)||[],this.platform.is("hybrid")){e.next=23;break}r=_createForOfIteratorHelper(this.photos),e.prev=5,r.s();case 7:if((n=r.n()).done){e.next=15;break}return o=n.value,e.next=11,b.readFile({path:o.filepath,directory:u.d.Data});case 11:a=e.sent,o.webviewPath="data:image/jpeg;base64,".concat(a.data);case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),r.e(e.t0);case 20:return e.prev=20,r.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,this,[[5,17,20,23]])})))}},{key:"addNewToGallery",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getPhoto({resultType:u.a.Uri,source:u.b.Camera,quality:100});case 2:return t=e.sent,e.next=5,this.savePicture(t);case 5:r=e.sent,this.photos.unshift(r),p.set({key:this.PHOTO_STORAGE,value:JSON.stringify(this.photos)});case 7:case"end":return e.stop()}}),e,this)})))}},{key:"savePicture",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.readAsBase64(e);case 2:return r=t.sent,n=(new Date).getTime()+".jpeg",t.next=6,b.writeFile({path:n,data:r,directory:u.d.Data});case 6:return o=t.sent,t.abrupt("return",this.platform.is("hybrid")?{filepath:o.uri,webviewPath:u.c.convertFileSrc(o.uri)}:{filepath:n,webviewPath:e.webPath});case 8:case"end":return t.stop()}}),t,this)})))}},{key:"readAsBase64",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.platform.is("hybrid")){t.next=4;break}return t.next=3,b.readFile({path:e.path});case 3:return t.abrupt("return",t.sent.data);case 4:return t.next=6,fetch(e.webPath);case 6:return r=t.sent,t.next=9,r.blob();case 9:return n=t.sent,t.next=12,this.convertBlobToBase64(n);case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}}),t,this)})))}},{key:"deletePicture",value:function(e,t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return this.photos.splice(t,1),p.set({key:this.PHOTO_STORAGE,value:JSON.stringify(this.photos)}),n=e.filepath.substr(e.filepath.lastIndexOf("/")+1),r.next=4,b.deleteFile({path:n,directory:u.d.Data});case 4:case"end":return r.stop()}}),r,this)})))}}]),e}()).\u0275fac=function(e){return new(e||n)(l.Qb(o.I))},n.\u0275prov=l.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n);function v(e,t){if(1&e){var r=l.Nb();l.Mb(0,"ion-col",6),l.Mb(1,"ion-img",7),l.Ub("click",(function(){l.cc(r);var e=t.$implicit,n=t.index;return l.Wb().showActionSheet(e,n)})),l.Lb(),l.Lb()}if(2&e){var n=t.$implicit;l.zb(1),l.Zb("src",n.webviewPath)}}var y,m,w=((y=function(){function e(t,r){_classCallCheck(this,e),this.photoService=t,this.actionSheetController=r}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.photoService.loadSaved();case 2:case"end":return e.stop()}}),e,this)})))}},{key:"showActionSheet",value:function(e,t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var n,o=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.actionSheetController.create({header:"Photos",buttons:[{text:"Delete",role:"destructive",icon:"trash",handler:function(){o.photoService.deletePicture(e,t)}},{text:"Cancel",icon:"close",role:"cancel",handler:function(){}}]});case 2:return n=r.sent,r.next=5,n.present();case 5:case"end":return r.stop()}}),r,this)})))}}]),e}()).\u0275fac=function(e){return new(e||y)(l.Jb(d),l.Jb(o.a))},y.\u0275cmp=l.Db({type:y,selectors:[["app-tab2"]],decls:15,vars:1,consts:[["collapse","condense"],["size","large"],["size","6",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","center","slot","fixed"],[3,"click"],["name","camera"],["size","6"],[3,"src","click"]],template:function(e,t){1&e&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.gc(3," Photo Gallery "),l.Lb(),l.Lb(),l.Lb(),l.Mb(4,"ion-content"),l.Mb(5,"ion-header",0),l.Mb(6,"ion-toolbar"),l.Mb(7,"ion-title",1),l.gc(8,"Photo Gallery"),l.Lb(),l.Lb(),l.Lb(),l.Mb(9,"ion-grid"),l.Mb(10,"ion-row"),l.fc(11,v,2,1,"ion-col",2),l.Lb(),l.Lb(),l.Mb(12,"ion-fab",3),l.Mb(13,"ion-fab-button",4),l.Ub("click",(function(){return t.photoService.addNewToGallery()})),l.Kb(14,"ion-icon",5),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.zb(11),l.Zb("ngForOf",t.photoService.photos))},directives:[o.p,o.F,o.E,o.k,o.o,o.x,i.h,o.l,o.m,o.q,o.j,o.r],styles:["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}"]}),y),g=r("HGan"),k=((m=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:m}),m.\u0275inj=l.Gb({factory:function(e){return new(e||m)},imports:[[o.G,i.b,c.a,g.a,a.k.forChild([{path:"",component:w}])]]}),m)}}]);