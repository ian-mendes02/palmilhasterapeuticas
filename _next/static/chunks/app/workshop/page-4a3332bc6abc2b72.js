(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{1480:function(e,a,s){Promise.resolve().then(s.bind(s,9740))},9740:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return n}});var t=s(7437),r=s(2265),i=s(2869),l=s(12);function n(){let[e,a]=(0,r.useState)(!0),[s,n]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),[d,m]=(0,r.useState)(null),x={default:"Quero me inscrever!",retry:"Tentar novamente",loading:(0,t.jsx)("span",{className:"spinner w-8 h-8 mx-auto"}),success:(0,t.jsx)("span",{className:"checkmark w-8 h-8 mx-auto"})},u={server_error:"Falha na comunica\xe7\xe3o com o servidor, tente novamente.",no_email:'O campo "e-mail" n\xe3o pode ficar em branco.',user_exists:"Esse email j\xe1 est\xe1 cadastrado.",success:"Obrigado! Enviaremos um e-mail em breve para confirmar sua inscri\xe7\xe3o."};return(0,r.useEffect)(()=>{var e,a,s,t,r,i;e=window,a=document,s="script",e[t="dataLayer"]=e[t]||[],e[t].push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),r=a.getElementsByTagName(s)[0],(i=a.createElement(s)).async=!0,i.src="https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4",r.parentNode.insertBefore(i,r),document.title="Mini-curso Gratuito: Estrat\xe9gias para o manejo de dores cr\xf4nicas nos p\xe9s",(0,l.pageView)()},[]),(0,r.useEffect)(()=>{m(null),c(x.default)},[s]),(0,r.useEffect)(()=>a(!1),[]),(0,t.jsxs)("main",{children:[e&&(0,t.jsx)("div",{className:"fixed w-screen h-screen bg-primary-900 bg-opacity-50 backdrop-blur-3xl z-[999]",children:(0,t.jsx)(i.gb,{width:32})}),(0,t.jsx)(i.$0,{id:"workshop-header",className:"bg-[linear-gradient(90deg,#ffffff,#dedede)] shadow-lg",children:(0,t.jsx)(i.VY,{className:"relative z-10",children:(0,t.jsx)(i.If,{children:(0,t.jsxs)(i.W2,{id:"workshop-signup",className:"w-full max-w-[720px] max-[820px]:!items-center max-[820px]:!text-center",children:[(0,t.jsxs)("span",{className:"inline-flex items-end text-xl font-bold mb-4 text-[#1678ab]",children:[(0,t.jsx)("span",{className:"w-8 h-8 palmilhando-logo"}),(0,t.jsx)("span",{children:"Palmilhando\xae oferece:"})]}),(0,t.jsx)("h1",{className:"font-bold text-3xl mb-8 text-[#1678ab]",children:"Mini-curso Gratuito: Estrat\xe9gias para o manejo de dores cr\xf4nicas nos p\xe9s"}),(0,t.jsx)("p",{className:"text-[#1678ab] w-3/4",children:"Descubra como utilizar as palmilhas terap\xeauticas como uma estrat\xe9gia eficaz."}),(0,t.jsx)("h2",{className:"font-bold mt-8 text-[#1678ab]",children:"Dia 03 de agosto, \xe0s 9h, no YouTube - curso 100% online e gratuito"}),(0,t.jsxs)(i.W2,{id:"workshop-signup-form",className:"w-3/4 my-4 max-[820px]:w-full",children:[(0,t.jsx)("input",{type:"email",placeholder:"Seu melhor e-mail",className:"rounded-full outline-none bg-white py-2 px-4 text-xl border-4 border-[color:#1678ab] mb-4 text-[#296D7F]",defaultValue:"",onInput:e=>n(e.target.value)}),(0,t.jsx)("div",{className:"w-full rounded-full font-bold text-xl text-center py-3 px-4 bg-[#1678ab] hover:brightness-90 duration-100 ease-out cursor-pointer shadow-sm",onClick:function(){if(m(null),""==s){m(u.no_email);return}c(x.loading),fetch("https://palmilhando.com.br/api/",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"workshop_register",data:{email:s}})}).then(e=>e.json()).then(e=>{(null==e?void 0:e.ok)?(c(x.success),m(u.success),location.href="/workshop/obrigado/"):(null==e?void 0:e.ok)||(null==e?void 0:e.reason)!="existing user"?(m(u.server_error),c(x.retry)):(c(x.retry),m(u.user_exists))}).catch(e=>{console.log(e),m(u.server_error),c(x.retry)})},children:o}),d&&(0,t.jsx)("p",{className:"max-[820px]:!text-center text-sm my-4 text-[#1678ab]",children:d})]})]})})})}),(0,t.jsx)(i.$0,{id:"workshop-includes",children:(0,t.jsx)(i.VY,{children:(0,t.jsxs)(i.If,{className:"flex flex-col items-center",children:[(0,t.jsx)("h1",{className:"font-bold text-3xl text-center",children:"Neste mini curso, voc\xea ter\xe1 a oportunidade de:"}),(0,t.jsxs)("div",{className:"flex items-center justify-between my-8 max-[820px]:!flex-col max-[820px]:!justify-start max-[820px]:!text-center",children:[(0,t.jsx)("div",{className:"h-36 w-auto aspect-square glyph-pain m-4"}),(0,t.jsxs)("div",{className:"w-full max-w-[720px]",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-2",children:"Diferenciar os mecanismos de dor:"}),(0,t.jsx)("p",{className:"text-lg",children:"Compreender as diversas origens e tipos de dor, facilitando diagn\xf3sticos mais precisos."})]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between my-8 max-[820px]:!flex-col-reverse max-[820px]:!justify-start max-[820px]:!text-center",children:[(0,t.jsxs)("div",{className:"w-full max-w-[720px]",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-2",children:"Entender o mecanismo de a\xe7\xe3o das palmilhas:"}),(0,t.jsx)("p",{className:"text-lg",children:"Explorar como as palmilhas atuam na modula\xe7\xe3o da dor, proporcionando al\xedvio e conforto aos pacientes."})]}),(0,t.jsx)("div",{className:"h-36 w-auto aspect-square glyph-insoles m-4"})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between my-8 max-[820px]:!flex-col max-[820px]:!justify-start max-[820px]:!text-center",children:[(0,t.jsx)("div",{className:"h-36 w-auto aspect-square glyph-research m-4"}),(0,t.jsxs)("div",{className:"w-full max-w-[720px]",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-2",children:"Analisar evid\xeancias cient\xedficas:"}),(0,t.jsx)("p",{className:"text-lg",children:"Revisar as mais recentes pesquisas e evid\xeancias sobre a efic\xe1cia das palmilhas no tratamento da dor persistente."})]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between my-8 max-[820px]:!flex-col-reverse max-[820px]:!justify-start max-[820px]:!text-center",children:[(0,t.jsxs)("div",{className:"w-full max-w-[720px]",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-2",children:"Aplicar estrat\xe9gias terap\xeauticas:"}),(0,t.jsx)("p",{className:"text-lg",children:"Aprender as principais abordagens para o gerenciamento eficaz de pacientes com condi\xe7\xf5es cr\xf4nicas, melhorando a qualidade de vida e os resultados cl\xednicos."})]}),(0,t.jsx)("div",{className:"h-36 w-auto aspect-square glyph-target m-4"})]})]})})}),(0,t.jsx)(i.$0,{id:"workshop-about",className:"bg-[linear-gradient(45deg,#dedede,#ffffff)] text-[#1678ab] shadow-lg",children:(0,t.jsx)(i.VY,{children:(0,t.jsx)(i.If,{children:(0,t.jsxs)(i.W2,{className:"w-full max-w-[720px]",children:[(0,t.jsx)("h1",{className:"font-bold text-3xl mb-8",children:"QUEM \xc9 O IDEALIZADOR DO MINI CURSO?"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Andr\xe9 Mendes"})," \xe9 um fisioterapeuta formado em 2003, especialista em Fisioterapia Ortop\xe9dica, Mestre e Doutorando em Fisioterapia pela UNICID.",(0,t.jsx)("wbr",{}),"Autor do livro ",(0,t.jsx)("i",{children:'"Palmilhas Terap\xeauticas: Ci\xeancia e Pr\xe1tica Cl\xednica"'})," e co-autor do livro ",(0,t.jsx)("i",{children:'"Manual de Palmilhas e Cal\xe7ados Ortop\xe9dicos"'}),".",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Tem artigos publicados em revistas cient\xedficas internacionais e hoje se dedica ao estudo das Palmilhas Terap\xeauticas.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Fundador da Podoshop e do canal Palmilhando, tem o objetivo de traduzir ci\xeancia de boa qualidade para cl\xednicos e, assim, fazer com que a pr\xe1tica baseada em evid\xeancias se fortale\xe7a entre os profissionais que utilizam as palmilhas como recurso terap\xeautico."]})]})})})}),(0,t.jsx)(i.$0,{id:"workshop-footer",className:"p-6",children:(0,t.jsx)("span",{className:"logo-palmilhando w-full h-6"})})]})}s(9739)},2869:function(e,a,s){"use strict";s.d(a,{$0:function(){return i},Ct:function(){return m},If:function(){return n},VY:function(){return l},W2:function(){return c},gb:function(){return x},im:function(){return o},rj:function(){return d}});var t=s(7437),r=s(12);let i=e=>{let{id:a,className:s,children:i}=e;return(0,t.jsx)("section",{id:a,className:(0,r.pb)("py-16 m-auto w-full relative",s),children:i})},l=e=>{let{id:a,className:s,children:i}=e;return(0,t.jsx)("div",{id:a,className:(0,r.pb)("block m-auto w-full",s),children:i})},n=e=>{let{id:a,className:s,children:i}=e;return(0,t.jsx)("div",{id:a,className:(0,r.pb)("w-[96%] max-w-[1280px] mx-auto",s),children:i})},o=e=>{let{id:a,className:s,children:i}=e;return(0,t.jsx)("div",{id:a,className:(0,r.pb)("flex flex-wrap",s),children:i})},c=e=>{let{id:a,className:s,children:i}=e;return(0,t.jsx)("div",{id:a,className:(0,r.pb)("flex flex-col",s),children:i})},d=e=>{let{id:a,className:s,style:i,children:l}=e;return(0,t.jsx)("div",{id:a,className:(0,r.pb)("grid",s),style:i,children:l})},m=e=>{let{id:a,className:s,width:i=24,children:l}=e;return(0,t.jsx)("div",{id:a,className:(0,r.pb)("bg-inherit rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center p-4",s),style:{width:"".concat(i,"px")},children:l})},x=e=>{let{width:a=32}=e,s=a+"px";return(0,t.jsx)("div",{className:"loading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",style:{width:s,height:s},children:(0,t.jsx)("img",{src:"/img/gif/loading.gif",width:s,height:s,draggable:"false",alt:""})})}},12:function(e,a,s){"use strict";s.d(a,{pb:function(){return t}});let t=function(){for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];return a.join(" ").trim()}},9739:function(){}},function(e){e.O(0,[226,971,23,744],function(){return e(e.s=1480)}),_N_E=e.O()}]);