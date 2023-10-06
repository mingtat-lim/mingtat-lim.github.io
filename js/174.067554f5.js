"use strict";(globalThis["webpackChunkqr_generator"]=globalThis["webpackChunkqr_generator"]||[]).push([[174],{2620:(e,t,s)=>{s.d(t,{HG:()=>i,IK:()=>g,Px:()=>l,de:()=>a,xB:()=>o});class a{constructor(e){this._settings={isAdmin:!1,globalDebug:!1,homePageDebug:!1,barCodePageDebug:!1,qrCodePageDebug:!1,profilePageDebug:!1,memberPageDebug:!1,eventsPageDebug:!1,scanCodePageDebug:!1,geolocationPageDebug:!1,settingsPageDebug:!1},this.DB_KEY="SETTINGS",this._local=e.localStorage,null===this._local.getItem(this.DB_KEY)&&this._local.set(this.DB_KEY,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.DB_KEY)+"");this._settings=Object.assign(Object.assign({},this._settings),t)}saveSettings(){this._local.set(this.DB_KEY,JSON.stringify(this.getState()))}getState(){return this._settings}get isAdmin(){return this._settings.isAdmin}set isAdmin(e){this._settings.isAdmin=e}get globalDebug(){return this._settings.globalDebug}set globalDebug(e){this._settings.globalDebug=e}get eventsPageDebug(){return this._settings.eventsPageDebug}set eventsPageDebug(e){this._settings.eventsPageDebug=e}get barCodePageDebug(){return this._settings.barCodePageDebug}set barCodePageDebug(e){this._settings.barCodePageDebug=e}get geolocationPageDebug(){return this._settings.geolocationPageDebug}set geolocationPageDebug(e){this._settings.geolocationPageDebug=e}get homePageDebug(){return this._settings.homePageDebug}set homePageDebug(e){this._settings.homePageDebug=e}get memberPageDebug(){return this._settings.memberPageDebug}set memberPageDebug(e){this._settings.memberPageDebug=e}get profilePageDebug(){return this._settings.profilePageDebug}set profilePageDebug(e){this._settings.profilePageDebug=e}get qrCodePageDebug(){return this._settings.qrCodePageDebug}set qrCodePageDebug(e){this._settings.qrCodePageDebug=e}get scanCodePageDebug(){return this._settings.scanCodePageDebug}set scanCodePageDebug(e){this._settings.scanCodePageDebug=e}get settingsPageDebug(){return this._settings.settingsPageDebug}set settingsPageDebug(e){this._settings.settingsPageDebug=e}}class l{constructor(e){this.KEY_BARCODE_DB="barcode-db",this._state={title:"条形码数据库",barCodes:[]},this._local=e.localStorage,null===this._local.getItem(this.KEY_BARCODE_DB)&&this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.KEY_BARCODE_DB)+"");this._state=Object.assign(Object.assign({},this._state),t)}getState(){return this._state}saveData(){this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()))}get newItem(){return{caption:"",barCode:"",expanded:!1}}addBarCode(e){this._state.barCodes.push(e)}deleteBarCode(e){this._state.barCodes=[...this._state.barCodes.slice(0,e),...this._state.barCodes.slice(e+1)]}get title(){return this._state.title}get barCodes(){return this._state.barCodes}}class g{constructor(){this.functionList=[]}addFunctionGroup(){const e={groupName:"",slots:[{slot:"",selected:!1},{slot:"",selected:!1},{slot:"",selected:!1}]};return this.functionList.push(e),e}}class i{constructor(){this.title="功能组",this.checkinOptions=[]}addFunctionGroup(){const e={groupName:"",slots:[{slot:"",selected:!1},{slot:"",selected:!1},{slot:"",selected:!1}]};return this.checkinOptions.push(e),e}}class o{constructor(e){this.KEY_BARCODE_DB="events",this._state={events:[]},this._local=e.localStorage,null===this._local.getItem(this.KEY_BARCODE_DB)&&this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.KEY_BARCODE_DB)+"");console.log("config",t),this._state.events=t,console.log("_state",this._state)}getState(){return this._state}get stateString(){return JSON.stringify(this.getState())}restoreData(e){const t=JSON.parse(e);this._state=t}resetData(){this._state.events=[]}saveData(){this._local.set(this.KEY_BARCODE_DB,this.stateString)}get newItem(){return{eventId:"",event:"",eventDate:"",startTime:"",endTime:"",location:"",lat:-1,lon:-1,signupOptions:void 0,checkinOptions:void 0,isSignup:!1,isRegister:!1,expanded:!1}}addBarCode(e){this._state.events.push(e)}deleteBarCode(e){this._state.events=[...this._state.events.slice(0,e),...this._state.events.slice(e+1)]}get events(){return this._state.events}getItemById(e){return this.events.find((t=>t.eventId===e))}}},3174:(e,t,s)=>{s.r(t),s.d(t,{default:()=>O});var a=s(9835),l=s(6970),g=s(2620),i=s(499),o=s(9302);const n={class:""},u={class:""},c={class:""},r={class:""},d={class:""},h={class:""},b={class:""},D={class:""},_={class:""},m={key:0},P=(0,a.aZ)({__name:"AppSettings",setup(e){const t=(0,o.Z)(),s=(0,i.iH)(new g.de(t)),P=(0,a.Fl)((()=>s.value.globalDebug||s.value.settingsPageDebug));function v(){P.value&&console.log("saveHandler"),s.value.saveSettings()}return(0,a.Jd)((()=>{v()})),(e,t)=>{const g=(0,a.up)("q-toggle"),i=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(i,{class:"col"},{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a.Wm)(g,{modelValue:s.value.isAdmin,"onUpdate:modelValue":t[0]||(t[0]=e=>s.value.isAdmin=e),"checked-icon":"check",color:"red",label:"Simulate System Admin","unchecked-icon":"clear"},null,8,["modelValue"])]),(0,a._)("div",u,[(0,a.Wm)(g,{modelValue:s.value.globalDebug,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value.globalDebug=e),"checked-icon":"check",color:"red",label:"Global Debug Flag","unchecked-icon":"clear"},null,8,["modelValue"])]),(0,a._)("div",c,[(0,a.Wm)(g,{modelValue:s.value.homePageDebug,"onUpdate:modelValue":t[2]||(t[2]=e=>s.value.homePageDebug=e),"checked-icon":"check",color:"red",label:"Home Page Debug Flag","unchecked-icon":"clear"},null,8,["modelValue"])]),(0,a._)("div",r,[(0,a.Wm)(g,{modelValue:s.value.eventsPageDebug,"onUpdate:modelValue":t[3]||(t[3]=e=>s.value.eventsPageDebug=e),"checked-icon":"check",color:"red",label:"Events Page Debug Flag","unchecked-icon":"clear"},null,8,["modelValue"])]),(0,a._)("div",d,[(0,a.Wm)(g,{modelValue:s.value.barCodePageDebug,"onUpdate:modelValue":t[4]||(t[4]=e=>s.value.barCodePageDebug=e),"checked-icon":"check",color:"red",label:"Bar Code Page Debug Flag","unchecked-icon":"clear"},null,8,["modelValue"])]),(0,a._)("div",h,[(0,a.Wm)(g,{modelValue:s.value.qrCodePageDebug,"onUpdate:modelValue":t[5]||(t[5]=e=>s.value.qrCodePageDebug=e),"checked-icon":"check",color:"red",label:"QR Code Page Debug Flag","unchecked-icon":"clear"},null,8,["modelValue"])]),(0,a._)("div",b,[(0,a.Wm)(g,{modelValue:s.value.memberPageDebug,"onUpdate:modelValue":t[6]||(t[6]=e=>s.value.memberPageDebug=e),"checked-icon":"check",color:"red",label:"Members Page Debug Flag","unchecked-icon":"clear"},null,8,["modelValue"])]),(0,a._)("div",D,[(0,a.Wm)(g,{modelValue:s.value.profilePageDebug,"onUpdate:modelValue":t[7]||(t[7]=e=>s.value.profilePageDebug=e),"checked-icon":"check",color:"red",label:"Profile Page Debug Flag","unchecked-icon":"clear"},null,8,["modelValue"])]),(0,a._)("div",_,[(0,a.Wm)(g,{modelValue:s.value.settingsPageDebug,"onUpdate:modelValue":t[8]||(t[8]=e=>s.value.settingsPageDebug=e),"checked-icon":"check",color:"red",label:"Settings Page Debug Flag","unchecked-icon":"clear"},null,8,["modelValue"])]),P.value?((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("pre",null,(0,l.zw)(JSON.stringify(s.value,null,4)),1)])):(0,a.kq)("",!0)])),_:1})}}});var v=s(9885),p=s(3175),C=s(4455),k=s(9984),S=s.n(k);const B=P,O=B;S()(P,"components",{QPage:v.Z,QToggle:p.Z,QBtn:C.Z})}}]);