(this.webpackJsonpmobilezone=this.webpackJsonpmobilezone||[]).push([[0],[,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),l=(n(9),n(10),n(11),n(1));n(12),n(13);var i=function(e){var t=Object(a.useState)(0),n=Object(l.a)(t,2),r=n[0],o=n[1],i=setInterval((function(){var t=e.images.length;o(r>=t-1?0:r+1),clearInterval(i)}),2e3);return c.a.createElement("div",{className:"carousal"},c.a.createElement("div",{className:"container"},c.a.createElement("img",{"data-testid":"carousalImg",src:e.images[r],alt:"loading..."})))},s={product:{border:"1px solid #ccc",padding:"1rem",textAlign:"left",borderRadius:".25rem",boxShadow:"2px 2px 5px #ccc",margin:"0 4px"}};var u=function(e){var t=e.product,n=t.name,a=t.price,r=t.images;return c.a.createElement("div",{className:"product",style:s.product},c.a.createElement("div",{className:"name"},c.a.createElement("b",null,n)),c.a.createElement("div",{className:"price"},"INR ",a),c.a.createElement(i,{images:r}))};n(14);var m=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){return fetch("/mobile-zone/data/products.json",{}).then((function(e){return e.json()})).then((function(e){console.log(e),e&&r(e)})),function(){console.log("Unmounting.")}}),[]),c.a.createElement("div",{className:"products"},c.a.createElement("h2",null,"Products"),c.a.createElement("div",{className:"products-container"},n.length?n.map((function(e,t){return c.a.createElement(u,{key:t,product:e})})):c.a.createElement(c.a.Fragment,null)))};var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("h1",null,"Aeigon")),c.a.createElement("main",null,c.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.63ca679a.chunk.js.map