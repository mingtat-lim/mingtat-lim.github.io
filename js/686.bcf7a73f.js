"use strict";(globalThis["webpackChunkquasar_barcode"]=globalThis["webpackChunkquasar_barcode"]||[]).push([[686],{614:(e,t,a)=>{a.d(t,{C:()=>c});var o=a(587),n=a(8993),s=a(3537);const l="settings-db-v2",r=()=>({locale:"zh-TC",type:"barcode",systemAdmin:!1,barcodePageDebug:!1,barcodeEditPageDebug:!1,settingsPageDebug:!1,sharePageDebug:!1}),i=()=>{const{locale:e}=(0,s.s9)({useScope:"global"}),t=n.A.getItem(l),a=t||r();return e.value=a.locale,a},c=(0,o.nY)(l,{state:()=>({settings:i(),lang:(0,s.s9)({useScope:"global"})}),actions:{updateSettings(){this.settings.locale!==this.lang.locale&&(this.lang.locale=this.settings.locale),n.A.set(l,this.settings)},restore(e){this.settings=e,this.updateSettings()},reset(){this.settings=r(),this.updateSettings()}}})},2291:(e,t,a)=>{a.d(t,{A:()=>_});var o=a(1758);function n(e,t,a,n,s,l){const r=(0,o.g2)("q-toggle");return(0,o.uX)(),(0,o.Wv)(r,{modelValue:e.currentMode,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.currentMode=t),e.updateMode],"aria-label":"Dark mode toggle","checked-icon":"dark_mode","true-value":"dark","unchecked-icon":"light_mode","false-value":"light",color:e.classes({colors:["primary","dark"]}),"keep-color":""},null,8,["modelValue","color","onUpdate:modelValue"])}var s=a(8734),l=a(411);const r="mode",i="light",c="dark";function u(){const e=(0,s.KR)();function t(){return localStorage.getItem(r)}function a(t){e.value=t,l.A.set(t===c),localStorage.setItem(r,t)}function n({prefix:e="",invert:t="",colors:a=["white","dark"]}={}){const o=e?`${e}-${a[0]}`:a[0],n=e?`${e}-${a[1]}`:a[1];return t?l.A.isActive?n:o:l.A.isActive?o:n}return(0,o.sV)((()=>{var e;a(null!==(e=t())&&void 0!==e?e:i)})),{currentMode:e,updateMode:a,classes:n}}const d=(0,o.pM)({name:"x-dark-mode",setup(){const{currentMode:e,updateMode:t,classes:a}=u();return{currentMode:e,updateMode:t,classes:a}}});var p=a(2807),g=a(6908),m=a(8582),b=a.n(m);const v=(0,p.A)(d,[["render",n]]),_=v;b()(d,"components",{QToggle:g.A})},9686:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var o=a(1758),n=a(8790),s=a(8734),l=a(9104);const r=JSON.parse('{"name":"quasar-barcode","version":"2.0.6","description":"An app that keep track of your barcodes","productName":"Barcode","type":"module","author":"mingtat lim<mingtat.lim+barcode@outlook.com>","private":true,"scripts":{"publish":"git add . && git commit -m \\"daily checkin ${npm_config_tag}\\" -S && git push","docker:build":"docker build -t $npm_package_name:local-$npm_package_version -f Dockerfile.pwa.nginx .","docker:run":"docker run --rm -d --network host --name $npm_package_name-local-$npm_package_version $npm_package_name:local-$npm_package_version","docker:sh":"docker exec -it $npm_package_name-local-$npm_package_version sh","docker:stop":"docker stop $npm_package_name-local-$npm_package_version","docker:clean":"docker rmi $(docker images --filter dangling=true -q --no-trunc)","docker:logs":"docker container logs --follow $npm_package_name-local-$npm_package_version","docker:ps":"docker ps -a","docker:i":"docker images","lint":"eslint --ext .js,.ts,.vue ./src","format":"prettier --write \\"**/*.{js,ts,vue,scss,html,md,json}\\" --ignore-path .gitignore","test":"echo \\"No test specified\\" && exit 0","start":"quasar dev","start:dev":"quasar dev -m spa","pweb":"cd ./dist/spa && python3 -m http.server","qweb":"~/.nvm/versions/node/v20.14.0/bin/quasar serve ./dist/spa","build:spa":"quasar build","build:pwa":"quasar build -m pwa","release":"node ./src/lib/version.js && npm run release:checkin","release:checkin":"git add . && git commit -m \\"release ${npm_package_version}\\" -S && git push","release:pwa":"quasar build -m pwa && cd ./dist/barcode-app.github.io && git rm -rf . && git restore --staged . && cp -R ../pwa/ ../barcode-app.github.io/ && git add . && git commit -m \\"Release v${npm_package_version}\\" && git push","release:dev":"quasar build -m pwa && cd ./dist/mingtat-lim.github.io && git rm -rf . && git restore --staged . && cp -R ../pwa/ ../mingtat-lim.github.io/ && git add . && git commit -m \\"Release v${npm_package_version}\\" && git push","android":"quasar dev -m capacitor -T android","ios":"quasar dev -m capacitor -T ios"},"dependencies":{"@quasar/extras":"^1.16.4","cheerio":"^1.0.0-rc.12","core-js":"^3.31.1","node-fetch":"^3.3.2","pinia":"^2.0.11","qrcode.vue":"^3.4.1","quasar":"^2.16.4","vbarcode":"^0.0.16","vue":"^3.4.18","vue-i18n":"^9.2.2","vue-qrcode":"^2.2.2","vue-qrcode-reader":"^5.5.4","vue-router":"^4.0.12","vuedraggable":"^4.1.0"},"devDependencies":{"@quasar/app-webpack":"^3.13.2","@types/node":"^12.20.21","@typescript-eslint/eslint-plugin":"^5.10.0","@typescript-eslint/parser":"^5.10.0","eslint":"^8.11.0","eslint-config-prettier":"^8.1.0","eslint-plugin-vue":"^9.0.0","html5-qrcode":"^2.3.8","jsdom":"^24.1.1","luxon":"^3.5.0","prettier":"^2.5.1","workbox-webpack-plugin":"^7.1.0"},"browserslist":["last 10 Chrome versions","last 10 Firefox versions","last 4 Edge versions","last 7 Safari versions","last 8 Android versions","last 8 ChromeAndroid versions","last 8 FirefoxAndroid versions","last 10 iOS versions","last 5 Opera versions"],"engines":{"node":"^20 || ^18 || ^16","npm":">= 6.13.4","yarn":">= 1.21.1"}}');var i=a(3537);const c=(0,o.pM)(Object.assign({name:"MenuLink"},{__name:"menuLink",props:{title:{},caption:{default:""},path:{default:"#"},icon:{default:""}},setup(e){const{t}=(0,i.s9)();return(e,a)=>{const l=(0,o.g2)("q-icon"),r=(0,o.g2)("q-item-section"),i=(0,o.g2)("q-item-label"),c=(0,o.g2)("q-item");return(0,o.uX)(),(0,o.Wv)(c,{clickable:"",to:e.path},{default:(0,o.k6)((()=>[e.icon?((0,o.uX)(),(0,o.Wv)(r,{key:0,avatar:""},{default:(0,o.k6)((()=>[(0,o.bF)(l,{name:e.icon},null,8,["name"])])),_:1})):(0,o.Q3)("",!0),(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(i,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,n.v_)((0,s.R1)(t)(e.title)),1)])),_:1}),(0,o.bF)(i,{caption:""},{default:(0,o.k6)((()=>[(0,o.eW)((0,n.v_)((0,s.R1)(t)(e.caption)),1)])),_:1})])),_:1})])),_:1},8,["to"])}}}));var u=a(124),d=a(5173),p=a(492),g=a(3796),m=a(8582),b=a.n(m);const v=c,_=v;b()(c,"components",{QItem:u.A,QItemSection:d.A,QIcon:p.A,QItemLabel:g.A});var k=a(2291),h=a(614),f=a(587);const q=(0,o.Lk)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"},null,-1),A=(0,o.pM)(Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const{t}=(0,i.s9)(),a=(0,h.C)(),{settings:c}=(0,f.bP)(a),u=[{title:"menu_title_mainMenu",caption:"menu_caption_mainMenu",icon:"home",path:"home"},{title:"menu_title_barcode",caption:"menu_caption_barcode",icon:"barcode_reader",path:"barcode"},{title:"menu_title_share",caption:"menu_caption_share",icon:"web",path:"share"},{title:"menu_title_settings",caption:"menu_caption_settings",icon:"settings",path:"settings"}],d=(0,s.KR)(!1);function p(){d.value=!d.value}return(e,a)=>{const i=(0,o.g2)("q-btn"),g=(0,o.g2)("q-toolbar-title"),m=(0,o.g2)("q-toolbar"),b=(0,o.g2)("q-header"),v=(0,o.g2)("q-item-label"),h=(0,o.g2)("q-list"),f=(0,o.g2)("q-drawer"),A=(0,o.g2)("q-route-tab"),F=(0,o.g2)("q-tabs"),w=(0,o.g2)("q-footer"),y=(0,o.g2)("router-view"),$=(0,o.g2)("q-page"),M=(0,o.g2)("q-page-container"),Q=(0,o.g2)("q-layout");return(0,o.uX)(),(0,o.CE)(o.FK,null,[q,(0,o.bF)(Q,{view:"lHh Lpr lFf"},{default:(0,o.k6)((()=>[(0,o.bF)(b,{elevated:""},{default:(0,o.k6)((()=>[(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.bF)(i,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:p}),(0,o.bF)(g,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,n.v_)((0,s.R1)(t)("mainLayout_title")),1)])),_:1}),(0,o.Lk)("div",null,"App v"+(0,n.v_)((0,s.R1)(r).version),1)])),_:1})])),_:1}),(0,o.bF)(f,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),"show-if-above":"",bordered:""},{default:(0,o.k6)((()=>[(0,o.bF)(h,null,{default:(0,o.k6)((()=>[(0,o.bF)(v,{header:""},{default:(0,o.k6)((()=>[(0,o.eW)((0,n.v_)((0,s.R1)(t)("menu_mainMenu")),1)])),_:1}),((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)(u,(e=>(0,o.bF)(_,(0,o.v6)({key:e.title},e),null,16))),64))])),_:1}),(0,o.bo)((0,o.bF)(h,null,{default:(0,o.k6)((()=>[(0,o.bF)(k.A)])),_:1},512),[[l.aG,!1]])])),_:1},8,["modelValue"]),(0,o.bF)(w,{elevated:""},{default:(0,o.k6)((()=>[(0,o.bF)(F,null,{default:(0,o.k6)((()=>[(0,o.bF)(A,{label:(0,s.R1)(t)("menu_homePage"),icon:"home",to:"/home","no-caps":""},null,8,["label"]),(0,o.bF)(A,{label:"barcode"===(0,s.R1)(c).type?(0,s.R1)(t)("menu_barcode"):(0,s.R1)(t)("menu_qrcode"),icon:"barcode_reader",to:"/barcode","no-caps":""},null,8,["label"]),"zh-TC"===(0,s.R1)(c).locale?((0,o.uX)(),(0,o.Wv)(A,{key:0,label:(0,s.R1)(t)("menu_title_share"),icon:"web",to:"/share","no-caps":""},null,8,["label"])):(0,o.Q3)("",!0),(0,o.bF)(A,{label:(0,s.R1)(t)("menu_settings"),icon:"settings",to:"/settings","no-caps":""},null,8,["label"])])),_:1})])),_:1}),(0,o.bF)(M,null,{default:(0,o.k6)((()=>[(0,o.bF)($,null,{default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.Wv)(o.tY,null,{default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.Wv)(y,{key:e.$route.fullPath}))])),_:1}))])),_:1})])),_:1})])),_:1})],64)}}}));var F=a(9078),w=a(8416),y=a(6914),$=a(1693),M=a(9150),Q=a(5558),R=a(3999),L=a(7092),S=a(2980),C=a(878),T=a(5205),x=a(7716);const I=A,W=I;b()(A,"components",{QLayout:F.A,QHeader:w.A,QToolbar:y.A,QBtn:$.A,QToolbarTitle:M.A,QDrawer:Q.A,QList:R.A,QItemLabel:g.A,QFooter:L.A,QTabs:S.A,QRouteTab:C.A,QPageContainer:T.A,QPage:x.A})}}]);