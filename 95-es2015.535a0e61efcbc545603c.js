(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{UUSl:function(n,o,i){"use strict";i.r(o),i.d(o,"SignUpPageModule",(function(){return l}));var e=i("ofXK"),t=i("3Pt+"),b=i("TEn/"),c=i("tyNb"),a=i("fXoL");const r=[{path:"",component:(()=>{class n{constructor(n){this.router=n,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",this.signup={username:"",password:"",email:""}}ngOnInit(){}onSignUp(n){n.valid&&this.router.navigateByUrl("/home")}clickedHomeButton(){this.router.navigate(["start"])}clickedCartButton(){this.router.navigate(["subscription-plans"])}clickedLoginButton(){this.router.navigate(["login"])}clickedContactButton(){this.router.navigate(["contact"])}}return n.\u0275fac=function(o){return new(o||n)(a.Jb(c.g))},n.\u0275cmp=a.Db({type:n,selectors:[["app-signup"]],decls:61,vars:7,consts:[["slot","end"],[3,"click"],["slot","icon-only","name","home-outline"],["name","cart-outline"],["slot","icon-only","name","person-outline"],["name","chatbox-outline"],[1,"signup-logo"],["src","assets/img/appicon.svg","alt","Ionic logo"],["novalidate",""],["signupForm","ngForm"],["lines","none"],["position","stacked","color","primary"],["name","username","type","text","required","",3,"ngModel","ngModelChange"],["username","ngModel"],["color","danger"],[1,"ion-padding-start",3,"hidden"],["name","password","type","password","required","",3,"ngModel","ngModelChange"],["password","ngModel"],["name","email","type","email","required","",3,"ngModel","pattern","ngModelChange"],["email","ngModel"],[1,"ion-padding"],["routerLink","/terms"],["type","submit","expand","block",3,"click"]],template:function(n,o){if(1&n){const n=a.Nb();a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-buttons",0),a.Mb(3,"ion-button",1),a.Ub("click",(function(){return o.clickedHomeButton()})),a.Kb(4,"ion-icon",2),a.Lb(),a.Mb(5,"ion-button",1),a.Ub("click",(function(){return o.clickedCartButton()})),a.Kb(6,"ion-icon",3),a.Lb(),a.Mb(7,"ion-button",1),a.Ub("click",(function(){return o.clickedLoginButton()})),a.Kb(8,"ion-icon",4),a.Lb(),a.Mb(9,"ion-button",1),a.Ub("click",(function(){return o.clickedContactButton()})),a.Kb(10,"ion-icon",5),a.Lb(),a.Lb(),a.Mb(11,"ion-title"),a.gc(12,"Joelma Bastos - Educa\xe7\xe3o Inclusiva"),a.Lb(),a.Lb(),a.Lb(),a.Mb(13,"ion-content"),a.Mb(14,"ion-grid"),a.Mb(15,"ion-row"),a.Mb(16,"ion-col"),a.Mb(17,"div",6),a.Kb(18,"img",7),a.Lb(),a.Lb(),a.Mb(19,"ion-col"),a.Mb(20,"h1"),a.gc(21,"Bem vindo \xe0 sua comunidade educacional"),a.Lb(),a.Mb(22,"form",8,9),a.Mb(24,"ion-list",10),a.Mb(25,"ion-item"),a.Mb(26,"ion-label",11),a.gc(27,"Username"),a.Lb(),a.Mb(28,"ion-input",12,13),a.Ub("ngModelChange",(function(n){return o.signup.username=n})),a.Lb(),a.Lb(),a.Mb(30,"ion-text",14),a.Mb(31,"p",15),a.gc(32," Username is required "),a.Lb(),a.Lb(),a.Mb(33,"ion-item"),a.Mb(34,"ion-label",11),a.gc(35,"Password"),a.Lb(),a.Mb(36,"ion-input",16,17),a.Ub("ngModelChange",(function(n){return o.signup.password=n})),a.Lb(),a.Lb(),a.Mb(38,"ion-text",14),a.Mb(39,"p",15),a.gc(40," Password is required "),a.Lb(),a.Lb(),a.Mb(41,"ion-item"),a.Mb(42,"ion-label",11),a.gc(43,"E-mail"),a.Lb(),a.Mb(44,"ion-input",18,19),a.Ub("ngModelChange",(function(n){return o.signup.email=n})),a.Lb(),a.Lb(),a.Mb(46,"ion-text",14),a.Mb(47,"p",15),a.gc(48," E-mail is required "),a.Lb(),a.Lb(),a.Lb(),a.Mb(49,"div",20),a.Mb(50,"p"),a.gc(51," Ao se cadastrar voc\xea concorda com os "),a.Mb(52,"a",21),a.gc(53,"Termos de Uso"),a.Lb(),a.gc(54," e "),a.Mb(55,"a",21),a.gc(56,"Pol\xedtica de Privacidade"),a.Lb(),a.gc(57," do site. "),a.Lb(),a.Lb(),a.Mb(58,"div",20),a.Mb(59,"ion-button",22),a.Ub("click",(function(){a.cc(n);const i=a.bc(23);return o.onSignUp(i)})),a.gc(60,"Create"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()}if(2&n){const n=a.bc(29),i=a.bc(37),e=a.bc(45);a.zb(28),a.Zb("ngModel",o.signup.username),a.zb(3),a.Zb("hidden",n.valid),a.zb(5),a.Zb("ngModel",o.signup.password),a.zb(3),a.Zb("hidden",i.valid),a.zb(5),a.Zb("ngModel",o.signup.email)("pattern",o.emailPattern),a.zb(3),a.Zb("hidden",e.valid)}},directives:[b.p,b.D,b.d,b.c,b.q,b.C,b.k,b.o,b.x,b.j,t.i,t.d,t.e,b.v,b.t,b.u,b.s,b.I,t.h,t.c,t.f,b.B,t.g,c.j,b.H],styles:[""]}),n})()}];let s=(()=>{class n{}return n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({factory:function(o){return new(o||n)},imports:[[c.k.forChild(r)],c.k]}),n})(),l=(()=>{class n{}return n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({factory:function(o){return new(o||n)},imports:[[e.b,t.a,b.E,s]]}),n})()}}]);