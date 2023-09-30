"use strict";(globalThis["webpackChunkqr_generator"]=globalThis["webpackChunkqr_generator"]||[]).push([[878],{2875:(e,l,t)=>{function o(e,l,t){return e?`${l} ${t}`:l}t.d(l,{$:()=>o})},2620:(e,l,t)=>{t.d(l,{d:()=>o});class o{constructor(e){this._settings={isAdmin:!1,globalDebug:!1,homePageDebug:!1,barCodePageDebug:!1,qrCodePageDebug:!1,profilePageDebug:!1,memberPageDebug:!1,eventsPageDebug:!1,scanCodePageDebug:!1,geolocationPageDebug:!1,settingsPageDebug:!1},this.DB_KEY="SETTINGS",this._local=e.localStorage,null===this._local.getItem(this.DB_KEY)&&this._local.set(this.DB_KEY,JSON.stringify(this.getState()));const l=JSON.parse(this._local.getItem(this.DB_KEY)+"");this._settings=Object.assign(Object.assign({},this._settings),l)}saveSettings(){this._local.set(this.DB_KEY,JSON.stringify(this.getState()))}getState(){return this._settings}get isAdmin(){return this._settings.isAdmin}set isAdmin(e){this._settings.isAdmin=e}get globalDebug(){return this._settings.globalDebug}set globalDebug(e){this._settings.globalDebug=e}get eventsPageDebug(){return this._settings.eventsPageDebug}set eventsPageDebug(e){this._settings.eventsPageDebug=e}get barCodePageDebug(){return this._settings.barCodePageDebug}set barCodePageDebug(e){this._settings.barCodePageDebug=e}get geolocationPageDebug(){return this._settings.geolocationPageDebug}set geolocationPageDebug(e){this._settings.geolocationPageDebug=e}get homePageDebug(){return this._settings.homePageDebug}set homePageDebug(e){this._settings.homePageDebug=e}get memberPageDebug(){return this._settings.memberPageDebug}set memberPageDebug(e){this._settings.memberPageDebug=e}get profilePageDebug(){return this._settings.profilePageDebug}set profilePageDebug(e){this._settings.profilePageDebug=e}get qrCodePageDebug(){return this._settings.qrCodePageDebug}set qrCodePageDebug(e){this._settings.qrCodePageDebug=e}get scanCodePageDebug(){return this._settings.scanCodePageDebug}set scanCodePageDebug(e){this._settings.scanCodePageDebug=e}get settingsPageDebug(){return this._settings.settingsPageDebug}set settingsPageDebug(e){this._settings.settingsPageDebug=e}}},9878:(e,l,t)=>{t.r(l),t.d(l,{default:()=>B});var o=t(9835),n=t(499),a=t(6970),s=t(1957),i=t(2620),u=t(9302),g=t(2875),c=t(226),d=function(e,l,t,o){function n(e){return e instanceof t?e:new t((function(l){l(e)}))}return new(t||(t=Promise))((function(t,a){function s(e){try{u(o.next(e))}catch(l){a(l)}}function i(e){try{u(o["throw"](e))}catch(l){a(l)}}function u(e){e.done?t(e.value):n(e.value).then(s,i)}u((o=o.apply(e,l||[])).next())}))};const r={class:"col item-stretch"},m={class:"row items-center"},p={class:"text-h4 col-8 text-center"},v={class:"text-h4 col-4 text-right q-pa-sm q-gutter-xs"},b={class:"q-pa-xs"},h={key:1,xclass:"q-pt-md"},_={class:"row items-center q-pa-xs q-ma-sm q-mb-md"},C={class:"row items-center"},D={class:""},S={class:"text-subtitle1"},w={key:0,class:"col text-right q-gutter-xs self-center",style:{"min-width":"100px","max-width":"100px"}},f={class:""},k={class:"text-right q-gutter-xs self-center"},U={class:"col"},y={class:"row q-col-gutter-sm"},q={key:0},P={class:"col"},x={key:0},V={class:"col q-pa-xs"},O="events",$=(0,o.aZ)({__name:"AddEvent",setup(e){const l=(0,u.Z)(),t=new i.d(l),$=t.globalDebug||t.eventsPageDebug,W=t.isAdmin,Q=(0,n.iH)(Array());if(null!==l.localStorage.getItem(O)){$&&console.log("parse",l.localStorage.getItem(O));const e=JSON.parse(l.localStorage.getItem(O)+"");e.forEach(((e,l)=>{if(e.expanded=!1,e.showQrCode=!1,Q.value.push(e),0===l){const l={title:"精进日交通安排",message:"集合时间及地点和巴士车站",options:["无需安排交通","5:30am 武吉甘柏地铁站","5:30am 巴士站, Opp 461C, 武吉巴督西大道 6","5:30am 巴士站, Opp 451A, 武吉巴督西大道 6","5:40am West Mall 交通圈","5:45am 武吉巴督 230A, 武吉巴督 21 街","5:45am 巴士站, Opp Blk 19, Jln Jurong Kechil"]};e.option=l}if(3===l){const l={title:"慈善关怀曰",message:"请选择日期以及您是否是司机菩萨",options:["2023/10/08(周日)","2023/10/08(周日) - 司机菩萨","2023/10/07(周六)","2023/10/07(周六) - 司机菩萨"]};e.option=l}}))}let T=(0,n.iH)("list");const I=(0,n.iH)(E());function E(){return{eventId:"",event:"",eventDate:"",startTime:"",endTime:"",location:"",lat:-1,lon:-1,option:void 0,isSignup:!1,isRegister:!1,expanded:!1}}function A(e){var l;$&&console.log("showQrCodeHandler",e);const t=Q.value[e];t.showQrCode=null!==(l=t.showQrCode)&&void 0!==l&&l;const o=!t.showQrCode;Q.value.forEach((e=>e.showQrCode=!1)),t.showQrCode=o}function K(e){$&&console.log("formatQrCodeData",e);const l=Q.value[e],t={event:decodeURIComponent(l.event),eventId:"SG1234",lat:1.3507159,lon:103.7359513};return JSON.stringify(t)}function Z(e,t){var o,n;$&&console.log("signupHandler",e,t);const a=Q.value[e],s=j(a);s?t?l.dialog({title:null===(o=a.option)||void 0===o?void 0:o.title,message:null===(n=a.option)||void 0===n?void 0:n.message,options:{type:s.type,model:s.model,items:s.items},cancel:!0,persistent:!0}).onOk((e=>{var t;$&&console.log(">>>> OK, received",e),a.isSignup=!0,a.signupOption=null===(t=a.option)||void 0===t?void 0:t.options[e],L(),l.notify({message:`报名成功! ${a.event}`,color:"green-6"})})).onCancel((()=>{$&&console.log(">>>> Cancel"),l.notify({message:`报名不成功! ${a.event}`,color:"red-6"})})).onDismiss((()=>{$&&console.log("I am triggered on both OK and Cancel")})):($&&console.log("退出报名",e,t),l.dialog({title:"确认",message:`请确认您是否要退出此活动 <strong>${a.event}</strong>?`,html:!0,cancel:!0,persistent:!0}).onOk((()=>{$&&console.log("OK"),a.isSignup=t,a.signupOption=void 0,L(),l.notify({message:`退出活动成功! ${a.event}`,color:"red",icon:"warning"})})).onCancel((()=>{$&&console.log("Cancel")})).onDismiss((()=>{$&&console.log("I am triggered on both OK and Cancel")}))):t?(a.isSignup=t,L(),l.notify({message:`报名成功! ${a.event}`,color:"green-6"})):l.dialog({title:"确认",message:`请确认您是否要退出此活动 <strong>${a.event}</strong>?`,html:!0,cancel:!0,persistent:!0}).onOk((()=>{$&&console.log("OK"),a.isSignup=t,a.signupOption=void 0,L(),l.notify({message:`退出活动成功! ${a.event}`,color:"red",icon:"warning"})})).onCancel((()=>{$&&console.log("Cancel")})).onDismiss((()=>{$&&console.log("I am triggered on both OK and Cancel")}))}function j(e){if(e.option){const l={type:"radio",model:"0",items:[]};return e.option.options.forEach(((e,t)=>{var o;null===(o=l.items)||void 0===o||o.push({label:e,value:t.toString()})})),l}}function H(e){$&&console.log("selectHandler",e),I.value=Q.value[e],T.value="edit"}function F(){$&&console.log("updateHandler"),L(),T.value="list"}function N(){$&&console.log("cancelHandler"),T.value="list"}function J(e){$&&console.log("showBarcode");const l=!e.expanded;Q.value.forEach((e=>e.expanded=!1)),e.expanded=l}function B(e){$&&console.log("deleteHandler",e),l.dialog({title:"Confirm",message:`Are you sure you want to delete the selected row (id: ${Q.value[e].event})?`,cancel:!0,persistent:!0}).onOk((()=>d(this,void 0,void 0,(function*(){Q.value=[...Q.value.slice(0,e),...Q.value.slice(e+1)],L(),l.notify("Record deleted")}))))}function Y(){I.value=E(),T.value="add"}function z(){Q.value.push(I.value),L(),T.value="list"}function L(){$&&console.log("saveData"),-1===I.value.lat&&("靜思堂"===I.value.location&&(I.value.lat=1.3486891,I.value.lon=103.7471532),"福慧中心"===I.value.location&&(I.value.lat=1.3497756,I.value.lon=103.7553429)),l.localStorage.set(O,JSON.stringify(Q.value))}return(e,l)=>{const t=(0,o.up)("q-btn"),i=(0,o.up)("q-input"),u=(0,o.up)("q-icon"),d=(0,o.up)("q-card-section"),O=(0,o.up)("q-chip"),E=(0,o.up)("q-space"),j=(0,o.up)("q-card-actions"),L=(0,o.up)("q-slide-transition"),R=(0,o.up)("q-card"),G=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(G,{class:"q-pa-xs"},{default:(0,o.w5)((()=>[(0,o._)("div",r,[["add","edit"].includes((0,n.SU)(T))?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"","bg-blue-2"))},[(0,o._)("div",m,[(0,o._)("div",p,(0,a.zw)("add"===(0,n.SU)(T)?"Add New":"Edit"),1),(0,o._)("div",v,["add"===(0,n.SU)(T)?((0,o.wg)(),(0,o.j4)(t,{key:0,icon:"save",color:"green",round:"",onClick:z})):(0,o.kq)("",!0),"edit"===(0,n.SU)(T)?((0,o.wg)(),(0,o.j4)(t,{key:1,icon:"update",color:"green",round:"",onClick:F})):(0,o.kq)("",!0),["add","edit"].includes((0,n.SU)(T))?((0,o.wg)(),(0,o.j4)(t,{key:2,icon:"cancel",color:"green",round:"",onClick:N})):(0,o.kq)("",!0)])]),(0,o._)("div",b,[(0,o.Wm)(i,{modelValue:I.value.eventId,"onUpdate:modelValue":l[0]||(l[0]=e=>I.value.eventId=e),label:"Event Id",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"]),(0,o.Wm)(i,{modelValue:I.value.event,"onUpdate:modelValue":l[1]||(l[1]=e=>I.value.event=e),label:"Event Name",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"]),(0,o.Wm)(i,{modelValue:I.value.eventDate,"onUpdate:modelValue":l[2]||(l[2]=e=>I.value.eventDate=e),label:"Date",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"]),(0,o._)("div",{class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"row q-col-gutter-sm","bg-yellow-2"))},[(0,o.Wm)(i,{modelValue:I.value.startTime,"onUpdate:modelValue":l[3]||(l[3]=e=>I.value.startTime=e),label:"Start Time",class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"]),(0,o.Wm)(i,{modelValue:I.value.endTime,"onUpdate:modelValue":l[4]||(l[4]=e=>I.value.endTime=e),label:"End Time",class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"])],2),(0,o.Wm)(i,{modelValue:I.value.location,"onUpdate:modelValue":l[5]||(l[5]=e=>I.value.location=e),label:"Location",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"]),(0,o._)("div",{class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"row q-col-gutter-sm","bg-yellow-2"))},[(0,o.Wm)(i,{modelValue:I.value.lat,"onUpdate:modelValue":l[6]||(l[6]=e=>I.value.lat=e),label:"Latitude",class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"]),(0,o.Wm)(i,{modelValue:I.value.lon,"onUpdate:modelValue":l[7]||(l[7]=e=>I.value.lon=e),label:"Longitude",class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"])],2)])],2)):(0,o.kq)("",!0),null!==Q.value&&"list"===(0,n.SU)(T)?((0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",_,[(0,o._)("div",{class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"col text-h4 text-center","bg-green-2"))},"慈济活动",2),(0,n.SU)(W)?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"text-h4 text-right q-gutter-xs","bg-red-4")),style:{"min-width":"50px","max-width":"50px"}},[(0,o.Wm)(t,{icon:"add",color:"green",round:"",onClick:Y})],2)):(0,o.kq)("",!0)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Q.value,((e,l)=>((0,o.wg)(),(0,o.j4)(R,{class:"q-pa-xs q-ma-sm q-mb-md",key:l},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"row text-h5 q-pa-none"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"col","bg-blue-2"))},[(0,o._)("div",C,[e.isSignup?((0,o.wg)(),(0,o.j4)(u,{key:0,name:"check_circle",color:"green",class:""})):(0,o.kq)("",!0),(0,o._)("div",D,(0,a.zw)(e.event),1)]),(0,o._)("div",S,(0,a.zw)(e.eventDate),1)],2),(0,n.SU)(W)?((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(t,{icon:"edit",color:"green",round:"",onClick:e=>H(l)},null,8,["onClick"]),(0,o.Wm)(t,{icon:"delete",color:"green",round:"",onClick:e=>B(l)},null,8,["onClick"])])):(0,o.kq)("",!0)])),_:2},1024),(0,o.Wm)(j,{class:"row q-pa-none text-subtitle2"},{default:(0,o.w5)((()=>[e.isSignup?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(O,{key:0,clickable:"",color:"green","text-color":"white",onClick:e=>Z(l,!0)},{default:(0,o.w5)((()=>[(0,o.Uk)("报名")])),_:2},1032,["onClick"])),e.isSignup?((0,o.wg)(),(0,o.j4)(O,{key:1,clickable:"",color:"red","text-color":"white",onClick:e=>Z(l,!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("退出")])),_:2},1032,["onClick"])):(0,o.kq)("",!0),(0,n.SU)(W)?((0,o.wg)(),(0,o.j4)(O,{key:2,clickable:"",color:"blue","text-color":"white",onClick:e=>A(l)},{default:(0,o.w5)((()=>[(0,o.Uk)("活动签到 QR")])),_:2},1032,["onClick"])):(0,o.kq)("",!0),(0,o.Wm)(E),(0,o._)("div",f,(0,a.zw)(e.expanded?"隐藏":"显示")+"资料",1),(0,o._)("div",k,[(0,o.Wm)(t,{color:"green",flat:"",dense:"",icon:e.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:l=>J(e)},null,8,["icon","onClick"])])])),_:2},1024),(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",U,[(0,o._)("div",null,[(0,o.Wm)(i,{modelValue:e.location,"onUpdate:modelValue":l=>e.location=l,label:"Location",readonly:"",dense:"",class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"col-6","bg-red-2"))},null,8,["modelValue","onUpdate:modelValue","class"])]),(0,o._)("div",y,[(0,o.Wm)(i,{modelValue:e.startTime,"onUpdate:modelValue":l=>e.startTime=l,label:"Start Time",readonly:"",dense:"",class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"col-6","bg-red-2"))},null,8,["modelValue","onUpdate:modelValue","class"]),(0,o.Wm)(i,{modelValue:e.endTime,"onUpdate:modelValue":l=>e.endTime=l,label:"End Time",readonly:"",dense:"",class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"col-6","bg-red-2"))},null,8,["modelValue","onUpdate:modelValue","class"])]),e.signupOption?((0,o.wg)(),(0,o.iD)("div",q,[(0,o.Wm)(i,{modelValue:e.signupOption,"onUpdate:modelValue":l=>e.signupOption=l,label:"Option",readonly:"",dense:"",class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"col-6","bg-red-2"))},null,8,["modelValue","onUpdate:modelValue","class"])])):(0,o.kq)("",!0)],512),[[s.F8,e.expanded]])])),_:2},1024),(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",null,[(0,o._)("div",P,[(0,o._)("div",{class:(0,a.C_)((0,n.SU)(g.$)((0,n.SU)($),"text-center","bg-yellow-2"))},[(0,o.Wm)((0,n.SU)(c.ZP),{value:K(l),type:"image/png",color:{dark:"#000000ff",light:"#ffffffff"},errorCorrectionLevel:"H",margin:1},null,8,["value"])],2)])],512),[[s.F8,e.showQrCode]])])),_:2},1024)])),_:2},1024)))),128)),(0,n.SU)($)?((0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("pre",V,(0,a.zw)(JSON.stringify(Q.value,null,4)),1)])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])])),_:1})}}});var W=t(9885),Q=t(4455),T=t(7471),I=t(4458),E=t(3190),A=t(2857),K=t(136),Z=t(1821),j=t(7691),H=t(9003),F=t(9984),N=t.n(F);const J=$,B=J;N()($,"components",{QPage:W.Z,QBtn:Q.Z,QInput:T.Z,QCard:I.Z,QCardSection:E.Z,QIcon:A.Z,QSpace:K.Z,QCardActions:Z.Z,QChip:j.Z,QSlideTransition:H.Z})}}]);