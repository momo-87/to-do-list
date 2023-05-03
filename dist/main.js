(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>u});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),c=e(667),s=e.n(c),l=new URL(e(126),e.b),p=a()(o());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap);"]);var d=s()(l);p.push([n.id,"* {\r\n  box-sizing: border-box;\r\n  font-size: 1rem;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.to-do-section {\r\n  width: 90%;\r\n  margin: 20% 5%;\r\n  box-shadow: 5px 10px 20px #888;\r\n}\r\n\r\n.to-do-list-box {\r\n  background-color: white;\r\n}\r\n\r\n.to-do-title {\r\n  border-bottom: 1px solid #888;\r\n  height: 40px;\r\n  align-items: center;\r\n  padding-left: 2%;\r\n}\r\n\r\n.titleBox,\r\n.inputBox {\r\n  position: relative;\r\n}\r\n\r\n.titleBox i,\r\n.inputBox i {\r\n  position: absolute;\r\n  color: gray;\r\n  right: 3%;\r\n  top: 12px;\r\n  font-size: 15px;\r\n}\r\n\r\n.titleBox i:hover,\r\n.inputBox i:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.description-input {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: none;\r\n  border-bottom: 1px solid #888;\r\n  padding-left: 2%;\r\n}\r\n\r\n.description-input:focus {\r\n  outline: none;\r\n}\r\n\r\n.description-input::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.task-box {\r\n  border-bottom: 1px solid #888;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-box:focus {\r\n  outline: none;\r\n  background-color: #e4e3ae;\r\n}\r\n\r\n.checkBox-and-description-box {\r\n  padding-left: 2%;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.check-box:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.dots-box {\r\n  gap: 0.2rem;\r\n  padding-right: 3%;\r\n}\r\n\r\n.dot {\r\n  height: 5px;\r\n  width: 5px;\r\n  background-color: #8888;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.dots-box:hover {\r\n  cursor: url("+d+"), move;\r\n}\r\n\r\n.dots-box:hover .dot {\r\n  background-color: #888;\r\n}\r\n\r\n.clear-all-completed {\r\n  height: 40px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #888;\r\n}\r\n\r\n.clear-all-completed:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n",""]);const u=p},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var h=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),l=0;l<i.length;l++){var p=e(i[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},126:(n,r,e)=>{n.exports=e.p+"d3b0679ac82fe3bee0cf.png"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),l=e(216),p=e.n(l),d=e(589),u=e.n(d),f=e(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=[],x=document.querySelector(".to-do-list-box");(()=>{const n=[];for(let r=0;r<v.length;r+=1){n[r]=document.createElement("div"),n[r].classList.add("flex-row","task-box"),n[r].contentEditable=!0;for(let e=r;e<v.length;e+=1)v[e].index<v[r].index&&([v[r],v[e]]=[v[e],v[r]]),n[r].innerHTML=`<div class = "checkBox-and-description-box flex-row">\n                                        <input class = "check-box" type = "checkBox">\n                                        <p class = "task-description">${v[r].description}</p>\n                                     </div>\n                                    <div class = "dots-box flex-column"><span class = "dot"></span><span class = "dot"></span><span class = "dot"></span></div>\n                                     `;x.appendChild(n[r])}})()})()})();