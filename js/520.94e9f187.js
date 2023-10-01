"use strict";(globalThis["webpackChunkqr_generator"]=globalThis["webpackChunkqr_generator"]||[]).push([[520],{4520:(t,e,a)=>{a.r(e),a.d(e,{default:()=>U});var o=a(9835),l=a(6970),n=a(499);const i=(0,o.aZ)({__name:"EssentialLink",props:{title:{},caption:{default:""},link:{default:"#"},icon:{default:""}},setup(t){return(t,e)=>{const a=(0,o.up)("q-icon"),n=(0,o.up)("q-item-section"),i=(0,o.up)("q-item-label"),u=(0,o.up)("q-item");return(0,o.wg)(),(0,o.j4)(u,{clickable:"",tag:"a",target:"_blank",href:t.link},{default:(0,o.w5)((()=>[t.icon?((0,o.wg)(),(0,o.j4)(n,{key:0,avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{name:t.icon},null,8,["name"])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(t.title),1)])),_:1}),(0,o.Wm)(i,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(t.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}}});var u=a(490),r=a(1233),c=a(2857),p=a(3115),s=a(9984),d=a.n(s);const m=i,w=m;d()(i,"components",{QItem:u.Z,QItemSection:r.Z,QIcon:c.Z,QItemLabel:p.Z});const f=(0,o.aZ)({__name:"MenuLink",props:{title:{},caption:{default:""},path:{default:"#"},icon:{default:""}},setup(t){return(t,e)=>{const a=(0,o.up)("q-icon"),n=(0,o.up)("q-item-section"),i=(0,o.up)("q-item-label"),u=(0,o.up)("q-item");return(0,o.wg)(),(0,o.j4)(u,{clickable:"",to:t.path},{default:(0,o.w5)((()=>[t.icon?((0,o.wg)(),(0,o.j4)(n,{key:0,avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{name:t.icon},null,8,["name"])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(t.title),1)])),_:1}),(0,o.Wm)(i,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(t.caption),1)])),_:1})])),_:1})])),_:1},8,["to"])}}}),k=f,q=k;d()(f,"components",{QItem:u.Z,QItemSection:r.Z,QIcon:c.Z,QItemLabel:p.Z});const h=(0,o.aZ)({__name:"MainLayout",setup(t){const e=[{title:"主页",caption:"主页",icon:"home",path:"/"},{title:"签到",caption:"自助签到",icon:"barcode_reader",path:"/barcode"},{title:"组员",caption:"我的组员",icon:"groups",path:"/addprofile"},{title:"活动",caption:"慈济活动",icon:"volunteer_activism",path:"/addevent"},{title:"志工",caption:"志工资料",icon:"person",path:"/editprofile"},{title:"配置",caption:"系统配置",icon:"settings",path:"/appsettings"},{title:"QR Code",caption:"QR Code",icon:"qr_code",path:"/qrcode"},{title:"Location",caption:"Geolocation",icon:"qr_code_scanner",path:"/geolocation"}],a=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],i=(0,n.iH)(!1);function u(){i.value=!i.value}return(t,n)=>{const r=(0,o.up)("q-btn"),c=(0,o.up)("q-toolbar-title"),p=(0,o.up)("q-toolbar"),s=(0,o.up)("q-header"),d=(0,o.up)("q-item-label"),m=(0,o.up)("q-list"),f=(0,o.up)("q-drawer"),k=(0,o.up)("q-route-tab"),h=(0,o.up)("q-tabs"),_=(0,o.up)("q-footer"),b=(0,o.up)("router-view"),v=(0,o.up)("q-page-container"),Q=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(Q,{view:"lHh Lpr lFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{elevated:""},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:u}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" Quasar App v3 ")])),_:1}),(0,o._)("div",null,"Quasar v"+(0,l.zw)(t.$q.version),1)])),_:1})])),_:1}),(0,o.Wm)(f,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=t=>i.value=t),"show-if-above":"",bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{header:""},{default:(0,o.w5)((()=>[(0,o.Uk)(" Menu Links ")])),_:1}),((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(e,(t=>(0,o.Wm)(q,(0,o.dG)({key:t.title},t),null,16))),64)),(0,o.Wm)(d,{header:""},{default:(0,o.w5)((()=>[(0,o.Uk)(" Essential Links ")])),_:1}),((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(a,(t=>(0,o.Wm)(w,(0,o.dG)({key:t.title},t),null,16))),64))])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(_,{bordered:"",class:"bg-blue-3 text-primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{align:"center"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(e,(t=>(0,o.Wm)(k,{key:t.title,to:t,icon:t.icon,label:t.title},null,8,["to","icon","label"]))),64))])),_:1})])),_:1}),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b)])),_:1})])),_:1})}}});var _=a(7605),b=a(6602),v=a(1663),Q=a(4455),g=a(1973),W=a(4631),Z=a(3246),L=a(1378),y=a(2230),C=a(4337),I=a(2133);const T=h,U=T;d()(h,"components",{QLayout:_.Z,QHeader:b.Z,QToolbar:v.Z,QBtn:Q.Z,QToolbarTitle:g.Z,QDrawer:W.Z,QList:Z.Z,QItemLabel:p.Z,QFooter:L.Z,QTabs:y.Z,QRouteTab:C.Z,QPageContainer:I.Z})}}]);