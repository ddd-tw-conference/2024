import{_ as c,a as v,b as d,c as m,d as k,e as u,f as h,g as f,h as j,i as x,j as w,k as B,l as $,m as A,n as y,o as C,p as N,q as L,r as S,s as D,t as E,u as F,v as K,w as V,x as I,y as M,z as P,A as R,B as q,C as z,D as G,E as H,F as J,G as O,H as Q,I as T,J as U,K as W,L as Y,M as X,N as Z}from"./volunteer-C_mqCqG3.js";import{e as r,r as ss,o as _,c as a,f as e,h as es,w as _s,t as n,F as l,i,u as as,a as ts,j as os}from"./index-fHF2PM8a.js";import{s as ns}from"./speakers-data-uPXDzjEQ.js";const rs="/2024/assets/images/banner-speakers.png",ls="/2024/assets/images/banner-mobile-speakers.png",is={class:"text-white rounded-lg p-4",style:{border:"2px solid #425AE5"}},gs={class:"w-60 h-60 mx-auto"},ps=["alt","src"],bs={class:"text-center mt-4"},cs={class:"font-bold text-lg"},vs=r({__name:"speaker-card",props:{speaker:{}},setup(g){const t=s=>new URL(Object.assign({"../assets/Carola_Lilienthal_WPS 1.jpg":c,"../assets/banner-about.png":v,"../assets/banner-agenda.png":d,"../assets/banner-call-for-speaker.png":m,"../assets/banner-mobile-about.png":k,"../assets/banner-mobile-agenda.png":u,"../assets/banner-mobile-call-for-speaker.png":h,"../assets/banner-mobile-main.png":f,"../assets/banner-mobile-speakers.png":j,"../assets/banner-mobile-tickets.png":x,"../assets/banner-mobile-volunteer.png":w,"../assets/banner-speakers.png":B,"../assets/banner-tickets.png":$,"../assets/banner-volunteer.png":A,"../assets/banner.jpg":y,"../assets/book.png":C,"../assets/call-for-proposals.svg":N,"../assets/corporate-sponsorship.svg":L,"../assets/ddd-logo.png":S,"../assets/floor-plan-second-floor.svg":D,"../assets/floor-plan-third-floor.svg":E,"../assets/golds-sponsors.svg":F,"../assets/hit.png":K,"../assets/level.svg":V,"../assets/light.png":I,"../assets/map.svg":M,"../assets/silver-sponsors.svg":P,"../assets/speaker-Alberto-Acerbis.jpg":R,"../assets/speaker-Arthur.jpg":q,"../assets/speaker-Augustin.jpg":z,"../assets/speaker-Kim.png":G,"../assets/speaker-Kuma.jpg":H,"../assets/speaker-Michael.jpg":J,"../assets/speaker-Nor.jpg":O,"../assets/speaker-Q.png":Q,"../assets/speaker-Ruddy.png":T,"../assets/speaker-Stephen-Tung.png":U,"../assets/speaker-Yoyo.jpg":W,"../assets/speaker-avatar.png":Y,"../assets/special-sponsors.svg":X,"../assets/volunteer.svg":Z})[`../assets/${s}`],import.meta.url).href;return(s,p)=>{const o=ss("router-link");return _(),a("div",is,[e("div",gs,[es(o,{to:{name:"speaker",params:{id:s.speaker.id}}},{default:_s(()=>[e("img",{alt:s.speaker.name,src:t(s.speaker.image),class:"rounded-2xl"},null,8,ps)]),_:1},8,["to"])]),e("div",bs,[e("p",cs,n(s.speaker.name),1),(_(!0),a(l,null,i(s.speaker.bio,b=>(_(),a("p",null,n(b),1))),256))])])}}}),ds={class:"container mx-auto"},ms=ts('<div class="banner-main"><div class="hidden sm:block"><img alt="Banner" src="'+rs+'"></div><div class="block sm:hidden"><img alt="Banner" src="'+ls+'"></div></div>',1),ks={class:"pt-10 pb-5 leading-7"},us=e("h2",{class:"text-2xl font-bold mb-4"},"講者介紹",-1),hs={class:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"},fs=e("p",{class:"text-white text-center"},"更多講者資訊即將公佈，敬請期待！",-1),Bs=r({__name:"speakers",setup(g){const t=ns;return(s,p)=>(_(),a("section",ds,[ms,e("div",ks,[us,e("div",hs,[(_(!0),a(l,null,i(as(t),o=>(_(),os(vs,{speaker:o},null,8,["speaker"]))),256))]),fs])]))}});export{Bs as default};
