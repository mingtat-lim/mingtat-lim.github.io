"use strict";(globalThis["webpackChunkqr_generator"]=globalThis["webpackChunkqr_generator"]||[]).push([[828],{2875:(e,t,s)=>{function a(e,t,s){return e?`${t} ${s}`:t}s.d(t,{$:()=>a})},2620:(e,t,s)=>{s.d(t,{P:()=>g,d:()=>a});class a{constructor(e){this._settings={isAdmin:!1,globalDebug:!1,homePageDebug:!1,barCodePageDebug:!1,qrCodePageDebug:!1,profilePageDebug:!1,memberPageDebug:!1,eventsPageDebug:!1,scanCodePageDebug:!1,geolocationPageDebug:!1,settingsPageDebug:!1},this.DB_KEY="SETTINGS",this._local=e.localStorage,null===this._local.getItem(this.DB_KEY)&&this._local.set(this.DB_KEY,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.DB_KEY)+"");this._settings=Object.assign(Object.assign({},this._settings),t)}saveSettings(){this._local.set(this.DB_KEY,JSON.stringify(this.getState()))}getState(){return this._settings}get isAdmin(){return this._settings.isAdmin}set isAdmin(e){this._settings.isAdmin=e}get globalDebug(){return this._settings.globalDebug}set globalDebug(e){this._settings.globalDebug=e}get eventsPageDebug(){return this._settings.eventsPageDebug}set eventsPageDebug(e){this._settings.eventsPageDebug=e}get barCodePageDebug(){return this._settings.barCodePageDebug}set barCodePageDebug(e){this._settings.barCodePageDebug=e}get geolocationPageDebug(){return this._settings.geolocationPageDebug}set geolocationPageDebug(e){this._settings.geolocationPageDebug=e}get homePageDebug(){return this._settings.homePageDebug}set homePageDebug(e){this._settings.homePageDebug=e}get memberPageDebug(){return this._settings.memberPageDebug}set memberPageDebug(e){this._settings.memberPageDebug=e}get profilePageDebug(){return this._settings.profilePageDebug}set profilePageDebug(e){this._settings.profilePageDebug=e}get qrCodePageDebug(){return this._settings.qrCodePageDebug}set qrCodePageDebug(e){this._settings.qrCodePageDebug=e}get scanCodePageDebug(){return this._settings.scanCodePageDebug}set scanCodePageDebug(e){this._settings.scanCodePageDebug=e}get settingsPageDebug(){return this._settings.settingsPageDebug}set settingsPageDebug(e){this._settings.settingsPageDebug=e}}class g{constructor(e){this.KEY_BARCODE_DB="barcode-db",this._state={title:"条形码数据库",barCodes:[]},this._local=e.localStorage,null===this._local.getItem(this.KEY_BARCODE_DB)&&this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.KEY_BARCODE_DB)+"");this._state=Object.assign(Object.assign({},this._state),t)}getState(){return this._state}saveData(){this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()))}get newItem(){return{caption:"",barCode:"",expanded:!1}}addBarCode(e){this._state.barCodes.push(e)}deleteBarCode(e){this._state.barCodes=[...this._state.barCodes.slice(0,e),...this._state.barCodes.slice(e+1)]}get title(){return this._state.title}get barCodes(){return this._state.barCodes}}},3781:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var a=s(9835),g=s(6970),l=s(499),i=s(2875),n=s(9302),o=s(2620);const u={class:"row"},r={class:"q-pa-xs"},b="profile",d=(0,a.aZ)({__name:"EditProfile",setup(e){const t=(0,n.Z)(),s=new o.d(t),d=s.globalDebug||s.profilePageDebug,h=(0,l.iH)(JSON.parse(t.localStorage.getItem(b)+""));function _(){d&&console.log("saveHandler"),t.localStorage.set(b,JSON.stringify(h.value)),t.notify({message:"Profile updated",color:"green-6"})}return null===h.value&&(h.value={volunteerNo:"",name:"",phoneNo:"",email:"",expanded:!1}),(e,t)=>{const s=(0,a.up)("q-btn"),n=(0,a.up)("q-input"),o=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(o,{class:"col q-pa-md"},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a._)("div",{class:(0,g.C_)((0,l.SU)(i.$)((0,l.SU)(d),"col text-h4 text-center","bg-green-2"))},"志工资料",2),(0,a._)("div",{class:(0,g.C_)((0,l.SU)(i.$)((0,l.SU)(d),"text-h4 text-right q-gutter-xs","bg-blue-4")),style:{"min-width":"50px","max-width":"50px"}},[(0,a.Wm)(s,{icon:"update",color:"green",round:"",onClick:_})],2)]),(0,a._)("div",r,[(0,a.Wm)(n,{modelValue:h.value.name,"onUpdate:modelValue":t[0]||(t[0]=e=>h.value.name=e),label:"Name Chinese Name",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"]),(0,a._)("div",{class:(0,g.C_)((0,l.SU)(i.$)((0,l.SU)(d),"row q-col-gutter-sm","bg-yellow-2"))},[(0,a.Wm)(n,{modelValue:h.value.volunteerNo,"onUpdate:modelValue":t[1]||(t[1]=e=>h.value.volunteerNo=e),label:"Volunteer Number",class:(0,g.C_)((0,l.SU)(i.$)((0,l.SU)(d),"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"]),(0,a.Wm)(n,{modelValue:h.value.phoneNo,"onUpdate:modelValue":t[2]||(t[2]=e=>h.value.phoneNo=e),label:"Phone",class:(0,g.C_)((0,l.SU)(i.$)((0,l.SU)(d),"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"])],2),(0,a.Wm)(n,{modelValue:h.value.email,"onUpdate:modelValue":t[3]||(t[3]=e=>h.value.email=e),label:"Email",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"])])])),_:1})}}});var h=s(9885),_=s(4455),c=s(7471),D=s(9984),m=s.n(D);const P=d,p=P;m()(d,"components",{QPage:h.Z,QBtn:_.Z,QInput:c.Z})}}]);