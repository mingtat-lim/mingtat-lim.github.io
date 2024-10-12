"use strict";(globalThis["webpackChunkquasar_barcode"]=globalThis["webpackChunkquasar_barcode"]||[]).push([[792,870],{6327:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ne});var o=t(1758),l=t(8790),n=t(8734),s=t(4533),r=t(9339),c=t(1868),i=t(883),d=t(1500),u=t(4907),v=t(455),b=t(9482),g=t(614),f=t(587),p=t(3537),m=t(57),k=t.n(m),h=t(1234);const R=e=>((0,o.Qi)("data-v-de527982"),e=e(),(0,o.jt)(),e),y=R((()=>(0,o.Lk)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"},null,-1))),x={class:"row q-pa-xs"},_={key:0,class:"fit row wrap justify-center items-start content-start"},C={key:0,class:"error"},w={class:"fit row wrap justify-center items-start content-start"},q={class:"bg-blue-4",style:{width:"300px",height:"300px"}},L={class:"q-pa-md"},A={class:"col"},Q={class:"x-v-align-middle"},F={class:"col"},E={class:"row"},S={class:"col"},T={class:"q-pl-sm text-h6"},O={class:"col q-pa-xs text-center"},W={key:0,class:"decode-result"},X={key:1,class:"decode-result"},P={key:2,class:"decode-result"},I={key:3,class:"decode-result"},K=(0,o.pM)({__name:"barcodeComponent",setup(e){const a=(0,n.KR)("off"),t=(0,n.KR)(),m=(0,u.A)(),R=(0,g.C)(),{settings:K}=(0,f.bP)(R),{t:H}=(0,p.s9)(),N=(0,b.n)(),V=(0,v.rd)(),D=K.value.barcodePageDebug,j=(0,n.KR)(N.barcodes),B=e=>{D&&console.log("buttonClickHandler",e),j.value.length>0&&(j.value.forEach((e=>e.expended=!1)),j.value[e].expended=!0)};B(0);const M=e=>{D&&console.log("buttonEditClickHandler",e),V.push({path:"/barcodeEdit",query:{id:e}})},J=()=>{D&&console.log("onEnd"),N.save()},z=(0,n.KR)(!1),$=(0,n.KR)(),G=e=>{z.value=!z.value,$.value=Object.assign({},N.barcodes[e]),D&&console.log($.value)};function U(){console.log("onLeft")}function Y(){console.log("onRight")}function Z(e){D&&console.log("onDetect",e);const a=e,[o]=a;let l;if(D&&console.log(o.rawValue),console.log(o.rawValue),o.rawValue.startsWith("{")){const e=JSON.parse(o.rawValue);m.dialog({title:H("barcodeEdit_comfirmation_title"),message:H("barcode_import_confirmation",{name:e.caption}),cancel:{label:H("button_caption_cancel")},ok:{label:H("button_caption_yes"),push:!0},persistent:!0}).onOk((()=>{N.add(e),B(N.barcodes.length-1),m.notify({type:"positive",position:"center",message:H("barcode_notify_RecordAdded")})})).onCancel((()=>{})).onDismiss((()=>{})),l=JSON.stringify(e)}else l=o.rawValue;t.value=l,re(),ae.value=i.c9.now().toISO(),se()}let ee;const ae=(0,n.KR)(),te=(0,n.KR)(),oe=(0,n.KR)();function le(){clearTimeout(ee),ee=setTimeout((()=>{D&&console.log("cameraOffTimer"),se(),oe.value=i.c9.now().toISO()}),1e4)}function ne(){D&&console.log("onCameraHandler"),a.value="auto",te.value=i.c9.now().toISO(),ae.value="",oe.value="",le()}function se(){D&&console.log("offCameraHandler"),a.value="off"}function re(){let e=new Audio("/censor-beep-01.mp3");e.play()}function ce(e,a){for(const t of e){const[e,...o]=t.cornerPoints;a.strokeStyle="red",a.beginPath(),a.moveTo(e.x,e.y);for(const{x:t,y:l}of o)a.lineTo(t,l);a.lineTo(e.x,e.y),a.closePath(),a.stroke()}}function ie(e,a){for(const t of e){const{boundingBox:e}=t;a.lineWidth=2,a.strokeStyle="#007bff",a.strokeRect(e.x,e.y,e.width,e.height)}}function de(e,a){for(const t of e){const{boundingBox:e,rawValue:o}=t,l=e.x+e.width/2,n=e.y+e.height/2,s=Math.max(12,50*e.width/a.canvas.width);a.font=`bold ${s}px sans-serif`,a.textAlign="center",a.lineWidth=3,a.strokeStyle="#35495e",a.strokeText(t.rawValue,l,n),a.fillStyle="#5cb984",a.fillText(o,l,n)}}const ue=[{text:"nothing (default)",value:void 0},{text:"outline",value:ce},{text:"centered text",value:de},{text:"bounding box",value:ie}],ve=(0,n.KR)(ue[1]),be=(0,n.KR)({facingMode:"environment"});let ge;ge=["qr_code","ean_13","unknown"];const fe=(0,n.KR)("");function pe(e){D&&console.log("onErrorHandler",e),fe.value=`[${e.name}]: `,"NotAllowedError"===e.name?fe.value+="you need to grant camera access permission":"NotFoundError"===e.name?fe.value+="no camera on this device":"NotSupportedError"===e.name?fe.value+="secure context required (HTTPS, localhost)":"NotReadableError"===e.name?fe.value+="is the camera already in use?":"OverconstrainedError"===e.name?fe.value+="installed cameras are not suitable":"StreamApiNotSupportedError"===e.name?fe.value+="Stream API is not supported in this browser":"InsecureContextError"===e.name?fe.value+="Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.":fe.value+=e.message}return(e,i)=>{const u=(0,o.g2)("q-btn"),v=(0,o.g2)("q-icon"),b=(0,o.g2)("q-avatar"),g=(0,o.g2)("q-item-section"),f=(0,o.g2)("q-item"),p=(0,o.g2)("q-slide-item"),m=(0,o.g2)("q-list"),R=(0,o.g2)("q-card-section"),V=(0,o.g2)("q-separator"),ee=(0,o.g2)("q-card-actions"),le=(0,o.g2)("q-card");return(0,o.uX)(),(0,o.CE)("div",null,[y,(0,o.Lk)("div",x,[(0,o.Lk)("div",{class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"col-md-auto q-pa-sm x-v-align-middle","bg-red-3"))},[(0,o.bF)(u,{color:"blue",icon:"share",round:"",onClick:i[0]||(i[0]=e=>G(0))})],2),(0,o.Lk)("div",{class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"col-md-auto q-pa-sm x-v-align-middle","bg-red-3"))},[(0,o.bF)(u,{color:"blue",icon:"barcode_reader",round:"",onClick:i[1]||(i[1]=e=>ne())})],2),(0,o.Lk)("div",{class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"col text-h3 text-center text-capitalize","bg-yellow-3"))},(0,l.v_)("barcode"===(0,n.R1)(K).type?(0,n.R1)(H)("barcode_title"):(0,n.R1)(H)("qrcode_title")),3),(0,o.Lk)("div",{class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"col-md-auto q-pa-sm x-v-align-middle","bg-red-3"))},[(0,o.bF)(u,{color:"green",icon:"add",round:"",onClick:i[2]||(i[2]=e=>M(-1))})],2)]),z.value?((0,o.uX)(),(0,o.CE)("div",_,[(0,o.Lk)("div",{class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"q-pa-xs text-center","bg-red-3"))},[(0,o.bF)((0,n.R1)(c.Ay),{value:JSON.stringify($.value,null,4),type:"image/png",width:300,color:{dark:"#000000ff",light:"#ffffffff"},errorCorrectionLevel:"H",margin:1},null,8,["value"])],2)])):(0,o.Q3)("",!0),"auto"===a.value?((0,o.uX)(),(0,o.CE)("div",{key:1,class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"q-pa-xs text-center","bg-red-3"))},[fe.value?((0,o.uX)(),(0,o.CE)("div",C,(0,l.v_)(fe.value),1)):(0,o.Q3)("",!0),(0,o.Lk)("div",w,[(0,o.Lk)("div",q,[(0,o.bF)((0,n.R1)(d.tR),{onDetect:Z,onError:pe,track:ve.value.value,constraints:be.value,formats:(0,n.R1)(ge),camera:a.value},null,8,["track","constraints","formats","camera"])])])],2)):(0,o.Q3)("",!0),(0,o.Lk)("div",L,[(0,o.bF)(m,{bordered:"",separator:""},{default:(0,o.k6)((()=>[(0,o.bF)(p,{onLeft:U,onRight:Y},{left:(0,o.k6)((()=>[(0,o.bF)(v,{name:"done"})])),right:(0,o.k6)((()=>[(0,o.bF)(v,{name:"alarm"})])),default:(0,o.k6)((()=>[(0,o.bF)(f,null,{default:(0,o.k6)((()=>[(0,o.bF)(g,{avatar:""},{default:(0,o.k6)((()=>[(0,o.bF)(b,{color:"primary","text-color":"white",icon:"bluetooth"})])),_:1}),(0,o.bF)(g,null,{default:(0,o.k6)((()=>[(0,o.eW)("Icons only")])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.bF)((0,n.R1)(k()),{tag:"span",list:j.value,class:"list-group",handle:".handle","item-key":"caption",onEnd:J},{item:(0,o.k6)((({element:e,index:a})=>[(0,o.Lk)("div",null,[(0,o.Lk)("div",A,[(0,o.Lk)("div",Q,[(0,o.bF)(le,{class:"my-card q-mb-md"},{default:(0,o.k6)((()=>[(0,o.bF)(R,{class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"row q-pa-none","bg-blue-3 text-white"))},{default:(0,o.k6)((()=>[(0,o.Lk)("div",F,[(0,o.Lk)("div",E,[(0,o.Lk)("div",S,[(0,o.Lk)("div",{class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"row","bg-red-4"))},[(0,o.bF)(u,{flat:"","text-color":"green",icon:"drag_handle",class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"handle","bg-blue-2"))},null,8,["class"]),(0,o.Lk)("div",{class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"text-h5","bg-blue-5"))},(0,l.v_)(e.caption)+" "+(0,l.v_)(void 0!==e.phone?e.phone.substring(0,4):"")+" "+(0,l.v_)(void 0!==e.phone?e.phone.substring(4):""),3)],2)])]),(0,o.Lk)("div",T,(0,l.v_)(e.barcode),1)]),(0,o.Lk)("div",{class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"col-md-auto q-pa-xs x-v-align-middle","bg-red-3"))},[(0,o.bF)(u,{color:"green",icon:"edit",round:"",onClick:e=>M(a)},null,8,["onClick"])],2)])),_:2},1032,["class"]),(0,o.bF)(V),e.expended?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(ee,{key:0,class:"q-pa-none",align:"right"},{default:(0,o.k6)((()=>[(0,o.bF)(u,{flat:"","no-caps":"",onClick:e=>B(a)},{default:(0,o.k6)((()=>[(0,o.eW)((0,l.v_)("barcode"===(0,n.R1)(K).type?(0,n.R1)(H)("barcode_showBarcode"):(0,n.R1)(H)("barcode_showQrcode")),1)])),_:2},1032,["onClick"])])),_:2},1024)),e.expended&&"barcode"===(0,n.R1)(K).type?((0,o.uX)(),(0,o.Wv)(R,{key:1,class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"row q-pa-none","bg-green-3 text-white"))},{default:(0,o.k6)((()=>[(0,o.Lk)("div",O,[(0,o.bF)((0,n.R1)(r.f),{value:e.barcode,width:2,height:80},null,8,["value"])])])),_:2},1032,["class"])):(0,o.Q3)("",!0),e.expended&&"qrcode"===(0,n.R1)(K).type?((0,o.uX)(),(0,o.Wv)(R,{key:2,class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"row q-pa-none","bg-green-3 text-white"))},{default:(0,o.k6)((()=>[(0,o.Lk)("div",{class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"q-pa-xs col text-center","bg-red-3"))},[(0,o.bF)((0,n.R1)(c.Ay),{value:e.barcode,type:"image/png",width:200,color:{dark:"#000000ff",light:"#ffffffff"},errorCorrectionLevel:"H",margin:1},null,8,["value"])],2)])),_:2},1032,["class"])):(0,o.Q3)("",!0)])),_:2},1024)])])])])),_:1},8,["list"])]),(0,n.R1)(K).barcodePageDebug?((0,o.uX)(),(0,o.Wv)(h.A,{key:2,class:"col-3 q-pa-md items-start q-gutter-md",value:(0,n.R1)(N).barcodes,title:"db settings"},null,8,["value"])):(0,o.Q3)("",!0),(0,n.R1)(D)?((0,o.uX)(),(0,o.CE)("div",{key:3,class:(0,l.C4)((0,n.R1)(s.y)((0,n.R1)(D),"","bg-yellow-2"))},[(0,n.R1)(D)?((0,o.uX)(),(0,o.CE)("p",W,[(0,o.eW)(" Last result: "),(0,o.Lk)("b",null,(0,l.v_)(t.value),1)])):(0,o.Q3)("",!0),(0,n.R1)(D)?((0,o.uX)(),(0,o.CE)("p",X,[(0,o.eW)(" Camera On: "),(0,o.Lk)("b",null,(0,l.v_)(te.value),1)])):(0,o.Q3)("",!0),(0,n.R1)(D)?((0,o.uX)(),(0,o.CE)("p",P,[(0,o.eW)(" Last Scan: "),(0,o.Lk)("b",null,(0,l.v_)(ae.value),1)])):(0,o.Q3)("",!0),(0,n.R1)(D)?((0,o.uX)(),(0,o.CE)("p",I,[(0,o.eW)(" Camera Off: "),(0,o.Lk)("b",null,(0,l.v_)(oe.value),1)])):(0,o.Q3)("",!0)],2)):(0,o.Q3)("",!0)])}}});var H=t(2807),N=t(1693),V=t(3999),D=t(7753),j=t(492),B=t(124),M=t(5173),J=t(3952),z=t(3316),$=t(4189),G=t(386),U=t(2669),Y=t(8582),Z=t.n(Y);const ee=(0,H.A)(K,[["__scopeId","data-v-de527982"]]),ae=ee;Z()(K,"components",{QBtn:N.A,QList:V.A,QSlideItem:D.A,QIcon:j.A,QItem:B.A,QItemSection:M.A,QAvatar:J.A,QCard:z.A,QCardSection:$.A,QSeparator:G.A,QCardActions:U.A});const te=(0,o.pM)(Object.assign({name:"BarcodePage"},{__name:"barcodePage",setup(e){return(e,a)=>{const t=(0,o.g2)("q-page");return(0,o.uX)(),(0,o.Wv)(t,null,{default:(0,o.k6)((()=>[(0,o.bF)(ae)])),_:1})}}}));var oe=t(7716);const le=te,ne=le;Z()(te,"components",{QPage:oe.A})}}]);