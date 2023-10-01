"use strict";(globalThis["webpackChunkqr_generator"]=globalThis["webpackChunkqr_generator"]||[]).push([[387],{2875:(e,t,n)=>{function i(e,t,n){return e?`${t} ${n}`:t}n.d(t,{$:()=>i})},2620:(e,t,n)=>{n.d(t,{d:()=>i});class i{constructor(e){this._settings={isAdmin:!1,globalDebug:!1,homePageDebug:!1,barCodePageDebug:!1,qrCodePageDebug:!1,profilePageDebug:!1,memberPageDebug:!1,eventsPageDebug:!1,scanCodePageDebug:!1,geolocationPageDebug:!1,settingsPageDebug:!1},this.DB_KEY="SETTINGS",this._local=e.localStorage,null===this._local.getItem(this.DB_KEY)&&this._local.set(this.DB_KEY,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.DB_KEY)+"");this._settings=Object.assign(Object.assign({},this._settings),t)}saveSettings(){this._local.set(this.DB_KEY,JSON.stringify(this.getState()))}getState(){return this._settings}get isAdmin(){return this._settings.isAdmin}set isAdmin(e){this._settings.isAdmin=e}get globalDebug(){return this._settings.globalDebug}set globalDebug(e){this._settings.globalDebug=e}get eventsPageDebug(){return this._settings.eventsPageDebug}set eventsPageDebug(e){this._settings.eventsPageDebug=e}get barCodePageDebug(){return this._settings.barCodePageDebug}set barCodePageDebug(e){this._settings.barCodePageDebug=e}get geolocationPageDebug(){return this._settings.geolocationPageDebug}set geolocationPageDebug(e){this._settings.geolocationPageDebug=e}get homePageDebug(){return this._settings.homePageDebug}set homePageDebug(e){this._settings.homePageDebug=e}get memberPageDebug(){return this._settings.memberPageDebug}set memberPageDebug(e){this._settings.memberPageDebug=e}get profilePageDebug(){return this._settings.profilePageDebug}set profilePageDebug(e){this._settings.profilePageDebug=e}get qrCodePageDebug(){return this._settings.qrCodePageDebug}set qrCodePageDebug(e){this._settings.qrCodePageDebug=e}get scanCodePageDebug(){return this._settings.scanCodePageDebug}set scanCodePageDebug(e){this._settings.scanCodePageDebug=e}get settingsPageDebug(){return this._settings.settingsPageDebug}set settingsPageDebug(e){this._settings.settingsPageDebug=e}}},1435:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(9835),a=n(1265);const l={name:"BarcodeGenerator",props:{value:[String,Number],format:[String],width:[String,Number],height:[String,Number],displayValue:{type:[String,Boolean],default:!0},text:[String,Number],fontOptions:[String],font:[String],textAlign:[String],textPosition:[String],textMargin:[String,Number],fontSize:[String,Number],background:[String],lineColor:[String],margin:[String,Number],marginTop:[String,Number],marginBottom:[String,Number],marginLeft:[String,Number],marginRight:[String,Number],flat:[Boolean],ean128:[String,Boolean],elementTag:{type:String,default:"svg",validator:function(e){return-1!==["canvas","svg","img"].indexOf(e)}}},render(){return(0,i.h)(this.elementTag,{id:["barcodegen"]})},mounted:function(){s.call(this)}};function s(){this.value;var e={format:this.format,width:this.width,height:this.height,displayValue:this.displayValue,text:this.text,fontOptions:this.fontOptions,font:this.font,textAlign:this.textAlign,textPosition:this.textPosition,textMargin:this.textMargin,fontSize:this.fontSize,background:this.background,lineColor:this.lineColor,margin:this.margin,marginTop:this.marginTop,marginBottom:this.marginBottom,marginLeft:this.marginLeft,marginRight:this.marginRight,flat:this.flat,ean128:this.ean128,valid:function(e){e},elementTag:this.elementTag};o(e),a(this.$el,this.value,e)}function o(e){Object.keys(e).forEach((t=>void 0===e[t]?delete e[t]:{}))}const g=l,r=g},3387:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var i=n(9835),a=n(499),l=n(6970),s=n(1957),o=n(1435),g=n(2620),r=n(2875),u=n(9302),c=function(e,t,n,i){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,l){function s(e){try{g(i.next(e))}catch(t){l(t)}}function o(e){try{g(i["throw"](e))}catch(t){l(t)}}function g(e){e.done?n(e.value):a(e.value).then(s,o)}g((i=i.apply(e,t||[])).next())}))};const d={class:"col item-stretch"},m={class:"row items-center"},h={class:"text-h4 col-8 text-center"},b={class:"text-h4 col-4 text-right q-pa-sm q-gutter-xs"},p={class:"q-pa-xs"},v={key:1,xclass:"q-pt-md"},_={class:"row items-center q-pa-xs q-ma-sm q-mb-md"},f={class:"row items-center"},S={class:""},D={class:"text-subtitle1"},x={class:""},P={class:"text-right q-gutter-xs self-center"},w={key:0},C={class:"col q-pa-xs"},k="members",q=(0,i.aZ)({__name:"AddProfile",setup(e){const t=(0,u.Z)(),n=new g.d(t),q=n.globalDebug||n.memberPageDebug,y=(0,a.iH)(Array());if(null!==t.localStorage.getItem(k)){q&&console.log("parse",t.localStorage.getItem(k));const e=JSON.parse(t.localStorage.getItem(k)+"");e.forEach((e=>{y.value.push(e)}))}let N=(0,a.iH)("list");const U=(0,a.iH)({volunteerNo:"",name:"",phoneNo:"",email:"",expanded:!1});function W(e){q&&console.log("selectHandler",e),U.value=y.value[e],N.value="edit"}function O(){q&&console.log("updateHandler"),t.localStorage.set(k,JSON.stringify(y.value)),N.value="list"}function V(){q&&console.log("cancelHandler"),N.value="list"}function B(e){q&&console.log("showBarcode");const t=!e.expanded;y.value.forEach((e=>e.expanded=!1)),e.expanded=t}function Z(e){q&&console.log("deleteHandler",e),t.dialog({title:"Confirm",message:`Are you sure you want to delete the selected row (id: ${y.value[e].name})?`,cancel:!0,persistent:!0}).onOk((()=>c(this,void 0,void 0,(function*(){y.value=[...y.value.slice(0,e),...y.value.slice(e+1)],t.localStorage.set(k,JSON.stringify(y.value)),t.notify("Record deleted")}))))}function $(){U.value={volunteerNo:"",name:"",phoneNo:"",email:"",expanded:!1},N.value="add"}function A(){y.value.push(U.value),t.localStorage.set(k,JSON.stringify(y.value)),N.value="list"}function T(){}return(e,t)=>{const n=(0,i.up)("q-btn"),g=(0,i.up)("q-input"),u=(0,i.up)("q-space"),c=(0,i.up)("q-card-section"),k=(0,i.up)("q-card-actions"),E=(0,i.up)("q-separator"),Q=(0,i.up)("q-chip"),z=(0,i.up)("q-slide-transition"),H=(0,i.up)("q-card"),j=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(j,{class:"q-pa-md"},{default:(0,i.w5)((()=>[(0,i._)("div",d,[["add","edit"].includes((0,a.SU)(N))?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,l.C_)((0,a.SU)(r.$)((0,a.SU)(q),"","bg-blue-2"))},[(0,i._)("div",m,[(0,i._)("div",h,(0,l.zw)("add"===(0,a.SU)(N)?"Add New":"Edit"),1),(0,i._)("div",b,["add"===(0,a.SU)(N)?((0,i.wg)(),(0,i.j4)(n,{key:0,icon:"save",color:"green",round:"",onClick:A})):(0,i.kq)("",!0),"edit"===(0,a.SU)(N)?((0,i.wg)(),(0,i.j4)(n,{key:1,icon:"update",color:"green",round:"",onClick:O})):(0,i.kq)("",!0),["add","edit"].includes((0,a.SU)(N))?((0,i.wg)(),(0,i.j4)(n,{key:2,icon:"cancel",color:"green",round:"",onClick:V})):(0,i.kq)("",!0)])]),(0,i._)("div",p,[(0,i.Wm)(g,{modelValue:U.value.name,"onUpdate:modelValue":t[0]||(t[0]=e=>U.value.name=e),label:"Name Chinese Name",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"]),(0,i._)("div",{class:(0,l.C_)((0,a.SU)(r.$)((0,a.SU)(q),"row q-col-gutter-sm","bg-yellow-2"))},[(0,i.Wm)(g,{modelValue:U.value.volunteerNo,"onUpdate:modelValue":t[1]||(t[1]=e=>U.value.volunteerNo=e),label:"Volunteer Number",class:(0,l.C_)((0,a.SU)(r.$)((0,a.SU)(q),"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"]),(0,i.Wm)(g,{modelValue:U.value.phoneNo,"onUpdate:modelValue":t[2]||(t[2]=e=>U.value.phoneNo=e),label:"Phone",class:(0,l.C_)((0,a.SU)(r.$)((0,a.SU)(q),"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"])],2),(0,i.Wm)(g,{modelValue:U.value.email,"onUpdate:modelValue":t[3]||(t[3]=e=>U.value.email=e),label:"Email",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"])])],2)):(0,i.kq)("",!0),null!==y.value&&"list"===(0,a.SU)(N)?((0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("div",_,[(0,i._)("div",{class:(0,l.C_)((0,a.SU)(r.$)((0,a.SU)(q),"col text-h4 text-center","bg-green-2"))},"我的组员",2),(0,i._)("div",{class:(0,l.C_)((0,a.SU)(r.$)((0,a.SU)(q),"text-h4 text-right q-gutter-xs","bg-red-4")),style:{"min-width":"50px","max-width":"50px"}},[(0,i.Wm)(n,{icon:"add",color:"green",round:"",onClick:$})],2)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(y.value,((e,t)=>((0,i.wg)(),(0,i.j4)(H,{class:"q-pa-xs q-ma-sm q-mb-md",key:t},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{class:"row text-h5 q-pa-none"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:(0,l.C_)((0,a.SU)(r.$)((0,a.SU)(q),"col","bg-blue-2"))},[(0,i._)("div",f,[(0,i._)("div",S,(0,l.zw)(e.name),1)]),(0,i._)("div",D,(0,l.zw)(e.volunteerNo),1)],2),(0,i.Wm)(u),(0,i._)("div",{class:(0,l.C_)((0,a.SU)(r.$)((0,a.SU)(q),"text-right q-gutter-xs self-center","bg-purple-2"))},[(0,i.Wm)(n,{icon:"edit",color:"green",round:"",onClick:e=>W(t)},null,8,["onClick"]),(0,i.Wm)(n,{icon:"delete",color:"green",round:"",onClick:e=>Z(t)},null,8,["onClick"])],2)])),_:2},1024),(0,i.Wm)(k,{class:"row q-pa-none text-subtitle2"},{default:(0,i.w5)((()=>[(0,i.Wm)(u),(0,i._)("div",x,(0,l.zw)(e.expanded?"Hide":"Show")+" Barcode",1),(0,i._)("div",P,[(0,i.Wm)(n,{color:"green",flat:"",dense:"",icon:e.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:t=>B(e)},null,8,["icon","onClick"])])])),_:2},1024),(0,i.Wm)(z,null,{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",null,[(0,i.Wm)(E),(0,i.Wm)(c,{class:"text-subtitle2 text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(o.Z,{value:e.volunteerNo,margin:0,width:1.5,height:50,format:"CODE39",lineColor:"black",elementTag:"canvas"},null,8,["value"])])),_:2},1024),(0,i._)("div",null,[(0,i._)("div",{class:(0,l.C_)((0,a.SU)(r.$)((0,a.SU)(q),"text-center","bg-blue-2"))},[(0,i.Wm)(Q,{clickable:"",color:"green","text-color":"white",size:"lg",onClick:T},{default:(0,i.w5)((()=>[(0,i.Uk)("自助签到")])),_:1}),(0,i.Wm)(Q,{clickable:"",color:"green","text-color":"white",size:"lg",onClick:T},{default:(0,i.w5)((()=>[(0,i.Uk)("工作人员 自助签到")])),_:1})],2),(0,i.kq)("",!0)])],512),[[s.F8,e.expanded]])])),_:2},1024)])),_:2},1024)))),128)),(0,a.SU)(q)?((0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("pre",C,(0,l.zw)(JSON.stringify(y.value,null,4)),1)])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])])),_:1})}}});var y=n(9885),N=n(4455),U=n(7471),W=n(4458),O=n(3190),V=n(2857),B=n(136),Z=n(1821),$=n(9003),A=n(926),T=n(7691),E=n(9984),Q=n.n(E);const z=q,H=z;Q()(q,"components",{QPage:y.Z,QBtn:N.Z,QInput:U.Z,QCard:W.Z,QCardSection:O.Z,QIcon:V.Z,QSpace:B.Z,QCardActions:Z.Z,QSlideTransition:$.Z,QSeparator:A.Z,QChip:T.Z})}}]);