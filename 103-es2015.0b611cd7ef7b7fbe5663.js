(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{F4UR:function(n,o,t){"use strict";t.r(o),t.d(o,"LoginPageModule",(function(){return u}));var i=t("ofXK"),e=t("3Pt+"),b=t("TEn/"),c=t("tyNb"),r=t("fXoL");const a=[{path:"",component:(()=>{class n{constructor(n){this.router=n,this.login={username:"",password:""}}ngOnInit(){}onLogin(n){n.valid&&this.router.navigateByUrl("/home")}clickedHomeButton(){this.router.navigate(["start"])}clickedCartButton(){this.router.navigate(["subscription-plans"])}clickedSignUpButton(){this.router.navigate(["signup"])}clickedContactButton(){this.router.navigate(["contact"])}}return n.\u0275fac=function(o){return new(o||n)(r.Jb(c.g))},n.\u0275cmp=r.Db({type:n,selectors:[["app-login"]],decls:48,vars:4,consts:[["slot","end"],[3,"click"],["slot","icon-only","name","home-outline"],["name","cart-outline"],["slot","icon-only","name","person-add-outline"],["name","chatbox-outline"],[1,"login-logo"],["src","assets/img/appicon.svg","alt","Ionic logo","width","500px","height","500px"],["novalidate",""],["loginForm","ngForm"],["position","floating","color","primary"],["name","username","type","text","spellcheck","false","autocapitalize","off","required","",3,"ngModel","ngModelChange"],["username","ngModel"],["color","danger"],[1,"ion-padding-start",3,"hidden"],["name","password","type","password","required","",3,"ngModel","ngModelChange"],["password","ngModel"],[1,"ion-padding"],["routerLink","/recovery-password"],["type","submit","expand","block",3,"click"]],template:function(n,o){if(1&n){const n=r.Nb();r.Mb(0,"ion-header"),r.Mb(1,"ion-toolbar"),r.Mb(2,"ion-buttons",0),r.Mb(3,"ion-button",1),r.Ub("click",(function(){return o.clickedHomeButton()})),r.Kb(4,"ion-icon",2),r.Lb(),r.Mb(5,"ion-button",1),r.Ub("click",(function(){return o.clickedCartButton()})),r.Kb(6,"ion-icon",3),r.Lb(),r.Mb(7,"ion-button",1),r.Ub("click",(function(){return o.clickedSignUpButton()})),r.Kb(8,"ion-icon",4),r.Lb(),r.Mb(9,"ion-button",1),r.Ub("click",(function(){return o.clickedContactButton()})),r.Kb(10,"ion-icon",5),r.Lb(),r.Lb(),r.Mb(11,"ion-title"),r.gc(12,"Joelma Bastos - Educa\xe7\xe3o Inclusiva"),r.Lb(),r.Lb(),r.Lb(),r.Mb(13,"ion-content"),r.Mb(14,"ion-grid"),r.Mb(15,"ion-row"),r.Mb(16,"ion-col"),r.Mb(17,"div",6),r.Kb(18,"img",7),r.Lb(),r.Lb(),r.Mb(19,"ion-col"),r.Mb(20,"h1"),r.gc(21,"Bem vindo \xe0 sua comunidade educacional"),r.Lb(),r.Mb(22,"form",8,9),r.Mb(24,"ion-list"),r.Mb(25,"ion-item"),r.Mb(26,"ion-label",10),r.gc(27,"Username"),r.Lb(),r.Mb(28,"ion-input",11,12),r.Ub("ngModelChange",(function(n){return o.login.username=n})),r.Lb(),r.Lb(),r.Mb(30,"ion-text",13),r.Mb(31,"p",14),r.gc(32," Username is required "),r.Lb(),r.Lb(),r.Mb(33,"ion-item"),r.Mb(34,"ion-label",10),r.gc(35,"Password"),r.Lb(),r.Mb(36,"ion-input",15,16),r.Ub("ngModelChange",(function(n){return o.login.password=n})),r.Lb(),r.Lb(),r.Mb(38,"ion-text",13),r.Mb(39,"p",14),r.gc(40," Password is required "),r.Lb(),r.Lb(),r.Lb(),r.Mb(41,"div",17),r.Mb(42,"p"),r.Mb(43,"a",18),r.gc(44,"Esqueceu a senha?"),r.Lb(),r.Lb(),r.Lb(),r.Mb(45,"div",17),r.Mb(46,"ion-button",19),r.Ub("click",(function(){r.cc(n);const t=r.bc(23);return o.onLogin(t)})),r.gc(47,"Login"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()}if(2&n){const n=r.bc(29),t=r.bc(37);r.zb(28),r.Zb("ngModel",o.login.username),r.zb(3),r.Zb("hidden",n.valid),r.zb(5),r.Zb("ngModel",o.login.password),r.zb(3),r.Zb("hidden",t.valid)}},directives:[b.p,b.F,b.d,b.c,b.q,b.E,b.k,b.o,b.x,b.j,e.i,e.d,e.e,b.v,b.t,b.u,b.s,b.L,e.h,e.c,e.f,b.D,c.j,b.J],styles:[""]}),n})()}];let s=(()=>{class n{}return n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({factory:function(o){return new(o||n)},imports:[[c.k.forChild(a)],c.k]}),n})();var l=t("3QYm");let u=(()=>{class n{}return n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({factory:function(o){return new(o||n)},imports:[[i.b,e.a,b.G,s,l.a]]}),n})()}}]);