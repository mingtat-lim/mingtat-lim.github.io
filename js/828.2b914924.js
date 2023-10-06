"use strict";(globalThis["webpackChunkqr_generator"]=globalThis["webpackChunkqr_generator"]||[]).push([[828],{2875:(e,t,s)=>{function a(e,t,s){return e?`${t} ${s}`:t}function i(e,t,s,a){return e%2===0?`${t} ${s}`:`${t} ${a}`}s.d(t,{$:()=>a,r:()=>i})},2620:(e,t,s)=>{s.d(t,{HG:()=>g,Px:()=>i,de:()=>a,xB:()=>n});class a{constructor(e){this._settings={isAdmin:!1,globalDebug:!1,homePageDebug:!1,barCodePageDebug:!1,qrCodePageDebug:!1,profilePageDebug:!1,memberPageDebug:!1,eventsPageDebug:!1,scanCodePageDebug:!1,geolocationPageDebug:!1,settingsPageDebug:!1},this.DB_KEY="SETTINGS",this._local=e.localStorage,null===this._local.getItem(this.DB_KEY)&&this._local.set(this.DB_KEY,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.DB_KEY)+"");this._settings=Object.assign(Object.assign({},this._settings),t)}saveSettings(){this._local.set(this.DB_KEY,JSON.stringify(this.getState()))}getState(){return this._settings}get isAdmin(){return this._settings.isAdmin}set isAdmin(e){this._settings.isAdmin=e}get globalDebug(){return this._settings.globalDebug}set globalDebug(e){this._settings.globalDebug=e}get eventsPageDebug(){return this._settings.eventsPageDebug}set eventsPageDebug(e){this._settings.eventsPageDebug=e}get barCodePageDebug(){return this._settings.barCodePageDebug}set barCodePageDebug(e){this._settings.barCodePageDebug=e}get geolocationPageDebug(){return this._settings.geolocationPageDebug}set geolocationPageDebug(e){this._settings.geolocationPageDebug=e}get homePageDebug(){return this._settings.homePageDebug}set homePageDebug(e){this._settings.homePageDebug=e}get memberPageDebug(){return this._settings.memberPageDebug}set memberPageDebug(e){this._settings.memberPageDebug=e}get profilePageDebug(){return this._settings.profilePageDebug}set profilePageDebug(e){this._settings.profilePageDebug=e}get qrCodePageDebug(){return this._settings.qrCodePageDebug}set qrCodePageDebug(e){this._settings.qrCodePageDebug=e}get scanCodePageDebug(){return this._settings.scanCodePageDebug}set scanCodePageDebug(e){this._settings.scanCodePageDebug=e}get settingsPageDebug(){return this._settings.settingsPageDebug}set settingsPageDebug(e){this._settings.settingsPageDebug=e}}class i{constructor(e){this.KEY_BARCODE_DB="barcode-db",this._state={title:"条形码数据库",barCodes:[]},this._local=e.localStorage,null===this._local.getItem(this.KEY_BARCODE_DB)&&this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.KEY_BARCODE_DB)+"");this._state=Object.assign(Object.assign({},this._state),t)}getState(){return this._state}saveData(){this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()))}get newItem(){return{caption:"",barCode:"",expanded:!1}}addBarCode(e){this._state.barCodes.push(e)}deleteBarCode(e){this._state.barCodes=[...this._state.barCodes.slice(0,e),...this._state.barCodes.slice(e+1)]}get title(){return this._state.title}get barCodes(){return this._state.barCodes}}class g{constructor(){this.title="功能组",this.checkinOptions=[]}addFunctionGroup(){const e={groupName:"",slots:[{slot:"",selected:!1},{slot:"",selected:!1},{slot:"",selected:!1}]};return this.checkinOptions.push(e),e}}class n{constructor(e){this.KEY_BARCODE_DB="events",this._state={events:[]},this._local=e.localStorage,null===this._local.getItem(this.KEY_BARCODE_DB)&&this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.KEY_BARCODE_DB)+"");this._state.events=t}getState(){return this._state}get stateString(){return JSON.stringify(this.getState())}restoreData(e){const t=JSON.parse(e);this._state=t}resetData(){this._state.events=[]}saveData(){this._local.set(this.KEY_BARCODE_DB,this.stateString)}get newItem(){return{eventId:"",event:"",eventDate:"",startTime:"",endTime:"",location:"",lat:-1,lon:-1,signupOptions:void 0,checkinOptions:void 0,isSignup:!1,isRegister:!1,expanded:!1}}addBarCode(e){this._state.events.push(e)}deleteBarCode(e){this._state.events=[...this._state.events.slice(0,e),...this._state.events.slice(e+1)]}get events(){return this._state.events}getItemById(e){return this.events.find((t=>t.eventId===e))}}},3781:(e,t,s)=>{s.r(t),s.d(t,{default:()=>P});var a=s(9835),i=s(6970),g=s(499),n=s(2875),l=s(9302),o=s(2620);const r={class:"row"},u={class:"q-pa-xs"},h="profile",c=(0,a.aZ)({__name:"EditProfile",setup(e){const t=(0,l.Z)(),s=new o.de(t),c=s.globalDebug||s.profilePageDebug,b=(0,g.iH)(JSON.parse(t.localStorage.getItem(h)+""));function d(){c&&console.log("saveHandler"),t.localStorage.set(h,JSON.stringify(b.value)),t.notify({message:"Profile updated",color:"green-6"})}return null===b.value&&(b.value={volunteerNo:"",name:"",phoneNo:"",email:"",expanded:!1}),(e,t)=>{const s=(0,a.up)("q-btn"),l=(0,a.up)("q-input"),o=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(o,{class:"col q-pa-md"},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a._)("div",{class:(0,i.C_)((0,g.SU)(n.$)((0,g.SU)(c),"col text-h4 text-center","bg-green-2"))},"志工资料",2),(0,a._)("div",{class:(0,i.C_)((0,g.SU)(n.$)((0,g.SU)(c),"text-h4 text-right q-gutter-xs","bg-blue-4")),style:{"min-width":"50px","max-width":"50px"}},[(0,a.Wm)(s,{icon:"update",color:"green",round:"",onClick:d})],2)]),(0,a._)("div",u,[(0,a.Wm)(l,{modelValue:b.value.name,"onUpdate:modelValue":t[0]||(t[0]=e=>b.value.name=e),label:"Name Chinese Name",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"]),(0,a._)("div",{class:(0,i.C_)((0,g.SU)(n.$)((0,g.SU)(c),"row q-col-gutter-sm","bg-yellow-2"))},[(0,a.Wm)(l,{modelValue:b.value.volunteerNo,"onUpdate:modelValue":t[1]||(t[1]=e=>b.value.volunteerNo=e),label:"Volunteer Number",class:(0,i.C_)((0,g.SU)(n.$)((0,g.SU)(c),"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"]),(0,a.Wm)(l,{modelValue:b.value.phoneNo,"onUpdate:modelValue":t[2]||(t[2]=e=>b.value.phoneNo=e),label:"Phone",class:(0,i.C_)((0,g.SU)(n.$)((0,g.SU)(c),"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"])],2),(0,a.Wm)(l,{modelValue:b.value.email,"onUpdate:modelValue":t[3]||(t[3]=e=>b.value.email=e),label:"Email",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"])])])),_:1})}}});var b=s(9885),d=s(4455),_=s(7471),D=s(9984),m=s.n(D);const p=c,P=p;m()(c,"components",{QPage:b.Z,QBtn:d.Z,QInput:_.Z})}}]);