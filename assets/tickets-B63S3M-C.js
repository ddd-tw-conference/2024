import{e as d,o as l,c,f as e,t as s,n,g as r,h as i,a as o}from"./index-CSac0Np0.js";const m="/2024/assets/images/banner-tickets.png",u="/2024/assets/images/banner-mobile-tickets.png",h={class:"flex justify-center mb-6"},_={key:0,class:"bg-blue-500 text-white text-sm py-2 px-6 rounded-full focus:outline-none hover:bg-blue-600"},g={href:"https://www.accupass.com/eflow/ticket/2406080625301381404160",rel:"noopener noreferrer",target:"_blank"},v={key:1,class:"bg-gray-500 text-white text-sm py-2 px-6 rounded-full"},a=d({__name:"ticket-card",props:{title:{},ticketType:{},price:{},active:{},buttonText:{}},setup(p){return(t,b)=>(l(),c("div",{style:r({border:t.active?"3px solid #6077FF":"3px solid #A0A0A0"}),class:"bg-white rounded-lg"},[e("div",{class:n(["text-sm rounded-t p-2 text-center",{"bg-gray-500":!t.active,"bg-blue-700":t.active}])},s(t.title),3),e("div",{style:r({color:t.active?"#112E78":"#A0A0A0"}),class:"text-center font-bold text-4xl my-4"},s(t.ticketType),5),e("div",{class:n(["text-center text-3xl mb-6 font-bold",{"text-gray-400":!t.active,"text-black":t.active}])}," $ "+s(t.price),3),e("div",h,[t.active?(l(),c("button",_,[e("a",g,s(t.buttonText),1)])):(l(),c("div",v,s(t.buttonText),1))])],4))}}),x={class:"container mx-auto"},f=o('<div class="banner-main"><div class="hidden sm:block"><img alt="Banner" src="'+m+'"></div><div class="block sm:hidden"><img alt="Banner" src="'+u+'"></div></div>',1),k={class:"pt-10 pb-5 leading-7"},y=o('<h2 class="text-2xl font-bold mb-4">領域驅動設計台灣 2024 年會 - DDDesign Taiwan Conference 2024</h2><p class="mb-2"><span class="mr-2">🕒</span> 2024.09.13 (五) 09:00 - 17:00 (GMT+8) </p><p class="mb-6"><span class="mr-2">📍</span> 台灣台北市 100 中正區徐州路2號 (台大醫院國際會議中心) </p>',3),A={class:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"},w=o('<h2 class="text-2xl font-semibold mb-4">年會工作坊 - DDD Workshop</h2><p class="mb-2"><span class="mr-2">🕒</span> 2024.09.13 (五) 上午、下午場，共兩場主題 </p><p class="mb-2"><span class="mr-2">📍</span> 台灣台北市 100 中正區徐州路2號 (台大醫院國際會議中心) </p><p class="text-sm italic mb-4">* 請先購買年會票券，方可加購工作坊票券</p>',4),D={class:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"},T=o('<hr class="border-t-2 border-gray-300 mb-8"><div class="p-2 rounded-lg"><h2 class="text-xl font-bold mb-4">注意事項：</h2><ul class="list-disc pl-6 mb-8"><li class="mb-2"> 主辦單位會在入場的時候檢查 Accupass 的報名 QR Code，與會者可以事先準備好，以節省入場時間。 </li><li class="mb-2"> 入場時，會進行手部的酒精消毒。 </li><li> 參加現場活動時，活動中如有呼吸道不適，請配戴口罩，特別是與其他與會同學進行對話的時候。 </li></ul><h2 class="text-xl font-bold mb-4">購票須知：</h2><ul class="list-disc pl-6"><li class="mb-2"> 本活動委由 Accupass 代為處理售票事宜。 </li><li class="mb-2"> 統一開立電子發票，將於活動後一週內以 Email 寄送。 </li><li class="mb-2"> 若遇不可抗拒因素，將延期舉辦並另行通知時間。主辦單位保留活動之解釋及變更權利。 </li><li class="mb-2"> 主辦單位得保留活動議程及講師之變更權利，議題與講師視實際邀約而有所變動，請以網頁最新資訊為準。 </li><li> 退費辦法：本活動委由 Accupass 代為處理退票退款事宜，退票需於活動前 7 天提出，主辦單位將收取手續費後退還票款，活動前 7 天內恕不接受退票。 </li></ul></div>',2),B=d({__name:"tickets",setup(p){return(t,b)=>(l(),c("section",x,[f,e("div",k,[y,e("div",A,[i(a,{active:!1,"button-text":"已結束",price:"2,000","ticket-type":"早鳥票",title:"2024/07/02 - 07/31"}),i(a,{active:!0,"button-text":"立即購票",price:"2,500","ticket-type":"一般票",title:"2024/08/01 - 09/04"}),i(a,{active:!1,"button-text":"尚未開放",price:"3,000","ticket-type":"晚鳥票",title:"2024/09/05 - 09/12"})]),w,e("div",D,[i(a,{active:!0,"button-text":"立即購票",price:"800","ticket-type":"重構工作坊",title:"售完為止"}),i(a,{active:!0,"button-text":"立即購票",price:"800","ticket-type":"應用架構設計工作坊",title:"售完為止"})])]),T]))}});export{B as default};