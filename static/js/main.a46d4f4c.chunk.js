(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,a,t){e.exports=t(55)},31:function(e,a,t){},32:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),i=(t(31),{products:[{id:1,name:"Black Sport Tshirt",category:"Sport Shirts",image:"/images/d1.jpg",price:" 2500",brand:"Addidas"},{id:2,name:"Orange Casual Tshirt",category:"Shirts",image:"/images/d5.jpg",price:" 2000",brand:"Addidas"},{id:3,name:"Orange Casual Tshirt",category:"Shirts",image:"/images/d3.jpg",price:" 2000",brand:"Addidas"},{id:4,name:"Grey Casual Tshirt",category:"Shirts",image:"/images/d4.jpg",price:" 2000",brand:"Addidas"},{id:5,name:"White Sport Tshirt",category:"Shirts",image:"/images/d1.jpg",price:" 2500",brand:"Addidas"},{id:6,name:"Black Casual Tshirt",category:"Sport Shirts",image:"/images/d2.jpg",price:" 2000",brand:"Addidas"},{id:7,name:"Black Dress",category:"Dresses",image:"/images/d7.jpg",price:" 2500",brand:"Goodthreads "},{id:8,name:"Blue Dress",category:"Dresses",image:"/images/d8.jpg",price:" 2000",brand:"Goodthreads "}]}),s=(t(32),t(7));var m=function(e){return r.a.createElement("ul",{className:"products"},i.products.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:"product"},r.a.createElement(s.b,{to:"/product/"+e.id}," ",r.a.createElement("img",{className:"product-image ",src:e.image,alt:"black tshirt"}))),r.a.createElement("div",{className:"product-name"},r.a.createElement(s.b,{to:"/product/"+e.id},e.name)," "),r.a.createElement("div",{className:"product-brand"},e.brand),r.a.createElement("div",{className:"product-price"},e.price))})))},o=t(25),d=t.n(o);var u=function(e){var a=i.products.find((function(a){return a.id==e.match.params.id})),t=1;function n(){var e=document.getElementById("phnum").value,r={id:a.id,name:a.name,brand:a.brand,price:a.price,phoneNo:e};console.log(r),d.a.post("https://c8qetqah41.execute-api.us-east-1.amazonaws.com/dev/",r).then((function(e){console.log(e),alert(e.data)})).catch((function(e){(t+=1)<6&&n()}))}return r.a.createElement("div",null,r.a.createElement("div",{className:"back-to-result"},r.a.createElement(s.b,{to:"/"},"Back to result")),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"details-image"},r.a.createElement("img",{src:a.image,alt:"product"})),r.a.createElement("div",{className:"details-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,a.name)),r.a.createElement("li",null,a.brand),r.a.createElement("li",null,r.a.createElement("b",null,a.description)))),r.a.createElement("div",{className:"details-action"},r.a.createElement("ul",null,r.a.createElement("li",null,"Price:  Rs",a.price),r.a.createElement("li",null,"Status :",a.status),r.a.createElement("li",null,"QTY:",r.a.createElement("select",null,r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"))," "),r.a.createElement("input",{type:"text",id:"phnum",name:"PN"}),r.a.createElement("button",{onClick:n,className:"button"},"ORDER")))))},p=t(1);var E=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"brand"},r.a.createElement("button",{onClick:function(){return document.querySelector(".sidebar").classList.add("open")}},"\u2630"),r.a.createElement(s.b,{to:"/"},"SHOPMANDU"))),r.a.createElement("aside",{className:"sidebar"},r.a.createElement("div",null,r.a.createElement("h3",null,"Shopping Categories"),r.a.createElement("button",{className:"sidebar-close-button",onClick:function(){return document.querySelector(".sidebar").classList.remove("open")}},"X")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"index.html"}," Pants")),r.a.createElement("li",null,r.a.createElement("a",{href:"index.html"}," Shirts")))),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"content"},r.a.createElement(p.a,{path:"/product/:id",component:u}),r.a.createElement(p.a,{path:"/",exact:!0,component:m}))),r.a.createElement("footer",{className:"footer "},"ALL RIGHT RESERVED")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.a46d4f4c.chunk.js.map