(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"ct+p":function(t,n,e){"use strict";e.r(n),e.d(n,"HomePageModule",function(){return x});var i=e("ofXK"),o=e("TEn/"),r=e("8IyQ"),s=e("tyNb"),a=e("BCvD"),c=e("XNiG"),l=e("fXoL"),g=e("3Pt+"),b=e("z6cu"),d=e("lJxs"),m=e("JIr8"),p=e("tk/3");let u=(()=>{class t{constructor(t){this.http=t,this.baseUrl="https://api.inventar.torhelge.no/users/"}getAll(){return this.http.get(`${this.baseUrl}/read.php`,{responseType:"text"}).pipe(Object(d.a)(t=>(this.users=JSON.parse(t),console.log(this.users),this.users)),Object(m.a)(this.handleError))}getSingle(t){return this.http.get(`${this.baseUrl}/read_single.php?uid=`+t+"`",{responseType:"text"}).pipe(Object(d.a)(t=>t),Object(m.a)(this.handleError))}handleError(t){return console.log(t),Object(b.a)("Error! Noe gikk feil:          "+t.message)}}return t.\u0275fac=function(n){return new(n||t)(l.Ub(p.a))},t.\u0275prov=l.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function h(t,n){if(1&t&&(l.Qb(0,"div",13),l.qc(1),l.Pb()),2&t){const t=l.cc();l.Ab(1),l.sc(" ",t.uidAlert," ")}}function f(t,n){if(1&t&&(l.Qb(0,"div",13),l.qc(1),l.Pb()),2&t){const t=l.cc();l.Ab(1),l.sc(" ",t.pinAlert," ")}}let P=(()=>{class t{constructor(t,n){this.fb=t,this.BrukerService=n,this.uid="",this.pin="",this.uidAlert="Dette feltet er p\xe5krevd, og m\xe5 inneholde mellom 4 og 6 tall",this.pinAlert="Dette feltet er p\xe5krevd, og m\xe5 inneholde mellom 4 og 6 tall",this.error="",this.status="",this.loginForm=t.group({uid:[null,g.m.compose([g.m.pattern("^[0-9]+$"),g.m.required,g.m.minLength(4),g.m.maxLength(6)])],pin:[null,g.m.compose([g.m.pattern("^[0-9]+$"),g.m.required,g.m.minLength(4),g.m.maxLength(6)])]})}login(t){this.uid=t.uid,this.pin=t.pin,sessionStorage.setItem("name","Default"),sessionStorage.setItem("loggedin","true"),location.reload(),this.getUser(this.uid),null!=this.pin&&(console.log(this.checkUser),console.log(this.pin),console.log(this.checkUser.pin),sessionStorage.setItem("name",this.checkUser.name),sessionStorage.setItem("loggedin","true"),location.reload())}getUser(t){this.BrukerService.getSingle(t).subscribe(t=>{this.checkUser=JSON.parse(t)},t=>{this.error=t})}ngOnInit(){this.loginForm.get("uid").valueChanges.subscribe(t=>{"admin"!==t&&"Admin"!==t||(this.loginForm.get("pin").setValidators([g.m.required,g.m.minLength(4),g.m.maxLength(6)]),this.loginForm.get("uid").setValidators([g.m.required,g.m.minLength(4),g.m.maxLength(6)]))})}}return t.\u0275fac=function(n){return new(n||t)(l.Lb(g.b),l.Lb(u))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-login-form"]],decls:24,vars:4,consts:[["size","1","size-md","3","size-xl","4"],["size","10","size-md","6","size-xl","4"],["id","logo","src","../../../assets/Arna-msk-Logo.svg"],["id","title","color","primary"],["color","secondary",1,"margin","padding","justify-content-center","loginform"],[3,"formGroup","ngSubmit"],["color","secondary"],["id","label","position","floating"],["formControlName","uid","inputmode","numeric","clear-input","true","type","text"],["class","alert",4,"ngIf"],["formControlName","pin","inputmode","numeric","clear-input","true","type","password"],["color","primary","expand","block","type","submit",1,"padding",3,"disabled"],["slot","start","name","log-in-outline"],[1,"alert"]],template:function(t,n){1&t&&(l.Qb(0,"ion-grid"),l.Qb(1,"ion-row"),l.Mb(2,"ion-col",0),l.Qb(3,"ion-col",1),l.Mb(4,"ion-img",2),l.Qb(5,"ion-title",3),l.qc(6,"Arna MSK Inventar System"),l.Pb(),l.Qb(7,"ion-card",4),l.Qb(8,"form",5),l.Yb("ngSubmit",function(){return n.login(n.loginForm.value)}),l.Qb(9,"ion-item",6),l.Qb(10,"ion-label",7),l.qc(11,"UID:"),l.Pb(),l.Mb(12,"ion-input",8),l.Pb(),l.pc(13,h,2,1,"div",9),l.Qb(14,"ion-item",6),l.Qb(15,"ion-label",7),l.qc(16,"PIN:"),l.Pb(),l.Mb(17,"ion-input",10),l.Pb(),l.pc(18,f,2,1,"div",9),l.Qb(19,"ion-button",11),l.Mb(20,"ion-icon",12),l.Qb(21,"ion-label"),l.qc(22,"Login"),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Mb(23,"ion-col",0),l.Pb(),l.Pb()),2&t&&(l.Ab(8),l.fc("formGroup",n.loginForm),l.Ab(5),l.fc("ngIf",!n.loginForm.controls.uid.valid&&n.loginForm.controls.uid.touched&&n.loginForm.controls.uid.value.length>0),l.Ab(5),l.fc("ngIf",!n.loginForm.controls.pin.valid&&n.loginForm.controls.pin.touched&&n.loginForm.controls.pin.value.length>0),l.Ab(1),l.fc("disabled",!n.loginForm.valid))},directives:[o.j,o.s,o.h,o.m,o.u,o.g,g.n,g.j,g.d,o.o,o.p,o.n,o.B,g.i,g.c,i.j,o.e,o.l],styles:[".form-container[_ngcontent-%COMP%]{display:block;width:90%;padding:2em;margin:2em auto;background:#fff}.loginform[_ngcontent-%COMP%]{box-shadow:0 1px 6.9px #2baccc;margin-bottom:-10%}.alert[_ngcontent-%COMP%]{background:#f2edda;padding:7px;font-size:.9em;margin:.5rem .5rem 20px;display:inline-block;-webkit-animation:alertAnim 2s forwards;animation:alertAnim 2s forwards}.button[_ngcontent-%COMP%]{margin:.5rem;margin-top:1rem!important}#label[_ngcontent-%COMP%]{font-size:1rem}#label[_ngcontent-%COMP%], ion-label[_ngcontent-%COMP%]{font-family:Georgia,Times New Roman,Times,serif}ion-card[_ngcontent-%COMP%]{margin-top:6.9%;padding-bottom:1%}#title[_ngcontent-%COMP%]{margin-top:16.9%;margin-bottom:10%;text-overflow:clip;white-space:unset;overflow:unset}#title[_ngcontent-%COMP%], #titlephone[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem;text-align:center}#titlephone[_ngcontent-%COMP%]{display:none}#logo[_ngcontent-%COMP%]{width:200px;height:200px;margin-left:calc(50%);transform:translateX(-100px)}@-webkit-keyframes alertAnim{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes alertAnim{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@media only screen and (max-width:450px){#title[_ngcontent-%COMP%]{display:none}#titlephone[_ngcontent-%COMP%]{display:unset}#logo[_ngcontent-%COMP%]{margin-bottom:30%}}"]}),t})();var v=function(){function t(t){this.el=t,this.dtOptions={}}return t.prototype.ngOnInit=function(){var t=this;this.dtTrigger?this.dtTrigger.subscribe(function(){t.displayTable()}):this.displayTable()},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(){var t=this;this.dtInstance=new Promise(function(n,e){Promise.resolve(t.dtOptions).then(function(e){setTimeout(function(){var i={rowCallback:function(n,i,o){if(e.columns){var r=e.columns;r.filter(function(t){return t.ngPipeInstance}).forEach(function(t){var e=t.ngPipeInstance,i=r.findIndex(function(n){return n.data==t.data}),o=n.childNodes.item(i),s=$(o).text(),a=e.transform(s);$(o).text(a)})}t.dtOptions.rowCallback&&t.dtOptions.rowCallback(n,i,o)}};i=Object.assign({},e,i),t.dt=$(t.el.nativeElement).DataTable(i),n(t.dt)})})})},t.\u0275fac=function(n){return new(n||t)(l.Lb(l.m))},t.\u0275dir=l.Gb({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}(),y=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(n){return new(n||t)},imports:[[i.b]]}),t}();function O(t,n){1&t&&(l.Qb(0,"ion-col",4),l.Mb(1,"app-login-form"),l.Pb())}function w(t,n){if(1&t&&(l.Qb(0,"tr"),l.Qb(1,"td"),l.qc(2),l.Pb(),l.Qb(3,"td"),l.qc(4),l.Pb(),l.Qb(5,"td"),l.qc(6),l.Pb(),l.Qb(7,"td"),l.qc(8),l.Pb(),l.Qb(9,"td"),l.qc(10),l.Pb(),l.Qb(11,"td"),l.qc(12),l.Pb(),l.Qb(13,"td"),l.qc(14),l.Pb(),l.Pb()),2&t){const t=n.$implicit;l.Ab(2),l.rc(t.uid),l.Ab(2),l.rc(t.name),l.Ab(2),l.rc(t.location),l.Ab(2),l.rc(t.status),l.Ab(2),l.rc(t.weight+"g"),l.Ab(2),l.rc(t.size),l.Ab(2),l.rc(t.comment)}}function Q(t,n){if(1&t&&(l.Qb(0,"ion-grid"),l.Qb(1,"ion-row"),l.Mb(2,"ion-col",5),l.Qb(3,"ion-col",6),l.Qb(4,"ion-card",7),l.Qb(5,"table",8),l.Qb(6,"thead"),l.Qb(7,"tr"),l.Qb(8,"th"),l.qc(9,"UID"),l.Pb(),l.Qb(10,"th"),l.qc(11,"Navn"),l.Pb(),l.Qb(12,"th"),l.qc(13,"Plassering"),l.Pb(),l.Qb(14,"th"),l.qc(15,"Status"),l.Pb(),l.Qb(16,"th"),l.qc(17,"Vekt"),l.Pb(),l.Qb(18,"th"),l.qc(19,"St\xf8rrelse"),l.Pb(),l.Qb(20,"th"),l.qc(21,"Kommentar"),l.Pb(),l.Pb(),l.Pb(),l.Qb(22,"tbody"),l.pc(23,w,15,7,"tr",9),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&t){const t=l.cc();l.Ab(5),l.fc("dtOptions",t.dtOptions)("dtTrigger",t.dtTrigger),l.Ab(18),l.fc("ngForOf",t.inventar)}}const I=[{path:"",component:(()=>{class t{constructor(t){this.InventarService=t,this.dtOptions={},this.dtTrigger=new c.a,this.loggedin=sessionStorage.getItem("loggedin")}ngOnInit(){this.getInventar(),this.dtOptions={scrollY:"70vh",language:{url:"../../assets/Norwegian-Bokmal.json"},scrollCollapse:!0,paging:!0,lengthChange:!0,searching:!0,responsive:!0,processing:!0}}getInventar(){this.InventarService.getAll().subscribe(t=>{this.inventar=t,this.dtTrigger.next()},t=>this.errorMessage=t)}login(){}}return t.\u0275fac=function(n){return new(n||t)(l.Lb(a.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-home"]],features:[l.zb([a.a])],decls:4,vars:3,consts:[["color","secondary",3,"fullscreen"],["size","12","class","",4,"ngIf"],[1,"wrapper"],[4,"ngIf"],["size","12",1,""],["size","2"],["size","8"],[1,"ion-padding"],["datatable","ng","id","table",1,"row-border","hover",3,"dtOptions","dtTrigger"],[4,"ngFor","ngForOf"]],template:function(t,n){1&t&&(l.Qb(0,"ion-content",0),l.pc(1,O,2,0,"ion-col",1),l.Qb(2,"div",2),l.pc(3,Q,24,3,"ion-grid",3),l.Pb(),l.Pb()),2&t&&(l.fc("fullscreen",!0),l.Ab(1),l.fc("ngIf",!n.loggedin),l.Ab(2),l.fc("ngIf",n.loggedin))},directives:[o.i,i.j,o.h,P,o.j,o.s,o.g,v,i.i],styles:[".wrapper[_ngcontent-%COMP%]{text-align:center;width:100%;margin:2% auto auto}ion-button[_ngcontent-%COMP%]{width:50%;height:15vh;padding:2vh}ion-grid[_ngcontent-%COMP%], ion-row[_ngcontent-%COMP%]{width:100%}@media only screen and (max-width:450px){#innsjekk[_ngcontent-%COMP%]{margin-top:15%;margin-bottom:15%}}"]}),t})()},{path:"profil",component:r.a}];let M=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(n){return new(n||t)},imports:[[s.i.forChild(I)],s.i]}),t})(),x=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(n){return new(n||t)},imports:[[i.b,g.e,o.w,M,g.l,g.e,y,p.b]]}),t})()}}]);