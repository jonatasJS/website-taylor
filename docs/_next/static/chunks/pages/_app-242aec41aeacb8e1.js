(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5656)}])},5656:function(t,e,n){"use strict";n.r(e);var r=n(5893),o=(n(906),n(9008)),i=n(4865),s=n.n(i),a=n(1163);function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){u(t,e,n[e])}))}return t}a.default.events.on("routeChangeStart",(function(){return s().start()})),a.default.events.on("routeChangeComplete",(function(){return s().done()})),a.default.events.on("routeChangeError",(function(){return s().done()})),e.default=function(t){var e=t.Component,n=t.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Iefutebol"}),(0,r.jsx)("meta",{name:"description",content:"Entre em contato com o @iefutebol"}),(0,r.jsx)("link",{rel:"icon",onClick:function(){console.log("test")},href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/styles/nprogress.css"}),(0,r.jsx)("meta",{name:"description",content:"Entre em contato com o @iefutebol"}),(0,r.jsx)("meta",{name:"author",content:"J\xf4natas"}),(0,r.jsx)("meta",{property:"og:title",content:"Iefutebol Grupo"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://iefutebol.vercel.app/"}),(0,r.jsx)("meta",{property:"og:description",content:"Entre em contato com o @iefutebol"}),(0,r.jsx)("meta",{property:"og:image",content:"/images/Logo-Photo.jpg"})]}),(0,r.jsx)(e,c({},n))]})}},906:function(){},9008:function(t,e,n){t.exports=n(5443)},1163:function(t,e,n){t.exports=n(387)},4865:function(t,e,n){var r,o;void 0===(o="function"===typeof(r=function(){var t={version:"0.2.0"},e=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(t,e,n){return t<e?e:t>n?n:t}function r(t){return 100*(-1+t)}function o(t,n,o){var i;return(i="translate3d"===e.positionUsing?{transform:"translate3d("+r(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+r(t)+"%,0)"}:{"margin-left":r(t)+"%"}).transition="all "+n+"ms "+o,i}t.configure=function(t){var n,r;for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&(e[n]=r);return this},t.status=null,t.set=function(r){var a=t.isStarted();r=n(r,e.minimum,1),t.status=1===r?null:r;var u=t.render(!a),c=u.querySelector(e.barSelector),l=e.speed,f=e.easing;return u.offsetWidth,i((function(n){""===e.positionUsing&&(e.positionUsing=t.getPositioningCSS()),s(c,o(r,l,f)),1===r?(s(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout((function(){s(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){t.remove(),n()}),l)}),l)):setTimeout(n,l)})),this},t.isStarted=function(){return"number"===typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout((function(){t.status&&(t.trickle(),n())}),e.trickleSpeed)};return e.trickle&&n(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var r=t.status;return r?("number"!==typeof e&&(e=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+e,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*e.trickleRate)},function(){var e=0,n=0;t.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&t.start(),e++,n++,r.always((function(){0===--n?(e=0,t.done()):t.set((e-n)/e)})),this):this}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=e.template;var i,a=o.querySelector(e.barSelector),c=n?"-100":r(t.status||0),l=document.querySelector(e.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),e.showSpinner||(i=o.querySelector(e.spinnerSelector))&&f(i),l!=document.body&&u(l,"nprogress-custom-parent"),l.appendChild(o),o},t.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&f(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var i=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),s=function(){var t=["Webkit","O","Moz","ms"],e={};function n(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()}))}function r(e){var n=document.body.style;if(e in n)return e;for(var r,o=t.length,i=e.charAt(0).toUpperCase()+e.slice(1);o--;)if((r=t[o]+i)in n)return r;return e}function o(t){return t=n(t),e[t]||(e[t]=r(t))}function i(t,e,n){e=o(e),t.style[e]=n}return function(t,e){var n,r,o=arguments;if(2==o.length)for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&i(t,n,r);else i(t,o[1],o[2])}}();function a(t,e){return("string"==typeof t?t:l(t)).indexOf(" "+e+" ")>=0}function u(t,e){var n=l(t),r=n+e;a(n,e)||(t.className=r.substring(1))}function c(t,e){var n,r=l(t);a(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function l(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function f(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t})?r.call(e,n,e,t):r)||(t.exports=o)}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(6363),e(387)}));var n=t.O();_N_E=n}]);