(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5288],{9156:function(e,t,n){"use strict";t.k=void 0;var r=n(61924);Object.defineProperty(t,"k",{enumerable:!0,get:function(){return r.useLottie}})},61924:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useLottie=void 0;var u=i(n(95055)),o=n(50959),s=i(n(69223));t.useLottie=function(e,t){var n=(0,o.useState)(null),i=n[0],c=n[1];return(0,s.default)(function(){if(e.current){var n=u.default.loadAnimation(r(r({},t),{container:e.current}));return c(n),function(){n.destroy(),c(null)}}},[e,t]),i}},32829:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...uri]",function(){return n(13373)}])},64355:function(e,t,n){"use strict";var r=n(96257),i=n(75439),u=n(89550),o=i.ZP.div.withConfig({componentId:"sc-9d02822d-0"})((0,r.ZP)({backgroundColor:"grey4",height:"100%",marginX:"auto",width:"1px"}),(0,u.qC)(u.bK,u.Dh));t.Z=o},36916:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(84750),i=n(26393),u=n(76303).default;function o(){return(o=r._(function(e,t,n){var r,o;return i._(this,function(i){switch(i.label){case 0:return o=null!==(r=null==n?void 0:n.token)&&void 0!==r?r:"",[4,u("".concat("http://legatum.ddev.site","/api/graphql?token=").concat(o),e,t)];case 1:return[2,i.sent()]}})})).apply(this,arguments)}e.exports=function(e,t,n){return o.apply(this,arguments)}},46870:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return v}});var r=n(84750),i=n(99938),u=n(11527),o=n(34551),s=n(25941),c=n.n(s),f=n(35519),a=n(50959),l=n(75439),d=n(14304),h=n(46633),g=n(14489);function p(){var e=(0,g._)(["\n  query QueryRetour($uri: String!) {\n    retour(uri: $uri, siteId: 1) {\n      redirectDestUrl\n    }\n  }\n"]);return p=function(){return e},e}var b=(0,n(9512).ZP)(p()),j=n(36916),_=n.n(j),m=!0;function v(){var e=(0,f.useRouter)();(0,a.useEffect)(function(){(0,r._)(function(){var t,n;return(0,i.Jh)(this,function(r){switch(r.label){case 0:return[4,_()(b,{uri:e.asPath})];case 1:return t=r.sent(),(n=(0,o.Z)(t,"retour.redirectDestUrl"))&&(window.location=n),[2]}})})()},[e.asPath]);var t=(0,l.Fg)().spacing;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c(),{children:[(0,u.jsx)("title",{children:"Page not found"}),(0,u.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,u.jsx)(d.Z,{marginY:t.page,children:(0,u.jsx)(h.Z,{variant:"p2",children:"Page not found"})})]})}},13373:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return y}});var r=n(11527),i=n(69790),u=n(34551),o=n(96517),s=n.n(o),c=n(75439),f=n(48885),a=n(11882),l=n(92801),d=n(14304),h=n(37988),g=n(59452),p=n(61152),b=n(7679),j=n(64355),_=n(46870),m=s()(function(){return n.e(3218).then(n.bind(n,53218))},{loadableGenerated:{webpack:function(){return[53218]}}}),v=!0;function y(e){var t=e.entry,n=(0,c.Fg)().spacing;if((0,i.Z)(t))return(0,r.jsx)(_.default,{});var o=(0,u.Z)(t,"pageBlocks",[]),s=(0,u.Z)(t,"highlights"),v=(0,u.Z)(t,"pageHeader",[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{blocks:v}),(0,r.jsx)(a.Z,{marginTop:0===v.length?"-1px":null}),(0,r.jsx)(d.Z,{variant:{_:"full",sm4:"default"},marginY:n.page,children:s.length>0?(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(l.Z,{span:{sm4:7/12,lg1:8/12},children:(0,r.jsx)(m,{blocks:o})}),(0,r.jsx)(l.Z,{span:1/12,display:{_:"none",md1:"block"},children:(0,r.jsx)(j.Z,{})}),(0,r.jsx)(l.Z,{span:{sm4:5/12,md1:4/12,lg1:.25},borderLeftWidth:{sm4:1,md1:0},children:(0,r.jsx)(g.Z,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(f.Z,{marginY:n.blockList,display:{sm4:"none"}}),(0,r.jsx)(b.Z,{blocks:s})]})})})]}):(0,r.jsx)(h.Z,{children:(0,r.jsx)(l.Z,{span:{sm4:.75,md1:8/12},marginX:"auto",borderLeftWidth:{sm4:1},borderRightWidth:{sm4:1},children:(0,r.jsx)(m,{blocks:o})})})})]})}},69223:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c},useDeepCompareEffectNoCheck:function(){return f},useDeepCompareMemoize:function(){return s}});var r=n(50959),i=Object.prototype.hasOwnProperty;function u(e,t,n){for(n of e.keys())if(o(n,t))return n}function o(e,t){var n,r,s;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&o(e[r],t[r]););return -1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if((s=r)&&"object"==typeof s&&!(s=u(t,s))||!t.has(s))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if((s=r[0])&&"object"==typeof s&&!(s=u(t,s))||!o(r[1],t.get(s)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return -1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return -1===r}if(!n||"object"==typeof e){for(n in r=0,e)if(i.call(e,n)&&++r&&!i.call(t,n)||!(n in t)||!o(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!=e&&t!=t}function s(e){var t=r.useRef(e),n=r.useRef(0);return o(e,t.current)||(t.current=e,n.current+=1),r.useMemo(function(){return t.current},[n.current])}function c(e,t){return r.useEffect(e,s(t))}function f(e,t){return r.useEffect(e,s(t))}}},function(e){e.O(0,[3349,8883,7165,7420,7504,1940,1233,4485,7679,2888,9774,179],function(){return e(e.s=32829)}),_N_E=e.O()}]);