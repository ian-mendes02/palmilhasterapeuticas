(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{1062:function(e,s,t){Promise.resolve().then(t.bind(t,1873))},1873:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var a=t(7437),r=t(2869),l=t(5320),i=t(12),n=t(2950),o=t(2265),c=e=>{let{children:s=[],visibleItemsCount:t=1,isInfinite:r,withIndicator:l,className:i,id:n,autoScrollEnabled:c=!0,autoScrollTimeout:d=3e3,isFullWidth:m=!1,showControls:x=!0}=e,u=o.useRef(null),[h,p]=o.useState(!1),[f,b]=o.useState(!0),[j,g]=o.useState(null),v=o.useRef(null),N=o.useMemo(()=>o.Children.count(s),[s]),w=o.useMemo(()=>r&&o.Children.count(s)>t,[s,r,t]),[y,E]=o.useState(w?t:0),[k,A]=o.useState(!0),[C,S]=o.useState(null);o.useEffect(()=>{w&&(y===t||y===N)&&A(!0)},[y,w,t,N]),o.useEffect(()=>document.addEventListener("visibilitychange",()=>"hidden"===document.visibilityState?b(!1):b(!0)),[]),o.useEffect(()=>{if(l){var e,s,t;let a=null===(e=u.current)||void 0===e?void 0:e.querySelector(".dots-active");if(a){let e=a.getAttribute("data-index");null!==e&&(null===(s=u.current)||void 0===s?void 0:s.scrollTo)&&(null===(t=u.current)||void 0===t||t.scrollTo({left:(Number(e)-2)/5*50,behavior:"smooth"}))}}},[l,y]),o.useEffect(()=>{function e(){g(v.current.querySelectorAll(".carousel-element")[0].clientWidth)}return e(),window.visualViewport.addEventListener("resize",e),()=>window.visualViewport.removeEventListener("resize",e)},[]);let I=()=>{y>N&&p(!0),(w||y<N-t)&&E(e=>e+1)},_=()=>{(w?y<=t:0===y)&&p(!0),(w||y>0)&&E(e=>e-1)},R=()=>{w&&(0===y?(A(!1),E(N)):y===N+t&&(A(!1),E(t))),p(!1)},T=o.useMemo(()=>{let e=[];for(let a=0;a<t;a++)e.push(o.Children.toArray(s)[N-1-a]);return e.reverse(),e},[s,N,t]),z=o.useMemo(()=>{let e=[];for(let a=0;a<t;a++)e.push(o.Children.toArray(s)[a]);return e},[s,t]),M=o.useMemo(()=>{let e=[],s=w?t:0,r=w?N:Math.ceil(N/t),l=y-s<0?N+(y-s):y-s;for(let s=0;s<r;s++){let t="";t=l===s?"dots-active":0===l?l+s<=2?"dots-close":"dots-far":l===r-1?2>=Math.abs(l-s)?"dots-close":"dots-far":1===Math.abs(l-s)?"dots-close":"dots-far",e.push((0,a.jsx)("div",{"data-index":s,className:t},s))}return e},[y,w,N,t]),V=(0,o.useMemo)(()=>w||y<N-t,[w,y,N,t]),L=(0,o.useMemo)(()=>w||y>0,[w,y]),P=()=>{if(f&&!h){var e=y+1;e>N+1&&(e=0),E(e)}};return o.useEffect(()=>{let e=c&&setTimeout(P,d);return()=>clearTimeout(e)},[y]),(0,a.jsxs)("div",{className:i,id:n,ref:v,children:[(0,a.jsxs)("div",{className:"carousel-wrapper",children:[x&&L?(0,a.jsx)("button",{disabled:h,style:{cursor:h?"not-allowed":"pointer",pointerEvents:h?"none":"inherit"},onClick:_,className:"left-arrow-button",children:(0,a.jsx)("span",{className:"left-arrow"})}):null,(0,a.jsx)("div",{className:"carousel-content-wrapper",onTouchStart:e=>{S(e.touches[0].clientX)},onTouchMove:e=>{if(null===C)return;let s=C-e.touches[0].clientX;s>5&&I(),s<-5&&_(),S(null)},children:(0,a.jsxs)("div",{className:"carousel-content *:w-[calc(100% / ".concat(t,")]"),style:{transform:"translateX(-".concat(y*j,"px)"),transition:k?void 0:"none"},onTransitionEnd:()=>R(),children:[w&&T,m?s.map((e,s)=>(0,a.jsx)("div",{className:"w-full h-auto carousel-element",children:e},s)):s.map((e,s)=>(0,a.jsx)("div",{className:"w-auto h-auto carousel-element",children:e},s)),w&&z]})}),x&&V?(0,a.jsx)("button",{disabled:h,style:{cursor:h?"not-allowed":"pointer",pointerEvents:h?"none":"inherit"},onClick:I,className:"right-arrow-button",children:(0,a.jsx)("span",{className:"right-arrow"})}):null]}),l&&(0,a.jsx)("div",{ref:u,className:"indicator-container ",children:M})]})},d=t(1100);function m(){(0,o.useEffect)(()=>(0,l.Md)("Cursos Presenciais | Palmilhas Terap\xeauticas"),[]);let e={Grad:()=>(0,a.jsxs)("linearGradient",{id:"linear-gradient",x1:"0",y1:"0",x2:"24",y2:"24",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{offset:"0",stopColor:"#7dd3fc"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#11E9DE"})]}),Icon:s=>{let{id:t="",children:r}=s;return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"size-16 m-auto",children:[(0,a.jsxs)("defs",{children:[(0,a.jsx)("clipPath",{id:"clippath"+t,children:r}),(0,a.jsx)(e.Grad,{})]}),(0,a.jsx)("g",{clipPath:"url(#".concat("clippath"+t,")"),children:(0,a.jsx)("rect",{fill:"url(#linear-gradient)",x:"0",y:"0",width:"24",height:"24"})})]})},Logo:e=>{let{className:s=""}=e;return(0,a.jsx)("div",{className:(0,i.pb)("bg-contain bg-center bg-no-repeat",s),style:{backgroundImage:"url(".concat((0,i.qz)("/img/svg/logo_cursos_presenciais.svg"),")")}})},User:()=>(0,a.jsx)(e.Icon,{id:"-user",children:(0,a.jsx)("path",{fill:"none",fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"})}),Calendar:()=>(0,a.jsx)(e.Icon,{id:"-calendar",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"})}),External_Link:()=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"size-6",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"})})};return(0,a.jsxs)("main",{className:"bg-[linear-gradient(45deg,#0a0a0a,#1E3050)] chuva-palmilhas before:blur-md before:opacity-30",children:[(0,a.jsx)(r.$0,{id:"cp-header",children:(0,a.jsx)(r.VY,{className:"relative z-10",children:(0,a.jsx)(r.If,{children:(0,a.jsxs)(r.W2,{className:"w-full max-w-[640px] text-center mx-auto",children:[(0,a.jsx)(e.Logo,{className:"mx-auto my-4 h-24 w-full"}),(0,a.jsx)("h1",{className:"text-4xl font-bold mb-4 max-[820px]:!text-2xl",children:"Uma experi\xeancia completa para aprender a avaliar, prescrever e confeccionar palmilhas terap\xeauticas."}),(0,a.jsx)("p",{className:"font-extralight",children:"Dois dias intensos de teoria e muita pr\xe1tica de avalia\xe7\xe3o e confec\xe7\xe3o de palmilhas com diferentes t\xe9cnicas de moldagem e configura\xe7\xf5es de elementos."}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.W2,{className:"justify-center items-center",children:[(0,a.jsx)("button",{onClick:()=>(0,l.lN)("#cp-conteudo"),className:"m-2 bg-[linear-gradient(45deg,#0474a4,#0986bf)] rounded-full py-2 px-4 shadow-lg w-max text-xl font-semibold border-b-4 border-t border-b-slate-700 border-t-sky-200",children:"Saiba mais"}),(0,a.jsxs)("button",{onClick:()=>(0,l.lN)("#cp-mentorias"),className:"underline underline-offset-4 m-2 rounded-full py-2 px-4 text-sm",children:["Conhe\xe7a nossas ",(0,a.jsx)("strong",{children:"mentorias"})]})]})]})})})}),(0,a.jsx)(r.$0,{id:"cp-conteudo",className:"bg-[linear-gradient(45deg,#1E3050,#0986bf)] rounded-3xl relative z-10 border-y-4 border-t-sky-300 border-b-slate-800 shadow-lg",children:(0,a.jsx)(r.VY,{className:"relative z-10",children:(0,a.jsxs)(r.If,{children:[(0,a.jsxs)("h1",{className:"text-3xl max-[820px]:text-2xl w-full max-w-3xl text-center mx-auto",children:["Tudo que voc\xea precisa saber sobre ",(0,a.jsx)("strong",{children:"prescri\xe7\xe3o"}),", ",(0,a.jsx)("strong",{children:"confec\xe7\xe3o"})," e ",(0,a.jsx)("strong",{children:"aplica\xe7\xe3o"})," de palmilhas terap\xeauticas"]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 max-[820px]:!grid-cols-1 mt-8",children:[(0,a.jsx)(r.W2,{className:"w-full max-w-[426px] m-4",children:(0,a.jsxs)(n.aV,{className:"chain",children:[(0,a.jsx)("li",{children:"Anatomia e biomec\xe2nica para a prescri\xe7\xe3o de palmilhas"}),(0,a.jsx)("li",{children:"Prescri\xe7\xe3o de palmilhas para as diferentes queixas dos p\xe9s (fasciopatias, metatarsalgias, p\xe9s diab\xe9ticos, dentre outras)"}),(0,a.jsx)("li",{children:"Avalia\xe7\xe3o do p\xe9/tornozelo para a prescri\xe7\xe3o de palmilhas"}),(0,a.jsx)("li",{children:"Prescri\xe7\xe3o de elementos e tipos de moldagens"}),(0,a.jsx)("li",{children:"Estudo de casos e discuss\xe3o das prescri\xe7\xf5es dos diferentes tipos de palmilhas"}),(0,a.jsx)("li",{children:"Apresenta\xe7\xe3o dos materiais e ferramentas (lixadeira, microrret\xedfica, termoprensa, soprador e moldadores)"})]})}),(0,a.jsx)(r.W2,{className:"w-full h-full justify-center",children:(0,a.jsxs)(c,{isInfinite:!0,withIndicator:!0,visibleItemsCount:1,isFullWidth:!0,showControls:!1,children:[(0,a.jsx)("div",{className:"w-full h-full p-4",children:(0,a.jsx)(r.Ei,{src:"/img/[cursos_presenciais]_palmilha_1.webp",className:"w-3/4 h-full m-auto"})}),(0,a.jsx)("div",{className:"w-full h-full p-4",children:(0,a.jsx)(r.Ei,{src:"/img/[cursos_presenciais]_palmilha_2.webp",className:"w-3/4 h-full m-auto"})}),(0,a.jsx)("div",{className:"w-full h-full p-4",children:(0,a.jsx)(r.Ei,{src:"/img/[cursos_presenciais]_palmilha_3.webp",className:"w-3/4 h-full m-auto"})}),(0,a.jsx)("div",{className:"w-full h-full p-4",children:(0,a.jsx)(r.Ei,{src:"/img/[cursos_presenciais]_palmilha_4.webp",className:"w-3/4 h-full m-auto"})})]})})]}),(0,a.jsx)("div",{className:"my-4",children:(0,a.jsx)("button",{onClick:()=>(0,l.lN)("#cursos-presenciais","center"),className:"mx-auto bg-[linear-gradient(45deg,#0474a4,#0986bf)] rounded-full py-2 px-4 shadow-lg w-max text-lg font-semibold border-b-4 border-t border-b-slate-700 border-t-sky-200 flex items-center",children:"Garanta j\xe1 sua vaga"})})]})})}),(0,a.jsx)(r.$0,{id:"cp-mentorias",children:(0,a.jsx)(r.VY,{children:(0,a.jsxs)(r.If,{children:[(0,a.jsxs)("div",{className:"text-center max-w-3xl mx-auto",children:[(0,a.jsxs)("h1",{className:"text-2xl mb-4",children:["Quer um ",(0,a.jsx)("strong",{children:"conte\xfado personalizado"})," para ",(0,a.jsx)("strong",{children:"tirar suas d\xfavidas"})," ou para",(0,a.jsx)("strong",{children:" treinar a sua equipe"}),"?"]}),(0,a.jsx)("h2",{children:"Conhe\xe7a nossas mentorias particulares."})]}),(0,a.jsx)("div",{className:"max-w-3xl mx-auto mb-16",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"p-4 border border-sky-900 rounded-lg my-4 relative bg-slate-900 pt-16 min-[821px]:py-8 min-[821px]:pl-16 mt-16 min-[821px]:ml-8",children:[(0,a.jsx)("div",{className:"absolute z-20 top-0 min-[821px]:top-1/2 left-1/2 min-[821px]:left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-lg border-b-4 border-t border-t-sky-900 border-b-neutral-950 bg-[linear-gradient(45deg,#0f172a,#0a3345)] shadow-lg flex items-center",children:(0,a.jsx)(e.User,{})}),(0,a.jsxs)("div",{className:"relative z-10",children:[(0,a.jsxs)("h2",{className:"text-xl font-semibold mb-4",children:["O conte\xfado que ",(0,a.jsx)("mark",{className:"text-sky-300",children:"voc\xea"})," precisa."]}),(0,a.jsx)("p",{children:"O conte\xfado abordado ser\xe1 definido com base nas suas necessidades individuais, em uma reuni\xe3o particular com o seu mentor."})]})]}),(0,a.jsxs)("div",{className:"p-4 border border-sky-900 rounded-lg my-4 relative bg-slate-900 pt-16 min-[821px]:py-8 min-[821px]:pl-16 mt-16 min-[821px]:ml-8",children:[(0,a.jsx)("div",{className:"absolute z-20 top-0 min-[821px]:top-1/2 left-1/2 min-[821px]:left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-lg border-b-4 border-t border-t-sky-900 border-b-neutral-950 bg-[linear-gradient(45deg,#0f172a,#0a3345)] shadow-lg flex items-center",children:(0,a.jsx)(e.Calendar,{})}),(0,a.jsxs)("div",{className:"relative z-10",children:[(0,a.jsxs)("h2",{className:"text-xl font-semibold mb-4",children:["Um ",(0,a.jsx)("mark",{className:"text-sky-300",children:"dia inteiro"})," dedicado ao ",(0,a.jsx)("mark",{className:"text-sky-300",children:"seu aprendizado"}),"."]}),(0,a.jsxs)("p",{children:["Ap\xf3s a defini\xe7\xe3o do conte\xfado, sua mentoria ficar\xe1 programada para ser ministrada em um dia, das 8h \xe0s 18h, com uma breve pausa para o almo\xe7o.",(0,a.jsx)("br",{}),"Durante esse per\xedodo, todo o conte\xfado planejado ser\xe1 abordado e voc\xea poder\xe1 tirar d\xfavidas diretamente com o seu mentor."]})]})]})]})}),(0,a.jsx)("button",{onClick:()=>(0,l.lN)("#mentorias","center"),className:"mx-auto bg-[linear-gradient(45deg,#0474a4,#0986bf)] rounded-full py-2 px-4 shadow-lg w-max text-lg font-semibold border-b-4 border-t border-b-slate-700 border-t-sky-200 flex items-center",children:"Agende j\xe1 sua mentoria"})]})})}),(0,a.jsx)(r.$0,{id:"cp-sobre",className:"py-32 px-8 flex items-center max-[820px]:pt-[120vw] max-[820px]:pb-8 relative z-20 shadow-lg border-b border-sky-900 rounded-xl",children:(0,a.jsx)(r.VY,{className:"relative z-10",children:(0,a.jsx)(r.If,{children:(0,a.jsxs)(r.W2,{className:"w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%] pt-8 max-[820px]:pt-0",children:[(0,a.jsx)("p",{className:"font-extralight",children:"Ol\xe1, meu nome \xe9"}),(0,a.jsx)("h1",{className:"text-left grad-text font-bold text-3xl",children:"ANDR\xc9 MENDES"}),(0,a.jsx)("div",{className:"divider left"}),(0,a.jsxs)("p",{children:["Sou fisioterapeuta especialista em fisioterapia ortop\xe9dica com 20 anos de carreira. Sou mestre e doutorando em fisioterapia e autor do livro ",(0,a.jsx)("i",{children:"Palmilhas Terap\xeauticas: Ci\xeancia e Pr\xe1tica Cl\xednica"}),", s\xf3cio-criador da Podoshop\xae e do Palmilhando\xae com 15 anos de experi\xeancia na prescri\xe7\xe3o e confec\xe7\xe3o de palmilhas terap\xeauticas."]})]})})})}),(0,a.jsx)(r.$0,{id:"cp-investimento",className:"pt-8 chuva-palmilhas before:blur-md before:opacity-30",children:(0,a.jsx)(r.VY,{className:"relative z-10",children:(0,a.jsxs)(r.If,{children:[(0,a.jsx)("h1",{className:"grad-text font-bold text-center text-3xl",children:"SEU INVESTIMENTO"}),(0,a.jsxs)("div",{className:"grid grid-cols-2 max-[820px]:grid-cols-1 mt-12 gap-12 min-[821px]:gap-4",children:[(0,a.jsx)(r.W2,{className:"w-full max-w-[426px] bg-[linear-gradient(45deg,#0f172a,#0a3345)] self-start justify-self-end shadow-lg",id:"cursos-presenciais",children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-between border border-sky-900 rounded-xl backdrop-brightness-50 shadow-md text-center h-full relative ease-out pt-12",children:[(0,a.jsx)(r.Ct,{className:"border border-inherit rounded-full !w-max py-2 px-4 !bg-[color:#0e1b2c]",children:(0,a.jsx)("p",{className:"grad-text font-semibold",children:"CURSOS PRESENCIAIS"})}),(0,a.jsx)(r.Ei,{src:"/img/svg/logo_cursos_presenciais.svg",className:"w-3/4"}),(0,a.jsxs)(r.W2,{className:"my-4",children:[(0,a.jsxs)("h1",{className:"text-3xl font-bold",children:[(0,a.jsx)("mark",{className:"font-light text-white",children:"R$"})," 3000",(0,a.jsx)("sup",{children:(0,a.jsx)("small",{children:",00"})})]}),(0,a.jsx)("h2",{className:"text-xs font-light mt-4",children:"\xe0 vista ou em at\xe9 12x"})]}),(0,a.jsx)("a",{href:d.BA.whatsapp,target:"_blank",referrerPolicy:"noopener noreferrer",className:"m-2 bg-[linear-gradient(45deg,#0474a4,#0986bf)] rounded-full py-2 px-4 shadow-lg w-max text-xl font-semibold border-b-4 border-t border-b-slate-700 border-t-sky-200",children:"GARANTIR MINHA VAGA"}),(0,a.jsx)(r.Ei,{src:"/img/pagamento.webp",className:"w-1/2 opacity-30 mt-8"}),(0,a.jsx)("br",{})]})}),(0,a.jsx)(r.W2,{className:"w-full max-w-[426px] bg-[linear-gradient(45deg,#0f172a,#0a3345)] self-start justify-self-start shadow-lg",id:"mentorias",children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-between border border-sky-900 rounded-xl backdrop-brightness-50 shadow-md text-center h-full relative ease-out pt-12",children:[(0,a.jsx)(r.Ct,{className:"border border-inherit rounded-full !w-max py-2 px-4 !bg-[color:#0e1b2c]",children:(0,a.jsx)("p",{className:"grad-text font-semibold",children:"AGENDE SUA MENTORIA"})}),(0,a.jsx)(r.Ei,{src:"/img/svg/logo_mentorias.svg",className:"w-3/4"}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.W2,{className:"my-4",children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)("h1",{className:"text-2xl font-bold grad-text",children:"MENTORIAS INDIVIDUAIS"})}),(0,a.jsxs)("span",{className:"text-4xl font-bold flex items-center align-bottom justify-center",children:[(0,a.jsx)("mark",{className:"font-light text-white",children:"R$"}),"\xa02000",(0,a.jsx)("small",{className:"font-light",children:",00"}),(0,a.jsx)("span",{className:"font-extralight text-sm ml-2"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("span",{className:"text-xs font-light",children:"\xe0 vista ou em at\xe9 12x"}),(0,a.jsx)("span",{className:"font-extralight text-xs ml-2",children:"(Um dia)"})]})]}),(0,a.jsx)("div",{className:"divider"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold grad-text",children:"TREINE SUA EQUIPE"}),(0,a.jsx)("small",{children:"- AT\xc9 3 PARTICIPANTES -"})]}),(0,a.jsxs)("span",{className:"text-4xl font-bold flex justify-center items-center",children:[(0,a.jsx)("mark",{className:"font-light text-white",children:"R$"}),"\xa01600",(0,a.jsx)("small",{className:"font-light",children:",00"}),(0,a.jsx)("span",{className:"font-extralight text-sm ml-2",children:"/ participante"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("span",{className:"text-xs font-light",children:"\xe0 vista ou em at\xe9 12x"}),(0,a.jsx)("span",{className:"font-extralight text-xs ml-2",children:"(Um dia)"})]})]})]}),(0,a.jsx)("a",{href:d.BA.mentorias,target:"_blank",referrerPolicy:"noopener noreferrer",className:"m-2 bg-[linear-gradient(45deg,#0474a4,#0986bf)] rounded-full py-2 px-4 shadow-lg w-max text-xl font-semibold border-b-4 border-t border-b-slate-700 border-t-sky-200",children:"QUERO AGENDAR AGORA"}),(0,a.jsx)(r.Ei,{src:"/img/pagamento.webp",className:"w-1/2 opacity-30 mt-8"}),(0,a.jsx)("br",{})]})})]})]})})}),(0,a.jsx)(r.$0,{id:"cp-footer",children:(0,a.jsx)("span",{className:"logo-palmilhando w-32 h-32 mx-auto"})})]})}t(9843),t(604)},1100:function(e,s,t){"use strict";t.d(s,{BA:function(){return r},ic:function(){return a}});let a="https://palmilhasterapeuticas.com.br/",r={mentorias:"https://forms.gle/PSHmHW8nCYxE6Pip8",whatsapp:"https://wa.me//5512982628132"}},2869:function(e,s,t){"use strict";t.d(s,{$0:function(){return l},Ct:function(){return m},Ei:function(){return u},If:function(){return n},VY:function(){return i},W2:function(){return c},gb:function(){return x},im:function(){return o},rj:function(){return d}});var a=t(7437),r=t(12);let l=e=>{let{id:s,className:t,children:l}=e;return(0,a.jsx)("section",{id:s,className:(0,r.pb)("py-16 m-auto w-full relative",t),children:l})},i=e=>{let{id:s,className:t,children:l}=e;return(0,a.jsx)("div",{id:s,className:(0,r.pb)("block m-auto w-full",t),children:l})},n=e=>{let{id:s,className:t,children:l}=e;return(0,a.jsx)("div",{id:s,className:(0,r.pb)("w-[96%] max-w-[1280px] mx-auto",t),children:l})},o=e=>{let{id:s,className:t,children:l}=e;return(0,a.jsx)("div",{id:s,className:(0,r.pb)("flex flex-wrap",t),children:l})},c=e=>{let{id:s,className:t,children:l}=e;return(0,a.jsx)("div",{id:s,className:(0,r.pb)("flex flex-col",t),children:l})},d=e=>{let{id:s,className:t,style:l,children:i}=e;return(0,a.jsx)("div",{id:s,className:(0,r.pb)("grid",t),style:l,children:i})},m=e=>{let{id:s,className:t,width:l=24,children:i}=e;return(0,a.jsx)("div",{id:s,className:(0,r.pb)("bg-inherit rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center p-4",t),style:{width:"".concat(l,"px")},children:i})},x=e=>{let{width:s=32}=e,t=s+"px";return(0,a.jsx)("div",{className:"loading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",style:{width:t,height:t},children:(0,a.jsx)("img",{src:"/img/gif/loading.gif",width:t,height:t,draggable:"false",alt:""})})};function u(e){let{src:s="",width:t="",height:l="",className:i="",style:n={}}=e;return(0,a.jsx)("img",{src:(0,r.qz)(s),alt:"",draggable:"false",width:t,height:l,className:i,style:n})}},5320:function(e,s,t){"use strict";function a(){fetch("https://api.ipify.org/?format=json").then(e=>e.json()).then(e=>fetch("https://palmilhando.com.br/api/",{headers:{"Content-Type":"application/json"},method:"post",body:JSON.stringify({action:"page_view",data:{ip:e.ip,origin:window.location.href}})}))}function r(e){var s;let t=null===(s=window)||void 0===s?void 0:s.visualViewport,a={add:()=>void 0,remove:()=>void 0};if(t){let s=()=>e(t.width<=820);s(),a.add=()=>t.addEventListener("resize",s),a.remove=()=>t.removeEventListener("resize",s)}return a}function l(){var e,s,t,a,r,l;let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Document";e=window,s=document,t="script",e[a="dataLayer"]=e[a]||[],e[a].push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),r=s.getElementsByTagName(t)[0],(l=s.createElement(t)).async=!0,l.src="https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4",r.parentNode.insertBefore(l,r),document.title=i}function i(e){var s;let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start";null===(s="string"==typeof e?document.querySelector(e):e)||void 0===s||s.scrollIntoView({block:t,behavior:"smooth"})}t.d(s,{Md:function(){return l},ft:function(){return r},lN:function(){return i},tN:function(){return a}}),t(2265),t(12)},2950:function(e,s,t){"use strict";t.d(s,{aV:function(){return o},zF:function(){return n}});var a=t(7437),r=t(2265),l=t(12);let i=e=>{let{id:s,className:t,fill:r="#1E3050",width:l=12}=e;return(0,a.jsx)("svg",{id:s,className:"caret "+t,fill:r,version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 12 12",style:{enableBackground:"new 0 0 12 12"},xmlSpace:"preserve",width:l+"px",height:l+"px",children:(0,a.jsx)("path",{d:"M9.2,6.8c0.5-0.5,0.5-1.2,0-1.7L4.5,0.5C4.2,0.2,3.7,0.1,3.2,0.3S2.5,0.9,2.5,1.3v9.3c0,0.5,0.3,0.9,0.7,1.1s0.9,0.1,1.3-0.3L9.2,6.8L9.2,6.8L9.2,6.8L9.2,6.8z"})})},n=e=>{let{id:s,className:t,title:n,children:o}=e,c=(0,r.useRef)(null);return(0,a.jsxs)("div",{className:(0,l.pb)("collapsible bg-slate-200 cor-4 rounded-md overflow-hidden shadow-sm mb-2 p-4 cursor-pointer hover:bg-slate-50 light",t),ref:c,onClick:()=>{var e,s,t,a=document.querySelectorAll(".collapsible .content");function r(e){e.parentElement.style.maxHeight?e.parentElement.style.maxHeight=null:e.parentElement.style.maxHeight=3*e.scrollHeight+"px"}(null===(e=c.current)||void 0===e?void 0:e.classList.contains("active"))||function(){for(let e of a)e.parentElement.classList.contains("active")&&(e.parentElement.classList.remove("active"),r(e))}(),null===(s=c.current)||void 0===s||s.classList.toggle("active"),r(null===(t=c.current)||void 0===t?void 0:t.lastElementChild)},id:s,children:[(0,a.jsxs)("div",{className:"title flex justify-between items-center",children:[(0,a.jsx)("span",{className:"mr-4 font-bold",children:n}),(0,a.jsx)(i,{})]}),(0,a.jsx)("div",{className:"content mt-4 pb-4",children:o})]})},o=e=>{let{id:s,className:t,children:r}=e;return(0,a.jsx)("ul",{id:s,className:(0,l.pb)("my-list",t),children:r})}},12:function(e,s,t){"use strict";t.d(s,{pb:function(){return r},qz:function(){return l}});var a=t(1100);let r=function(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return s.join(" ").trim()};function l(e){if("string"==typeof e)return e.startsWith("/")||(e="/"+e),e.startsWith(a.ic)?e:a.ic+e}},9843:function(){},604:function(){}},function(e){e.O(0,[847,533,971,23,744],function(){return e(e.s=1062)}),_N_E=e.O()}]);