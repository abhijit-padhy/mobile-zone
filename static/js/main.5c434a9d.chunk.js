(this.webpackJsonpmobilezone=this.webpackJsonpmobilezone||[]).push([[0],{22:function(e,n,a){e.exports=a(38)},27:function(e,n,a){},28:function(e,n,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},29:function(e,n,a){},30:function(e,n,a){},31:function(e,n,a){},32:function(e,n,a){},38:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(18),c=a.n(l),o=(a(27),a(12)),i=a(6),s=(a(28),a(29),a(5));a(30),a(31);var u=function(e){var n=Object(t.useState)(0),a=Object(s.a)(n,2),l=a[0],c=a[1],o=setInterval((function(){var n=e.images.length;c(l>=n-1?0:l+1),clearInterval(o)}),2e3);return r.a.createElement("div",{className:"carousal"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{"data-testid":"carousalImg",src:e.images[l],alt:"loading..."})))},m={product:{border:"1px solid #ccc",padding:"1rem",textAlign:"left",borderRadius:".25rem",boxShadow:"2px 2px 5px #ccc",margin:"0 4px"}};var d=function(e){var n=e.product,a=n.name,t=n.price,l=n.images;return r.a.createElement("div",{className:"product",style:m.product},r.a.createElement("div",{className:"name"},r.a.createElement("b",null,a)),r.a.createElement("div",{className:"price"},"INR ",t),r.a.createElement(u,{images:l}))};a(32);var p=function(){var e=Object(t.useState)([]),n=Object(s.a)(e,2),a=n[0],l=n[1];return Object(t.useEffect)((function(){return fetch("/mobile-zone/data/products.json",{}).then((function(e){return e.json()})).then((function(e){console.log(e),e&&l(e)})),function(){console.log("Unmounting.")}}),[]),r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Products"),r.a.createElement("div",{className:"products-container"},a.length?a.map((function(e,n){return r.a.createElement(d,{key:n,product:e})})):r.a.createElement(r.a.Fragment,null)))},h=a(21),b=a(15),g={1:{name:"ace",value:1},2:{name:"2",value:2},3:{name:"3",value:3},4:{name:"4",value:4},5:{name:"5",value:5},6:{name:"6",value:6},7:{name:"7",value:7},8:{name:"8",value:8},9:{name:"9",value:9},10:{name:"10",value:10},11:{name:"jack",value:10},12:{name:"queen",value:10},13:{name:"king",value:10}},f=["clubs","spades","hearts","diamonds"],E=function(e,n){return"/mobile-zone/assets/cards-png/"+e+"_of_"+n+".png"},v=function(){var e=Object(t.useState)(0),n=Object(s.a)(e,2),a=n[0],l=n[1],c=Object(t.useState)(0),o=Object(s.a)(c,2),i=o[0],u=o[1],m=Object(t.useState)({player:[],dealer:[]}),d=Object(s.a)(m,2),p=d[0],v=d[1],w=Object(t.useState)({show:!1,text:""}),x=Object(s.a)(w,2),j=x[0],y=x[1];function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=k(),a=g[n].value;return 1===n?{totalPoints:e+11>21?e+1:e+11,currentIndex:n}:{totalPoints:e+a,currentIndex:n}}return r.a.createElement("div",{className:"blackjack",style:{maxWidth:"400px",margin:"0 auto"}},r.a.createElement("h1",null,"Blackjack"),j.show?r.a.createElement("div",{className:"message-container"},r.a.createElement("div",{className:"message"},r.a.createElement("h2",null,j.text))):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:"players"},r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"title"},"Player: ",a),r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{onClick:function(){if(a<=17){var e=N(a);l(e.totalPoints);var n,t=JSON.parse(JSON.stringify(p.player));n=E(g[e.currentIndex].name,f[Math.floor(4*Math.random())]),t.push(n),v(Object(b.a)({},p,{player:Object(h.a)(t)}))}}},"Hit"),r.a.createElement("button",{onClick:function(){[0,1].forEach((function(e){document.getElementsByTagName("button")[e].setAttribute("disabled",!0)}));for(var e=0,n=[];e<=17;){var t=N(e);e=t.totalPoints;var r;r=E(g[t.currentIndex].name,f[Math.floor(4*Math.random())]),n.push(r)}u(e),v(Object(b.a)({},p,{dealer:[].concat(n)})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e<=21,t=n<=21,r="";r=a&&t?n===e?"It's a tie":n>e?"Winner is DEALER":"Winner is PLAYER":a?"Winner is PLAYER":"Winner is DEALER";y({show:!0,text:r+" !!"})}(a,e)},style:{marginLeft:"1rem"}},"Stand"),r.a.createElement("button",{onClick:function(){return window.location.reload()},style:{marginLeft:"1rem"}},"Reload"))),p.player.length?r.a.createElement("div",{className:"cards"},p.player.map((function(e,n){return r.a.createElement("img",{key:n,src:e,alt:"",style:{zIndex:n,left:10+30*n+"px"}})}))):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:"title"},"Dealer: ",i),p.dealer.length?r.a.createElement("div",{className:"cards"},p.dealer.map((function(e,n){return r.a.createElement("img",{key:n,src:e,alt:"",style:{zIndex:n,left:10+30*n+"px"}})}))):r.a.createElement(r.a.Fragment,null)),r.a.createElement("p",null,"Rules: ",r.a.createElement("br",null),"-  1. shuffle the deck ",r.a.createElement("br",null),"-  2. hand out 2 cards each to dealer and player ",r.a.createElement("br",null),"-  2. prompt player for actions (hit, stand) ",r.a.createElement("br",null),"-  3. dealer(computer) decides to draw until at least 17 points ",r.a.createElement("br",null),"-  4. determine who wins the round ",r.a.createElement("br",null),r.a.createElement("br",null),"Assumptions : ",r.a.createElement("br",null),"* Poker Cards only ",r.a.createElement("br",null),"* Rank: (A, 2-10, J,Q, K), ",r.a.createElement("br",null),"* Suit : (Spade, Heart, Club, Diamond) ",r.a.createElement("br",null),"* A Deck of poker cards: 52(13 rank * 4 suit) possible unique card combination,  ",r.a.createElement("br",null),"* It's a game trying to make your hand closest to 21 points but exceeding 21 means game over, whoever is highest below 22 points wins * assume that there's only 1 dealer and 1 player ",r.a.createElement("br",null),"* 2-10: 2-10 points ",r.a.createElement("br",null),"* J,Q,K: 10 points ",r.a.createElement("br",null),"* A : 11/1 point (can be 11 or 1 points) ",r.a.createElement("br",null)),r.a.createElement("style",{jsx:!0},"\n        .blackjack {\n          border: 1px solid #ccc;\n          border-radius: 5px;\n          box-shadow: 2px 2px 6px 2px #eee;\n        }\n\n        .blackjack .title {\n          padding: 1rem;\n        }\n\n        .blackjack .btn-container {\n          padding-bottom: 1rem;\n        }\n\n        .blackjack button {\n          padding: .35rem 1.5rem;\n          border-radius: 5px;\n          font-weight: bold;\n        }\n\n        .blackjack button:focus, button:hover {\n          outline: none;\n        }\n\n        .blackjack p {\n          text-align: left;\n          font-size: 14px;\n          color: #949494;\n          padding: 1rem;\n        }\n\n        .blackjack .cards {\n          position: relative;\n          height: 180px;\n        }\n\n        .blackjack .cards img {\n          height: 140px;\n          width: 100px;\n          border: 1px solid grey;\n          padding: .25rem;\n          border-radius: 5px;\n          position: absolute;\n        }\n\n        .blackjack .message-container {\n          padding: 0 1rem;\n        }\n\n        .blackjack .message-container .message {\n          background: linear-gradient(45deg, #67dcfa, transparent);\n          border-radius: 5px;\n        }\n      "))},k=function(){return Math.floor(13*Math.random())},w=function(){return r.a.createElement("iframe",{id:"listMaking",title:"List Making",width:"994px",height:"550px",style:{border:"none"},src:"http://abhijit-padhy.github.io/list-making/",allow:"fullscreen"})};var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("img",{src:"/mobile-zone/logos/logo.png",height:"48px",width:"48px",alt:""}),r.a.createElement("span",null,"\xa0Mobile Zone")),r.a.createElement("ul",null,[{name:"Blackjack",path:"/blackjack",show:!0},{name:"Products",path:"/products",show:!0},{name:"List Making",path:"/listMaking",show:!0}].map((function(e,n){return e.show&&r.a.createElement("li",{key:n},r.a.createElement(o.b,{className:"App-link",to:e.path},e.name))}))),r.a.createElement("hr",null)),r.a.createElement("main",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(v,null)),r.a.createElement(i.a,{path:"/products"},r.a.createElement(p,null)),r.a.createElement(i.a,{path:"/blackjack"},r.a.createElement(v,null)),r.a.createElement(i.a,{path:"/listMaking"},r.a.createElement(w,null))))))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mobile-zone",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/mobile-zone","/service-worker.js");j?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var t=a.headers.get("content-type");404===a.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(n,e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.5c434a9d.chunk.js.map