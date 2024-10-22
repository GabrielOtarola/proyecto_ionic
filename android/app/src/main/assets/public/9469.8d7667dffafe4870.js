"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9469],{9469:(C,u,c)=>{c.r(u),c.d(u,{CrudRecetasPageModule:()=>F});var d=c(177),n=c(4341),r=c(4742),m=c(1739),e=c(4438),p=c(1626),h=c(3656);const R=()=>({"white-space":"pre-line"});function g(t,s){if(1&t){const a=e.RV6();e.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e.EFF(3),e.k0s()(),e.j41(4,"ion-card-content")(5,"div",9),e.EFF(6),e.k0s(),e.j41(7,"ion-button",10),e.bIt("click",function(){const o=e.eBV(a).$implicit,l=e.XpG();return e.Njj(l.editReceta(o))}),e.EFF(8,"Editar"),e.k0s(),e.j41(9,"ion-button",11),e.bIt("click",function(){const o=e.eBV(a).$implicit,l=e.XpG();return e.Njj(l.deleteReceta(o.id))}),e.EFF(10,"Eliminar"),e.k0s()()()}if(2&t){const a=s.$implicit;e.R7$(3),e.JRh(a.nombre),e.R7$(2),e.Y8G("ngStyle",e.lJ4(3,R)),e.R7$(),e.SpI(" ",a.descripcion," ")}}const b=[{path:"",component:(()=>{var t;class s{constructor(i,o,l){this.fb=i,this.http=o,this.navCtrl=l,this.recetas=[],this.editMode=!1,this.apiUrl="http://localhost:3000/recetas"}ngOnInit(){this.recetaForm=this.fb.group({nombre:["",[n.k0.required]],descripcion:["",[n.k0.required]]}),this.loadRecetas()}loadRecetas(){this.http.get(this.apiUrl).subscribe(i=>{this.recetas=i})}onSubmit(){this.recetaForm.valid&&(this.editMode?this.http.put(`${this.apiUrl}/${this.recetaIdEdit}`,this.recetaForm.value).subscribe(()=>{this.recetaForm.reset(),this.editMode=!1,this.loadRecetas()}):this.http.post(this.apiUrl,this.recetaForm.value).subscribe(()=>{this.recetaForm.reset(),this.loadRecetas()}))}editReceta(i){this.recetaForm.patchValue({nombre:i.nombre,descripcion:i.descripcion}),this.recetaIdEdit=i.id,this.editMode=!0}deleteReceta(i){confirm("\xbfEst\xe1s seguro de que deseas eliminar esta receta?")&&this.http.delete(`${this.apiUrl}/${i}`).subscribe(()=>{this.loadRecetas()})}handleBackButton(){this.navCtrl.back()}}return(t=s).\u0275fac=function(i){return new(i||t)(e.rXU(n.ok),e.rXU(p.Qq),e.rXU(h.q9))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-crud-recetas"]],decls:21,vars:4,consts:[["slot","start"],[3,"click"],["name","arrow-back-outline"],[3,"ngSubmit","formGroup"],["position","floating"],["formControlName","nombre","type","text"],["formControlName","descripcion","auto-grow","true"],["expand","block","type","submit",3,"disabled"],[4,"ngFor","ngForOf"],[3,"ngStyle"],["fill","clear","color","primary",3,"click"],["fill","clear","color","danger",3,"click"]],template:function(i,o){1&i&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.bIt("click",function(){return o.handleBackButton()}),e.nrm(4,"ion-icon",2),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6,"Blog Recetas Saludables"),e.k0s()()(),e.j41(7,"ion-content")(8,"form",3),e.bIt("ngSubmit",function(){return o.onSubmit()}),e.j41(9,"ion-item")(10,"ion-label",4),e.EFF(11,"Nombre de la receta"),e.k0s(),e.nrm(12,"ion-input",5),e.k0s(),e.j41(13,"ion-item")(14,"ion-label",4),e.EFF(15,"Descripci\xf3n (Ingredientes y Preparaci\xf3n)"),e.k0s(),e.nrm(16,"ion-textarea",6),e.k0s(),e.j41(17,"ion-button",7),e.EFF(18),e.k0s()(),e.j41(19,"ion-list"),e.DNE(20,g,11,4,"ion-card",8),e.k0s()()),2&i&&(e.R7$(8),e.Y8G("formGroup",o.recetaForm),e.R7$(9),e.Y8G("disabled",o.recetaForm.invalid),e.R7$(),e.SpI(" ",o.editMode?"Modificar Receta":"Guardar Receta"," "),e.R7$(2),e.Y8G("ngForOf",o.recetas))},dependencies:[d.Sq,d.B3,n.qT,n.BC,n.cb,n.j4,n.JD,r.Jm,r.QW,r.b_,r.I9,r.ME,r.tN,r.W9,r.eU,r.iq,r.$w,r.uz,r.he,r.nf,r.nc,r.BC,r.ai,r.Gw]}),s})()}];let f=(()=>{var t;class s{}return(t=s).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.iI.forChild(b),m.iI]}),s})(),F=(()=>{var t;class s{}return(t=s).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[d.MD,n.YN,n.X1,r.bv,f]}),s})()}}]);