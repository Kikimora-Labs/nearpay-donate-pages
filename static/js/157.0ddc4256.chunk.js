"use strict";(self.webpackChunknearpay_donate=self.webpackChunknearpay_donate||[]).push([[157],{9933:function(n,e,t){t.d(e,{i6:function(){return r},Yw:function(){return a}});var r={};t.r(r),t.d(r,{U:function(){return p}});var a={};t.r(a),t.d(a,{fetchPayment:function(){return h}});var i=t(4569),s=t.n(i),o=t(8767),c=t(5861),l=t(7757),u=t.n(l);function f(n){return!0===n.isAxiosError}function d(){return(d=(0,c.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e();case 3:return t=n.sent,r=t.data,n.abrupt("return",r.result);case 8:if(n.prev=8,n.t0=n.catch(0),!f(n.t0)||!n.t0.response){n.next=13;break}throw n.t0.response.data.error;case 13:throw n.t0;case 14:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function p(){return function(n){return d.apply(this,arguments)}((function(){return s().get((n="v1/currencies",[o.N.baseApi,n].join("/")));var n}))}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,c.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(o.N.payWithNearUrl,"/api/payment/").concat(e));case 2:return t=n.sent,n.abrupt("return",y(t.data));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return{paymentId:n.payment_id,network:n.network,status:n.status,address:n.address,amount:n.amount,name:n.name,description:n.description,displayAmountUsd:n.display_amount_usd,displayAmount:n.display_amount,returnUrl:n.return_url,expiryAt:n.expiry_at}}},8767:function(n,e,t){t.d(e,{N:function(){return r}});var r={baseApi:"https://api-widget.nearpay.co/api",defaultCurrency:"NEAR",payWithNearUrl:"https://paywithnear.com"}},4967:function(n,e,t){t.d(e,{M:function(){return c},T:function(){return u}});var r=t(5861),a=t(7757),i=t.n(a),s=t(3175),o=t(8963),c=function(n){return n?o.utils.format.parseNearAmount(n.toString()):null},l=new Error("Near is not ready yet");function u(){var n=(0,s.N)();return{isAuthorized:null!==n&&!!n.walletConnection.getAccountId(),isReady:null!==n,login:function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}throw l;case 2:return e.next=4,n.walletConnection.requestSignIn({successUrl:t.successUrl,failureUrl:t.failureUrl});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),send:function(){var e=(0,r.Z)(i().mark((function e(t,r,a){var s,c,u,f,d,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}throw l;case 2:return s=n.walletConnection.getAccountId(),c=o.utils.KeyPair.fromRandom("ed25519"),u=c.getPublicKey(),e.next=7,n.provider.block({finality:"final"});case 7:return f=e.sent,d=o.utils.serialize.base_decode(f.header.hash),p=o.transactions.createTransaction(s,u,r||"",1,[o.transactions.transfer(t)],d),e.next=12,n.walletConnection.requestSignTransactions({transactions:[p],callbackUrl:a});case 12:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()}}},1591:function(n,e,t){t.d(e,{V:function(){return c}});var r=t(885),a=t(9933),i=t(2791),s=t(6871),o=t(2419),c=function(){var n=(0,s.UO)().id,e=(0,s.s0)(),t=(0,i.useState)(!1),c=(0,r.Z)(t,2),l=c[0],u=c[1],f=(0,o.ZP)(n?"payment":null,(function(){return n?a.Yw.fetchPayment(n):null}),{refreshInterval:l?0:1,shouldRetryOnError:!1});(0,i.useEffect)((function(){var t;if("completed"!==(null===(t=f.data)||void 0===t?void 0:t.status)){var r=f.error;"not_found"===(null===r||void 0===r?void 0:r.response.data.status)&&null!==r&&void 0!==r&&r.response.data.expiry_at?u(!0):"not_found"!==(null===r||void 0===r?void 0:r.response.data.status)||e("/not-found")}else e("/payment/".concat(n,"/success"))}),[e,f.data,f.error,n]);var d=(0,i.useCallback)((function(){u(!0)}),[]);return{payment:f.data,paymentId:n,isExpired:l,handleExpired:d}}},4443:function(n,e,t){t.d(e,{RX:function(){return b},aN:function(){return _},zL:function(){return S},UL:function(){return U},v5:function(){return N}});var r,a=t(8683),i=t(4925),s=t(9824),o=t(1694),c=t.n(o),l=t(2791),u=t(184),f=["className"],d=(0,s.block)("pay-with-near-layout"),p=(0,s.block)("pay-with-near-main"),h=(0,s.block)("pay-with-near-footer"),m=function(n){var e=n.children,t=n.className;return(0,u.jsxs)("div",{className:d.mix(t),children:[(0,u.jsx)("header",{className:d("header"),children:(0,u.jsx)("img",{className:d("logo"),src:"/assets/img/logo.png",alt:"nearpay-logo"})}),e]})},y=function(n){return(0,u.jsx)("main",{className:p.mix(n.className),children:n.children})},v=function(n){var e=n.className,t=(0,i.Z)(n,f);return(0,u.jsx)("footer",(0,a.Z)((0,a.Z)({className:c()(h(),e)},t),{},{children:(0,u.jsx)("a",{className:h("support"),href:"mailto:support@nearpay.co",children:"Support"})}))},w=(0,s.block)("pay-with-near-general-layout"),b=function(n){var e=n.className,t=n.children;return(0,u.jsxs)(m,{className:w.mix(e),children:[(0,u.jsx)(y,{className:w("main"),children:t}),(0,u.jsx)(v,{})]})},g=["title","titleId"];function x(){return x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},x.apply(this,arguments)}function C(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function j(n,e){var t=n.title,a=n.titleId,i=C(n,g);return l.createElement("svg",x({width:"1em",height:"1em",viewBox:"0 0 100 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":a},i),t?l.createElement("title",{id:a},t):null,r||(r=l.createElement("path",{d:"M88.723 1.4c-8.956-3.65-20.125.374-27.291 5.895-2.213 1.684-2.423 4.678-.527 6.643 1.897 1.965 5.269 2.152 7.482.468 5.269-4.117 12.117-5.988 16.016-4.491 4.53 1.777 5.163 8.609 5.163 12.445 0 3.836-.631 10.666-5.163 12.444-3.9 1.685-10.749-.187-16.016-4.304L38.672 7.387c-7.165-5.52-18.334-9.544-27.292-5.895C6.217 3.552 0 8.885 0 22.452s6.217 18.901 11.38 21.052c8.957 3.65 20.126-.374 27.292-5.895 2.213-1.684 2.423-4.679.527-6.644-1.897-1.965-5.27-2.151-7.482-.468-5.269 4.117-12.117 5.989-16.016 4.491-4.53-1.777-5.164-8.608-5.164-12.444 0-3.837.632-10.667 5.164-12.444 3.794-1.591 10.748.374 15.911 4.49l29.715 23.112C66.596 41.819 73.97 45 81.137 45c2.529 0 5.057-.374 7.482-1.404 5.163-2.058 11.38-7.485 11.38-21.052.104-13.66-6.112-18.993-11.276-21.144z",fill:"#081B27"})))}var k,N=l.forwardRef(j),O=(t.p,["title","titleId"]);function E(){return E=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},E.apply(this,arguments)}function I(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function P(n,e){var t=n.title,r=n.titleId,a=I(n,O);return l.createElement("svg",E({width:19,height:19,viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},a),t?l.createElement("title",{id:r},t):null,k||(k=l.createElement("path",{d:"M8.60462 13.166C8.55871 13.1213 8.36238 12.9524 8.20088 12.795C7.18517 11.8726 5.52267 9.46641 5.01521 8.20699C4.93367 8.01573 4.76108 7.53217 4.75 7.27381C4.75 7.02624 4.807 6.79025 4.92258 6.56505C5.08408 6.28432 5.33821 6.05912 5.63825 5.93572C5.84646 5.85629 6.4695 5.73289 6.48058 5.73289C7.16221 5.60949 8.26975 5.54163 9.49367 5.54163C10.6598 5.54163 11.7222 5.60949 12.4141 5.71053C12.4252 5.72209 13.1995 5.84549 13.4647 5.98046C13.9492 6.22802 14.25 6.71158 14.25 7.22908V7.27381C14.2381 7.61083 13.9373 8.31959 13.9262 8.31959C13.418 9.51114 11.837 11.8618 10.7865 12.8066C10.7865 12.8066 10.5165 13.0727 10.3479 13.1884C10.1056 13.3688 9.80558 13.4583 9.50554 13.4583C9.17067 13.4583 8.85875 13.3573 8.60462 13.166Z",fill:"black"})))}var U=l.forwardRef(P);t.p;t.p,(0,s.block)("pay-with-near-ui-button");var Z=function(n){var e=n.animated,t=void 0===e||e,r=n.color,a=void 0===r?"rgb(8, 27, 39)":r;return(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 64 28",height:"28",width:"64",style:{height:"100%",width:"100%",background:"rgba(255, 255, 255, 0)",shapeRendering:"geometricPrecision",animation:t?"1.1236s linear 0s infinite normal forwards running breath-e2cae00f-38fa-433d-b977-fc5473900507":""},children:[(0,u.jsx)("g",{className:"ldl-scale",style:{transformOrigin:"50% 50%",transform:"rotate(0deg) scale(0.48, 0.48)"},children:(0,u.jsx)("g",{className:"ldl-ani",style:{transformOrigin:"6.5px 6.5px",transform:"scale(0.91)"},children:(0,u.jsx)("g",{className:"ldl-layer",children:(0,u.jsx)("g",{className:"ldl-ani",children:(0,u.jsx)("path",{fill:"#081B27",d:"M56.3957 0.870853C50.7534 -1.39971 43.7165 1.10377 39.2019 4.53889C37.808 5.58674 37.6754 7.45008 38.8701 8.67272C40.065 9.89535 42.1894 10.0116 43.5836 8.96375C46.903 6.40218 51.2175 5.23757 53.6737 6.16934C56.5283 7.2753 56.9268 11.5258 56.9268 13.9126C56.9268 16.2998 56.5289 20.5497 53.6737 21.6559C51.2175 22.7042 46.9021 21.5396 43.5836 18.9781L24.8633 4.59657C20.3493 1.16151 13.3127 -1.34203 7.6696 0.928536C4.4166 2.20981 0.5 5.5282 0.5 13.9699C0.5 22.4117 4.4166 25.7308 7.6696 27.0693C13.3122 29.3398 20.3488 26.8362 24.8633 23.4011C26.2574 22.3533 26.39 20.4899 25.1952 19.2672C24.0004 18.0446 21.8759 17.9284 20.4818 18.9762C17.1625 21.5377 12.8478 22.7023 10.3915 21.7706C7.53718 20.6646 7.13851 16.4142 7.13851 14.0275C7.13851 11.6402 7.5366 7.39021 10.3915 6.28425C12.7816 5.29448 17.1626 6.51717 20.4157 9.07866L39.1359 23.4589C42.4553 26.0204 47.1016 28 51.6162 28C53.2096 28 54.8024 27.7672 56.3297 27.1263C59.5825 25.8457 63.4992 22.4687 63.4992 14.0273C63.5649 5.52762 59.6488 2.20976 56.3957 0.870853Z",style:{fill:a}})})})})}),(0,u.jsx)("style",{id:"breath-e2cae00f-38fa-433d-b977-fc5473900507","data-anikit":"",children:"@keyframes breath-e2cae00f-38fa-433d-b977-fc5473900507\n{\n  0% {\n    animation-timing-function: cubic-bezier(0.9647,0.2413,-0.0705,0.7911);\n    transform: scale(0.91);\n  }\n  51% {\n    animation-timing-function: cubic-bezier(0.9226,0.2631,-0.0308,0.7628);\n    transform: scale(1.02994);\n  }\n  100% {\n    transform: scale(0.91);\n  }\n}"})]})};function _(n){return(0,u.jsx)(Z,(0,a.Z)({},n))}var A=(0,s.block)("pay-with-near-loader-container"),S=function(n){return(0,u.jsx)("div",{className:A(),children:n.children})}}}]);
//# sourceMappingURL=157.0ddc4256.chunk.js.map