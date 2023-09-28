"use strict";(globalThis["webpackChunkqr_generator"]=globalThis["webpackChunkqr_generator"]||[]).push([[387],{2875:(e,t,n)=>{function l(e,t,n){return e?`${t} ${n}`:t}n.d(t,{$:()=>l})},1435:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(9835),a=n(1265);const o={name:"BarcodeGenerator",props:{value:[String,Number],format:[String],width:[String,Number],height:[String,Number],displayValue:{type:[String,Boolean],default:!0},text:[String,Number],fontOptions:[String],font:[String],textAlign:[String],textPosition:[String],textMargin:[String,Number],fontSize:[String,Number],background:[String],lineColor:[String],margin:[String,Number],marginTop:[String,Number],marginBottom:[String,Number],marginLeft:[String,Number],marginRight:[String,Number],flat:[Boolean],ean128:[String,Boolean],elementTag:{type:String,default:"svg",validator:function(e){return-1!==["canvas","svg","img"].indexOf(e)}}},render(){return(0,l.h)(this.elementTag,{id:["barcodegen"]})},mounted:function(){i.call(this)}};function i(){this.value;var e={format:this.format,width:this.width,height:this.height,displayValue:this.displayValue,text:this.text,fontOptions:this.fontOptions,font:this.font,textAlign:this.textAlign,textPosition:this.textPosition,textMargin:this.textMargin,fontSize:this.fontSize,background:this.background,lineColor:this.lineColor,margin:this.margin,marginTop:this.marginTop,marginBottom:this.marginBottom,marginLeft:this.marginLeft,marginRight:this.marginRight,flat:this.flat,ean128:this.ean128,valid:function(e){e},elementTag:this.elementTag};r(e),a(this.$el,this.value,e)}function r(e){Object.keys(e).forEach((t=>void 0===e[t]?delete e[t]:{}))}const s=o,u=s},3387:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var l=n(9835),a=n(499),o=n(6970),i=n(1957),r=n(1435),s=n(9302),u=n(2875),c=function(e,t,n,l){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{s(l.next(e))}catch(t){o(t)}}function r(e){try{s(l["throw"](e))}catch(t){o(t)}}function s(e){e.done?n(e.value):a(e.value).then(i,r)}s((l=l.apply(e,t||[])).next())}))};const d={class:"col item-stretch"},g={class:"row items-center"},m={class:"text-h4 col-8 text-center"},h={class:"text-h4 col-4 text-right q-pa-sm q-gutter-xs"},v={class:"q-pa-xs"},p={key:1,xclass:"q-pt-md"},f={class:"row items-center"},S=(0,l._)("div",{class:"text-h4 col-8 text-center"},"Members",-1),x={class:"text-h4 col-4 text-right q-pa-sm q-gutter-xs"},w={class:""},b={class:"text-subtitle1"},k={class:"text-right q-gutter-xs self-center"},_={class:""},y={class:"text-right q-gutter-xs self-center"},q={key:0},N={class:"col q-pa-xs"},C=!1,V="members",W=(0,l.aZ)({__name:"AddProfile",setup(e){const t=(0,s.Z)(),n=(0,a.iH)(Array());if(null!==t.localStorage.getItem(V)){C&&console.log("parse",t.localStorage.getItem(V));const e=JSON.parse(t.localStorage.getItem(V)+"");e.forEach((e=>{n.value.push(e)}))}let W=(0,a.iH)("list");const U=(0,a.iH)({volunteerNo:"",name:"",phoneNo:"",email:"",expanded:!1});function Z(e){C&&console.log("selectHandler",e),U.value=n.value[e],W.value="edit"}function O(){C&&console.log("updateHandler"),t.localStorage.set(V,JSON.stringify(n.value)),W.value="list"}function T(){C&&console.log("cancelHandler"),W.value="list"}function B(e){C&&console.log("showBarcode");const t=!e.expanded;n.value.forEach((e=>e.expanded=!1)),e.expanded=t}function H(e){C&&console.log("deleteHandler",e),t.dialog({title:"Confirm",message:`Are you sure you want to delete the selected row (id: ${n.value[e].name})?`,cancel:!0,persistent:!0}).onOk((()=>c(this,void 0,void 0,(function*(){n.value=[...n.value.slice(0,e),...n.value.slice(e+1)],t.localStorage.set(V,JSON.stringify(n.value)),t.notify("Record deleted")}))))}function Q(){U.value={volunteerNo:"",name:"",phoneNo:"",email:"",expanded:!1},W.value="add"}function $(){n.value.push(U.value),t.localStorage.set(V,JSON.stringify(n.value)),W.value="list"}return(e,t)=>{const s=(0,l.up)("q-btn"),c=(0,l.up)("q-input"),V=(0,l.up)("q-space"),z=(0,l.up)("q-card-section"),A=(0,l.up)("q-card-actions"),P=(0,l.up)("q-separator"),j=(0,l.up)("q-slide-transition"),E=(0,l.up)("q-card"),D=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(D,{class:"q-pa-xs"},{default:(0,l.w5)((()=>[(0,l._)("div",d,[["add","edit"].includes((0,a.SU)(W))?((0,l.wg)(),(0,l.iD)("div",{key:0,class:(0,o.C_)((0,a.SU)(u.$)(C,"","bg-blue-2"))},[(0,l._)("div",g,[(0,l._)("div",m,(0,o.zw)("add"===(0,a.SU)(W)?"Add New":"Edit"),1),(0,l._)("div",h,["add"===(0,a.SU)(W)?((0,l.wg)(),(0,l.j4)(s,{key:0,icon:"save",color:"green",round:"",onClick:$})):(0,l.kq)("",!0),"edit"===(0,a.SU)(W)?((0,l.wg)(),(0,l.j4)(s,{key:1,icon:"update",color:"green",round:"",onClick:O})):(0,l.kq)("",!0),["add","edit"].includes((0,a.SU)(W))?((0,l.wg)(),(0,l.j4)(s,{key:2,icon:"cancel",color:"green",round:"",onClick:T})):(0,l.kq)("",!0)])]),(0,l._)("div",v,[(0,l.Wm)(c,{modelValue:U.value.name,"onUpdate:modelValue":t[0]||(t[0]=e=>U.value.name=e),label:"Name Chinese Name",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"]),(0,l._)("div",{class:(0,o.C_)((0,a.SU)(u.$)(C,"row q-col-gutter-sm","bg-yellow-2"))},[(0,l.Wm)(c,{modelValue:U.value.volunteerNo,"onUpdate:modelValue":t[1]||(t[1]=e=>U.value.volunteerNo=e),label:"Volunteer Number",class:(0,o.C_)((0,a.SU)(u.$)(C,"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"]),(0,l.Wm)(c,{modelValue:U.value.phoneNo,"onUpdate:modelValue":t[2]||(t[2]=e=>U.value.phoneNo=e),label:"Phone",class:(0,o.C_)((0,a.SU)(u.$)(C,"col-6","bg-red-2")),rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","class","rules"])],2),(0,l.Wm)(c,{modelValue:U.value.email,"onUpdate:modelValue":t[3]||(t[3]=e=>U.value.email=e),label:"Email",rules:[e=>!!e||"Field cannot be empty"]},null,8,["modelValue","rules"])])],2)):(0,l.kq)("",!0),null!==n.value&&"list"===(0,a.SU)(W)?((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("div",f,[S,(0,l._)("div",x,[(0,l.Wm)(s,{icon:"add",color:"green",round:"",onClick:Q})])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.value,((e,t)=>((0,l.wg)(),(0,l.j4)(E,{class:"q-pa-xs",key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{class:"row text-h4 q-pa-none"},{default:(0,l.w5)((()=>[(0,l._)("div",w,[(0,l._)("div",null,(0,o.zw)(e.name),1),(0,l._)("div",b,(0,o.zw)(e.volunteerNo),1)]),(0,l.Wm)(V),(0,l._)("div",k,[(0,l.Wm)(s,{icon:"edit",color:"green",round:"",onClick:e=>Z(t)},null,8,["onClick"]),(0,l.Wm)(s,{icon:"delete",color:"green",round:"",onClick:e=>H(t)},null,8,["onClick"])])])),_:2},1024),(0,l.Wm)(A,{class:"row q-pa-none text-subtitle2"},{default:(0,l.w5)((()=>[(0,l.Wm)(V),(0,l._)("div",_,(0,o.zw)(e.expanded?"Hide":"Show")+" Barcode",1),(0,l._)("div",y,[(0,l.Wm)(s,{color:"green",flat:"",dense:"",icon:e.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:t=>B(e)},null,8,["icon","onClick"])])])),_:2},1024),(0,l.Wm)(j,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("div",null,[(0,l.Wm)(P),(0,l.Wm)(z,{class:"text-subtitle2 text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(r.Z,{value:e.volunteerNo,margin:0,width:1.5,height:50,format:"CODE39",lineColor:"black",elementTag:"canvas"},null,8,["value"])])),_:2},1024)],512),[[i.F8,e.expanded]])])),_:2},1024)])),_:2},1024)))),128)),C?((0,l.wg)(),(0,l.iD)("div",q,[(0,l._)("pre",N,(0,o.zw)(JSON.stringify(n.value,null,4)),1)])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])])),_:1})}}});var U=n(9885),Z=n(4455),O=n(7471),T=n(4458),B=n(3190),H=n(136),Q=n(1821),$=n(9003),z=n(926),A=n(9984),P=n.n(A);const j=W,E=j;P()(W,"components",{QPage:U.Z,QBtn:Z.Z,QInput:O.Z,QCard:T.Z,QCardSection:B.Z,QSpace:H.Z,QCardActions:Q.Z,QSlideTransition:$.Z,QSeparator:z.Z})}}]);