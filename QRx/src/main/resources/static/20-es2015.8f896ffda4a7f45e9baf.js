(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{JjBp:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("7wfR");class i{constructor(l){this.patientService=l,this.currentPatient=null,this.username=null}ngOnInit(){}findPatient(l){this.patientService.findByUserName(l).subscribe(n=>{this.currentPatient=n,console.log(n),console.log(l)},l=>{console.error(l)})}scanCode(){}}class b{}var o=u("pMnS"),r=u("oBZk"),c=u("ZZ/e"),a=u("SVse"),s=u("s7LF"),d=t.zb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,2,"ion-title",[],null,null,null,r.Bb,r.M)),t.Ab(1,49152,null,0,c.Bb,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Scan for Patient Details"]))],null,null)}function g(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,2,"ion-title",[],null,null,null,r.Bb,r.M)),t.Ab(1,49152,null,0,c.Bb,[t.j,t.p,t.F],null,null),(l()(),t.Tb(2,0,["","'s Emergency Information"]))],null,function(l,n){l(n,2,0,n.component.currentPatient.user.firstName)})}function m(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,r.W,r.i)),t.Ab(1,49152,null,0,c.r,[t.j,t.p,t.F],null,null),(l()(),t.Tb(2,0,[""," ",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.drug.strength,n.parent.context.$implicit.drug.unit)})}function f(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,6,"ion-col",[["size","12"],["size-md","6"]],null,null,null,r.ab,r.l)),t.Ab(1,49152,null,0,c.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(2,0,null,0,2,"ion-card-title",[],null,null,null,r.X,r.j)),t.Ab(3,49152,null,0,c.s,[t.j,t.p,t.F],null,null),(l()(),t.Tb(4,0,["",""])),(l()(),t.qb(16777216,null,0,1,null,m)),t.Ab(6,16384,null,0,a.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,"12"),l(n,6,0,n.context.$implicit.drug)},function(l,n){l(n,4,0,n.context.$implicit.medName)})}function A(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,10,"ion-col",[["size","12"],["size-md","6"]],null,null,null,r.ab,r.l)),t.Ab(1,49152,null,0,c.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(2,0,null,0,2,"ion-card-title",[],null,null,null,r.X,r.j)),t.Ab(3,49152,null,0,c.s,[t.j,t.p,t.F],null,null),(l()(),t.Tb(4,0,["",""])),(l()(),t.Bb(5,0,null,0,2,"ion-card-title",[],null,null,null,r.X,r.j)),t.Ab(6,49152,null,0,c.s,[t.j,t.p,t.F],null,null),(l()(),t.Tb(7,0,["",", ",""])),(l()(),t.Bb(8,0,null,0,2,"ion-card-title",[],null,null,null,r.X,r.j)),t.Ab(9,49152,null,0,c.s,[t.j,t.p,t.F],null,null),(l()(),t.Tb(10,0,["",""]))],function(l,n){l(n,1,0,"12")},function(l,n){l(n,4,0,n.context.$implicit.phone),l(n,7,0,n.context.$implicit.lastName,n.context.$implicit.firstName),l(n,10,0,n.context.$implicit.relationship)})}function j(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,48,"ion-content",[["fullscreen",""]],null,null,null,r.bb,r.m)),t.Ab(1,49152,null,0,c.w,[t.j,t.p,t.F],{fullscreen:[0,"fullscreen"]},null),(l()(),t.Bb(2,0,null,0,43,"ion-card",[],null,null,null,r.Y,r.f)),t.Ab(3,49152,null,0,c.o,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,7,"ion-card-header",[],null,null,null,r.V,r.h)),t.Ab(5,49152,null,0,c.q,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.W,r.i)),t.Ab(7,49152,null,0,c.r,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["DNR Status"])),(l()(),t.Bb(9,0,null,0,2,"ion-card-title",[],null,null,null,r.X,r.j)),t.Ab(10,49152,null,0,c.s,[t.j,t.p,t.F],null,null),(l()(),t.Tb(11,0,["",""])),(l()(),t.Bb(12,0,null,0,7,"ion-card-content",[],null,null,null,r.U,r.g)),t.Ab(13,49152,null,0,c.p,[t.j,t.p,t.F],null,null),(l()(),t.Bb(14,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.W,r.i)),t.Ab(15,49152,null,0,c.r,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Blood Type"])),(l()(),t.Bb(17,0,null,0,2,"ion-card-title",[],null,null,null,r.X,r.j)),t.Ab(18,49152,null,0,c.s,[t.j,t.p,t.F],null,null),(l()(),t.Tb(19,0,["",""])),(l()(),t.Bb(20,0,null,0,7,"ion-card-content",[],null,null,null,r.U,r.g)),t.Ab(21,49152,null,0,c.p,[t.j,t.p,t.F],null,null),(l()(),t.Bb(22,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.W,r.i)),t.Ab(23,49152,null,0,c.r,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Sex"])),(l()(),t.Bb(25,0,null,0,2,"ion-card-title",[],null,null,null,r.X,r.j)),t.Ab(26,49152,null,0,c.s,[t.j,t.p,t.F],null,null),(l()(),t.Tb(27,0,["",""])),(l()(),t.Bb(28,0,null,0,8,"ion-card-content",[],null,null,null,r.U,r.g)),t.Ab(29,49152,null,0,c.p,[t.j,t.p,t.F],null,null),(l()(),t.Bb(30,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.W,r.i)),t.Ab(31,49152,null,0,c.r,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Medications"])),(l()(),t.Bb(33,0,null,0,3,"ion-row",[["class","ion-align-items-stretch"]],null,null,null,r.rb,r.C)),t.Ab(34,49152,null,0,c.kb,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,f)),t.Ab(36,278528,null,0,a.i,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Bb(37,0,null,0,8,"ion-card-content",[],null,null,null,r.U,r.g)),t.Ab(38,49152,null,0,c.p,[t.j,t.p,t.F],null,null),(l()(),t.Bb(39,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.W,r.i)),t.Ab(40,49152,null,0,c.r,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Emergency Contacts"])),(l()(),t.Bb(42,0,null,0,3,"ion-row",[["class","ion-align-items-stretch"]],null,null,null,r.rb,r.C)),t.Ab(43,49152,null,0,c.kb,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,A)),t.Ab(45,278528,null,0,a.i,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Bb(46,0,null,0,2,"ion-button",[["color","light"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(e.manualIdEntry=!1,t=!1!==(e.currentPatient=null)&&t),t},r.S,r.d)),t.Ab(47,49152,null,0,c.m,[t.j,t.p,t.F],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),t.Tb(-1,0,["Clear"]))],function(l,n){var u=n.component;l(n,1,0,""),l(n,36,0,u.currentPatient.medicationList),l(n,45,0,u.currentPatient.emergencyContacts),l(n,47,0,"light","block")},function(l,n){var u=n.component;l(n,11,0,u.currentPatient.dnr),l(n,19,0,u.currentPatient.bloodType.abo),l(n,27,0,u.currentPatient.sex)})}function B(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,3,"ion-fab-button",[],null,null,null,r.db,r.p)),t.Ab(1,49152,null,0,c.z,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,1,"ion-icon",[["name","code"]],null,null,null,r.ib,r.t)),t.Ab(3,49152,null,0,c.E,[t.j,t.p,t.F],{name:[0,"name"]},null)],function(l,n){l(n,3,0,"code")},null)}function F(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,15,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","top"]],null,null,null,r.fb,r.o)),t.Ab(1,49152,null,0,c.y,[t.j,t.p,t.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.qb(16777216,null,0,1,null,B)),t.Ab(3,16384,null,0,a.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(4,0,null,0,5,"ion-fab-list",[["side","start"]],null,null,null,r.eb,r.q)),t.Ab(5,49152,null,0,c.A,[t.j,t.p,t.F],{side:[0,"side"]},null),(l()(),t.Bb(6,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.manualIdEntry=!0)&&t),t},r.db,r.p)),t.Ab(7,49152,null,0,c.z,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Bb(8,0,null,0,1,"ion-icon",[["name","body"]],null,null,null,r.ib,r.t)),t.Ab(9,49152,null,0,c.E,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Bb(10,0,null,0,5,"ion-fab-list",[["side","end"]],null,null,null,r.eb,r.q)),t.Ab(11,49152,null,0,c.A,[t.j,t.p,t.F],{side:[0,"side"]},null),(l()(),t.Bb(12,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.scanCode()&&t),t},r.db,r.p)),t.Ab(13,49152,null,0,c.z,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Bb(14,0,null,0,1,"ion-icon",[["name","barcode"]],null,null,null,r.ib,r.t)),t.Ab(15,49152,null,0,c.E,[t.j,t.p,t.F],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,1,0,"center","top"),l(n,3,0,!u.currentPatient),l(n,5,0,"start"),l(n,7,0,"danger"),l(n,9,0,"body"),l(n,11,0,"end"),l(n,13,0,"danger"),l(n,15,0,"barcode")},null)}function h(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,31,"div",[],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,30,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Nb(l,3).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Nb(l,3).onReset()&&e),e},null,null)),t.Ab(2,16384,null,0,s.m,[],null,null),t.Ab(3,4210688,null,0,s.h,[[8,null],[8,null]],null,null),t.Qb(2048,null,s.a,null,[s.h]),t.Ab(5,16384,null,0,s.g,[[4,s.a]],null,null),(l()(),t.Bb(6,0,null,null,13,"ion-item",[],null,null,null,r.kb,r.v)),t.Ab(7,49152,null,0,c.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(8,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,r.lb,r.w)),t.Ab(9,49152,null,0,c.P,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Tb(-1,0,["Enter Patient UserName"])),(l()(),t.Bb(11,0,null,0,8,"ion-input",[["name","username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Nb(l,14)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Nb(l,14)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.username=u)&&e),e},r.jb,r.u)),t.Ab(12,16384,null,0,s.j,[],{required:[0,"required"]},null),t.Qb(1024,null,s.c,function(l){return[l]},[s.j]),t.Ab(14,16384,null,0,c.Nb,[t.p],null,null),t.Qb(1024,null,s.d,function(l){return[l]},[c.Nb]),t.Ab(16,671744,null,0,s.i,[[2,s.a],[6,s.c],[8,null],[6,s.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Qb(2048,null,s.e,null,[s.i]),t.Ab(18,16384,null,0,s.f,[[4,s.e]],null,null),t.Ab(19,49152,null,0,c.I,[t.j,t.p,t.F],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),t.Bb(20,0,null,null,11,"ion-row",[],null,null,null,r.rb,r.C)),t.Ab(21,49152,null,0,c.kb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(22,0,null,0,4,"ion-col",[],null,null,null,r.ab,r.l)),t.Ab(23,49152,null,0,c.v,[t.j,t.p,t.F],null,null),(l()(),t.Bb(24,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(e.findPatient(e.username),t=0!=(e.manualIdEntry=!0)&&t),t},r.S,r.d)),t.Ab(25,49152,null,0,c.m,[t.j,t.p,t.F],{expand:[0,"expand"]},null),(l()(),t.Tb(-1,0,["Find Patient"])),(l()(),t.Bb(27,0,null,0,4,"ion-col",[],null,null,null,r.ab,r.l)),t.Ab(28,49152,null,0,c.v,[t.j,t.p,t.F],null,null),(l()(),t.Bb(29,0,null,0,2,"ion-button",[["color","light"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(e.manualIdEntry=!1,t=!1!==(e.currentPatient=null)&&t),t},r.S,r.d)),t.Ab(30,49152,null,0,c.m,[t.j,t.p,t.F],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),t.Tb(-1,0,["Cancel"]))],function(l,n){var u=n.component;l(n,9,0,"stacked"),l(n,12,0,""),l(n,16,0,"username",u.username),l(n,19,0,"username","","text"),l(n,25,0,"block"),l(n,30,0,"light","block")},function(l,n){l(n,1,0,t.Nb(n,5).ngClassUntouched,t.Nb(n,5).ngClassTouched,t.Nb(n,5).ngClassPristine,t.Nb(n,5).ngClassDirty,t.Nb(n,5).ngClassValid,t.Nb(n,5).ngClassInvalid,t.Nb(n,5).ngClassPending),l(n,11,0,t.Nb(n,12).required?"":null,t.Nb(n,18).ngClassUntouched,t.Nb(n,18).ngClassTouched,t.Nb(n,18).ngClassPristine,t.Nb(n,18).ngClassDirty,t.Nb(n,18).ngClassValid,t.Nb(n,18).ngClassInvalid,t.Nb(n,18).ngClassPending)})}function v(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,11,"ion-header",[],null,null,null,r.hb,r.s)),t.Ab(1,49152,null,0,c.D,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,r.Db,r.O)),t.Ab(3,49152,null,0,c.Db,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.T,r.e)),t.Ab(5,49152,null,0,c.n,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.ob,r.A)),t.Ab(7,49152,null,0,c.T,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,p)),t.Ab(9,16384,null,0,a.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,g)),t.Ab(11,16384,null,0,a.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(12,0,null,null,7,"ion-content",[],null,null,null,r.bb,r.m)),t.Ab(13,49152,null,0,c.w,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,j)),t.Ab(15,16384,null,0,a.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,F)),t.Ab(17,16384,null,0,a.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,h)),t.Ab(19,16384,null,0,a.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,9,0,!u.currentPatient),l(n,11,0,u.currentPatient),l(n,15,0,u.currentPatient),l(n,17,0,!u.manualIdEntry),l(n,19,0,u.manualIdEntry)},null)}function k(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,1,"emt-view",[],null,null,null,v,d)),t.Ab(1,114688,null,0,i,[e.a],null,null)],function(l,n){l(n,1,0)},null)}var N=t.xb("emt-view",i,k,{},{},[]),C=u("iInd");u.d(n,"EmtViewPageModuleNgFactory",function(){return I});var I=t.yb(b,[],function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[o.a,N]],[3,t.m],t.D]),t.Lb(4608,a.l,a.k,[t.z,[2,a.s]]),t.Lb(4608,s.l,s.l,[]),t.Lb(4608,c.c,c.c,[t.F,t.g]),t.Lb(4608,c.Gb,c.Gb,[c.c,t.m,t.w]),t.Lb(4608,c.Kb,c.Kb,[c.c,t.m,t.w]),t.Lb(1073742336,a.b,a.b,[]),t.Lb(1073742336,s.k,s.k,[]),t.Lb(1073742336,s.b,s.b,[]),t.Lb(1073742336,c.Fb,c.Fb,[]),t.Lb(1073742336,C.q,C.q,[[2,C.v],[2,C.m]]),t.Lb(1073742336,b,b,[]),t.Lb(1024,C.k,function(){return[[{path:"",component:i}]]},[])])})}}]);