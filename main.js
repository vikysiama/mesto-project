(()=>{"use strict";var e={965:(e,t,n)=>{e.exports=n.p+"c6938660eec019fefd68.woff"},540:(e,t,n)=>{e.exports=n.p+"15ca31c0a2a68f76d2d1.woff2"},1:(e,t,n)=>{e.exports=n.p+"9053572c46aeb4b16caa.woff"},566:(e,t,n)=>{e.exports=n.p+"293fd13dbca5a3e450ef.woff2"},938:(e,t,n)=>{e.exports=n.p+"8398b3762d7b06fc3b8c.woff"},556:(e,t,n)=>{e.exports=n.p+"6cc68d6b835a3dd06e7e.woff2"},729:(e,t,n)=>{e.exports=n.p+"6f86ece55e54220c5485.svg"},373:(e,t,n)=>{e.exports=n.p+"012f4bba90d4c7730109.svg"},352:(e,t,n)=>{e.exports=n.p+"a086f758840ae814ecde.svg"},730:(e,t,n)=>{e.exports=n.p+"03b78ada3425e9132ff3.svg"},903:(e,t,n)=>{e.exports=n.p+"fe17a515669479b1e649.svg"},296:(e,t,n)=>{e.exports=n.p+"42068bf87844a9306b30.jpg"},278:(e,t,n)=>{e.exports=n.p+"a272f74647ce1392b3b5.jpg"},806:(e,t,n)=>{e.exports=n.p+"469d401f6c1af01a07d1.jpg"},429:(e,t,n)=>{e.exports=n.p+"bf45e82757b0b9e50dfb.svg"},284:(e,t,n)=>{e.exports=n.p+"2ceb783afbab75916ddc.svg"},499:(e,t,n)=>{e.exports=n.p+"6f41966c71dd7895857f.svg"},904:(e,t,n)=>{e.exports=n.p+"a1892ea72cb87c8fc3aa.svg"},212:(e,t,n)=>{e.exports=n.p+"c15cb08ab8ecfaba54c6.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.m=e,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href;var r={};(()=>{function e(e,t){e.reset();var n=e.querySelector(t.submitButtonSelector);n.disabled=!0,n.classList.add(t.inactiveButtonClass)}n.d(r,{d:()=>M,G:()=>J});var t={formSelector:".popup__admin",inputSelector:".popup__item",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__item_type_error",errorClass:"popup__item-error_active"};function o(e){e.classList.add("popup_opened"),document.addEventListener("keydown",a)}function c(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",a)}function a(e){"Escape"===e.key&&c(document.querySelector(".popup_opened"))}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";e.textContent=t?r:n}var u={baseUrl:" https://nomoreparties.co/v1/plus-cohort-22",headers:{authorization:"0e908f15-de63-432f-9e81-6b943fef01bb","Content-Type":"application/json"}};function s(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var l=function(e){return fetch("".concat(u.baseUrl,"/cards/likes/").concat(e._id),{method:e.likes.map((function(e){return e._id})).includes(J)?"DELETE":"PUT",body:JSON.stringify({_id:J}),headers:u.headers}).then(s)},d=function(e){return fetch("".concat(u.baseUrl,"/cards/").concat(e._id),{method:"DELETE",body:JSON.stringify({_id:e._id}),headers:u.headers}).then(s)};function p(e,t){var n=b.querySelector(".photo-cards__item").cloneNode(!0),r=n.querySelector(".photo-cards__image"),c=n.querySelector(".photo-cards__title"),a=n.querySelector(".photo-cards__like-button"),i=n.querySelector(".photo-cards__trash-button"),u=n.querySelector(".photo-cards__count-like");function s(e){u.textContent=e.likes.length,e.likes.map((function(e){return e._id})).includes(t)?a.classList.add("photo-cards__like-button_active"):a.classList.remove("photo-cards__like-button_active")}function l(t){n.likes=t.likes.map((function(e){return e._id})),s(t),e=t}return n.likes=e.likes.map((function(e){return e._id})),n.ownerid=e.owner._id,u.textContent=e.likes.length,r.src=e.link,r.alt=e.name,c.textContent=e.name,s(e),n.ownerid===t?i.addEventListener("click",(function(){d(e).then((function(){n.remove()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally()})):i.remove(),a.addEventListener("click",(function(){M(e,l)})),r.addEventListener("click",(function(){return _.src=e.link,_.alt=e.name,v.textContent=e.name,o(m)})),n}var f=document.querySelector(".photo-cards"),b=document.querySelector("#photo-card").content,m=document.querySelector(".popup_image"),_=m.querySelector(".view-window__image"),v=m.querySelector(".view-window__title");function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t.preventDefault();var r=t.submitter,o=r.textContent;i(r,!0,o,n),e().then((function(){t.target.reset()})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){i(r,!1,o)}))}new URL(n(729),n.b),new URL(n(730),n.b),new URL(n(903),n.b),new URL(n(296),n.b),new URL(n(278),n.b),new URL(n(806),n.b),new URL(n(429),n.b),new URL(n(284),n.b),new URL(n(499),n.b),new URL(n(904),n.b),new URL(n(212),n.b),new URL(n(373),n.b),new URL(n(352),n.b),new URL(n(965),n.b),new URL(n(540),n.b),new URL(n(1),n.b),new URL(n(566),n.b),new URL(n(938),n.b),new URL(n(556),n.b);var S=document.querySelector(".profile__edit-button"),g=document.querySelectorAll(".popup__close-button"),L=document.querySelector(".profile__add-button"),w=document.querySelector(".profile__image"),q=document.querySelector(".popup_edit-profile"),x=q.querySelector(".popup__container").querySelector(".popup__admin"),k=document.querySelector(".popup__item_el_name-user"),E=document.querySelector(".popup__item_el_profession"),U=document.querySelector(".profile__title"),C=document.querySelector(".profile__subtitle"),R=document.querySelector(".popup_new-avatar"),A=R.querySelector(".popup__container").querySelector(".popup__admin"),j=A.querySelector(".popup__item_el_link"),O=document.querySelector(".popup_new-place"),T=O.querySelector(".popup__container"),P=T.querySelector(".popup__admin"),B=P.querySelector(".popup__item_el_title"),N=T.querySelector(".popup__item_el_link");P.addEventListener("submit",(function(e){return function(e){h((function(){return(e=B.value,t=N.value,fetch("".concat(u.baseUrl,"/cards"),{method:"POST",body:JSON.stringify({name:e,link:t}),headers:u.headers}).then(s)).then((function(e){!function(e,t){f.prepend(p(e,t))}(e,J),c(O),P.reset()}));var e,t}),e)}(e)})),x.addEventListener("submit",(function(e){return function(e){h((function(){return(e=k.value,t=E.value,fetch("".concat(u.baseUrl,"/users/me"),{method:"PATCH",body:JSON.stringify({name:e,about:t}),headers:u.headers}).then(s)).then((function(e){U.textContent=e.name,C.textContent=e.about,c(q)}));var e,t}),e)}(e)})),A.addEventListener("submit",(function(e){return function(e){h((function(){return(e=j.value,N.value,fetch("".concat(u.baseUrl,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:e}),headers:u.headers}).then(s)).then((function(e){w.style="background-image: url(".concat(e.avatar,")"),c(R),A.reset()}));var e}),e)}(e)})),w.addEventListener("click",(function(){return o(R),e(A,t)})),S.addEventListener("click",(function(){return o(q),e=U,t=C,k.value=e.textContent,void(E.value=t.textContent);var e,t})),L.addEventListener("click",(function(){return o(O),e(P,t)}));for(var J,D=function(){var e=g[I].closest(".popup");g[I].addEventListener("click",(function(){return c(e)}))},I=0;I<g.length;I++)D();function M(e,t){l(e).then(t).catch((function(e){console.log("Ошибка: ".concat(e))})).finally()}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n)):(t.disabled=!0,t.classList.add(n))}(n,r,t.inactiveButtonClass)}))}))}(t,e)}))}(t),Array.from(document.querySelectorAll(".popup")).forEach((function(e){e.addEventListener("click",(function(t){t.currentTarget===t.target&&c(e)}))})),Promise.all([fetch("".concat(u.baseUrl,"/users/me"),{headers:u.headers}).then(s),fetch("".concat(u.baseUrl,"/cards"),{headers:u.headers}).then(s)]).then((function(e){var t,n,r,o,c,a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),i=a[0],u=a[1];t=i.name,n=i.about,r=i.avatar,o=document.querySelector(".profile__title"),c=document.querySelector(".profile__subtitle"),w.style="background-image: url(".concat(r,")"),o.textContent=t,c.textContent=n,J=i._id,u.forEach((function(e){f.append(p(e,J))}))})).catch((function(e){console.log(e)}))})()})();
//# sourceMappingURL=main.js.map