(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{GesD:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),i=u("pJ7G"),o=function(){return function(l,n,u,e,i,o){this.id=l,this.patient=n,this.provider=u,this.medications=e,this.approvedDate=i,this.name=o}}(),t=u("ZZ/e"),r=u("9B/o"),b=function(){function l(l,n,u,e){this.actionSheetCtrl=l,this.inAppBrowser=n,this.router=u,this.apService=e,this.providers=[],this.newApprovedProvider=new o,this.viewNewProviderForm=!1}return l.prototype.ngOnInit=function(){this.reload()},l.prototype.reload=function(){var l=this;this.apService.index().subscribe(function(n){l.providers=n},function(l){console.error(l)})},l.prototype.showProviderForm=function(){this.viewNewProviderForm=!0},l.prototype.ionViewDidEnter=function(){var l=this;this.apService.index().subscribe(function(n){l.providers=n})},l.prototype.addProvider=function(){var l=this;this.apService.create(this.newApprovedProvider).subscribe(function(n){l.viewNewProviderForm=!1,l.newApprovedProvider=null},function(l){console.error(l)},function(){l.reload()})},l}(),a=function(){return function(){}}(),c=u("pMnS"),d=u("oBZk"),p=u("Ip0R"),s=u("gIcY"),v=u("ZYCi"),C=e.Bb({encapsulation:0,styles:[[""]],data:{}});function g(l){return e.Xb(0,[(l()(),e.Db(0,0,null,null,3,"ion-row",[["center",""]],null,null,null,d.rb,d.C)),e.Cb(1,49152,null,0,t.kb,[e.j,e.p,e.H],null,null),(l()(),e.Db(2,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),e.Vb(-1,null,["Add Loading Animations"]))],null,null)}function m(l){return e.Xb(0,[(l()(),e.Db(0,0,null,null,12,"ion-col",[["center",""],["size-md","6"]],null,null,null,d.ab,d.l)),e.Cb(1,49152,null,0,t.v,[e.j,e.p,e.H],null,null),(l()(),e.Db(2,0,null,0,10,"ion-card",[["class","provider-card"]],null,null,null,d.Y,d.f)),e.Cb(3,49152,null,0,t.o,[e.j,e.p,e.H],null,null),(l()(),e.Db(4,0,null,0,8,"ion-item",[["class","noborder"]],null,null,null,d.kb,d.v)),e.Cb(5,49152,null,0,t.J,[e.j,e.p,e.H],null,null),(l()(),e.Db(6,0,null,0,2,"ion-card-subtitle",[["position","stacked"]],null,null,null,d.W,d.i)),e.Cb(7,49152,null,0,t.r,[e.j,e.p,e.H],null,null),(l()(),e.Vb(8,0,["Provider ID "," "])),(l()(),e.Db(9,0,null,0,2,"ion-card-title",[["slot","end"]],null,null,null,d.X,d.j)),e.Cb(10,49152,null,0,t.s,[e.j,e.p,e.H],null,null),(l()(),e.Vb(11,0,[" "," "])),(l()(),e.Db(12,0,null,0,0,"br",[],null,null,null,null,null))],null,function(l,n){l(n,8,0,n.context.$implicit.id),l(n,11,0,n.context.$implicit.name)})}function f(l){return e.Xb(0,[(l()(),e.Db(0,0,null,null,3,"ion-row",[["center",""],["class","ion-align-items-stretch"]],null,null,null,d.rb,d.C)),e.Cb(1,49152,null,0,t.kb,[e.j,e.p,e.H],null,null),(l()(),e.sb(16777216,null,0,1,null,m)),e.Cb(3,278528,null,0,p.i,[e.Y,e.U,e.z],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.providers)},null)}function h(l){return e.Xb(0,[(l()(),e.Db(0,0,null,null,7,"ion-list",[],null,null,null,d.nb,d.x)),e.Cb(1,49152,null,0,t.Q,[e.j,e.p,e.H],null,null),(l()(),e.Db(2,0,null,0,5,"ion-grid",[["fixed",""]],null,null,null,d.gb,d.r)),e.Cb(3,49152,null,0,t.C,[e.j,e.p,e.H],{fixed:[0,"fixed"]},null),(l()(),e.sb(16777216,null,0,1,null,g)),e.Cb(5,16384,null,0,p.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(16777216,null,0,1,null,f)),e.Cb(7,16384,null,0,p.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,""),l(n,5,0,!u.providers),l(n,7,0,u.providers)},null)}function D(l){return e.Xb(0,[(l()(),e.Db(0,0,null,null,73,"div",[],null,null,null,null,null)),(l()(),e.Db(1,0,null,null,72,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==e.Pb(l,3).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Pb(l,3).onReset()&&i),i},null,null)),e.Cb(2,16384,null,0,s.m,[],null,null),e.Cb(3,4210688,null,0,s.h,[[8,null],[8,null]],null,null),e.Sb(2048,null,s.a,null,[s.h]),e.Cb(5,16384,null,0,s.g,[[4,s.a]],null,null),(l()(),e.Db(6,0,null,null,54,"ion-list",[["class","ion-no-margin ion-no-padding"],["lines","full"]],null,null,null,d.nb,d.x)),e.Cb(7,49152,null,0,t.Q,[e.j,e.p,e.H],{lines:[0,"lines"]},null),(l()(),e.Db(8,0,null,0,16,"ion-item",[],null,null,null,d.kb,d.v)),e.Cb(9,49152,null,0,t.J,[e.j,e.p,e.H],null,null),(l()(),e.Db(10,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,d.lb,d.w)),e.Cb(11,49152,null,0,t.P,[e.j,e.p,e.H],{position:[0,"position"]},null),(l()(),e.Vb(-1,0,["Name "])),(l()(),e.Db(13,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,d.zb,d.K)),e.Cb(14,49152,null,0,t.yb,[e.j,e.p,e.H],{color:[0,"color"]},null),(l()(),e.Vb(-1,0,["*"])),(l()(),e.Db(16,0,null,0,8,"ion-input",[["name","name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.Pb(l,19)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Pb(l,19)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(o.newApprovedProvider.name=u)&&i),i},d.jb,d.u)),e.Cb(17,16384,null,0,s.j,[],{required:[0,"required"]},null),e.Sb(1024,null,s.c,function(l){return[l]},[s.j]),e.Cb(19,16384,null,0,t.Nb,[e.p],null,null),e.Sb(1024,null,s.d,function(l){return[l]},[t.Nb]),e.Cb(21,671744,null,0,s.i,[[2,s.a],[6,s.c],[8,null],[6,s.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,s.e,null,[s.i]),e.Cb(23,16384,null,0,s.f,[[4,s.e]],null,null),e.Cb(24,49152,null,0,t.I,[e.j,e.p,e.H],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.Db(25,0,null,0,11,"ion-item",[],null,null,null,d.kb,d.v)),e.Cb(26,49152,null,0,t.J,[e.j,e.p,e.H],null,null),(l()(),e.Db(27,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,d.lb,d.w)),e.Cb(28,49152,null,0,t.P,[e.j,e.p,e.H],{position:[0,"position"]},null),(l()(),e.Vb(-1,0,["Phone "])),(l()(),e.Db(30,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,d.zb,d.K)),e.Cb(31,49152,null,0,t.yb,[e.j,e.p,e.H],{color:[0,"color"]},null),(l()(),e.Vb(-1,0,["*"])),(l()(),e.Db(33,0,null,0,3,"ion-input",[["name","phone"],["required",""],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Pb(l,36)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Pb(l,36)._handleInputEvent(u.target)&&i),i},d.jb,d.u)),e.Sb(5120,null,s.d,function(l){return[l]},[t.Nb]),e.Cb(35,49152,null,0,t.I,[e.j,e.p,e.H],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),e.Cb(36,16384,null,0,t.Nb,[e.p],null,null),(l()(),e.Db(37,0,null,0,11,"ion-item",[],null,null,null,d.kb,d.v)),e.Cb(38,49152,null,0,t.J,[e.j,e.p,e.H],null,null),(l()(),e.Db(39,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,d.lb,d.w)),e.Cb(40,49152,null,0,t.P,[e.j,e.p,e.H],{position:[0,"position"]},null),(l()(),e.Vb(-1,0,["Email "])),(l()(),e.Db(42,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,d.zb,d.K)),e.Cb(43,49152,null,0,t.yb,[e.j,e.p,e.H],{color:[0,"color"]},null),(l()(),e.Vb(-1,0,["*"])),(l()(),e.Db(45,0,null,0,3,"ion-input",[["name","email"],["required",""],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Pb(l,48)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Pb(l,48)._handleInputEvent(u.target)&&i),i},d.jb,d.u)),e.Sb(5120,null,s.d,function(l){return[l]},[t.Nb]),e.Cb(47,49152,null,0,t.I,[e.j,e.p,e.H],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),e.Cb(48,16384,null,0,t.Nb,[e.p],null,null),(l()(),e.Db(49,0,null,0,11,"ion-item",[],null,null,null,d.kb,d.v)),e.Cb(50,49152,null,0,t.J,[e.j,e.p,e.H],null,null),(l()(),e.Db(51,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,d.lb,d.w)),e.Cb(52,49152,null,0,t.P,[e.j,e.p,e.H],{position:[0,"position"]},null),(l()(),e.Vb(-1,0,["Relationship "])),(l()(),e.Db(54,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,d.zb,d.K)),e.Cb(55,49152,null,0,t.yb,[e.j,e.p,e.H],{color:[0,"color"]},null),(l()(),e.Vb(-1,0,["*"])),(l()(),e.Db(57,0,null,0,3,"ion-input",[["name","relationship"],["required",""],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Pb(l,60)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Pb(l,60)._handleInputEvent(u.target)&&i),i},d.jb,d.u)),e.Sb(5120,null,s.d,function(l){return[l]},[t.Nb]),e.Cb(59,49152,null,0,t.I,[e.j,e.p,e.H],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),e.Cb(60,16384,null,0,t.Nb,[e.p],null,null),(l()(),e.Db(61,0,null,null,12,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.Db(62,0,null,null,11,"ion-row",[],null,null,null,d.rb,d.C)),e.Cb(63,49152,null,0,t.kb,[e.j,e.p,e.H],null,null),(l()(),e.Db(64,0,null,0,4,"ion-col",[],null,null,null,d.ab,d.l)),e.Cb(65,49152,null,0,t.v,[e.j,e.p,e.H],null,null),(l()(),e.Db(66,0,null,0,2,"ion-button",[["class","ion-no-margin"],["expand","block"],["type","submit"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.addProvider()&&e),e},d.S,d.d)),e.Cb(67,49152,null,0,t.m,[e.j,e.p,e.H],{expand:[0,"expand"],type:[1,"type"]},null),(l()(),e.Vb(-1,0,["Save"])),(l()(),e.Db(69,0,null,0,4,"ion-col",[],null,null,null,d.ab,d.l)),e.Cb(70,49152,null,0,t.v,[e.j,e.p,e.H],null,null),(l()(),e.Db(71,0,null,0,2,"ion-button",[["class","ion-no-margin"],["color","light"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=0!=(l.component.viewNewProviderForm=!1)&&e),e},d.S,d.d)),e.Cb(72,49152,null,0,t.m,[e.j,e.p,e.H],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Vb(-1,0,["Cancel"]))],function(l,n){var u=n.component;l(n,7,0,"full"),l(n,11,0,"stacked"),l(n,14,0,"danger"),l(n,17,0,""),l(n,21,0,"name",u.newApprovedProvider.name),l(n,24,0,"name","","text"),l(n,28,0,"stacked"),l(n,31,0,"danger"),l(n,35,0,"phone","","text"),l(n,40,0,"stacked"),l(n,43,0,"danger"),l(n,47,0,"email","","text"),l(n,52,0,"stacked"),l(n,55,0,"danger"),l(n,59,0,"relationship","","text"),l(n,67,0,"block","submit"),l(n,72,0,"light","block")},function(l,n){l(n,1,0,e.Pb(n,5).ngClassUntouched,e.Pb(n,5).ngClassTouched,e.Pb(n,5).ngClassPristine,e.Pb(n,5).ngClassDirty,e.Pb(n,5).ngClassValid,e.Pb(n,5).ngClassInvalid,e.Pb(n,5).ngClassPending),l(n,16,0,e.Pb(n,17).required?"":null,e.Pb(n,23).ngClassUntouched,e.Pb(n,23).ngClassTouched,e.Pb(n,23).ngClassPristine,e.Pb(n,23).ngClassDirty,e.Pb(n,23).ngClassValid,e.Pb(n,23).ngClassInvalid,e.Pb(n,23).ngClassPending)})}function j(l){return e.Xb(0,[(l()(),e.Db(0,0,null,null,16,"ion-header",[],null,null,null,d.hb,d.s)),e.Cb(1,49152,null,0,t.D,[e.j,e.p,e.H],null,null),(l()(),e.Db(2,0,null,0,14,"ion-toolbar",[],null,null,null,d.Db,d.O)),e.Cb(3,49152,null,0,t.Db,[e.j,e.p,e.H],null,null),(l()(),e.Db(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,d.T,d.e)),e.Cb(5,49152,null,0,t.n,[e.j,e.p,e.H],null,null),(l()(),e.Db(6,0,null,0,1,"ion-menu-button",[],null,null,null,d.ob,d.A)),e.Cb(7,49152,null,0,t.T,[e.j,e.p,e.H],null,null),(l()(),e.Db(8,0,null,0,2,"ion-title",[],null,null,null,d.Bb,d.M)),e.Cb(9,49152,null,0,t.Bb,[e.j,e.p,e.H],null,null),(l()(),e.Vb(-1,0,["My Providers"])),(l()(),e.Db(11,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,d.T,d.e)),e.Cb(12,49152,null,0,t.n,[e.j,e.p,e.H],null,null),(l()(),e.Db(13,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.reload()&&e),e},d.S,d.d)),e.Cb(14,49152,null,0,t.m,[e.j,e.p,e.H],null,null),(l()(),e.Db(15,0,null,0,1,"ion-icon",[["name","options"],["slot","icon-only"]],null,null,null,d.ib,d.t)),e.Cb(16,49152,null,0,t.E,[e.j,e.p,e.H],{name:[0,"name"]},null),(l()(),e.Db(17,0,null,null,12,"ion-content",[["class","outer-content center text-center"]],null,null,null,d.bb,d.m)),e.Cb(18,49152,null,0,t.w,[e.j,e.p,e.H],null,null),(l()(),e.Db(19,0,null,0,4,"div",[["id","wrapper"]],null,null,null,null,null)),(l()(),e.sb(16777216,null,null,1,null,h)),e.Cb(21,16384,null,0,p.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(16777216,null,null,1,null,D)),e.Cb(23,16384,null,0,p.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null),(l()(),e.Db(24,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,d.fb,d.o)),e.Cb(25,49152,null,0,t.y,[e.j,e.p,e.H],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.Db(26,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showProviderForm()&&e),e},d.db,d.p)),e.Cb(27,49152,null,0,t.z,[e.j,e.p,e.H],null,null),(l()(),e.Db(28,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,d.ib,d.t)),e.Cb(29,49152,null,0,t.E,[e.j,e.p,e.H],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,16,0,"options"),l(n,21,0,!u.viewNewProviderForm),l(n,23,0,u.viewNewProviderForm),l(n,25,0,"center","bottom"),l(n,29,0,"add")},null)}function P(l){return e.Xb(0,[(l()(),e.Db(0,0,null,null,1,"provider-list",[],null,null,null,j,C)),e.Cb(1,114688,null,0,b,[t.a,r.a,v.m,i.a],null,null)],function(l,n){l(n,1,0)},null)}var H=e.zb("provider-list",b,P,{},{},[]);u.d(n,"ProviderListPageModuleNgFactory",function(){return w});var w=e.Ab(a,[],function(l){return e.Mb([e.Nb(512,e.m,e.lb,[[8,[c.a,H]],[3,e.m],e.F]),e.Nb(4608,p.l,p.k,[e.B,[2,p.s]]),e.Nb(4608,s.l,s.l,[]),e.Nb(4608,t.c,t.c,[e.H,e.g]),e.Nb(4608,t.Gb,t.Gb,[t.c,e.m,e.x]),e.Nb(4608,t.Kb,t.Kb,[t.c,e.m,e.x]),e.Nb(1073742336,p.b,p.b,[]),e.Nb(1073742336,s.k,s.k,[]),e.Nb(1073742336,s.b,s.b,[]),e.Nb(1073742336,t.Fb,t.Fb,[]),e.Nb(1073742336,v.q,v.q,[[2,v.v],[2,v.m]]),e.Nb(1073742336,a,a,[]),e.Nb(1024,v.k,function(){return[[{path:"",component:b}]]},[])])})}}]);