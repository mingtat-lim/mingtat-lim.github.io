"use strict";(globalThis["webpackChunkqr_generator"]=globalThis["webpackChunkqr_generator"]||[]).push([[442],{2875:(e,t,s)=>{function i(e,t,s){return e?`${t} ${s}`:t}function a(e,t,s,i){return e%2===0?`${t} ${s}`:`${t} ${i}`}s.d(t,{$:()=>i,r:()=>a})},2620:(e,t,s)=>{s.d(t,{HG:()=>n,IK:()=>g,Px:()=>a,de:()=>i,xB:()=>o});class i{constructor(e){this._settings={isAdmin:!1,globalDebug:!1,homePageDebug:!1,barCodePageDebug:!1,qrCodePageDebug:!1,profilePageDebug:!1,memberPageDebug:!1,eventsPageDebug:!1,scanCodePageDebug:!1,geolocationPageDebug:!1,settingsPageDebug:!1},this.DB_KEY="SETTINGS",this._local=e.localStorage,null===this._local.getItem(this.DB_KEY)&&this._local.set(this.DB_KEY,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.DB_KEY)+"");this._settings=Object.assign(Object.assign({},this._settings),t)}saveSettings(){this._local.set(this.DB_KEY,JSON.stringify(this.getState()))}getState(){return this._settings}get isAdmin(){return this._settings.isAdmin}set isAdmin(e){this._settings.isAdmin=e}get globalDebug(){return this._settings.globalDebug}set globalDebug(e){this._settings.globalDebug=e}get eventsPageDebug(){return this._settings.eventsPageDebug}set eventsPageDebug(e){this._settings.eventsPageDebug=e}get barCodePageDebug(){return this._settings.barCodePageDebug}set barCodePageDebug(e){this._settings.barCodePageDebug=e}get geolocationPageDebug(){return this._settings.geolocationPageDebug}set geolocationPageDebug(e){this._settings.geolocationPageDebug=e}get homePageDebug(){return this._settings.homePageDebug}set homePageDebug(e){this._settings.homePageDebug=e}get memberPageDebug(){return this._settings.memberPageDebug}set memberPageDebug(e){this._settings.memberPageDebug=e}get profilePageDebug(){return this._settings.profilePageDebug}set profilePageDebug(e){this._settings.profilePageDebug=e}get qrCodePageDebug(){return this._settings.qrCodePageDebug}set qrCodePageDebug(e){this._settings.qrCodePageDebug=e}get scanCodePageDebug(){return this._settings.scanCodePageDebug}set scanCodePageDebug(e){this._settings.scanCodePageDebug=e}get settingsPageDebug(){return this._settings.settingsPageDebug}set settingsPageDebug(e){this._settings.settingsPageDebug=e}}class a{constructor(e){this.KEY_BARCODE_DB="barcode-db",this._state={title:"条形码数据库",barCodes:[]},this._local=e.localStorage,null===this._local.getItem(this.KEY_BARCODE_DB)&&this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.KEY_BARCODE_DB)+"");this._state=Object.assign(Object.assign({},this._state),t)}getState(){return this._state}saveData(){this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()))}get newItem(){return{caption:"",barCode:"",expanded:!1}}addBarCode(e){this._state.barCodes.push(e)}deleteBarCode(e){this._state.barCodes=[...this._state.barCodes.slice(0,e),...this._state.barCodes.slice(e+1)]}get title(){return this._state.title}get barCodes(){return this._state.barCodes}}class g{constructor(){this.functionList=[]}addFunctionGroup(){const e={groupName:"",slots:[{slot:"",selected:!1},{slot:"",selected:!1},{slot:"",selected:!1}]};return this.functionList.push(e),e}}class n{constructor(){this.title="功能组",this.checkinOptions=[]}addFunctionGroup(){const e={groupName:"",slots:[{slot:"",selected:!1},{slot:"",selected:!1},{slot:"",selected:!1}]};return this.checkinOptions.push(e),e}}class o{constructor(e){this.KEY_BARCODE_DB="events",this._state={events:[]},this._local=e.localStorage,null===this._local.getItem(this.KEY_BARCODE_DB)&&this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()));const t=JSON.parse(this._local.getItem(this.KEY_BARCODE_DB)+"");console.log("config",t),this._state.events=t,console.log("_state",this._state)}getState(){return this._state}get stateString(){return JSON.stringify(this.getState())}restoreData(e){const t=JSON.parse(e);this._state=t}resetData(){this._state.events=[]}saveData(){this._local.set(this.KEY_BARCODE_DB,this.stateString)}get newItem(){return{eventId:"",event:"",eventDate:"",startTime:"",endTime:"",location:"",lat:-1,lon:-1,signupOptions:void 0,checkinOptions:void 0,isSignup:!1,isRegister:!1,expanded:!1}}addBarCode(e){this._state.events.push(e)}deleteBarCode(e){this._state.events=[...this._state.events.slice(0,e),...this._state.events.slice(e+1)]}get events(){return this._state.events}getItemById(e){return this.events.find((t=>t.eventId===e))}}},8244:(e,t,s)=>{s.d(t,{Z:()=>b});var i=s(9835),a=s(6970),g=s(499),n=s(2875);const o={class:"col-2"},l={class:"col-2"},u={key:0,class:"col-2"},r=(0,i.aZ)({__name:"FunctionSlot",props:{debug:{type:Boolean,default:!1},index:{},group:{}},setup(e){const t=e,s=(0,g.iH)(t.group);return(e,r)=>{const c=(0,i.up)("q-checkbox");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",{class:(0,a.C_)((0,g.SU)(n.r)(t.index,"row items-center","bg-blue-2","bg-green-2"))},[(0,i._)("div",{class:(0,a.C_)((0,g.SU)(n.$)(e.debug,"col-6","bg-green-2"))},(0,a.zw)(s.value.groupName),3),(0,i._)("div",o,[(0,i._)("div",{class:(0,a.C_)((0,g.SU)(n.$)(e.debug,"row items-center","bg-yellow-2"))},[(0,i._)("div",null,[(0,i.Wm)(c,{modelValue:s.value.slots[0].selected,"onUpdate:modelValue":r[0]||(r[0]=e=>s.value.slots[0].selected=e)},null,8,["modelValue"])]),(0,i._)("div",{class:(0,a.C_)((0,g.SU)(n.$)(e.debug,"","bg-green-2"))},(0,a.zw)(s.value.slots[0].slot),3)],2)]),(0,i._)("div",l,[(0,i._)("div",{class:(0,a.C_)((0,g.SU)(n.$)(e.debug,"row items-center","bg-blue-2"))},[(0,i._)("div",null,[(0,i.Wm)(c,{modelValue:s.value.slots[1].selected,"onUpdate:modelValue":r[1]||(r[1]=e=>s.value.slots[1].selected=e)},null,8,["modelValue"])]),(0,i._)("div",null,(0,a.zw)(s.value.slots[1].slot),1)],2)]),""!==s.value.slots[2].slot?((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",{class:(0,a.C_)((0,g.SU)(n.$)(e.debug,"row items-center","bg-yellow-2"))},[(0,i._)("div",null,[(0,i.Wm)(c,{modelValue:s.value.slots[2].selected,"onUpdate:modelValue":r[2]||(r[2]=e=>s.value.slots[2].selected=e)},null,8,["modelValue"])]),(0,i._)("div",null,(0,a.zw)(s.value.slots[1].slot),1)],2)])):(0,i.kq)("",!0)],2),(e.debug,(0,i.kq)("",!0))],64)}}});var c=s(1221),d=s(9984),_=s.n(d);const h=r,b=h;_()(r,"components",{QCheckbox:c.Z})},442:(e,t,s)=>{s.r(t),s.d(t,{default:()=>P});var i=s(9835),a=s(6970),g=s(499),n=s(2875),o=s(8244),l=s(2620),u=s(9302);const r={class:"",style:{width:"100%"}},c={key:1},d={class:"col q-pa-xs"},_=(0,i.aZ)({__name:"IndexPage",setup(e){const t=(0,u.Z)(),s=new l.de(t),_=s.globalDebug||s.homePageDebug,h=(0,g.iH)(new l.IK),b=["Audiovisual Group(视听组)","BMDP Team(募髓组)","Caring Mother(爱心妈妈)","Coordination Group(协调组)","Decoration Group(布展组)","Diligent Group(精进组)","Documentation Group(人文真善美)"];function D(e,t){const s=e.addFunctionGroup();s.groupName=t,s.slots[0].slot="08:00 - 12:30",s.slots[1].slot="13:00 - 17:00",(e.functionList.length<3||e.functionList.length>6)&&(s.slots[2].slot="18:00 - 21:00")}b.forEach((e=>{D(h.value,e)}));const p=(0,g.iH)("https://picsum.photos/500/300");return(e,t)=>{const s=(0,i.up)("q-img"),l=((0,i.up)("q-btn"),(0,i.up)("q-page"));return(0,i.wg)(),(0,i.j4)(l,{class:"fit column wrap q-pa-xs"},{default:(0,i.w5)((()=>[(0,i._)("div",r,[(0,i._)("div",{class:(0,a.C_)((0,g.SU)(n.$)((0,g.SU)(_),"row justify-center","bg-red-6"))},[(0,i.Wm)(s,{src:p.value,"spinner-color":"white",style:{height:"300px","max-width":"500px"}},null,8,["src"])],2)]),(0,i.kq)("",!0),(0,i._)("div",{class:(0,a.C_)((0,g.SU)(n.$)((0,g.SU)(_),"","bg-red-2"))},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.value.functionList.slice(0,15),((e,t)=>((0,i.wg)(),(0,i.j4)(o.Z,{key:t,index:t,debug:(0,g.SU)(_),group:e},null,8,["index","debug","group"])))),128))],2),(0,g.SU)(_)?((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("pre",d,(0,a.zw)(JSON.stringify(h.value,null,4)),1)])):(0,i.kq)("",!0)])),_:1})}}});var h=s(1639),b=s(9885),D=s(335),p=s(4455),m=s(9984),v=s.n(m);const C=(0,h.Z)(_,[["__scopeId","data-v-525e5834"]]),P=C;v()(_,"components",{QPage:b.Z,QImg:D.Z,QBtn:p.Z})}}]);