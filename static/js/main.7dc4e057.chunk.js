(this.webpackJsonpmobilezone=this.webpackJsonpmobilezone||[]).push([[0],{24:function(e,t,n){e.exports=n(40)},29:function(e,t,n){},30:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(20),c=n.n(r),o=(n(29),n(15)),i=n(8),s=(n(30),n(31),n(2));n(32),n(33);var u=function(e){var t=Object(a.useState)(0),n=Object(s.a)(t,2),r=n[0],c=n[1],o=setInterval((function(){var t=e.images.length;c(r>=t-1?0:r+1),clearInterval(o)}),2e3);return l.a.createElement("div",{className:"carousal"},l.a.createElement("div",{className:"container"},l.a.createElement("img",{"data-testid":"carousalImg",src:e.images[r],alt:"loading..."})))},m={product:{border:"1px solid #ccc",padding:"1rem",textAlign:"left",borderRadius:".25rem",boxShadow:"2px 2px 5px #ccc",margin:"0 4px"}};var d=function(e){var t=e.product,n=t.name,a=t.price,r=t.images;return l.a.createElement("div",{className:"product",style:m.product},l.a.createElement("div",{className:"name"},l.a.createElement("b",null,n)),l.a.createElement("div",{className:"price"},"INR ",a),l.a.createElement(u,{images:r}))};n(34);var b=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){return fetch("/mobile-zone/data/products.json",{}).then((function(e){return e.json()})).then((function(e){console.log(e),e&&r(e)})),function(){console.log("Unmounting.")}}),[]),l.a.createElement("div",{className:"products"},l.a.createElement("h2",null,"Products"),l.a.createElement("div",{className:"products-container"},n.length?n.map((function(e,t){return l.a.createElement(d,{key:t,product:e})})):l.a.createElement(l.a.Fragment,null)))},p=n(4),g=n(6),f={1:{name:"ace",value:1},2:{name:"2",value:2},3:{name:"3",value:3},4:{name:"4",value:4},5:{name:"5",value:5},6:{name:"6",value:6},7:{name:"7",value:7},8:{name:"8",value:8},9:{name:"9",value:9},10:{name:"10",value:10},11:{name:"jack",value:10},12:{name:"queen",value:10},13:{name:"king",value:10}},h=["clubs","spades","hearts","diamonds"],E=function(e,t){return"/mobile-zone/assets/cards-png/"+e+"_of_"+t+".png"},v=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),o=Object(s.a)(c,2),i=o[0],u=o[1],m=Object(a.useState)({player:[],dealer:[]}),d=Object(s.a)(m,2),b=d[0],v=d[1],y=Object(a.useState)({show:!1,text:""}),x=Object(s.a)(y,2),j=x[0],w=x[1];function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=k(),n=f[t].value;return 1===t?{totalPoints:e+11>21?e+1:e+11,currentIndex:t}:{totalPoints:e+n,currentIndex:t}}function N(){if(n<=17){var e=O(n);r(e.totalPoints);var t,a=JSON.parse(JSON.stringify(b.player));t=E(f[e.currentIndex].name,h[Math.floor(4*Math.random())]),a.push(t),v(Object(g.a)({},b,{player:Object(p.a)(a)}))}}return Object(a.useEffect)((function(){N()}),[]),l.a.createElement("div",{className:"blackjack",style:{maxWidth:"400px",margin:"0 auto"}},l.a.createElement("h1",null,"Blackjack"),j.show?l.a.createElement("div",{className:"message-container"},l.a.createElement("div",{className:"message"},l.a.createElement("h2",null,j.text))):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{className:"players"},l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"title"},"Player: ",n),l.a.createElement("div",{className:"btn-container"},l.a.createElement("button",{title:"Click hit to draw card.",onClick:N,style:{}},"Hit"),l.a.createElement("button",{title:"Click stand to stop drawing card.",onClick:function(){[0,1].forEach((function(e){document.getElementsByTagName("button")[e].setAttribute("disabled",!0)}));for(var e=0,t=[];e<=17;){var a=O(e);e=a.totalPoints;var l;l=E(f[a.currentIndex].name,h[Math.floor(4*Math.random())]),t.push(l)}u(e),v(Object(g.a)({},b,{dealer:[].concat(t)})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e<=21,a=t<=21,l="";l=n&&a?t===e?"It's a tie":t>e?"Winner is DEALER":"Winner is PLAYER":n?"Winner is PLAYER":a?"Winner is DEALER":"It's a tie";w({show:!0,text:l+" !!"})}(n,e)},style:{marginLeft:"1rem"}},"Stand"),l.a.createElement("button",{title:"Click reload to reset data.",onClick:function(){return window.location.reload()},style:{marginLeft:"1rem"}},"Refresh"))),b.player.length?l.a.createElement("div",{className:"cards"},b.player.map((function(e,t){return l.a.createElement("img",{key:t,src:e,alt:e.split("/").pop(),style:{zIndex:t,left:10+30*t+"px"}})}))):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{className:"title"},"Dealer: ",i),b.dealer.length?l.a.createElement("div",{className:"cards"},b.dealer.map((function(e,t){return l.a.createElement("img",{key:t,src:e,alt:e.split("/").pop(),style:{zIndex:t,left:10+30*t+"px"}})}))):l.a.createElement(l.a.Fragment,null)),l.a.createElement("p",null,"Rules: ",l.a.createElement("br",null),"-  1. shuffle the deck ",l.a.createElement("br",null),"-  2. hand out 2 cards each to dealer and player ",l.a.createElement("br",null),"-  2. prompt player for actions (hit, stand) ",l.a.createElement("br",null),"-  3. dealer(computer) decides to draw until at least 17 points ",l.a.createElement("br",null),"-  4. determine who wins the round ",l.a.createElement("br",null),l.a.createElement("br",null),"Assumptions : ",l.a.createElement("br",null),"* Poker Cards only ",l.a.createElement("br",null),"* Rank: (A, 2-10, J,Q, K), ",l.a.createElement("br",null),"* Suit : (Spade, Heart, Club, Diamond) ",l.a.createElement("br",null),"* A Deck of poker cards: 52(13 rank * 4 suit) possible unique card combination,  ",l.a.createElement("br",null),"* It's a game trying to make your hand closest to 21 points but exceeding 21 means game over, whoever is highest below 22 points wins * assume that there's only 1 dealer and 1 player ",l.a.createElement("br",null),"* 2-10: 2-10 points ",l.a.createElement("br",null),"* J,Q,K: 10 points ",l.a.createElement("br",null),"* A : 11/1 point (can be 11 or 1 points) ",l.a.createElement("br",null)),l.a.createElement("style",{jsx:"true"},"\n        .blackjack {\n          border: 1px solid #ccc;\n          border-radius: 5px;\n          box-shadow: 2px 2px 6px 2px #eee;\n        }\n\n        .blackjack .title {\n          padding: 1rem;\n        }\n\n        .blackjack .btn-container {\n          padding-bottom: 1rem;\n        }\n\n        .blackjack button {\n          padding: .35rem 1.5rem;\n          border-radius: 5px;\n          font-weight: bold;\n        }\n\n        .blackjack button:focus {\n          outline: none;\n        }\n\n        .blackjack p {\n          text-align: left;\n          font-size: 14px;\n          color: #949494;\n          padding: 1rem;\n        }\n\n        .blackjack .cards {\n          position: relative;\n          height: 180px;\n        }\n\n        .blackjack .cards img {\n          height: 140px;\n          width: 100px;\n          border: 1px solid grey;\n          padding: .25rem;\n          border-radius: 5px;\n          position: absolute;\n          background: white;\n          word-break: break-all;\n        }\n\n        .blackjack .message-container {\n          padding: 0 1rem;\n        }\n\n        .blackjack .message-container .message {\n          background: linear-gradient(45deg, #67dcfa, transparent);\n          border-radius: 5px;\n        }\n      "))},k=function e(){var t=Math.random();return 0===t&&e(),Math.ceil(13*t)},y=function(){return l.a.createElement("iframe",{id:"listMaking",title:"List Making",width:"994px",height:"550px",style:{border:"none"},src:"https://abhijit-padhy.github.io/list-making/",allow:"fullscreen"})},x=function(e){var t=e.data,n=e.onSubmit,a=e.resetForm;return l.a.createElement("div",{className:"new-bill-form"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.target);console.log("form data: ",a.get("amount"));var l=new Date;n({id:t.id,description:a.get("description"),category:t.category||a.get("category"),amount:a.get("amount"),date:l.getMonth()+1+"-"+l.getDate()+"-"+l.getFullYear()})},autoComplete:"off"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Description:\xa0\xa0"),l.a.createElement("input",{type:"text",name:"description",defaultValue:t.description})),t.category?l.a.createElement(l.a.Fragment,null):l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"category"},"Category:\xa0\xa0"),l.a.createElement("input",{type:"text",name:"category",defaultValue:t.category})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"amount"},"Amount:\xa0\xa0"),l.a.createElement("input",{type:"number",name:"amount",defaultValue:t.amount})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",null,"Submit"),l.a.createElement("button",{style:{marginLeft:".5rem"},onClick:a},"Reset"))),l.a.createElement("style",{jsx:!0},"\n        form {\n          padding: 1rem;\n          text-align: left;\n        }\n\n        form .form-group {\n          padding-bottom: .5rem;\n        }\n\n        form .form-group input {\n          border-radius: 5px;\n          padding: .25rem\n          background: white;\n        }\n      "))},j=n(14),w=n.n(j),O=n(21),N=n.n(O),C=function(e){var t=e.bills,n=Object(a.useState)({title:{text:""},xAxis:{type:"category",labels:{rotation:-45}},series:[{data:[]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{align:"center",verticalAlign:"bottom",layout:"horizontal"},yAxis:{labels:{align:"left",x:0,y:-5},title:{text:null}},subtitle:{text:null},credits:{enabled:!1}}}]}}),r=Object(s.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){var e=t.map((function(e){return[e.date,Number(e.amount)]})),n=Object(g.a)({},c);n.series[0].data=Object(p.a)(e),console.log("options: ",e,t),o(Object(g.a)({},n))}),[t]),l.a.createElement("div",{className:"tseries-chart"},l.a.createElement(N.a,{highcharts:w.a,options:c}),l.a.createElement("style",{jsx:"true"},"\n        .tseries-chart {\n          display: flex;\n          justify-content: center;\n          max-width: 100%;\n        }\n      "))},S={show:!1,data:void 0},A=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),o=Object(s.a)(c,2),i=o[0],u=o[1],m=Object(a.useState)(S),d=Object(s.a)(m,2),b=d[0],f=d[1],h=Object(a.useState)({selectedCategory:"All",categories:[]}),E=Object(s.a)(h,2),v=E[0],k=E[1],y=Object(a.useRef)(0),j=Object(a.useState)([]),w=Object(s.a)(j,2),O=w[0],N=w[1];function A(e,t){f(e?{show:!0,data:JSON.parse(JSON.stringify(t||{id:i[i.length-1].id+1}))}:Object(g.a)({},S))}function I(){A(!1)}return Object(a.useEffect)((function(){return fetch("/mobile-zone/data/bill-desk/bills.json",{}).then((function(e){return e.json()})).then((function(e){console.log(e),e&&(u(e.bills||[]),y.current=e.budget)})),function(){console.log("Unmounting Bill desk.")}}),[]),Object(a.useEffect)((function(e){console.log("changed");var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;try{if(t){var n={};return e.forEach((function(e){e[t]&&(n[e[t]]=!0)})),console.log(n),Object.keys(n||{})}}catch(a){console.log(a)}return[]}(i,"category"),n=t.findIndex((function(e){return e===v.selectedCategory}))>-1?v.selectedCategory:"All";k(Object(g.a)({},v,{categories:Object(p.a)(t),selectedCategory:n})),r(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,a=[];if(e.length&&t&&n){var l=t.toLowerCase();"all"===l?a=e:e.forEach((function(e){e[n].toLowerCase()===l&&a.push(e)}))}return Object(p.a)(a)}(i,n,"category"))}),[i,v.selectedCategory]),l.a.createElement("div",{className:"bill-desk"},l.a.createElement("div",null,"Bill Desk vBeta"),l.a.createElement("div",{className:"bills-container"},v.categories.length?l.a.createElement("select",{onChange:function(e){return k(Object(g.a)({},v,{selectedCategory:e.target.value}))}},l.a.createElement("option",{selected:"All"===v.selectedCategory,value:"All"},"All"),v.categories.map((function(e){return l.a.createElement("option",{selected:e===v.selectedCategory,value:e},e)}))):l.a.createElement(l.a.Fragment,null),n.length?n.map((function(e,t){return l.a.createElement("div",{key:t,className:"bill-container"},l.a.createElement("div",{className:"bill"},l.a.createElement("div",{className:"bill-col"},l.a.createElement("div",null,e.description," | "),l.a.createElement("div",null,e.category," | "),l.a.createElement("div",null,l.a.createElement("b",null,"INR ",e.amount)," | "),l.a.createElement("div",null,e.date)),l.a.createElement("div",{className:"bill-col"},l.a.createElement("button",{onClick:function(){return A(!0,e)}},"Edit"),l.a.createElement("button",{onClick:function(){return function(e){var t=Object(p.a)(i),n=t.findIndex((function(t){return t.id===e}));n>-1&&t.splice(n,1),u(Object(p.a)(t))}(e.id)}},"Delete"))))})):l.a.createElement(l.a.Fragment,null)),l.a.createElement("button",{onClick:function(){return A(!b.show)}},"Add Bill"),l.a.createElement("button",{onClick:function(){var e=0,t=[];Object(p.a)(i).sort((function(e,t){return t.amount-e.amount})).forEach((function(n){var a=e;(e+=Number(n.amount))<=y.current?t.push(n):e=a})),console.log("budget",t),N([].concat(t))},style:{marginLeft:".5rem"}},"Reduce Bills"),b.show?l.a.createElement(x,{data:b.data,onSubmit:function(e){var t=Object(p.a)(i),n=t.findIndex((function(t){return t.id===e.id}));n>-1?Object.keys(e).forEach((function(a){return t[n][a]=e[a]})):t.push(e),u(Object(p.a)(t)),I()},resetForm:I}):l.a.createElement(l.a.Fragment,null),O.length?l.a.createElement("div",{className:"bills-container"},l.a.createElement("h3",null,"Minimum Bills To Pay"),l.a.createElement("p",null,"* considering minimum budget per month is INR ",y.current),O.map((function(e,t){return l.a.createElement("div",{key:t,className:"bill-container"},l.a.createElement("div",{className:"bill"},l.a.createElement("div",{className:"bill-col"},l.a.createElement("div",null,e.description," | "),l.a.createElement("div",null,e.category," | "),l.a.createElement("div",null,l.a.createElement("b",null,"INR ",e.amount)," | "),l.a.createElement("div",null,e.date))))}))):l.a.createElement(l.a.Fragment,null),l.a.createElement(C,{bills:n}),l.a.createElement("style",{jsx:"true"},"\n        .bill-desk {\n          border: 1px solid #ccc;\n          border-radius: 5px;\n          box-shadow: 2px 2px 6px 2px #eee;\n          max-width: fit-content;\n          margin: 0 auto;\n          padding: 1rem;\n        }\n\n        .bill-desk .title {\n          padding: 1rem;\n        }\n\n        .bill-desk .bills-container {\n          padding-bottom: 1rem;\n        }\n\n        .bill-desk .bills-container select {\n          margin-bottom: 1rem;\n          border: 1px solid #ccc;\n          width: 210px;\n        }\n\n        .bill-desk .bills-container .bill {\n          padding: .5rem;\n          border: 1px solid #ccc;\n          border-radius: 5px;\n          display: flex;\n          justify-content: space-between;\n          flex-wrap: wrap;\n          font-size: 14px;\n        }\n\n        .bill-desk .bills-container .bill:not(:last-child) {\n          margin-bottom: .5rem;\n        }\n\n        .bill-desk .bills-container .bill .bill-col {\n          display: flex;\n        }\n\n        .bill-desk .bills-container .bill .bill-col>div:not(:first-child),\n        .bill-desk .bills-container .bill .bill-col>button {\n          margin-left: .25rem;\n        }\n\n        .bill-desk button {\n          padding: .35rem 1.5rem;\n          border-radius: 5px;\n          font-weight: bold;\n          cursor: pointer;\n        }\n\n        .bill-desk button:focus,\n        .bill-desk button:hover,\n        .bill-desk input {\n          outline: none;\n        }\n\n        .bill-desk .message-container {\n          padding: 0 1rem;\n        }\n\n        .bill-desk .message-container .message {\n          background: linear-gradient(45deg, #67dcfa, transparent);\n          border-radius: 5px;\n        }\n\n        .bill-desk .highcharts-credits {\n          display: none;\n        }\n      "))};var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement("img",{src:"/mobile-zone/logos/logo.png",height:"48px",width:"48px",alt:""}),l.a.createElement("span",null,"\xa0Mobile Zone")),l.a.createElement("ul",null,[{name:"Blackjack",path:"/blackjack",show:!0},{name:"Products",path:"/products",show:!0},{name:"List Making",path:"/listMaking",show:!0},{name:"Bill Desk",path:"/billdesk",show:!0}].map((function(e,t){return e.show&&l.a.createElement("li",{key:t},l.a.createElement(o.b,{className:"App-link",to:e.path},e.name))}))),l.a.createElement("hr",null)),l.a.createElement("main",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(v,null)),l.a.createElement(i.a,{path:"/products"},l.a.createElement(b,null)),l.a.createElement(i.a,{path:"/blackjack"},l.a.createElement(v,null)),l.a.createElement(i.a,{path:"/listMaking"},l.a.createElement(y,null)),l.a.createElement(i.a,{path:"/billdesk"},l.a.createElement(A,null))))))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mobile-zone",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/mobile-zone","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):F(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.7dc4e057.chunk.js.map