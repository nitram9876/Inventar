!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(e,i,o){"use strict";o.r(i),o.d(i,"HomePageModule",(function(){return j}));var r,s=o("ofXK"),l=o("TEn/"),a=o("8IyQ"),c=o("tyNb"),u=o("fXoL"),m=o("3Pt+"),g=o("z6cu"),p=o("lJxs"),b=o("JIr8"),f=o("tk/3"),d=((r=function(){function e(t){n(this,e),this.http=t,this.baseUrl="https://api.inventar.torhelge.no/users/"}return t(e,[{key:"getAll",value:function(){var n=this;return this.http.get(this.baseUrl+"/read.php",{responseType:"text"}).pipe(Object(p.a)((function(e){return n.users=JSON.parse(e),console.log(n.users),n.users})),Object(b.a)(this.handleError))}},{key:"getSingle",value:function(n){return this.http.get(this.baseUrl+"/read_single.php?uid="+n+"`",{responseType:"text"}).pipe(Object(p.a)((function(n){return n})),Object(b.a)(this.handleError))}},{key:"handleError",value:function(n){return console.log(n),Object(g.a)("Error! Noe gikk feil:          "+n.message)}}]),e}()).\u0275fac=function(n){return new(n||r)(u.Tb(f.a))},r.\u0275prov=u.Gb({token:r,factory:r.\u0275fac,providedIn:"root"}),r);function h(n,e){if(1&n&&(u.Pb(0,"div",11),u.pc(1),u.Ob()),2&n){var t=u.bc();u.zb(1),u.rc(" ",t.uidAlert," ")}}function k(n,e){if(1&n&&(u.Pb(0,"div",11),u.pc(1),u.Ob()),2&n){var t=u.bc();u.zb(1),u.rc(" ",t.pinAlert," ")}}var v,O=((v=function(){function e(t,i){n(this,e),this.fb=t,this.BrukerService=i,this.uid="",this.pin="",this.uidAlert="Dette feltet er p\xe5krevd, og m\xe5 inneholde mellom 4 og 6 tall",this.pinAlert="Dette feltet er p\xe5krevd, og m\xe5 inneholde mellom 4 og 6 tall",this.error="",this.status="",this.loginForm=t.group({uid:[null,m.m.compose([m.m.pattern("^[0-9]+$"),m.m.required,m.m.minLength(4),m.m.maxLength(6)])],pin:[null,m.m.compose([m.m.pattern("^[0-9]+$"),m.m.required,m.m.minLength(4),m.m.maxLength(6)])]})}return t(e,[{key:"login",value:function(n){this.uid=n.uid,this.pin=n.pin,this.getUser(this.uid),null!=this.checkUser&&("User not found"==this.checkUser?console.log("User not found"):this.checkUser.pin==this.pin?(sessionStorage.setItem("name",this.checkUser.name),sessionStorage.setItem("loggedin","true"),location.reload()):(console.log(this.checkUser.pin),console.log("Wrong pin"+this.checkUser)))}},{key:"getUser",value:function(n){var e=this;this.BrukerService.getSingle(n).subscribe((function(n){e.checkUser=JSON.parse(JSON.stringify(n))}),(function(n){e.error=n}))}},{key:"ngOnInit",value:function(){var n=this;this.loginForm.get("uid").valueChanges.subscribe((function(e){"admin"!==e&&"Admin"!==e||(n.loginForm.get("pin").setValidators([m.m.required,m.m.minLength(4),m.m.maxLength(6)]),n.loginForm.get("uid").setValidators([m.m.required,m.m.minLength(4),m.m.maxLength(6)]))}))}}]),e}()).\u0275fac=function(n){return new(n||v)(u.Kb(m.b),u.Kb(d))},v.\u0275cmp=u.Eb({type:v,selectors:[["app-login-form"]],decls:22,vars:4,consts:[["size","1","size-md","3","size-xl","4"],["size","10","size-md","6","size-xl","4"],["src","../../../assets/icon/logo.png",2,"width","120px","height","120px","margin-left","calc(50% - 60px)"],[1,"margin","padding","justify-content-center"],[3,"formGroup","ngSubmit"],["position","floating"],["formControlName","uid","inputmode","numeric","clear-input","true","type","text"],["class","alert",4,"ngIf"],["formControlName","pin","inputmode","numeric","clear-input","true","type","password"],["color","success","expand","block","type","submit",1,"padding",3,"disabled"],["slot","start","name","log-in-outline"],[1,"alert"]],template:function(n,e){1&n&&(u.Pb(0,"ion-grid"),u.Pb(1,"ion-row"),u.Lb(2,"ion-col",0),u.Pb(3,"ion-col",1),u.Lb(4,"ion-img",2),u.Pb(5,"ion-card",3),u.Pb(6,"form",4),u.Xb("ngSubmit",(function(){return e.login(e.loginForm.value)})),u.Pb(7,"ion-item"),u.Pb(8,"ion-label",5),u.pc(9,"UID:"),u.Ob(),u.Lb(10,"ion-input",6),u.Ob(),u.oc(11,h,2,1,"div",7),u.Pb(12,"ion-item"),u.Pb(13,"ion-label",5),u.pc(14,"PIN:"),u.Ob(),u.Lb(15,"ion-input",8),u.Ob(),u.oc(16,k,2,1,"div",7),u.Pb(17,"ion-button",9),u.Lb(18,"ion-icon",10),u.Pb(19,"ion-label"),u.pc(20,"Login"),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Lb(21,"ion-col",0),u.Ob(),u.Ob()),2&n&&(u.zb(6),u.ec("formGroup",e.loginForm),u.zb(5),u.ec("ngIf",!e.loginForm.controls.uid.valid&&e.loginForm.controls.uid.touched&&e.loginForm.controls.uid.value.length>0),u.zb(5),u.ec("ngIf",!e.loginForm.controls.pin.valid&&e.loginForm.controls.pin.touched&&e.loginForm.controls.pin.value.length>0),u.zb(1),u.ec("disabled",!e.loginForm.valid))},directives:[l.j,l.s,l.h,l.m,l.g,m.n,m.j,m.d,l.o,l.p,l.n,l.B,m.i,m.c,s.j,l.e,l.l],styles:[".form-container[_ngcontent-%COMP%]{display:block;width:90%;padding:2em;margin:2em auto;background:#fff}.alert[_ngcontent-%COMP%]{background:#f2edda;padding:7px;font-size:.9em;margin:.5rem .5rem 20px;display:inline-block;-webkit-animation:alertAnim 2s forwards;animation:alertAnim 2s forwards}.button[_ngcontent-%COMP%]{margin:.5rem;margin-top:1rem!important}h1[_ngcontent-%COMP%]{margin-bottom:2rem;font-weight:700;font-family:Muli;font-size:2em}@-webkit-keyframes alertAnim{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes alertAnim{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}"]}),v);function y(n,e){1&n&&(u.Pb(0,"ion-col",4),u.Lb(1,"app-login-form"),u.Ob())}function P(n,e){1&n&&(u.Pb(0,"ion-grid"),u.Pb(1,"ion-row"),u.Pb(2,"ion-col",5),u.Pb(3,"ion-button",6),u.pc(4,"Innsjekk"),u.Ob(),u.Ob(),u.Ob(),u.Pb(5,"ion-row"),u.Pb(6,"ion-col",5),u.Pb(7,"ion-button",7),u.pc(8,"Utsjekk"),u.Ob(),u.Ob(),u.Ob(),u.Ob())}var w,z,x,I=[{path:"",component:(w=function(){function e(){n(this,e),this.loggedin=sessionStorage.getItem("loggedin")}return t(e,[{key:"login",value:function(){}}]),e}(),w.\u0275fac=function(n){return new(n||w)},w.\u0275cmp=u.Eb({type:w,selectors:[["app-home"]],decls:4,vars:3,consts:[[3,"fullscreen"],["size","12","class","",4,"ngIf"],[1,"wrapper"],[4,"ngIf"],["size","12",1,""],["size","12"],["routerLink","/innsjekk","fill","outline","size","large"],["routerLink","/utsjekk","fill","outline","size","large"]],template:function(n,e){1&n&&(u.Pb(0,"ion-content",0),u.oc(1,y,2,0,"ion-col",1),u.Pb(2,"div",2),u.oc(3,P,9,0,"ion-grid",3),u.Ob(),u.Ob()),2&n&&(u.ec("fullscreen",!0),u.zb(1),u.ec("ngIf",!e.loggedin),u.zb(2),u.ec("ngIf",e.loggedin))},directives:[l.i,s.j,l.h,O,l.j,l.s,l.e,l.A,c.h],styles:[".wrapper[_ngcontent-%COMP%]{text-align:center;margin:10% auto auto}ion-button[_ngcontent-%COMP%]{width:50%;height:15vh;padding:2vh}"]}),w)},{path:"profil",component:a.a}],L=((x=function e(){n(this,e)}).\u0275mod=u.Ib({type:x}),x.\u0275inj=u.Hb({factory:function(n){return new(n||x)},imports:[[c.i.forChild(I)],c.i]}),x),j=((z=function e(){n(this,e)}).\u0275mod=u.Ib({type:z}),z.\u0275inj=u.Hb({factory:function(n){return new(n||z)},imports:[[s.b,m.e,l.w,L,m.l,m.e]]}),z)}}])}();