"use strict";(globalThis["webpackChunkquasar_barcode"]=globalThis["webpackChunkquasar_barcode"]||[]).push([[41],{1422:(e,l,a)=>{a.r(l),a.d(l,{default:()=>I});var o=a(1758),t=a(8790),s=a(8734),n=a(455),i=a(4533),d=a(9482),r=a(9270),u=a(4907),c=a(3537),b=a(614),m=a(587);const v=e=>((0,o.Qi)("data-v-bb113174"),e=e(),(0,o.jt)(),e),p=v((()=>(0,o.Lk)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"},null,-1))),_={class:"row q-pa-xs"},g={class:"q-pa-md"},k=v((()=>(0,o.Lk)("span",{class:"material-symbols-outlined"}," id_card ",-1))),y=v((()=>(0,o.Lk)("span",{class:"material-symbols-outlined"}," phone ",-1))),V=v((()=>(0,o.Lk)("span",{class:"material-symbols-outlined"}," barcode ",-1))),h={key:0},R={class:"row"},f={class:"row items-center"},C={class:"row items-center"},E={class:"row items-center"},q=v((()=>(0,o.Lk)("span",{class:"material-symbols-outlined"}," tag ",-1))),L=v((()=>(0,o.Lk)("span",{class:"material-symbols-outlined"}," notes ",-1))),F=(0,o.pM)({__name:"codeEditComponent",setup(e){const l=(0,b.C)(),{settings:a}=(0,m.bP)(l),{t:v}=(0,c.s9)(),F=(0,u.A)(),w=(0,n.rd)(),x=(0,n.lq)(),A=(0,d.n)(),U=a.value.barcodePageDebug;let Q=!1;const O=(0,s.KR)(),z=(0,s.KR)(),S=x.query.id?parseInt(x.query.id.toString(),10):-1;let W={caption:"",barcode:"",expended:!1};-1===S?Q=!0:W=Object.assign({},A.barcodes[S]);const P=[{label:v("region_east"),value:"东"},{label:v("region_central"),value:"中"},{label:v("region_north"),value:"北"},{label:v("region_south"),value:"南"}],B=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"}],D=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"}],X=[{label:v("volunteer_status_greyUniform"),value:"灰衣"},{label:v("volunteer_status_traineeCommissioners"),value:"见习委员"},{label:v("volunteer_status_traineeFaithCorp"),value:"见习慈诚"},{label:v("volunteer_status_attachmentCommissioners"),value:"培训委员"},{label:v("volunteer_status_attachmentFaithCorp"),value:"培训慈诚"},{label:v("volunteer_status_certifiedCommissioners"),value:"委员"},{label:v("volunteer_status_certifiedFaithCorp"),value:"慈诚"}],I=(0,s.KR)(W);let J=JSON.stringify(I.value);const N=()=>{var e,l,a,o;if(U&&console.log("onSaveButtonClick"),J===JSON.stringify(I.value))F.notify({type:"warning",position:"center",message:v("barcodeEdit_save_warning_message")});else{if(null===(e=O.value)||void 0===e||e.validate(),null===(l=z.value)||void 0===l||l.validate(),(null===(a=O.value)||void 0===a?void 0:a.hasError)||(null===(o=z.value)||void 0===o?void 0:o.hasError))return void F.notify({type:"warning",position:"center",message:"Please clear all error before save..."});Q?A.add(I.value):A.update(I.value,S),F.notify({type:"positive",position:"center",message:v("barcodeEdit_notify_RecordUpdated")}),J=JSON.stringify(I.value),w.push("/barcode")}},K=()=>{U&&console.log("onDeleteButtonClick"),F.dialog({title:v("barcodeEdit_comfirmation_title"),message:v("barcodeEdit_delete_confirmation"),cancel:{label:v("button_caption_cancel"),push:!0},ok:{label:v("button_caption_delete")},persistent:!0}).onOk((()=>{A.delete(S),F.notify({type:"positive",position:"center",message:v("barcodeEdit_notify_RecordDeleted")}),w.push("/barcode")})).onCancel((()=>{})).onDismiss((()=>{}))},j=()=>{U&&console.log("onCloseButtonClick"),w.push("/barcode")};function M(){return new Promise(((e,l)=>{F.dialog({title:v("barcodeEdit_comfirmation_title"),message:v("barcodeEdit_unsave_warning_message"),cancel:{label:v("button_caption_cancel")},ok:{label:v("button_caption_yes")}}).onOk((()=>{e(!0)})).onCancel((()=>{l()})).onDismiss((()=>{}))}))}return(0,n.JZ)(((e,l,a)=>{J!==JSON.stringify(I.value)?M().then((()=>a())).catch((()=>!1)):a()})),(e,l)=>{const n=(0,o.g2)("q-btn"),d=(0,o.g2)("q-select"),u=(0,o.g2)("q-option-group"),c=(0,o.g2)("q-field");return(0,o.uX)(),(0,o.CE)(o.FK,null,[p,(0,o.Lk)("div",_,[(0,o.Lk)("div",{class:(0,t.C4)((0,s.R1)(i.y)((0,s.R1)(U),"col-md-auto q-pa-sm x-v-align-middle","bg-red-3"))},[(0,s.R1)(Q)?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(n,{key:0,color:"red",icon:"delete",round:"",onClick:K,class:"q-mr-xs"}))],2),(0,o.Lk)("div",{class:(0,t.C4)((0,s.R1)(i.y)((0,s.R1)(U),"col text-h3 text-center text-capitalize","bg-blue-3"))},(0,t.v_)((0,s.R1)(Q)?(0,s.R1)(v)("barcodeEdit_add"):(0,s.R1)(v)("barcodeEdit_update")),3),(0,o.Lk)("div",{class:(0,t.C4)((0,s.R1)(i.y)((0,s.R1)(U),"col-md-auto q-pa-sm x-v-align-middle","bg-red-3"))},[(0,o.bF)(n,{color:"green",icon:"close",round:"",onClick:j,class:"q-mr-md"}),(0,s.R1)(Q)?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(n,{key:0,color:"green",icon:"save_as",round:"",onClick:N,class:"q-mr-xs"})),(0,s.R1)(Q)?((0,o.uX)(),(0,o.Wv)(n,{key:1,color:"green",icon:"save",round:"",onClick:N,class:"q-mr-xs"})):(0,o.Q3)("",!0)],2)]),(0,o.Lk)("div",g,[(0,o.bF)((0,s.R1)(r.A),{outlined:"","bottom-slots":"",clearable:"",modelValue:I.value.caption,"onUpdate:modelValue":l[0]||(l[0]=e=>I.value.caption=e),ref_key:"captionControl",ref:O,rules:[e=>!!e||(0,s.R1)(v)("barcodeEdit_item_validate_message")],label:(0,s.R1)(v)("barcodeEdit_item")},{prepend:(0,o.k6)((()=>[k])),_:1},8,["modelValue","rules","label"]),(0,o.bF)((0,s.R1)(r.A),{outlined:"","bottom-slots":"",clearable:"",modelValue:I.value.phone,"onUpdate:modelValue":l[1]||(l[1]=e=>I.value.phone=e),label:(0,s.R1)(v)("barcodeEdit_phone")},{prepend:(0,o.k6)((()=>[y])),_:1},8,["modelValue","label"]),(0,o.bF)((0,s.R1)(r.A),{outlined:"","bottom-slots":"",clearable:"",modelValue:I.value.barcode,"onUpdate:modelValue":l[2]||(l[2]=e=>I.value.barcode=e),ref_key:"captionBarcode",ref:z,rules:[e=>!!e||(0,s.R1)(v)("barcodeEdit_barcode_validate_message")],label:(0,s.R1)(v)("barcodeEdit_barcode")},{prepend:(0,o.k6)((()=>[V])),_:1},8,["modelValue","rules","label"]),(0,s.R1)(a).systemAdmin?((0,o.uX)(),(0,o.CE)("div",h,[(0,o.bF)(d,{outlined:"","bottom-slots":"",clearable:"","emit-value":"","map-options":"","label-slot":"",modelValue:I.value.status,"onUpdate:modelValue":l[3]||(l[3]=e=>I.value.status=e),options:X},{label:(0,o.k6)((()=>[(0,o.eW)((0,t.v_)((0,s.R1)(v)("barcodeEdit_volunteer_status")),1)])),_:1},8,["modelValue"]),(0,o.Lk)("div",R,[(0,o.bF)(c,{class:"col",outlined:"","bottom-slots":"",clearable:"","label-slot":"","stack-label":"",modelValue:I.value.region,"onUpdate:modelValue":l[5]||(l[5]=e=>I.value.region=e)},{label:(0,o.k6)((()=>[(0,o.eW)((0,t.v_)((0,s.R1)(v)("barcodeEdit_volunteer_region")),1)])),control:(0,o.k6)((()=>[(0,o.bF)(u,{inline:"",color:"primary",type:"radio",class:"q-mt-xs",options:P,modelValue:I.value.region,"onUpdate:modelValue":l[4]||(l[4]=e=>I.value.region=e)},{label:(0,o.k6)((e=>[(0,o.Lk)("div",f,[(0,o.Lk)("span",null,(0,t.v_)(e.label),1)])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),(0,o.bF)(c,{class:"col q-ml-xs q-mr-xs",outlined:"","bottom-slots":"",clearable:"","label-slot":"","stack-label":"",modelValue:I.value.zone,"onUpdate:modelValue":l[7]||(l[7]=e=>I.value.zone=e)},{label:(0,o.k6)((()=>[(0,o.eW)((0,t.v_)((0,s.R1)(v)("barcodeEdit_volunteer_zone")),1)])),control:(0,o.k6)((()=>[(0,o.bF)(u,{inline:"",color:"primary",type:"radio",class:"q-mt-xs",options:B,modelValue:I.value.zone,"onUpdate:modelValue":l[6]||(l[6]=e=>I.value.zone=e)},{label:(0,o.k6)((e=>[(0,o.Lk)("div",C,[(0,o.Lk)("span",null,(0,t.v_)(e.label),1)])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),(0,o.bF)(c,{class:"col",outlined:"","bottom-slots":"",clearable:"","label-slot":"","stack-label":"",modelValue:I.value.team,"onUpdate:modelValue":l[9]||(l[9]=e=>I.value.team=e)},{label:(0,o.k6)((()=>[(0,o.eW)((0,t.v_)((0,s.R1)(v)("barcodeEdit_volunteer_team")),1)])),control:(0,o.k6)((()=>[(0,o.bF)(u,{inline:"",color:"primary",type:"radio",class:"q-mt-xs",options:D,modelValue:I.value.team,"onUpdate:modelValue":l[8]||(l[8]=e=>I.value.team=e)},{label:(0,o.k6)((e=>[(0,o.Lk)("div",E,[(0,o.Lk)("span",null,(0,t.v_)(e.label),1)])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])]),(0,o.bF)(d,{outlined:"","bottom-slots":"",clearable:"","emit-value":"","map-options":"",dense:"","label-slot":"","use-input":"","use-chips":"",multiple:"","hide-dropdown-icon":"","input-debounce":"0","new-value-mode":"add-unique",modelValue:I.value.tags,"onUpdate:modelValue":l[10]||(l[10]=e=>I.value.tags=e),label:"Tags",hint:"Enter tag here and press enter...","hide-hint":""},{prepend:(0,o.k6)((()=>[q])),_:1},8,["modelValue"]),(0,o.bF)((0,s.R1)(r.A),{"lazy-rules":"",outlined:"","bottom-slots":"",dense:"",clearable:"",modelValue:I.value.notes,"onUpdate:modelValue":l[11]||(l[11]=e=>I.value.notes=e),label:"Notes",type:"textarea"},{prepend:(0,o.k6)((()=>[L])),_:1},8,["modelValue"])])):(0,o.Q3)("",!0)])],64)}}});var w=a(2807),x=a(1693),A=a(6088),U=a(7156),Q=a(9495),O=a(8582),z=a.n(O);const S=(0,w.A)(F,[["__scopeId","data-v-bb113174"]]),W=S;z()(F,"components",{QBtn:x.A,QInput:r.A,QSelect:A.A,QField:U.A,QOptionGroup:Q.A});const P={class:"item"},B=(0,o.pM)(Object.assign({name:"BarcodePage"},{__name:"barcodeEditPage",setup(e){return(e,l)=>{const a=(0,o.g2)("q-page");return(0,o.uX)(),(0,o.Wv)(a,{class:"row content-container"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",P,[(0,o.bF)(W)])])),_:1})}}}));var D=a(7716);const X=(0,w.A)(B,[["__scopeId","data-v-5a5385d4"]]),I=X;z()(B,"components",{QPage:D.A})}}]);