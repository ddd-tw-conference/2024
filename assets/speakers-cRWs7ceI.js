import{_ as v,a as c,b as d,c as m,d as k,e as u,f as h,g as f,h as j,i as x,j as w,k as B,l as $,m as A,n as y,o as C,p as N,q as F,r as L,s as D,t as E,u as K,v as R,w as S,x as V,y as G,z as I,A as J,B as M,C as O,D as P,E as Q,F as q,G as z,H,I as T,J as U,K as Y,L as W,M as X,N as Z,O as ss,P as es,Q as _s,R as as}from"./volunteer-Bx3Rl25r.js";import{i as r,r as ts,o as _,c as a,d as e,e as os,w as ns,t as n,F as l,k as i,u as rs,a as ls,l as is}from"./index-DqrXF9ak.js";import{s as gs}from"./speakers-data-f0iJhQ97.js";const ps="/2024/assets/images/banner-speakers.png",bs="/2024/assets/images/banner-mobile-speakers.png",vs={class:"text-white rounded-lg p-4",style:{border:"2px solid #425AE5"}},cs={class:"w-60 h-60 mx-auto"},ds=["alt","src"],ms={class:"text-center mt-4"},ks={class:"font-bold text-lg"},us=r({__name:"speaker-card",props:{speaker:{}},setup(g){const t=s=>new URL(Object.assign({"../assets/banner-about.png":v,"../assets/banner-agenda.png":c,"../assets/banner-call-for-speaker.png":d,"../assets/banner-mobile-about.png":m,"../assets/banner-mobile-agenda.png":k,"../assets/banner-mobile-call-for-speaker.png":u,"../assets/banner-mobile-main.png":h,"../assets/banner-mobile-speakers.png":f,"../assets/banner-mobile-tickets.png":j,"../assets/banner-mobile-volunteer.png":x,"../assets/banner-session.png":w,"../assets/banner-speakers.png":B,"../assets/banner-tickets.png":$,"../assets/banner-volunteer.png":A,"../assets/banner.jpg":y,"../assets/book.png":C,"../assets/call-for-proposals.svg":N,"../assets/corporate-sponsorship.svg":F,"../assets/ddd-logo.png":L,"../assets/floor-plan-second-floor.svg":D,"../assets/floor-plan-third-floor.svg":E,"../assets/golds-sponsors.svg":K,"../assets/hit.png":R,"../assets/level.svg":S,"../assets/light.png":V,"../assets/map.svg":G,"../assets/silver-sponsors.svg":I,"../assets/speaker-Alberto-Acerbis.jpg":J,"../assets/speaker-Arthur.jpg":M,"../assets/speaker-Augustin.jpg":O,"../assets/speaker-Carola-Lilienthal.jpg":P,"../assets/speaker-Fong.png":Q,"../assets/speaker-George.jpg":q,"../assets/speaker-James.png":z,"../assets/speaker-Kim.png":H,"../assets/speaker-Kuma.jpg":T,"../assets/speaker-Michael.jpg":U,"../assets/speaker-Nor.jpg":Y,"../assets/speaker-Q.png":W,"../assets/speaker-Ruddy.png":X,"../assets/speaker-Stephen-Tung.png":Z,"../assets/speaker-Yoyo.jpg":ss,"../assets/speaker-avatar.png":es,"../assets/special-sponsors.svg":_s,"../assets/volunteer.svg":as})[`../assets/${s}`],import.meta.url).href;return(s,p)=>{const o=ts("router-link");return _(),a("div",vs,[e("div",cs,[os(o,{to:{name:"speaker",params:{id:s.speaker.id}}},{default:ns(()=>[e("img",{alt:s.speaker.name,src:t(s.speaker.image),class:"rounded-2xl w-full h-full object-cover"},null,8,ds)]),_:1},8,["to"])]),e("div",ms,[e("p",ks,n(s.speaker.name),1),(_(!0),a(l,null,i(s.speaker.bio,b=>(_(),a("p",null,n(b),1))),256))])])}}}),hs={class:"container mx-auto"},fs=ls('<div class="banner-main"><div class="hidden sm:block"><img alt="Banner" src="'+ps+'"></div><div class="block sm:hidden"><img alt="Banner" src="'+bs+'"></div></div>',1),js={class:"pt-10 pb-5 leading-7"},xs=e("h2",{class:"text-2xl font-bold mb-4"},"講者介紹",-1),ws={class:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"},Bs=e("p",{class:"text-white text-center"},"更多講者資訊即將公佈，敬請期待！",-1),Cs=r({__name:"speakers",setup(g){const t=gs;return(s,p)=>(_(),a("section",hs,[fs,e("div",js,[xs,e("div",ws,[(_(!0),a(l,null,i(rs(t),o=>(_(),is(us,{speaker:o},null,8,["speaker"]))),256))]),Bs])]))}});export{Cs as default};
