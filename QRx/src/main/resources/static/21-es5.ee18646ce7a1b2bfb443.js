(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/yGZ":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=function(){return function(){}}(),t=u("pMnS"),r=u("oBZk"),i=u("ZZ/e"),a=u("gIcY"),s=u("qfBg"),b=u("5LM8"),g=u("Nl/j"),c=u("2hxB"),d=function(){function l(l,n,u,e){this.auth=l,this.router=n,this.userData=u,this.userService=e,this.user=new c.a,this.submitted=!1}return l.prototype.ngOnInit=function(){},l.prototype.ionViewDidEnter=function(){this.user=new c.a},l.prototype.onRegister=function(){this.router.navigateByUrl("/register")},l.prototype.login=function(){var l=this;this.auth.login(this.user.username,this.user.password).subscribe(function(n){l.userData.setLoggedIn()},function(l){console.error(l),console.error("LoginComponent.login(): error logging in.")},function(){l.userService.index().subscribe(function(n){l.user=n,l.userData.setUser(n),l.userData.setUserRole(l.userData.user.role),l.user.role||l.router.navigateByUrl("/patient-registration"),"ems"===l.user.role.toLowerCase()&&l.router.navigateByUrl("/emt-view"),"user"===l.user.role.toLowerCase()&&l.router.navigateByUrl("/app/tabs/medications"),"physician"===l.user.role.toLowerCase()&&l.router.navigateByUrl("/patient-list"),"admin"===l.user.role.toLowerCase()&&l.router.navigateByUrl("/admin-dashboard")},function(l){console.error(l),console.error("LoginComponent.login(): error logging in.")})})},l}(),p=u("ZYCi"),C=e.Bb({encapsulation:0,styles:[[".login-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]],data:{}});function m(l){return e.Xb(0,[(l()(),e.Db(0,0,null,null,10,"ion-header",[],null,null,null,r.hb,r.s)),e.Cb(1,49152,null,0,i.D,[e.j,e.p,e.H],null,null),(l()(),e.Db(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.Db,r.O)),e.Cb(3,49152,null,0,i.Db,[e.j,e.p,e.H],null,null),(l()(),e.Db(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.T,r.e)),e.Cb(5,49152,null,0,i.n,[e.j,e.p,e.H],null,null),(l()(),e.Db(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.ob,r.A)),e.Cb(7,49152,null,0,i.T,[e.j,e.p,e.H],null,null),(l()(),e.Db(8,0,null,0,2,"ion-title",[],null,null,null,r.Bb,r.M)),e.Cb(9,49152,null,0,i.Bb,[e.j,e.p,e.H],null,null),(l()(),e.Vb(-1,0,["Login"])),(l()(),e.Db(11,0,null,null,58,"ion-content",[],null,null,null,r.bb,r.m)),e.Cb(12,49152,null,0,i.w,[e.j,e.p,e.H],null,null),(l()(),e.Db(13,0,null,0,1,"div",[["class","login-logo"]],null,null,null,null,null)),(l()(),e.Db(14,0,null,null,0,"img",[["alt","QRx logo"],["src","assets/img/appicon.svg"]],null,null,null,null,null)),(l()(),e.Db(15,0,null,0,54,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==e.Pb(l,17).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Pb(l,17).onReset()&&o),o},null,null)),e.Cb(16,16384,null,0,a.m,[],null,null),e.Cb(17,4210688,[["loginForm",4]],0,a.h,[[8,null],[8,null]],null,null),e.Sb(2048,null,a.a,null,[a.h]),e.Cb(19,16384,null,0,a.g,[[4,a.a]],null,null),(l()(),e.Db(20,0,null,null,37,"ion-list",[],null,null,null,r.nb,r.x)),e.Cb(21,49152,null,0,i.Q,[e.j,e.p,e.H],null,null),(l()(),e.Db(22,0,null,0,13,"ion-item",[],null,null,null,r.kb,r.v)),e.Cb(23,49152,null,0,i.J,[e.j,e.p,e.H],null,null),(l()(),e.Db(24,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,r.lb,r.w)),e.Cb(25,49152,null,0,i.P,[e.j,e.p,e.H],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Vb(-1,0,["Username"])),(l()(),e.Db(27,0,null,0,8,"ion-input",[["autocapitalize","off"],["name","username"],["required",""],["spellcheck","false"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.Pb(l,30)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Pb(l,30)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(t.user.username=u)&&o),o},r.jb,r.u)),e.Cb(28,16384,null,0,a.j,[],{required:[0,"required"]},null),e.Sb(1024,null,a.c,function(l){return[l]},[a.j]),e.Cb(30,16384,null,0,i.Nb,[e.p],null,null),e.Sb(1024,null,a.d,function(l){return[l]},[i.Nb]),e.Cb(32,671744,[["username",4]],0,a.i,[[2,a.a],[6,a.c],[8,null],[6,a.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,a.e,null,[a.i]),e.Cb(34,16384,null,0,a.f,[[4,a.e]],null,null),e.Cb(35,49152,null,0,i.I,[e.j,e.p,e.H],{autocapitalize:[0,"autocapitalize"],name:[1,"name"],required:[2,"required"],spellcheck:[3,"spellcheck"],type:[4,"type"]},null),(l()(),e.Db(36,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,r.zb,r.K)),e.Cb(37,49152,null,0,i.yb,[e.j,e.p,e.H],{color:[0,"color"]},null),(l()(),e.Db(38,0,null,0,1,"p",[["class","ion-padding-start"]],[[8,"hidden",0]],null,null,null,null)),(l()(),e.Vb(-1,null,[" Username is required "])),(l()(),e.Db(40,0,null,0,13,"ion-item",[],null,null,null,r.kb,r.v)),e.Cb(41,49152,null,0,i.J,[e.j,e.p,e.H],null,null),(l()(),e.Db(42,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,r.lb,r.w)),e.Cb(43,49152,null,0,i.P,[e.j,e.p,e.H],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Vb(-1,0,["Password"])),(l()(),e.Db(45,0,null,0,8,"ion-input",[["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.Pb(l,48)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Pb(l,48)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(t.user.password=u)&&o),o},r.jb,r.u)),e.Cb(46,16384,null,0,a.j,[],{required:[0,"required"]},null),e.Sb(1024,null,a.c,function(l){return[l]},[a.j]),e.Cb(48,16384,null,0,i.Nb,[e.p],null,null),e.Sb(1024,null,a.d,function(l){return[l]},[i.Nb]),e.Cb(50,671744,[["password",4]],0,a.i,[[2,a.a],[6,a.c],[8,null],[6,a.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,a.e,null,[a.i]),e.Cb(52,16384,null,0,a.f,[[4,a.e]],null,null),e.Cb(53,49152,null,0,i.I,[e.j,e.p,e.H],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.Db(54,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,r.zb,r.K)),e.Cb(55,49152,null,0,i.yb,[e.j,e.p,e.H],{color:[0,"color"]},null),(l()(),e.Db(56,0,null,0,1,"p",[["class","ion-padding-start"]],[[8,"hidden",0]],null,null,null,null)),(l()(),e.Vb(-1,null,[" Password is required "])),(l()(),e.Db(58,0,null,null,11,"ion-row",[],null,null,null,r.rb,r.C)),e.Cb(59,49152,null,0,i.kb,[e.j,e.p,e.H],null,null),(l()(),e.Db(60,0,null,0,4,"ion-col",[],null,null,null,r.ab,r.l)),e.Cb(61,49152,null,0,i.v,[e.j,e.p,e.H],null,null),(l()(),e.Db(62,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.login()&&e),e},r.S,r.d)),e.Cb(63,49152,null,0,i.m,[e.j,e.p,e.H],{expand:[0,"expand"]},null),(l()(),e.Vb(-1,0,["Login"])),(l()(),e.Db(65,0,null,0,4,"ion-col",[],null,null,null,r.ab,r.l)),e.Cb(66,49152,null,0,i.v,[e.j,e.p,e.H],null,null),(l()(),e.Db(67,0,null,0,2,"ion-button",[["color","light"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onRegister()&&e),e},r.S,r.d)),e.Cb(68,49152,null,0,i.m,[e.j,e.p,e.H],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Vb(-1,0,["Register"]))],function(l,n){var u=n.component;l(n,25,0,"primary","stacked"),l(n,28,0,""),l(n,32,0,"username",u.user.username),l(n,35,0,"off","username","","false","text"),l(n,37,0,"danger"),l(n,43,0,"primary","stacked"),l(n,46,0,""),l(n,50,0,"password",u.user.password),l(n,53,0,"password","","password"),l(n,55,0,"danger"),l(n,63,0,"block"),l(n,68,0,"light","block")},function(l,n){var u=n.component;l(n,15,0,e.Pb(n,19).ngClassUntouched,e.Pb(n,19).ngClassTouched,e.Pb(n,19).ngClassPristine,e.Pb(n,19).ngClassDirty,e.Pb(n,19).ngClassValid,e.Pb(n,19).ngClassInvalid,e.Pb(n,19).ngClassPending),l(n,27,0,e.Pb(n,28).required?"":null,e.Pb(n,34).ngClassUntouched,e.Pb(n,34).ngClassTouched,e.Pb(n,34).ngClassPristine,e.Pb(n,34).ngClassDirty,e.Pb(n,34).ngClassValid,e.Pb(n,34).ngClassInvalid,e.Pb(n,34).ngClassPending),l(n,38,0,e.Pb(n,32).valid||0==u.submitted),l(n,45,0,e.Pb(n,46).required?"":null,e.Pb(n,52).ngClassUntouched,e.Pb(n,52).ngClassTouched,e.Pb(n,52).ngClassPristine,e.Pb(n,52).ngClassDirty,e.Pb(n,52).ngClassValid,e.Pb(n,52).ngClassInvalid,e.Pb(n,52).ngClassPending),l(n,56,0,e.Pb(n,50).valid||0==u.submitted)})}function h(l){return e.Xb(0,[(l()(),e.Db(0,0,null,null,1,"page-login",[],null,null,null,m,C)),e.Cb(1,114688,null,0,d,[g.a,p.m,b.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var P=e.zb("page-login",d,h,{},{},[]),f=u("Ip0R"),v=function(){return function(){}}();u.d(n,"LoginModuleNgFactory",function(){return D});var D=e.Ab(o,[],function(l){return e.Mb([e.Nb(512,e.m,e.lb,[[8,[t.a,P]],[3,e.m],e.F]),e.Nb(4608,f.l,f.k,[e.B,[2,f.s]]),e.Nb(4608,a.l,a.l,[]),e.Nb(4608,i.c,i.c,[e.H,e.g]),e.Nb(4608,i.Gb,i.Gb,[i.c,e.m,e.x]),e.Nb(4608,i.Kb,i.Kb,[i.c,e.m,e.x]),e.Nb(1073742336,f.b,f.b,[]),e.Nb(1073742336,a.k,a.k,[]),e.Nb(1073742336,a.b,a.b,[]),e.Nb(1073742336,i.Fb,i.Fb,[]),e.Nb(1073742336,p.q,p.q,[[2,p.v],[2,p.m]]),e.Nb(1073742336,v,v,[]),e.Nb(1073742336,o,o,[]),e.Nb(1024,p.k,function(){return[[{path:"",component:d}]]},[])])})}}]);