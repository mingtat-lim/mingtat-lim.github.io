"use strict";(globalThis["webpackChunkquasar_barcode"]=globalThis["webpackChunkquasar_barcode"]||[]).push([[792,870],{6327:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ke});var l=a(1758),o=a(8790),n=a(8734),s=a(4533),c=a(9339),r=a(1868),i=a(883),d=a(1500),u=a(4907),v=a(455),b=a(9482),g=a(614),f=a(587),p=a(3537),k=a(57),R=a.n(k),m=a(1234);const h=e=>((0,l.Qi)("data-v-6019e2c0"),e=e(),(0,l.jt)(),e),y=h((()=>(0,l.Lk)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"},null,-1))),x={class:"row q-pa-xs"},_={key:0,class:"fit row wrap justify-center items-start content-start"},C={class:"text-h4"},w={key:0,class:"error"},L={class:"fit row wrap justify-center items-start content-start"},q={class:"bg-blue-4",style:{width:"300px",height:"300px"}},F={key:2,class:"q-pa-md"},E={class:"row"},Q={class:"col"},A={class:"fit row wrap justify-start items-center content-start"},S={class:"text-h5"},T=h((()=>(0,l.Lk)("div",{class:"flex-break"},null,-1))),X={class:"q-pl-sm text-h6"},W={class:"col q-pr-xs text-right"},O={class:"q-pl-sm text-h6"},K={class:"col q-pa-xs text-center"},P={class:"q-pa-md"},I={key:0},H={class:"row"},D={class:"row"},N={class:"col"},j={class:"fit row wrap justify-start items-center content-start"},z={class:"text-h5"},B=h((()=>(0,l.Lk)("div",{class:"flex-break"},null,-1))),V={class:"q-pl-sm text-h6"},M={class:"col q-pr-xs text-right"},J={class:"q-pl-sm text-h6"},$={class:"col q-pa-xs text-center"},G={key:0,class:"decode-result"},U={key:1,class:"decode-result"},Y={key:2,class:"decode-result"},Z={key:3,class:"decode-result"},ee=(0,l.pM)({__name:"barcodeComponent",setup(e){const t=(0,n.KR)("off"),a=(0,n.KR)(),k=(0,u.A)(),h=(0,g.C)(),{settings:ee}=(0,f.bP)(h),{t:te}=(0,p.s9)(),ae=(0,b.n)(),le=(0,v.rd)(),oe=ee.value.barcodePageDebug,ne=(0,n.KR)(ae.barcodes),[se,...ce]=ne.value;console.log(se,ce);const re=e=>{oe&&console.log("buttonClickHandler",e),ne.value.length>0&&(ne.value.forEach((e=>e.expended=!1)),ne.value[e].expended=!0)};re(0);const ie=e=>{oe&&console.log("buttonEditClickHandler",e),le.push({path:"/barcodeEdit",query:{id:e}})},de=()=>{oe&&console.log("onEnd"),ae.save()},ue=(0,n.KR)(!1),ve=(0,n.KR)(),be=(0,n.KR)(),ge=e=>{ue.value=!0,ve.value=Object.assign({},ae.barcodes[e]),be.value=ve.value.caption,oe&&console.log(ve.value),fe(),he(10)};function fe(){window.scrollTo(0,0)}let pe,ke,Re,me=(0,n.KR)(0);function he(e){me.value=e,pe=setInterval((()=>{1===me.value&&(ue.value=!1,clearInterval(pe)),me.value--}),1e3)}function ye(e){ke=setTimeout((()=>{e()}),5e3)}function xe(e){console.log("onLeft"),ye(e.reset)}function _e(e){console.log("onRight"),ye(e.reset)}function Ce(e){oe&&console.log("onDetect",e);const t=e,[l]=t;let o;if(oe&&console.log(l.rawValue),console.log(l.rawValue),l.rawValue.startsWith("{")){const e=JSON.parse(l.rawValue);k.dialog({title:te("barcodeEdit_comfirmation_title"),message:te("barcode_import_confirmation",{name:e.caption}),cancel:{label:te("button_caption_cancel")},ok:{label:te("button_caption_yes"),push:!0},persistent:!0}).onOk((()=>{ae.add(e),re(ae.barcodes.length-1),k.notify({type:"positive",position:"center",message:te("barcode_notify_RecordAdded")})})).onCancel((()=>{})).onDismiss((()=>{})),o=JSON.stringify(e)}else o=l.rawValue;a.value=o,Ae(),we.value=i.c9.now().toISO(),Qe()}(0,l.xo)((()=>{clearTimeout(ke),clearInterval(pe)}));const we=(0,n.KR)(),Le=(0,n.KR)(),qe=(0,n.KR)();function Fe(){clearTimeout(Re),Re=setTimeout((()=>{oe&&console.log("cameraOffTimer"),Qe(),qe.value=i.c9.now().toISO()}),1e4)}function Ee(){oe&&console.log("onCameraHandler"),t.value="auto",Le.value=i.c9.now().toISO(),we.value="",qe.value="",Fe()}function Qe(){oe&&console.log("offCameraHandler"),t.value="off"}function Ae(){let e=new Audio("/censor-beep-01.mp3");e.play()}function Se(e,t){for(const a of e){const[e,...l]=a.cornerPoints;t.strokeStyle="red",t.beginPath(),t.moveTo(e.x,e.y);for(const{x:a,y:o}of l)t.lineTo(a,o);t.lineTo(e.x,e.y),t.closePath(),t.stroke()}}function Te(e,t){for(const a of e){const{boundingBox:e}=a;t.lineWidth=2,t.strokeStyle="#007bff",t.strokeRect(e.x,e.y,e.width,e.height)}}function Xe(e,t){for(const a of e){const{boundingBox:e,rawValue:l}=a,o=e.x+e.width/2,n=e.y+e.height/2,s=Math.max(12,50*e.width/t.canvas.width);t.font=`bold ${s}px sans-serif`,t.textAlign="center",t.lineWidth=3,t.strokeStyle="#35495e",t.strokeText(a.rawValue,o,n),t.fillStyle="#5cb984",t.fillText(l,o,n)}}const We=[{text:"nothing (default)",value:void 0},{text:"outline",value:Se},{text:"centered text",value:Xe},{text:"bounding box",value:Te}],Oe=(0,n.KR)(We[1]),Ke=(0,n.KR)({facingMode:"environment"});let Pe;Pe=["qr_code","ean_13","unknown"];const Ie=(0,n.KR)("");function He(e){oe&&console.log("onErrorHandler",e),Ie.value=`[${e.name}]: `,"NotAllowedError"===e.name?Ie.value+="you need to grant camera access permission":"NotFoundError"===e.name?Ie.value+="no camera on this device":"NotSupportedError"===e.name?Ie.value+="secure context required (HTTPS, localhost)":"NotReadableError"===e.name?Ie.value+="is the camera already in use?":"OverconstrainedError"===e.name?Ie.value+="installed cameras are not suitable":"StreamApiNotSupportedError"===e.name?Ie.value+="Stream API is not supported in this browser":"InsecureContextError"===e.name?Ie.value+="Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.":Ie.value+=e.message}const De=e=>{oe&&console.log("onDeleteButtonClick"),k.dialog({title:te("barcodeEdit_comfirmation_title"),message:te("barcodeEdit_delete_confirmation"),cancel:{label:te("button_caption_cancel"),push:!0},ok:{label:te("button_caption_delete")},persistent:!0}).onOk((()=>{ae.delete(e),k.notify({type:"positive",position:"center",message:te("barcodeEdit_notify_RecordDeleted")}),le.push("/barcode")})).onCancel((()=>{})).onDismiss((()=>{}))};return(e,i)=>{const u=(0,l.g2)("q-btn"),v=(0,l.g2)("q-item"),b=(0,l.g2)("q-slide-item"),g=(0,l.g2)("q-list"),f=(0,l.g2)("q-card-section"),p=(0,l.g2)("q-separator"),k=(0,l.g2)("q-card-actions"),h=(0,l.g2)("q-card");return(0,l.uX)(),(0,l.CE)("div",null,[y,(0,l.Lk)("div",x,[(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"col-md-auto q-pa-sm x-v-align-middle","bg-red-3"))},[(0,l.bF)(u,{color:"blue",icon:"barcode_reader",round:"",onClick:i[0]||(i[0]=e=>Ee())})],2),(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"col text-h3 text-center text-capitalize","bg-yellow-3"))},(0,o.v_)("barcode"===(0,n.R1)(ee).type?(0,n.R1)(te)("barcode_title"):(0,n.R1)(te)("qrcode_title")),3),(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"col-md-auto q-pa-sm x-v-align-middle","bg-red-3"))},[(0,l.bF)(u,{color:"green",icon:"add",round:"",onClick:i[1]||(i[1]=e=>ie(-1))})],2)]),ue.value?((0,l.uX)(),(0,l.CE)("div",_,[(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"q-pa-xs text-center","bg-red-3"))},[(0,l.Lk)("div",C,(0,o.v_)(be.value)+" - "+(0,o.v_)((0,n.R1)(me)),1),(0,l.bF)((0,n.R1)(r.Ay),{value:JSON.stringify(ve.value,null,4),type:"image/png",width:300,color:{dark:"#000000ff",light:"#ffffffff"},errorCorrectionLevel:"H",margin:1},null,8,["value"])],2)])):(0,l.Q3)("",!0),"auto"===t.value?((0,l.uX)(),(0,l.CE)("div",{key:1,class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"q-pa-xs text-center","bg-red-3"))},[Ie.value?((0,l.uX)(),(0,l.CE)("div",w,(0,o.v_)(Ie.value),1)):(0,l.Q3)("",!0),(0,l.Lk)("div",L,[(0,l.Lk)("div",q,[(0,l.bF)((0,n.R1)(d.tR),{onDetect:Ce,onError:He,track:Oe.value.value,constraints:Ke.value,formats:(0,n.R1)(Pe),camera:t.value},null,8,["track","constraints","formats","camera"])])])],2)):(0,l.Q3)("",!0),(0,n.R1)(se)?((0,l.uX)(),(0,l.CE)("div",F,[(0,l.Lk)("div",null,[(0,l.bF)(h,{class:"my-card"},{default:(0,l.k6)((()=>[(0,l.bF)(f,{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"q-pa-none","bg-blue-6 text-white"))},{default:(0,l.k6)((()=>[(0,l.bF)(g,null,{default:(0,l.k6)((()=>[(0,l.bF)(b,{onLeft:xe,onRight:_e,"left-color":"blue-3","right-color":"blue-3"},{right:(0,l.k6)((()=>[(0,l.Lk)("div",E,[(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"col text-h5 text-center text-capitalize q-mr-md","bg-blue-3"))},(0,o.v_)((0,n.R1)(se).caption),3),(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"col-md-auto x-v-align-middle","bg-red-3"))},[(0,l.bF)(u,{color:"blue",icon:"share",round:"",onClick:i[2]||(i[2]=e=>ge(0)),class:"q-mr-md"}),(0,l.bF)(u,{color:"green",icon:"edit",round:"",onClick:i[3]||(i[3]=e=>ie(0))})],2)])])),default:(0,l.k6)((()=>[(0,l.bF)(v,{class:"q-pa-none"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",Q,[(0,l.Lk)("div",A,[(0,l.bF)(u,{flat:"","text-color":"green",icon:"drag_handle",class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"handle","bg-blue-2"))},null,8,["class"]),(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"text-h5 col-grow self-stretch","bg-blue-3")),style:{overflow:"auto"}},(0,o.v_)((0,n.R1)(se).caption),3),(0,l.Lk)("div",S,(0,o.v_)(void 0!==(0,n.R1)(se).phone?(0,n.R1)(se).phone.substring(0,4):"")+" "+(0,o.v_)(void 0!==(0,n.R1)(se).phone?(0,n.R1)(se).phone.substring(4):""),1),T,(0,l.Lk)("div",X,(0,o.v_)((0,n.R1)(se).barcode),1),(0,l.Lk)("div",W,[(0,l.Lk)("div",O,(0,o.v_)((0,n.R1)(se).region)+(0,o.v_)((0,n.R1)(se).zone)+(0,o.v_)((0,n.R1)(se).team),1)])])])])),_:1})])),_:1})])),_:1})])),_:1},8,["class"]),(0,l.bF)(p),(0,n.R1)(se).expended?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)(k,{key:0,class:"q-pa-none",align:"right"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{flat:"","no-caps":"",onClick:i[4]||(i[4]=e=>re(0))},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)("barcode"===(0,n.R1)(ee).type?(0,n.R1)(te)("barcode_showBarcode"):(0,n.R1)(te)("barcode_showQrcode")),1)])),_:1})])),_:1})),(0,n.R1)(se).expended&&"barcode"===(0,n.R1)(ee).type?((0,l.uX)(),(0,l.Wv)(f,{key:1,class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"row q-pa-none","bg-green-3 text-white"))},{default:(0,l.k6)((()=>[(0,l.Lk)("div",K,[(0,l.bF)((0,n.R1)(c.f),{value:(0,n.R1)(se).barcode,width:2,height:80},null,8,["value"])])])),_:1},8,["class"])):(0,l.Q3)("",!0),(0,n.R1)(se).expended&&"qrcode"===(0,n.R1)(ee).type?((0,l.uX)(),(0,l.Wv)(f,{key:2,class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"row q-pa-none","bg-green-3 text-white"))},{default:(0,l.k6)((()=>[(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"q-pa-xs col text-center","bg-red-3"))},[(0,l.bF)((0,n.R1)(r.Ay),{value:(0,n.R1)(se).barcode,type:"image/png",width:200,color:{dark:"#000000ff",light:"#ffffffff"},errorCorrectionLevel:"H",margin:1},null,8,["value"])],2)])),_:1},8,["class"])):(0,l.Q3)("",!0)])),_:1})])])):(0,l.Q3)("",!0),(0,l.Lk)("div",P,[(0,l.bF)((0,n.R1)(R()),{tag:"span",list:ne.value,class:"list-group",handle:".handle","item-key":"caption",onEnd:de},{item:(0,l.k6)((({element:e,index:t})=>[t>0?((0,l.uX)(),(0,l.CE)("div",I,[(0,l.bF)(h,{class:"my-card q-mb-md"},{default:(0,l.k6)((()=>[(0,l.bF)(f,{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"q-pa-none","bg-blue-6 text-white"))},{default:(0,l.k6)((()=>[(0,l.bF)(g,null,{default:(0,l.k6)((()=>[(0,l.bF)(b,{onLeft:xe,onRight:_e,"left-color":"blue-3","right-color":"blue-3"},{left:(0,l.k6)((()=>[(0,l.Lk)("div",H,[(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"col-md-auto x-v-align-middle","bg-red-3"))},[(0,l.bF)(u,{color:"red",icon:"delete",round:"",onClick:e=>De(t),class:"q-mr-md"},null,8,["onClick"])],2),(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"col text-h5  text-center text-capitalize","bg-blue-3"))},(0,o.v_)(e.caption),3)])])),right:(0,l.k6)((()=>[(0,l.Lk)("div",D,[(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"col text-h5 text-center text-capitalize q-mr-md","bg-blue-3"))},(0,o.v_)(e.caption),3),(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"col-md-auto x-v-align-middle","bg-red-3"))},[(0,l.bF)(u,{color:"green",icon:"edit",round:"",onClick:e=>ie(t)},null,8,["onClick"])],2)])])),default:(0,l.k6)((()=>[(0,l.bF)(v,{class:"q-pa-none"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",N,[(0,l.Lk)("div",j,[(0,l.bF)(u,{flat:"","text-color":"green",icon:"drag_handle",class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"handle","bg-blue-2"))},null,8,["class"]),(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"text-h5 col-grow self-stretch","bg-blue-3")),style:{overflow:"auto"}},(0,o.v_)(e.caption),3),(0,l.Lk)("div",z,(0,o.v_)(void 0!==e.phone?e.phone.substring(0,4):"")+" "+(0,o.v_)(void 0!==e.phone?e.phone.substring(4):""),1),B,(0,l.Lk)("div",V,(0,o.v_)(e.barcode),1),(0,l.Lk)("div",M,[(0,l.Lk)("div",J,(0,o.v_)(e.region)+(0,o.v_)(e.zone)+(0,o.v_)(e.team),1)])])])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"]),(0,l.bF)(p),e.expended?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)(k,{key:0,class:"q-pa-none",align:"right"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{flat:"","no-caps":"",onClick:e=>re(t)},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)("barcode"===(0,n.R1)(ee).type?(0,n.R1)(te)("barcode_showBarcode"):(0,n.R1)(te)("barcode_showQrcode")),1)])),_:2},1032,["onClick"])])),_:2},1024)),e.expended&&"barcode"===(0,n.R1)(ee).type?((0,l.uX)(),(0,l.Wv)(f,{key:1,class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"row q-pa-none","bg-green-3 text-white"))},{default:(0,l.k6)((()=>[(0,l.Lk)("div",$,[(0,l.bF)((0,n.R1)(c.f),{value:e.barcode,width:2,height:80},null,8,["value"])])])),_:2},1032,["class"])):(0,l.Q3)("",!0),e.expended&&"qrcode"===(0,n.R1)(ee).type?((0,l.uX)(),(0,l.Wv)(f,{key:2,class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"row q-pa-none","bg-green-3 text-white"))},{default:(0,l.k6)((()=>[(0,l.Lk)("div",{class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"q-pa-xs col text-center","bg-red-3"))},[(0,l.bF)((0,n.R1)(r.Ay),{value:e.barcode,type:"image/png",width:200,color:{dark:"#000000ff",light:"#ffffffff"},errorCorrectionLevel:"H",margin:1},null,8,["value"])],2)])),_:2},1032,["class"])):(0,l.Q3)("",!0)])),_:2},1024)])):(0,l.Q3)("",!0)])),_:1},8,["list"])]),(0,n.R1)(ee).barcodePageDebug?((0,l.uX)(),(0,l.Wv)(m.A,{key:3,class:"col-3 q-pa-md items-start q-gutter-md",value:(0,n.R1)(ae).barcodes,title:"db settings"},null,8,["value"])):(0,l.Q3)("",!0),(0,n.R1)(oe)?((0,l.uX)(),(0,l.CE)("div",{key:4,class:(0,o.C4)((0,n.R1)(s.y)((0,n.R1)(oe),"","bg-yellow-2"))},[(0,n.R1)(oe)?((0,l.uX)(),(0,l.CE)("p",G,[(0,l.eW)(" Last result: "),(0,l.Lk)("b",null,(0,o.v_)(a.value),1)])):(0,l.Q3)("",!0),(0,n.R1)(oe)?((0,l.uX)(),(0,l.CE)("p",U,[(0,l.eW)(" Camera On: "),(0,l.Lk)("b",null,(0,o.v_)(Le.value),1)])):(0,l.Q3)("",!0),(0,n.R1)(oe)?((0,l.uX)(),(0,l.CE)("p",Y,[(0,l.eW)(" Last Scan: "),(0,l.Lk)("b",null,(0,o.v_)(we.value),1)])):(0,l.Q3)("",!0),(0,n.R1)(oe)?((0,l.uX)(),(0,l.CE)("p",Z,[(0,l.eW)(" Camera Off: "),(0,l.Lk)("b",null,(0,o.v_)(qe.value),1)])):(0,l.Q3)("",!0)],2)):(0,l.Q3)("",!0)])}}});var te=a(2807),ae=a(1693),le=a(3316),oe=a(4189),ne=a(3999),se=a(7753),ce=a(124),re=a(386),ie=a(2669),de=a(8582),ue=a.n(de);const ve=(0,te.A)(ee,[["__scopeId","data-v-6019e2c0"]]),be=ve;ue()(ee,"components",{QBtn:ae.A,QCard:le.A,QCardSection:oe.A,QList:ne.A,QSlideItem:se.A,QItem:ce.A,QSeparator:re.A,QCardActions:ie.A});const ge=(0,l.pM)(Object.assign({name:"BarcodePage"},{__name:"barcodePage",setup(e){return(e,t)=>{const a=(0,l.g2)("q-page");return(0,l.uX)(),(0,l.Wv)(a,null,{default:(0,l.k6)((()=>[(0,l.bF)(be)])),_:1})}}}));var fe=a(7716);const pe=ge,ke=pe;ue()(ge,"components",{QPage:fe.A})}}]);