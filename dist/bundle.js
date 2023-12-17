(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,'body {\n  font-family: Open Sans,sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n  overflow-x: hidden; \n  \n\n}\n\nimg {\n  max-width: 100%;\n  max-height: 100%;\n  cursor: pointer;\n}\n\nh1 {\n  font-size: 2.5em;\n  font-weight: bold;\n}\n\nnav {\n  display: none;\n}\n\n/* HEADER /////////////////////////////////////////////////// */\n\n.header-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 0.5px solid #ebf2f2;\n}\n\n.header-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header {\n  height: 3.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  padding-right: 5px;\n  width: 100%;\n  top: 0;\n  border-bottom: 0.5px solid #ebf2f2;\n  background-color: white;\n  z-index: 100;\n}\n\n\n.sidepanel {\n  box-sizing: border-box;\n  margin: 0px;\n  height: 0; \n  width: 100%; \n  position: fixed; \n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden; \n  transition: 0.5s;\n  list-style-type: none;\n}\n\n.top-burger-wrapper {\n  padding: 8px 8px 8px 8px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n  color: #fff;\n  cursor: pointer;\n  position: relative;\n}\n\n.sidepanel .closebtn {\n  position: absolute;\n  top: -7px;\n  right: 4px;\n  font-size: 36px;\n  margin-left: 50px;\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.open {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.burger-icon {\n  width: 30px;\n  height: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.line {\n  width: 100%;\n  height: 2px;\n  background-color: black;\n}\n\n.topnav {\n  display: none;\n}\n\n/* MAIN /////////////////////////////////////////////////// */\n\n.main-container {\n  margin: 0 auto;\n  position: relative;\n  width: auto;\n  margin-top: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main {\n  margin-top: 3rem;\n  padding-left: 1rem;\n  padding-bottom: 4rem;\n  padding-right: 1rem;\n}\n\n.description {\n  font-weight: 400;\n  line-height: 2.2rem;\n  margin-top: 20px;\n  max-width: 960px;\n  font-size: 1.3rem;\n}\n\n.blocks-section {\n  background-color: #ebf2f2;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.block-container {\n  background-color: white;\n  border-radius: 2%;\n  padding-bottom: 1rem;\n  margin: 2rem;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n\n.blocks-wrapper {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  background-color: #ebf2f2;\n}\n\n\n.block-container:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.block {\n  display: flex;\n  justify-content: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  padding-top: 2rem;\n  width: 140px;\n  min-width: 135px;\n  padding-right: 15px;\n}\n\n.block-text-container h1 {\n  font-size: 1.4em;\n}\n\n.image-container img {\n  height: 60px;\n}\n\n@media screen and (min-width: 800px) {\n  .blocks-section {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .topnav {\n    display: block;\n  }\n\n  .header {\n    position: relative;\n    height: 5rem;\n    border-bottom: 0;\n  }\n\n  .header-wrapper {\n    width: 100vw;\n    max-width: 1200px;\n  }\n\n  .header img {\n    padding-right: 4rem;\n  }\n\n  .burger-icon {\n    display: none;\n  }\n\n  nav {\n    text-align: center;\n    display: block;\n  }\n\n  nav ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  \n  nav ul li {\n    display: inline-block;\n    position: relative;\n  }\n  \n  nav ul li a {\n    font-weight: bold;\n    display: block;\n    padding: 10px;\n    padding-right: 1.5rem;\n    text-decoration: none;\n    color: #333;\n  }\n\n  nav ul li a::after {\n  content: "";\n  position: absolute;\n  top: calc(50% - 2px);\n  right: 12px;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid black;\n  transform: translateY(-50%);\n  }\n  \n\n  .dropdown-menu {\n    display: none;\n    position: absolute;\n    background-color: #fff;\n    padding: 10px;\n  }\n  \n  .dropdown:hover .dropdown-menu {\n    display: flex;\n    width: max-content;\n    border-radius: 7px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    box-shadow: 0 8px 8px hsla(0,0%,4%,.1), 0 0 0 1px hsla(0,0%,4%,.1);\n    animation: 0.3s show ease;\n  }\n\n  @keyframes show {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n\n  .main {\n    margin-top: 0;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    box-sizing: border-box;\n    width: 100vw;\n    max-width: 1200px;\n  }\n  .blocks-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    background-color: #ebf2f2\n  }\n\n  .blocks-section {\n    max-width: 1000px;\n  }  \n}\n\n.aElement {\n  display: block;\n  font-size: 2rem;\n  width: 100%;\n    border-bottom: 1px solid hsla(0,0%,100%,.4);\n}\n\n.innerList {\n  list-style: none;\n  padding: 0;\n}\n\n.aElement::after {\n  border: solid #98afae;\n  border-width: 0 2px 2px 0;\n  content: " ";\n  display: block;\n  height: 15px;\n  position: absolute;\n  right: 15px;\n  top: 30px;\n  transform: rotate(225deg) translate(5px,15px) scale(-1);\n  transition: transform .2s ease-out;\n  width: 15px;\n}\n\n\n.top-burger-wrapper:nth-child(2) {\n  display: block;\n}\n\n.inner-burger-wrapper a {\n  font-size: 1.2rem;\n  padding: 0.2rem 0;\n}\n\n\n.search-input {\n  margin-top: 5vh;\n  padding: 12px 10px;\n  width: 60vw;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  border: none;\n  outline: none;\n  font-size: x-large;\n}\n\n.search-form {\n  max-width: 1000px;\n  display: flex;\n  justify-content: center;\n}\n\n.is-empty {\n  display: flex;\n  font-size: xx-large;\n  justify-content: center;\n  align-items: center;\n}\n\n.sidepanel-top {\n  color: white;\n  margin-bottom: 1rem;\n  font-size: xx-large;\n  border-bottom: 1px solid white;\n}\n\n.is-closed {\n  display: none;\n  color: white\n}\n\n.is-opened {\n  display: block;\n  list-style-type: none;\n  color: #98afae;\n  font-size: 1.2rem;\n  padding: 0.2rem 0;\n}\n\n.sidepanel-top-is-clicked {\n  color: green;\n}\n\n.sidepanel-top-link {\n  display: block;\n  width: 100%;\n}\n\n.sidepanel-top-link::after {\n  border: solid #98afae;\n  border-width: 0 2px 2px 0;\n  content: " ";\n  display: block;\n  height: 15px;\n  position: absolute;\n  right: 15px;\n  top: 30px;\n  transform: rotate(225deg) translate(5px,15px) scale(-1);\n  transition: transform .2s ease-out;\n  width: 15px;\n}\n\n.sidepanel-opened {\n  height: 100%;\n  padding-top: 60px;\n  padding-left: 30px;\n  padding-right: 30px\n}',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);i&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],s=0;s<n.length;s++){var d=n[s],l=i.base?d[0]+i.base:d[0],p=r[l]||0,c="".concat(l," ").concat(p);r[l]=p+1;var u=t(c),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=o(m,i);i.byIndex=s,e.splice(s,0,{identifier:c,updater:g,references:1})}a.push(c)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var d=i(n,o),l=0;l<r.length;l++){var p=t(r[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=d}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),o=t.n(i),r=t(569),a=t.n(r),s=t(565),d=t.n(s),l=t(216),p=t.n(l),c=t(589),u=t.n(c),m=t(28),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;let f,b=[{text:"Why Spring",submenu:["Submenu 1","Submenu 2","Submenu 3","Submenu 4","Submenu 5"]},{text:"Learn",submenu:["Submenu 1","Submenu 2","Submenu 3","Submenu 4"]},{text:"Projects",submenu:["Submenu 1","Submenu 2","Submenu 3","Submenu 4","Submenu 5","Submenu 6","Submenu 7","Submenu 8","Submenu 9","Submenu 10","DEVELOPMENT TOOLS","Submenu 11","Submenu 12"]},{text:"Academy",submenu:["Submenu 1","Submenu 2"]},{text:"Solutions",submenu:["Submenu 1","Submenu 2","Submenu 3","Submenu 4","Submenu 5"]},{text:"Community",submenu:["Submenu 1","Submenu 2","Submenu 3"]}],h=[{title:"Spring Boot",desc:"Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",img:"https://spring.io/img/projects/spring-boot.svg"},{title:"Spring Framework",desc:"Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",img:"https://spring.io/img/projects/spring-framework.svg?v=2"},{title:"Spring Data",desc:"Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",img:"https://spring.io/img/projects/spring-data.svg"},{title:"Spring Cloud Data Flow",desc:"Provides an orchestration service for composable data microservice applications on modern runtimes.",img:"https://spring.io/img/projects/spring-data-flow.svg"},{title:"Spring Cloud",desc:"Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",img:"https://spring.io/img/projects/spring-cloud.svg"},{title:"Spring Security",desc:"Provides an orchestration service for composable data microservice applications on modern runtimes.",img:"https://spring.io/img/projects/spring-security.svg"}];const x=n=>{const e=document.getElementById("blocks-section"),{title:t,desc:i,img:o}=n,r=document.createElement("div");r.classList.add("block-container"),r.innerHTML=`\n  <article class="block-wrapper">\n  <a class="block">\n    <div class="image-container">\n      <img src="${o}" />\n    </div>\n    <div class="block-text-container">\n      <h1>${t}</h1>\n      <p>\n        ${i}\n      </p>\n    </div>\n  </a>\n</article>\n  `,e.appendChild(r)};document.addEventListener("DOMContentLoaded",(()=>{window.addEventListener("resize",y);let n=null,e=null;const t=document.getElementById("side-panel"),i=document.getElementById("closebtn"),o=document.getElementById("burger-icon"),r=document.getElementById("search-input");i.addEventListener("click",(()=>{null!==n&&(n.classList.remove("sidepanel-top-is-clicked"),e.classList.remove("is-opened")),t.classList.remove("sidepanel-opened")})),r.addEventListener("keyup",w),o.addEventListener("click",(()=>{t.classList.toggle("sidepanel-opened")})),b.map((n=>{(n=>{const{text:e,submenu:t}=n;let i=document.getElementById("navigation-ul");const o=document.createElement("li");o.classList.add("dropdown"),o.innerHTML=`\n  <a href="#">${e}</a>\n  `;const r=document.createElement("ul");r.classList.add("dropdown-menu"),t.map((n=>{r.innerHTML+=`\n      <li>\n        <p>${n}</p>  \n      </li>\n    `})),o.appendChild(r),i.appendChild(o)})(n),v(n)})),h.map((n=>x(n))),document.querySelectorAll(".sidepanel-top").forEach((t=>{t.addEventListener("click",(()=>{null!==n&&n!==t&&(e.classList.remove("is-opened"),n.classList.remove("sidepanel-top-is-clicked")),null!==n&&n.classList.remove("sidepanel-top-is-clicked"),t.classList.toggle("sidepanel-top-is-clicked");const i=t.nextElementSibling;i.classList.toggle("is-opened"),n=t,e=i}))}))}));const v=n=>{const e=document.getElementById("side-panel"),t=document.createElement("li");t.classList.add("sidepanel-top"),t.innerHTML=`\n  <a>${n.text}</a>\n  `;const i=document.createElement("ul");n.submenu.map((n=>{i.innerHTML+=`<li>${n}</li>`})),i.classList.add("is-closed"),e.appendChild(t),e.appendChild(i)};function y(){window.innerWidth>=900&&document.getElementById("side-panel").classList.remove("sidepanel-opened")}function w(){const n=document.getElementById("search-input").value.trim().toLowerCase();clearTimeout(f),f=setTimeout((()=>{!function(n){const e=h.filter((e=>e.title.toLowerCase().includes(n)||e.desc.toLowerCase().includes(n)));let t=document.getElementById("blocks-section");console.log(e),0===e.length?(t.innerHTML="No results",t.classList.add("is-empty")):(t.classList.remove("is-empty"),t.innerHTML="",e.map((n=>x(n))))}(n)}),300)}})()})();