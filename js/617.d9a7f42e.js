"use strict";(globalThis["webpackChunkquasar_barcode"]=globalThis["webpackChunkquasar_barcode"]||[]).push([[617],{1617:(e,t,a)=>{a.r(t),a.d(t,{default:()=>se});var n=a(1758),s=a(8790),l=a(8734),r=a(9104),o=a(4533),u=a(883);const d=[{icon:"sym_o_auto_stories",event:"志工精进半日 {YEAR} - {SEQ}",startDate:"2024-01-07",endDate:"2024-12-31",frequency:"monthly",startTime:"07:00am",endTime:"12:00pm",excludeDates:["2024-03-03","2024-06-02","2024-09-01","2024-12-01"],tag:["培訓"]},{icon:"sym_o_auto_stories",event:"全球精进日 {YEAR} - {SEQ}/4",startDate:"2024-03-03",endDate:"2024-12-31",frequency:"quarterly",startTime:"07:00am",endTime:"05:00pm",excludeDates:[],tag:["培訓"]},{icon:"sym_o_volunteer_activism",event:"慈善日",startDate:"2024-01-14",endDate:"2024-12-31",frequency:"monthly",startTime:"09:00am",endTime:"05:00pm",excludeDates:["2024-02-11"],tag:["慈善"]},{icon:"sym_o_recycling",event:"环境永续日",startDate:"2024-01-21",endDate:"2024-12-31",frequency:"monthly",startTime:"09:00am",endTime:"12:00pm",excludeDates:[],tag:["环保"]},{icon:"sym_o_groups",event:"和合互协会议",startDate:"2024-01-02",endDate:"2024-12-31",frequency:"monthly",startTime:"07:45pm",endTime:"09:45pm",excludeDates:[],tag:["其他"]},{icon:"sym_o_book_4",event:"大組共修會",startDate:"2024-01-27",endDate:"2024-12-31",frequency:"monthly",startTime:"07:30pm",endTime:"09:30pm",excludeDates:[],tag:["宗教"]},{icon:"sym_o_flag",event:"慈濟募款日",startDate:"2023-09-23",endDate:"2024-12-31",frequency:"yearly",startTime:"07:00am",endTime:"07:00pm",excludeDates:[],tag:["募款"]},{icon:"sym_o_model_training",event:"培訓委員慈誠培訓課 24/25（{SEQ}/6）",startDate:"2024-08-04",endDate:"2025-06-30",frequency:"monthly",startTime:"07:00am",endTime:"05:00pm",excludeDates:["2024-09-01","2025-01-05","2025-02-02","2025-03-02","2025-05-04"],tag:["培訓"]},{icon:"sym_o_model_training",event:"見習委員慈誠暨灰衣志工培訓課",startDate:"2024-07-07",endDate:"2025-06-30",frequency:"monthly",startTime:"01:00pm",endTime:"05:00pm",excludeDates:["2024-08-04","2024-09-01","2024-10-06","2024-11-03","2024-12-01","2025-01-05","2025-02-02","2025-04-06","2025-06-01"],tag:["培訓"]},{icon:"sym_o_camping",event:"2024年四合一干部精进研习营",startDate:"2024-09-20",endDate:"2024-09-20",frequency:"daily",startTime:"04:00pm",endTime:"07:00pm",excludeDates:[],tag:["培訓"]},{icon:"sym_o_camping",event:"2024年四合一干部精进研习营",startDate:"2024-09-21",endDate:"2024-09-22",frequency:"daily",startTime:"07:00am",endTime:"07:00pm",excludeDates:[],tag:["培訓"]},{icon:"sym_o_camping",event:"新進志工培訓課",startDate:"2024-07-07",endDate:"2025-06-30",frequency:"monthly",startTime:"01:00pm",endTime:"05:00pm",excludeDates:["2024-07-07","2024-08-04","2024-10-06","2024-12-01","2025-01-05","2025-02-02","2025-03-02","2025-05-04"],tag:["培訓"]},{icon:"sym_o_camping",event:"英文培訓課 - 新進志工培訓課",startDate:"2024-07-07",endDate:"2025-06-30",frequency:"monthly",startTime:"01:00pm",endTime:"05:00pm",excludeDates:["2024-08-04","2024-09-01","2024-11-03","2024-12-01","2025-01-05","2025-02-02","2025-04-06","2025-05-04","2025-06-01"],tag:["培訓"]},{icon:"sym_o_book_5",event:"南区读书会",startDate:"2024-07-19",endDate:"2025-06-30",frequency:"monthly",startTime:"07:45pm",endTime:"09:45pm",excludeDates:["2024-09-20"],tag:["教育"]},{icon:"sym_o_book_5",event:"南区线上个案研讨会",startDate:"2024-08-27",endDate:"2025-06-30",frequency:"monthly",startTime:"07:30pm",endTime:"09:45pm",excludeDates:[],tag:["慈善"]},{icon:"volunteer_activism",event:"慈善闻声救苦 募款活动 {SEQ}/66",startDate:"2024-08-27",endDate:"2024-10-31",frequency:"daily",startTime:"2024-08-27",endTime:"2024-10-31",excludeDates:[],tag:["募款"]},{icon:"sym_o_credit_card_heart",event:"慈濟 新春義賣會 {SEQ}/2",startDate:"2025-01-04",endDate:"2025-01-05",frequency:"daily",startTime:"08:00am",endTime:"06:00pm",excludeDates:[],tag:["募款"]}];function i(e,t,a,n){const s=new Date(e),l=new Date(t),r=[];while(s<=l){const e=s.getDay();e>=a&&e<=n&&r.push(new Date(s).toISOString().substring(0,10)),s.setDate(s.getDate()+1)}return r}function c(e,t){return{desc:`Weekday starting from ${e} until ${t}`,dates:i(e,t,0,7)}}function m(e){const t=new Date(e),a=t.getDay(),n=t.getDate(),s=Math.ceil(n/7);return{dayOfWeek:a,weekNumber:s}}function y(e,t){const a=new Date(e),n=new Date(t),s=[],{dayOfWeek:l,weekNumber:r}=m(a),o=`Every ${r}${["","st","nd","rd","th","th"][r]} ${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][l]} of the Month starting from ${e} until ${t}`;while(a<=n){const e=new Date(`${a.toISOString().substring(0,7)}-01`);while(e.getDay()!==l)e.setDate(e.getDate()+1);r>1&&e.setDate(e.getDate()+7*(r-1)),e<=n&&s.push(new Date(e).toISOString().substring(0,10)),a.setMonth(a.getMonth()+1),a.setDate(1)}return{desc:o,dates:s}}function g(e){const t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=t.indexOf(e);if(-1===a)return"Invalid month name";const n=[];for(let s=0;s<12;s+=3){const e=(a+s)%12;n.push(t[e])}return n}function D(e,t){const a=new Date(e),n=new Date(t),s=[],{dayOfWeek:l,weekNumber:r}=m(a),o=g(a.toLocaleString("default",{month:"long"})),u=`Quarterly on ${r}${["","st","nd","rd","th","th"][r]} ${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][l]} of ${o} starting from ${e} until ${t}`;while(a<=n){while(a.getDay()!==l)a.setDate(a.getDate()+1);r>1&&s.length>0&&a.setDate(a.getDate()+7*(r-1)),s.push(new Date(a).toISOString().substring(0,10)),a.setMonth(a.getMonth()+3),a.setDate(1)}return{desc:u,dates:s}}function v(e,t){const a=new Date(e),n=new Date(t),{dayOfWeek:s,weekNumber:l}=m(a),r=`Yearly on ${l}${["","st","nd","rd","th","th"][l]} ${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][s]} of ${a.toLocaleString("default",{month:"long"})} starting from ${e} until ${t}`,o=[new Date(a).toISOString().substring(0,10)];while(1){a.setFullYear(a.getFullYear()+1),a.setMonth(new Date(e).getMonth()),a.setDate(1);while(a.getDay()!==s)a.setDate(a.getDate()+1);let t=1;while(t<l)a.setDate(a.getDate()+7),t++;if(a>n)break;o.push(new Date(a).toISOString().substring(0,10))}return{desc:r,dates:o}}function p(e){const t=e.match(/(\d+):(\d+)([ap]m)/);if(null!==t){const[e,a,n]=t.slice(1),s="pm"===n.toLowerCase()&&"12"!==e?parseInt(e)+12:"am"===n.toLowerCase()&&"12"===e?0:parseInt(e);return`${s.toString().padStart(2,"0")}:${a}`}{const e=0,t=0;return`${e.toString().padStart(2,"0")}:${t}`}}function b(e,t){if(null===t)return!0;if(0===t.length)return!0;const a=new Set(e);for(const n of t)if(a.has(n))return!0;return!1}function f(e,t){const a=u.c9.fromISO(u.c9.now().toISO().substring(0,10)),n={days:t},s=a.plus(n),l=[],r=a.year;d.forEach((t=>{b(t.tag,e)&&("daily"===t.frequency?t.results=c(t.startDate,t.endDate):"monthly"===t.frequency?t.results=y(t.startDate,t.endDate):"quarterly"===t.frequency?t.results=D(t.startDate,t.endDate):"yearly"===t.frequency&&(t.results=v(t.startDate,t.endDate)),t.results&&(t.eventDates=t.results.dates.filter((e=>!t.excludeDates.includes(e))),t.eventTitles=[],t.eventDates.forEach(((e,a)=>{var n;let s=t.event.replace("{SEQ}",(a+1).toString());s=s.replace("{YEAR}",r.toString()),null===(n=t.eventTitles)||void 0===n||n.push({eventDate:e,eventName:s})})),console.log(JSON.stringify(t.eventTitles,null,4)),t.eventTitles=t.eventTitles.filter((({eventDate:e})=>u.c9.fromISO(e)>=a&&u.c9.fromISO(e)<s)),t.eventTitles.length>0&&t.eventTitles.forEach((({eventDate:e,eventName:a})=>{l.push({eventDate:e,startTime:t.startTime,endTime:t.endTime,eventName:a,icon:t.icon})}))))})),l.sort(((e,t)=>{if(e.eventDate!==t.eventDate)return new Date(e.eventDate).getTime()-new Date(t.eventDate).getTime();const a=p(e.startTime),n=p(t.startTime);if(a!==n)return a.localeCompare(n);const s=p(e.endTime),l=p(t.endTime);return s!==l?s.localeCompare(l):e.eventName.localeCompare(t.eventName)}));const o=l.reduce(((e,t)=>{const a=t.eventDate.slice(0,7);let n=e.find((e=>e.month===a));return n||(n={month:a,events:[]},e.push(n)),n.events.push(t),e}),[]);return{eventList:l,groupedEventsArray:o}}var h=a(587),T=a(8993);const _="events-db-v1",k=()=>({days:60,selectedTab:["培訓","慈善","环保","教育","宗教","募款","其他"]}),q=()=>{let e=T.A.getItem(_);return null===e&&(e=k()),e},w=(0,h.nY)(_,{state:()=>({states:q()}),actions:{updateStates(){T.A.set(_,this.states)}}}),S={class:"text-right q-gutter-xs self-center"},x={class:""},F={class:"q-pa-sm"},A={class:"q-pa-sm"},$={class:"row items-center"},Q={class:""},E={class:"row"},C={class:"text-h6 col"},V=!1,I=(0,n.pM)({__name:"xEventsComponent",setup(e){const t=w(),{states:a}=(0,h.bP)(t),u=(0,l.KR)(!1),d=[{label:"培訓",value:"培訓"},{label:"慈善",value:"慈善"},{label:"环保",value:"环保"},{label:"教育",value:"教育"},{label:"宗教",value:"宗教"},{label:"募款",value:"募款"},{label:"其他",value:"其他"}],i=(0,l.KR)(""),c=(0,n.EW)((()=>{console.warn("computedData"),t.updateStates();const e=f(a.value.selectedTab,a.value.days).groupedEventsArray;return 0===e.filter((e=>e.month===i.value)).length&&(i.value=e.length>0?e[0].month:""),e}));return(e,t)=>{const m=(0,n.g2)("q-space"),y=(0,n.g2)("q-btn"),g=(0,n.g2)("q-card-actions"),D=(0,n.g2)("q-slider"),v=(0,n.g2)("q-field"),p=(0,n.g2)("q-option-group"),b=(0,n.g2)("q-slide-transition"),f=(0,n.g2)("q-card"),h=(0,n.g2)("q-tab"),T=(0,n.g2)("q-tabs"),_=(0,n.g2)("q-icon"),k=(0,n.g2)("q-input"),q=(0,n.g2)("q-card-section"),w=(0,n.g2)("q-tab-panel"),I=(0,n.g2)("q-tab-panels");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(f,null,{default:(0,n.k6)((()=>[(0,n.bF)(g,{class:"row q-pa-none text-right"},{default:(0,n.k6)((()=>[(0,n.bF)(m),(0,n.Lk)("div",S,[(0,n.bF)(y,{color:"blue",flat:"",dense:"",icon:u.value?"keyboard_arrow_up":"keyboard_arrow_down",onClick:t[0]||(t[0]=e=>u.value=!u.value)},{default:(0,n.k6)((()=>[(0,n.Lk)("div",x,(0,s.v_)(u.value?"隐藏":"显示")+"搜索条件",1)])),_:1},8,["icon"])])])),_:1}),(0,n.bF)(b,null,{default:(0,n.k6)((()=>[(0,n.bo)((0,n.Lk)("div",null,[(0,n.Lk)("div",null,[(0,n.Lk)("div",F,[(0,n.bF)(v,{outlined:"",dense:"","stack-label":"",label:`显示未来 ${(0,l.R1)(a).days} 天内的活动`},{default:(0,n.k6)((()=>[(0,n.bF)(D,{modelValue:(0,l.R1)(a).days,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,l.R1)(a).days=e),min:10,max:90,step:10,color:"light-green",markers:"","marker-labels":""},null,8,["modelValue"])])),_:1},8,["label"])]),(0,n.Lk)("div",A,[(0,n.bF)(v,{outlined:"",dense:"","stack-label":"",label:"活動性質"},{control:(0,n.k6)((()=>[(0,n.bF)(p,{inline:"",color:"primary",type:"checkbox",options:d,modelValue:(0,l.R1)(a).selectedTab,"onUpdate:modelValue":t[2]||(t[2]=e=>(0,l.R1)(a).selectedTab=e)},null,8,["modelValue"])])),_:1})])])],512),[[r.aG,u.value]])])),_:1})])),_:1}),(0,n.bF)(T,{modelValue:i.value,"onUpdate:modelValue":t[3]||(t[3]=e=>i.value=e),align:"justify",class:"bg-primary text-white shadow-2"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.value,((e,t)=>((0,n.uX)(),(0,n.Wv)(h,{key:t,name:e.month,icon:"web","no-caps":"",label:e.month},null,8,["name","label"])))),128))])),_:1},8,["modelValue"]),(0,n.bF)(I,{modelValue:i.value,"onUpdate:modelValue":t[4]||(t[4]=e=>i.value=e),animated:""},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.value,((e,t)=>((0,n.uX)(),(0,n.Wv)(w,{key:t,name:e.month,class:(0,s.C4)((0,l.R1)(o.y)(V,"q-pa-none","bg-blue-10"))},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.events,((e,t)=>((0,n.uX)(),(0,n.Wv)(f,{class:"q-pa-xs q-ma-xs q-mb-md",key:t},{default:(0,n.k6)((()=>[(0,n.bF)(q,{class:"row text-h5 q-pa-none"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:(0,s.C4)((0,l.R1)(o.y)(V,"col","bg-blue-2"))},[(0,n.Lk)("div",$,[(0,n.bF)(_,{name:e.icon,color:"blue",size:"lg",class:""},null,8,["name"]),(0,n.Lk)("div",Q,(0,s.v_)(e.eventName),1)]),(0,n.Lk)("div",E,[(0,n.Lk)("div",C,(0,s.v_)(e.eventDate),1),(0,n.bF)(k,{modelValue:e.startTime,"onUpdate:modelValue":t=>e.startTime=t,label:"开始",readonly:"",dense:"",class:(0,s.C4)((0,l.R1)(o.y)(V,"col","bg-red-2"))},null,8,["modelValue","onUpdate:modelValue","class"]),(0,n.bF)(k,{modelValue:e.endTime,"onUpdate:modelValue":t=>e.endTime=t,label:"结束",readonly:"",dense:"",class:(0,s.C4)((0,l.R1)(o.y)(V,"col","bg-red-2"))},null,8,["modelValue","onUpdate:modelValue","class"])])],2)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["name","class"])))),128))])),_:1},8,["modelValue"])],64)}}});var O=a(3316),L=a(2669),M=a(3676),R=a(1693),W=a(3605),N=a(7156),U=a(1444),X=a(9495),Y=a(2980),K=a(9761),P=a(9041),J=a(1746),j=a(4189),G=a(492),z=a(9270),B=a(8582),H=a.n(B);const Z=I,ee=Z;H()(I,"components",{QCard:O.A,QCardActions:L.A,QSpace:M.A,QBtn:R.A,QSlideTransition:W.A,QField:N.A,QSlider:U.A,QOptionGroup:X.A,QTabs:Y.A,QTab:K.A,QTabPanels:P.A,QTabPanel:J.A,QCardSection:j.A,QIcon:G.A,QInput:z.A});const te=(0,n.pM)(Object.assign({name:"EventsPage"},{__name:"eventsPage",setup(e){return(e,t)=>{const a=(0,n.g2)("q-page");return(0,n.uX)(),(0,n.Wv)(a,null,{default:(0,n.k6)((()=>[(0,n.bF)(ee)])),_:1})}}}));var ae=a(7716);const ne=te,se=ne;H()(te,"components",{QPage:ae.A})}}]);