import{a as m}from"./agenda-data-DNXuyi5i.js";import{i as u,o as n,c as a,d as s,t as e,u as o,F as b,j as h,a as p,l as x,ai as f}from"./index-afkIbpQ3.js";const i="/2024/assets/images/banner-agenda.png",v={class:"container mx-auto"},g=p('<div class="banner-main"><div class="hidden sm:block"><img alt="Banner" src="'+i+'"></div><div class="block sm:hidden"><img alt="Banner" src="'+i+'"></div></div>',1),k={class:"rounded-lg p-6 w-9/12 m-auto text-white"},B={class:"text-3xl mb-6 mt-3"},w={class:"mb-6 text-blue-200"},j={class:"text-xl font-bold mb-4"},y=s("span",{class:"mr-6"},"講者",-1),C={class:"text-xl font-bold mb-4"},D=s("span",{class:"mr-6"},"時間",-1),F={class:"text-xl font-bold mb-4"},N=s("span",{class:"mr-6"},"地點",-1),R={class:"text-xl font-bold mb-4"},S=s("span",{class:"mr-6"},"難度",-1),V=s("hr",{class:"border-1 border-white mb-6"},null,-1),E={class:"mb-12"},L=s("h3",{class:"text-2xl font-bold mb-4"},"議程介紹",-1),q={class:"text-blue-200"},J=u({__name:"session",setup(z){const l=x().params.id,t=m.find(c=>c.id==l),d=f(),r=()=>{d.back()};return(c,G)=>(n(),a("section",v,[g,s("div",k,[s("h2",B,e(o(t).topic),1),s("div",w,[s("div",j,[y,s("span",null,e(o(t).speaker.join("、")),1)]),s("div",C,[D,s("span",null,e(o(t).time),1)]),s("div",F,[N,s("span",null,e(o(t).session),1)]),s("div",R,[S,s("span",null,e(o(t).level),1)])]),V,s("div",E,[L,(n(!0),a(b,null,h(o(t).description,_=>(n(),a("p",q,e(_),1))),256))]),s("div",{class:"flex justify-center"},[s("button",{class:"hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full border-2 border-white",onClick:r}," 返回 ")])])]))}});export{J as default};
