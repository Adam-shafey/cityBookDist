!function(e){function t(t){for(var a,r,u=t[0],l=t[1],p=t[2],d=t[3]||[],m=0,g=[];m<u.length;m++)r=u[m],o[r]&&g.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);var h=document.getElementsByTagName("head")[0];for(d.forEach(function(e){if(void 0===o[e]){o[e]=null;var t=document.createElement("link");s.nc&&t.setAttribute("nonce",s.nc),t.rel="prefetch",t.as="script",t.href=c(e),h.appendChild(t)}});g.length;)g.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={0:0},o={0:0},i=[];function c(e){return s.p+"js/"+{2:"91765ad09a731468b278",3:"910eddbcedbd94251a52"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{3:1}[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+{2:"91765ad09a731468b278",3:"910eddbcedbd94251a52"}[e]+".css",r=s.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=(l=o[i]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===a||c===r))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){var l;if((c=(l=u[i]).getAttribute("data-href"))===a||c===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,n(o)},p.href=r,document.getElementsByTagName("head")[0].appendChild(p)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=a);var i,u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e),i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,u.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/examples/material-ui/",s.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;t([[],{},0,[2,3]]),i.push([300,1]),n()}({262:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var a=n(1),r=n.n(a),o=n(263),i=n.n(o),c=n(83),s=n(265),u=n.n(s),l=n(168),p=n.n(l);function f(e,t,n,a,r,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(a,r)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){f(o,a,r,i,c,"next",e)}function c(e){f(o,a,r,i,c,"throw",e)}i(void 0)})}}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&m(e.prototype,t),n&&m(e,n)}(e,[{key:"loadAds",value:function(){setTimeout(function(){"undefined"!=typeof _codefund&&_codefund.serve&&_codefund.serve(),(window.adsbygoogle=window.adsbygoogle||[]).push({})},10)}},{key:"trackPageView",value:function(){var e=window.ga;void 0!==e&&e&&e("send",{hitType:"pageview",page:window.location.pathname})}},{key:"apply",value:function(e){var t=this;e.hooks.beforeRender.tapPromise("RemoveCSS",function(){var e=d(regeneratorRuntime.mark(function e(n){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(c.createMuiTheme)({palette:{primary:u.a,accent:p.a,type:"light"},typography:{useNextVariants:!0}}),o=Object(c.createGenerateClassName)(),n.children=r.a.createElement(i.a,{generateClassName:o},r.a.createElement(c.MuiThemeProvider,{theme:a},n.children)),t.loadAds();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.hooks.renderComplete.tap("RemoveCSSElement",function(){var e=document.getElementById("jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e),window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date,window.ga("create","UA-108804791-1","auto"),window.ga("send","pageview",window.location.pathname)}),e.hooks.locationChange.tapPromise("ReInitAds",d(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.loadAds(),t.trackPageView();case 2:case"end":return e.stop()}},e,this)})))}}]),e}()},279:function(e,t){e.exports="/examples/material-ui/images/13b68579f67cdf195641fb37d069b315.png"},280:function(e,t){e.exports="/examples/material-ui/images/86b2b2830a3f1ec80784f20ab6dbf6b0.png"},281:function(e,t){e.exports="/examples/material-ui/images/b90dab3b6d71a1c35eaf56a7dc272a45.png"},282:function(e,t){e.exports="/examples/material-ui/images/289a9281ed0a62c582e588fef03115f7.png"},283:function(e,t){e.exports="/examples/material-ui/images/333b7ef221a856947e3090fea8d7c878.png"},284:function(e,t){e.exports="/examples/material-ui/images/8f0f1efa1dcc48c68f4f5076cd62883b.png"},285:function(e,t){e.exports="/examples/material-ui/images/664a46c4921347d3a2b503e9e2aaa539.png"},286:function(e,t){e.exports="/examples/material-ui/images/9d7db784329bba9faf255ed85c679037.png"},287:function(e,t){e.exports="/examples/material-ui/images/0b087f148b53c605657d3940cf2971be.png"},300:function(e,t,n){n(301),e.exports=n(655)},653:function(e){e.exports={port:"9007",host:"0.0.0.0",appRootUrl:"/examples/material-ui",serviceWorker:!0,asyncCSS:!1,serverSideRender:!0,singlePageApplication:!1}},654:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return k});var a=n(279),r=n.n(a),o=n(280),i=n.n(o),c=n(281),s=n.n(c),u=n(282),l=n.n(u),p=n(283),f=n.n(p),d=n(284),m=n.n(d),g=n(285),h=n.n(g),v=n(286),b=n.n(v),w=n(287),y=n.n(w);function x(e,t,n,a,r,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(a,r)}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&P(e.prototype,t),n&&P(e,n)}(e,[{key:"apply",value:function(e){var t=[{path:"/",exact:!0,component:Promise.all([n.e(2),n.e(3)]).then(n.bind(null,657)),modules:["./app/components/home"]}];e.hooks.initRoutes.tapPromise("AppRoutes",function(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){x(o,a,r,i,c,"next",e)}function c(e){x(o,a,r,i,c,"throw",e)}i(void 0)})}}(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.addRoutes(t),e.setPwaSchema({name:"ReactPWA | PawJS - Material UI",short_name:"P-MUI",dir:"ltr",lang:"en-US",orientation:"any",start_url:"/examples/material-ui",background_color:"#111",theme_color:"#111",display:"standalone",description:"Material UI implementation using ReactPWA",icons:[{src:r.a,sizes:"72x72"},{src:i.a,sizes:"96x96"},{src:s.a,sizes:"128x128"},{src:l.a,sizes:"144x144"},{src:f.a,sizes:"152x152"},{src:m.a,sizes:"192x192"},{src:h.a,sizes:"384x384"},{src:b.a,sizes:"512x512"}]}),e.getDefaultSeoSchema=function(){return{title:"ReactPWA | Material UI",name:"ReactPWA | Material UI",description:"Material UI implementation using ReactPWA",type:"website",url:"https://www.reactpwa.com/examples/material-ui",site_name:"ReactPWA",image:y.a,meta:[{name:"author",content:"Yash Thakur"},{name:"description",content:"Material UI implementation using ReactPWA"},{name:"theme-color",content:"#111"},{name:"apple-mobile-web-app-status-bar-style",content:"#111"},{name:"msapplication-TileColor",content:"#111"},{name:"application-name",content:"ReactPWA | Material UI"},{name:"generator",content:"Material UI"},{name:"apple-mobile-web-app-title",content:"ReactPWA | Material UI"},{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5.0"}]}};case 3:case"end":return n.stop()}},n,this)})))}}]),e}()}});