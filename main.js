(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>p});var t=n(81),o=n.n(t),i=n(645),s=n.n(i),a=n(667),c=n.n(a),d=new URL(n(126),n.b),l=s()(o());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap);"]);var u=c()(d);l.push([e.id,"* {\r\n  box-sizing: border-box;\r\n  font-size: 1rem;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.to-do-section {\r\n  width: 90%;\r\n  margin: 20% 5%;\r\n  box-shadow: 5px 10px 20px #888;\r\n}\r\n\r\n.to-do-list-box {\r\n  background-color: white;\r\n}\r\n\r\n.to-do-title {\r\n  border-bottom: 1px solid #888;\r\n  height: 40px;\r\n  align-items: center;\r\n  padding-left: 2%;\r\n}\r\n\r\n.titleBox,\r\n.inputBox,\r\n.task-box {\r\n  position: relative;\r\n}\r\n\r\n.titleBox i,\r\n.inputBox i, \r\n.task-box i {\r\n  position: absolute;\r\n  color: gray;\r\n  right: 3%;\r\n  top: 12px;\r\n  font-size: 15px;\r\n}\r\n\r\n.task-box i {\r\n  visibility: hidden;\r\n}\r\n\r\n.titleBox i:hover,\r\n.inputBox i:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.description-input {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: none;\r\n  border-bottom: 1px solid #888;\r\n  padding-left: 2%;\r\n}\r\n\r\n.error-message {\r\n  margin: 0;\r\n  color: red;\r\n  font-size: 0.8rem;\r\n  padding-left: 2%;\r\n  transition: visibility 5s;\r\n}\r\n\r\n.description-input:focus {\r\n  outline: none;\r\n}\r\n\r\n.description-input::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.task-box {\r\n  border-bottom: 1px solid #888;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-box:focus-within {\r\n  outline: none;\r\n  background-color: #e4e3ae;\r\n}\r\n\r\n.checkBox-and-description-box {\r\n  padding-left: 2%;\r\n  gap: 0.5rem;\r\n  width: 95%;\r\n}\r\n\r\n.task-description {\r\n  width: 95%;\r\n  height: 40px;\r\n  margin: 0;\r\n  padding: 10px 0;\r\n}\r\n\r\n.task-description:focus {\r\n  outline: none;\r\n}\r\n\r\n.check-box:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.dots-box {\r\n  gap: 0.2rem;\r\n  padding-right: 3%;\r\n}\r\n\r\n.dot {\r\n  height: 5px;\r\n  width: 5px;\r\n  background-color: #8888;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.dots-box:hover {\r\n  cursor: url("+u+"), move;\r\n}\r\n\r\n.dots-box:hover .dot {\r\n  background-color: #888;\r\n}\r\n\r\n.clear-all-completed {\r\n  height: 40px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #888;\r\n}\r\n\r\n.clear-all-completed:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n",""]);const p=l},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(t)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},667:e=>{e.exports=function(e,r){return r||(r={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]|(%20)/.test(e)||r.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],d=t.base?c[0]+t.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var h=o(f,t);t.byIndex=a,r.splice(a,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);r[a].references--}for(var c=t(e,o),d=0;d<i.length;d++){var l=n(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},126:(e,r,n)=>{e.exports=n.p+"d3b0679ac82fe3bee0cf.png"}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),i=n(569),s=n.n(i),a=n(565),c=n.n(a),d=n(216),l=n.n(d),u=n(589),p=n.n(u),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=e=>{const r=document.querySelector(".to-do-list-box"),n=[];for(let t=0;t<e.length;t+=1){n[t]=document.createElement("div"),n[t].classList.add("flex-row","task-box");for(let r=t;r<e.length;r+=1)e[r].index<e[t].index&&([e[t],e[r]]=[e[r],e[t]]);""!==e[t].description&&(n[t].innerHTML=`<div class = "checkBox-and-description-box flex-row">\n                                  <input class = "check-box" type = "checkBox">\n                                  <p class = "d${e[t].index} task-description">${e[t].description}</p>\n                                </div>\n                                <div class = "d${e[t].index} dots-box flex-column"><span class = "dot"></span><span class = "dot"></span><span class = "dot"></span></div>\n                                <i id = "d${e[t].index}" class="fa-regular fa-trash-can"></i>\n                                `,r.appendChild(n[t])),document.querySelector(`.d${e[t].index}`).contentEditable=!0}},g=new class{constructor(){this.tasks=JSON.parse(localStorage.getItem("storedTasks"))||[]}addTask=e=>{if(""!==e.description){const r={description:e.description,completed:!1,index:this.tasks.length+1};this.tasks.push(r),localStorage.setItem("storedTasks",JSON.stringify(this.tasks))}return this.tasks};deleteTask=e=>{this.tasks.splice(e-1,1);for(let r=e-1;r<this.tasks.length;r+=1)this.tasks[r].index-=1;return localStorage.setItem("storedTasks",JSON.stringify(this.tasks)),this.tasks};editTask=e=>{const r=document.querySelector(`.d${e}`).innerHTML;this.tasks[e-1].description=r,localStorage.setItem("storedTasks",JSON.stringify(this.tasks))}},v=JSON.parse(localStorage.getItem("storedTasks"))||[];m(v);const x=document.querySelector("#taskDescription");document.querySelector("#taskValidation").addEventListener("click",(()=>{let e={};""===x.value&&(document.querySelector(".error-message").textContent="Please, the task's description is required"),""!==x.value&&(document.querySelector(".error-message").textContent="",e={description:x.value},document.querySelectorAll(".task-box").forEach((e=>e.remove())),m(g.addTask(e))),x.value=""}));const b=document.querySelector(".to-do-list-box");b.addEventListener("click",(e=>{if(e.target&&e.target.matches("p")){const r=e.target.classList;document.querySelector(`div.${r[0]}`).style.visibility="hidden",document.getElementById(`${r[0]}`).style.visibility="visible",document.getElementById(`${r[0]}`).addEventListener("click",(()=>{document.querySelectorAll(".task-box").forEach((e=>e.remove())),m(g.deleteTask(Number(r[0].replace("d",""))))}))}})),b.addEventListener("input",(e=>{if(e.target&&e.target.matches("p")){const r=e.target.classList;g.editTask(Number(r[0].replace("d","")))}}))})()})();