"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4447],{9156:function(t,e,n){e.k=void 0;var r=n(61924);Object.defineProperty(e,"k",{enumerable:!0,get:function(){return r.useLottie}})},61924:function(t,e,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.useLottie=void 0;var o=i(n(95055)),u=n(50959),c=i(n(69223));e.useLottie=function(t,e){var n=(0,u.useState)(null),i=n[0],a=n[1];return(0,c.default)(function(){if(t.current){var n=o.default.loadAnimation(r(r({},e),{container:t.current}));return a(n),function(){n.destroy(),a(null)}}},[t,e]),i}},69223:function(t,e,n){n.r(e),n.d(e,{default:function(){return a},useDeepCompareEffectNoCheck:function(){return f},useDeepCompareMemoize:function(){return c}});var r=n(50959),i=Object.prototype.hasOwnProperty;function o(t,e,n){for(n of t.keys())if(u(n,e))return n}function u(t,e){var n,r,c;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((r=t.length)===e.length)for(;r--&&u(t[r],e[r]););return -1===r}if(n===Set){if(t.size!==e.size)return!1;for(r of t)if((c=r)&&"object"==typeof c&&!(c=o(e,c))||!e.has(c))return!1;return!0}if(n===Map){if(t.size!==e.size)return!1;for(r of t)if((c=r[0])&&"object"==typeof c&&!(c=o(e,c))||!u(r[1],e.get(c)))return!1;return!0}if(n===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(n===DataView){if((r=t.byteLength)===e.byteLength)for(;r--&&t.getInt8(r)===e.getInt8(r););return -1===r}if(ArrayBuffer.isView(t)){if((r=t.byteLength)===e.byteLength)for(;r--&&t[r]===e[r];);return -1===r}if(!n||"object"==typeof t){for(n in r=0,t)if(i.call(t,n)&&++r&&!i.call(e,n)||!(n in e)||!u(t[n],e[n]))return!1;return Object.keys(e).length===r}}return t!=t&&e!=e}function c(t){var e=r.useRef(t),n=r.useRef(0);return u(t,e.current)||(e.current=t,n.current+=1),r.useMemo(function(){return e.current},[n.current])}function a(t,e){return r.useEffect(t,c(e))}function f(t,e){return r.useEffect(t,c(e))}},7579:function(t,e,n){n.d(e,{Z:function(){return k}});var r=n(50959);function i(t){return"[object Object]"===Object.prototype.toString.call(t)||Array.isArray(t)}function o(t,e){let n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&JSON.stringify(Object.keys(t.breakpoints||{}))===JSON.stringify(Object.keys(e.breakpoints||{}))&&n.every(n=>{let r=t[n],u=e[n];return"function"==typeof r?`${r}`==`${u}`:i(r)&&i(u)?o(r,u):r===u})}function u(t){return t.concat().sort((t,e)=>t.name>e.name?1:-1).map(t=>t.options)}function c(t){return"number"==typeof t}function a(t){return"string"==typeof t}function f(t){return"boolean"==typeof t}function l(t){return"[object Object]"===Object.prototype.toString.call(t)}function s(t){return Math.abs(t)}function d(t){return Math.sign(t)}function p(t){return y(t).map(Number)}function g(t){return t[m(t)]}function m(t){return Math.max(0,t.length-1)}function h(t,e=0){return Array.from(Array(t),(t,n)=>e+n)}function y(t){return Object.keys(t)}function b(t,e){return void 0!==e.MouseEvent&&t instanceof e.MouseEvent}function v(){let t=[],e={add:function(n,r,i,o={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,i,o),u=()=>n.removeEventListener(r,i,o)):(n.addListener(i),u=()=>n.removeListener(i)),t.push(u),e},clear:function(){t=t.filter(t=>t())}};return e}function x(t=0,e=0){let n=s(t-e);function r(n){return n<t||n>e}return{length:n,max:e,min:t,constrain:function(n){return r(n)?n<t?t:e:n},reachedAny:r,reachedMax:function(t){return t>e},reachedMin:function(e){return e<t},removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function w(t){let e=t;function n(t){return c(t)?t:t.get()}return{get:function(){return e},set:function(t){e=n(t)},add:function(t){e+=n(t)},subtract:function(t){e-=n(t)}}}function O(t,e){let n="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},r=e.style,i=!1;return{clear:function(){i||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(e){i||(r.transform=n(t.direction(e)))},toggleActive:function(t){i=!t}}}let S={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function E(t,e,n){let r,i,o,u,k;let D=t.ownerDocument,L=D.defaultView,A=function(t){function e(t,e){return function t(e,n){return[e,n].reduce((e,n)=>(y(n).forEach(r=>{let i=e[r],o=n[r],u=l(i)&&l(o);e[r]=u?t(i,o):o}),e),{})}(t,e||{})}return{mergeOptions:e,optionsAtMedia:function(n){let r=n.breakpoints||{},i=y(r).filter(e=>t.matchMedia(e).matches).map(t=>r[t]).reduce((t,n)=>e(t,n),{});return e(n,i)},optionsMediaQueries:function(e){return e.map(t=>y(t.breakpoints||{})).reduce((t,e)=>t.concat(e),[]).map(t.matchMedia)}}}(L),I=(k=[],{init:function(t,e){return(k=e.filter(({options:t})=>!1!==A.optionsAtMedia(t).active)).forEach(e=>e.init(t,A)),e.reduce((t,e)=>Object.assign(t,{[e.name]:e}),{})},destroy:function(){k=k.filter(t=>t.destroy())}}),M=v(),j=function(){let t;let e={},n={init:function(e){t=e},emit:function(r){return(e[r]||[]).forEach(e=>e(t,r)),n},off:function(t,r){return e[t]=(e[t]||[]).filter(t=>t!==r),n},on:function(t,r){return e[t]=(e[t]||[]).concat([r]),n}};return n}(),{mergeOptions:P,optionsAtMedia:F,optionsMediaQueries:T}=A,{on:z,off:N,emit:V}=j,_=!1,C=P(S,E.globalOptions),H=P(C),R=[];function B(e,n){!_&&(H=F(C=P(C,e)),R=n||R,function(){let{container:e,slides:n}=H;o=(a(e)?t.querySelector(e):e)||t.children[0];let r=a(n)?o.querySelectorAll(n):n;u=[].slice.call(r||o.children)}(),r=function e(n){let r=function(t,e,n,r,i,o,u){let l,S;let{align:E,axis:k,direction:D,startIndex:L,loop:A,duration:I,dragFree:M,dragThreshold:j,inViewThreshold:P,slidesToScroll:F,skipSnaps:T,containScroll:z,watchResize:N,watchSlides:V,watchDrag:_}=o,C={measure:function(t){let{offsetTop:e,offsetLeft:n,offsetWidth:r,offsetHeight:i}=t;return{top:e,right:n+r,bottom:e+i,left:n,width:r,height:i}}},H=C.measure(e),R=n.map(C.measure),B=function(t,e){let n="rtl"===e,r="y"===t,i=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(t){let{height:e,width:n}=t;return r?e:n},direction:function(t){return t*i}}}(k,D),U=B.measureSize(H),$={measure:function(t){return t/100*U}},q=function(t,e){let n={start:function(){return 0},center:function(t){return(e-t)/2},end:function(t){return e-t}};return{measure:function(r,i){return a(t)?n[t](r):t(e,r,i)}}}(E,U),J=!A&&!!z,{slideSizes:X,slideSizesWithGaps:Q,startGap:Y,endGap:Z}=function(t,e,n,r,i,o){let{measureSize:u,startEdge:c,endEdge:a}=t,f=n[0]&&i,l=function(){if(!f)return 0;let t=n[0];return s(e[c]-t[c])}(),d=f?parseFloat(o.getComputedStyle(g(r)).getPropertyValue(`margin-${a}`)):0,p=n.map(u),h=n.map((t,e,n)=>{let r=e===m(n);return e?r?p[e]+d:n[e+1][c]-t[c]:p[e]+l}).map(s);return{slideSizes:p,slideSizesWithGaps:h,startGap:l,endGap:d}}(B,H,R,n,A||!!z,i),G=function(t,e,n,r,i,o,u,a,f){let{startEdge:l,endEdge:d,direction:h}=t,y=c(n);return{groupSlides:function(t){return y?p(t).filter(t=>t%n==0).map(e=>t.slice(e,e+n)):t.length?p(t).reduce((n,c,f)=>{let p=g(n)||0,y=c===m(t),b=i[l]-o[p][l],v=i[l]-o[c][d],x=r||0!==p?0:h(u),w=s(v-(!r&&y?h(a):0)-(b+x));return f&&w>e+2&&n.push(c),y&&n.push(t.length),n},[]).map((e,n,r)=>{let i=Math.max(r[n-1]||0);return t.slice(i,e)}):[]}}}(B,U,F,A,H,R,Y,Z,0),{snaps:K,snapsAligned:W}=function(t,e,n,r,i){let{startEdge:o,endEdge:u}=t,{groupSlides:c}=i,a=c(r).map(t=>g(t)[u]-t[0][o]).map(s).map(e.measure),f=r.map(t=>n[o]-t[o]).map(t=>-s(t)),l=c(f).map(t=>t[0]).map((t,e)=>t+a[e]);return{snaps:f,snapsAligned:l}}(B,q,H,R,G),tt=-g(K)+g(Q),{snapsContained:te,scrollContainLimit:tn}=function(t,e,n,r,i){let o=x(-e+t,0),u=n.map((t,e)=>{let{min:r,max:i}=o,u=o.constrain(t),c=e===m(n);return e?c||1>s(r-u)?r:1>s(i-u)?i:u:i}).map(t=>parseFloat(t.toFixed(3))),c=function(){let t=u[0],e=g(u);return x(u.lastIndexOf(t),u.indexOf(e)+1)}();return{snapsContained:function(){if(e<=t+2)return[o.max];if("keepSnaps"===r)return u;let{min:n,max:i}=c;return u.slice(n,i)}(),scrollContainLimit:c}}(U,tt,W,z,0),tr=J?te:W,{limit:ti}=function(t,e,n){let r=e[0];return{limit:x(n?r-t:g(e),r)}}(tt,tr,A),to=function t(e,n,r){let{constrain:i}=x(0,e),o=e+1,u=c(n);function c(t){return r?s((o+t)%o):i(t)}function a(){return t(e,u,r)}let f={get:function(){return u},set:function(t){return u=c(t),f},add:function(t){return a().set(u+t)},clone:a};return f}(m(tr),L,A),tu=to.clone(),tc=p(n),ta=({dragHandler:t,scrollBody:e,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(t.pointerDown()),e.seek()},tf=({scrollBody:t,translate:e,location:n,offsetLocation:r,scrollLooper:i,slideLooper:o,dragHandler:u,animation:c,eventHandler:a,options:{loop:f}},l)=>{let s=t.velocity(),d=t.settled();d&&!u.pointerDown()&&(c.stop(),a.emit("settle")),d||a.emit("scroll"),r.set(n.get()-s+s*l),f&&(i.loop(t.direction()),o.loop()),e.to(r.get())},tl=function(t,e,n,r){let i=v(),o=1e3/60,u=null,c=0,a=0;function f(t){if(!a)return;u||(u=t);let i=t-u;for(u=t,c+=i;c>=o;)n(),c-=o;r(s(c/o)),a&&e.requestAnimationFrame(f)}function l(){e.cancelAnimationFrame(a),u=null,c=0,a=0}return{init:function(){i.add(t,"visibilitychange",()=>{t.hidden&&(u=null,c=0)})},destroy:function(){l(),i.clear()},start:function(){a||(a=e.requestAnimationFrame(f))},stop:l,update:n,render:r}}(r,i,()=>ta(tS),t=>tf(tS,t)),ts=tr[to.get()],td=w(ts),tp=w(ts),tg=w(ts),tm=function(t,e,n,r,i){let o=0,u=0,c=r,a=.68,f=t.get(),l=0;function p(t){return c=t,m}function g(t){return a=t,m}let m={direction:function(){return u},duration:function(){return c},velocity:function(){return o},seek:function(){let e=n.get()-t.get(),r=0;return c?(o+=e/c,o*=a,f+=o,t.add(o),r=f-l):(o=0,t.set(n),r=e),u=d(r),l=f,m},settled:function(){return .001>s(n.get()-e.get())},useBaseFriction:function(){return g(.68)},useBaseDuration:function(){return p(r)},useFriction:g,useDuration:p};return m}(td,tp,tg,I,0),th=function(t,e,n,r,i){let{reachedAny:o,removeOffset:u,constrain:c}=r;function a(t){return t.concat().sort((t,e)=>s(t)-s(e))[0]}function f(e,r){let i=[e,e+n,e-n];if(!t)return i[0];if(!r)return a(i);let o=i.filter(t=>d(t)===r);return o.length?a(o):g(i)-n}return{byDistance:function(n,r){let a=i.get()+n,{index:l,distance:d}=function(n){let r=t?u(n):c(n),{index:i}=e.map((t,e)=>({diff:f(t-r,0),index:e})).sort((t,e)=>s(t.diff)-s(e.diff))[0];return{index:i,distance:r}}(a),p=!t&&o(a);if(!r||p)return{index:l,distance:n};let g=n+f(e[l]-d,0);return{index:l,distance:g}},byIndex:function(t,n){let r=f(e[t]-i.get(),n);return{index:t,distance:r}},shortcut:f}}(A,tr,tt,ti,tg),ty=function(t,e,n,r,i,o,u){function c(i){let c=i.distance,a=i.index!==e.get();o.add(c),c&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),a&&(n.set(e.get()),e.set(i.index),u.emit("select"))}return{distance:function(t,e){c(i.byDistance(t,e))},index:function(t,n){let r=e.clone().set(t);c(i.byIndex(r.get(),n))}}}(tl,to,tu,tm,th,tg,u),tb=function(t){let{max:e,length:n}=t;return{get:function(t){return n?-((t-e)/n):0}}}(ti),tv=v(),tx=function(t,e,n,r){let i;let o={},u=null,c=null,a=!1;return{init:function(){i=new IntersectionObserver(t=>{a||(t.forEach(t=>{o[e.indexOf(t.target)]=t}),u=null,c=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(t=>i.observe(t))},destroy:function(){i&&i.disconnect(),a=!0},get:function(t=!0){if(t&&u)return u;if(!t&&c)return c;let e=y(o).reduce((e,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(t&&i||!t&&!i)&&e.push(r),e},[]);return t&&(u=e),t||(c=e),e}}}(e,n,u,P),{slideRegistry:tw}=function(t,e,n,r,i,o){let{groupSlides:u}=i,{min:c,max:a}=r;return{slideRegistry:function(){let r=u(o);return 1===n.length?[o]:t&&"keepSnaps"!==e?r.slice(c,a).map((t,e,n)=>{let r=e===m(n);return e?r?h(m(o)-g(n)[0]+1,g(n)[0]):t:h(g(n[0])+1)}):r}()}}(J,z,tr,tn,G,tc),tO=function(t,e,n,r,i,o){let u=0;function a(t){"Tab"===t.code&&(u=new Date().getTime())}function f(a){o.add(a,"focus",()=>{if(new Date().getTime()-u>10)return;t.scrollLeft=0;let o=e.indexOf(a),f=n.findIndex(t=>t.includes(o));c(f)&&(i.useDuration(0),r.index(f,0))},{passive:!0,capture:!0})}return{init:function(){o.add(document,"keydown",a,!1),e.forEach(f)}}}(t,n,tw,ty,tm,tv),tS={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:H,slideRects:R,animation:tl,axis:B,dragHandler:function(t,e,n,r,i,o,u,c,a,l,p,g,m,h,y,w,O,S,E){let{cross:k,direction:D}=t,L=["INPUT","SELECT","TEXTAREA"],A={passive:!1},I=v(),M=v(),j=x(50,225).constrain(h.measure(20)),P={mouse:300,touch:400},F={mouse:500,touch:600},T=y?43:25,z=!1,N=0,V=0,_=!1,C=!1,H=!1,R=!1;function B(t){if(!b(t,r)&&t.touches.length>=2)return U(t);let e=o.readPoint(t),n=o.readPoint(t,k),u=s(e-N),a=s(n-V);if(!C&&!R&&(!t.cancelable||!(C=u>a)))return U(t);let f=o.pointerMove(t);u>w&&(H=!0),l.useFriction(.3).useDuration(1),c.start(),i.add(D(f)),t.preventDefault()}function U(t){let e=p.byDistance(0,!1).index!==g.get(),n=o.pointerUp(t)*(y?F:P)[R?"mouse":"touch"],r=function(t,e){let n=g.add(-1*d(t)),r=p.byDistance(t,!y).distance;return y||s(t)<j?r:O&&e?.5*r:p.byIndex(n.get(),0).distance}(D(n),e),i=function(t,e){var n,r;if(0===t||0===e||s(t)<=s(e))return 0;let i=(n=s(t),r=s(e),s(n-r));return s(i/t)}(n,r);C=!1,_=!1,M.clear(),l.useDuration(T-10*i).useFriction(.68+i/50),a.distance(r,!y),R=!1,m.emit("pointerUp")}function $(t){H&&(t.stopPropagation(),t.preventDefault(),H=!1)}return{init:function(t){E&&I.add(e,"dragstart",t=>t.preventDefault(),A).add(e,"touchmove",()=>void 0,A).add(e,"touchend",()=>void 0).add(e,"touchstart",c).add(e,"mousedown",c).add(e,"touchcancel",U).add(e,"contextmenu",U).add(e,"click",$,!0);function c(c){(f(E)||E(t,c))&&function(t){let c=b(t,r);R=c,H=y&&c&&!t.buttons&&z,z=s(i.get()-u.get())>=2,c&&0!==t.button||function(t){let e=t.nodeName||"";return L.includes(e)}(t.target)||(_=!0,o.pointerDown(t),l.useFriction(0).useDuration(0),i.set(u),function(){let t=R?n:e;M.add(t,"touchmove",B,A).add(t,"touchend",U).add(t,"mousemove",B,A).add(t,"mouseup",U)}(),N=o.readPoint(t),V=o.readPoint(t,k),m.emit("pointerDown"))}(c)}},pointerDown:function(){return _},destroy:function(){I.clear(),M.clear()}}}(B,t,r,i,tg,function(t,e){let n,r;function i(t){return t.timeStamp}function o(n,r){let i=r||t.scroll,o=`client${"x"===i?"X":"Y"}`;return(b(n,e)?n:n.touches[0])[o]}return{pointerDown:function(t){return n=t,r=t,o(t)},pointerMove:function(t){let e=o(t)-o(r),u=i(t)-i(n)>170;return r=t,u&&(n=t),e},pointerUp:function(t){if(!n||!r)return 0;let e=o(r)-o(n),u=i(t)-i(n),c=i(t)-i(r)>170,a=e/u;return u&&!c&&s(a)>.1?a:0},readPoint:o}}(B,i),td,tl,ty,tm,th,to,u,$,M,j,T,0,_),eventStore:tv,percentOfView:$,index:to,indexPrevious:tu,limit:ti,location:td,offsetLocation:tp,options:o,resizeHandler:function(t,e,n,r,i,o,u){let c,a;let l=[],d=!1;function p(t){return i.measureSize(u.measure(t))}return{init:function(i){o&&(a=p(t),l=r.map(p),c=new ResizeObserver(u=>{!d&&(f(o)||o(i,u))&&function(o){for(let u of o){let o=u.target===t,c=r.indexOf(u.target),f=o?a:l[c];if(s(p(o?t:r[c])-f)>=.5){n.requestAnimationFrame(()=>{i.reInit(),e.emit("resize")});break}}}(u)}),[t].concat(r).forEach(t=>c.observe(t)))},destroy:function(){c&&c.disconnect(),d=!0}}}(e,u,i,n,B,N,C),scrollBody:tm,scrollBounds:function(t,e,n,r,i){let o=i.measure(10),u=i.measure(50),c=x(.1,.99),a=!1;return{constrain:function(i){if(!(!a&&t.reachedAny(n.get())&&t.reachedAny(e.get())))return;let f=t.reachedMin(e.get())?"min":"max",l=s(t[f]-e.get()),d=n.get()-e.get(),p=c.constrain(l/u);n.subtract(d*p),!i&&s(d)<o&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){a=!t}}}(ti,tp,tg,tm,$),scrollLooper:function(t,e,n,r){let{reachedMin:i,reachedMax:o}=x(e.min+.1,e.max+.1);return{loop:function(e){if(!(1===e?o(n.get()):-1===e&&i(n.get())))return;let u=-1*e*t;r.forEach(t=>t.add(u))}}}(tt,ti,tp,[td,tp,tg]),scrollProgress:tb,scrollSnapList:tr.map(tb.get),scrollSnaps:tr,scrollTarget:th,scrollTo:ty,slideLooper:function(t,e,n,r,i,o,u,c,a){let f=p(i),l=g(d(p(i).reverse(),u[0]),n,!1).concat(g(d(f,e-u[0]-1),-n,!0));function s(t,e){return t.reduce((t,e)=>t-i[e],e)}function d(t,e){return t.reduce((t,n)=>s(t,e)>0?t.concat([n]):t,[])}function g(i,u,f){let l=o.map((t,n)=>({start:t-r[n]+.5+u,end:t+e-.5+u}));return i.map(e=>{let r=f?0:-n,i=f?n:0,o=l[e][f?"end":"start"];return{index:e,loopPoint:o,slideLocation:w(-1),translate:O(t,a[e]),target:()=>c.get()>o?r:i}})}return{canLoop:function(){return l.every(({index:t})=>.1>=s(f.filter(e=>e!==t),e))},clear:function(){l.forEach(t=>t.translate.clear())},loop:function(){l.forEach(t=>{let{target:e,translate:n,slideLocation:r}=t,i=e();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:l}}(B,U,tt,X,Q,K,tr,tp,n),slideFocus:tO,slidesHandler:(S=!1,{init:function(t){V&&(l=new MutationObserver(e=>{!S&&(f(V)||V(t,e))&&function(e){for(let n of e)if("childList"===n.type){t.reInit(),u.emit("slidesChanged");break}}(e)})).observe(e,{childList:!0})},destroy:function(){l&&l.disconnect(),S=!0}}),slidesInView:tx,slideIndexes:tc,slideRegistry:tw,slidesToScroll:G,target:tg,translate:O(B,e)};return tS}(t,o,u,D,L,n,j);return n.loop&&!r.slideLooper.canLoop()?e(Object.assign({},n,{loop:!1})):r}(H),T([C,...R.map(({options:t})=>t)]).forEach(t=>M.add(t,"change",U)),H.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(),r.eventHandler.init(X),r.resizeHandler.init(X),r.slidesHandler.init(X),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(X),i=I.init(X,R)))}function U(t,e){let n=J();$(),B(P({startIndex:n},t),e),j.emit("reInit")}function $(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),I.destroy(),M.clear()}function q(t,e,n){H.active&&!_&&(r.scrollBody.useBaseFriction().useDuration(!0===e?0:H.duration),r.scrollTo.index(t,n||0))}function J(){return r.index.get()}let X={canScrollNext:function(){return r.index.add(1).get()!==J()},canScrollPrev:function(){return r.index.add(-1).get()!==J()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){_||(_=!0,M.clear(),$(),j.emit("destroy"))},off:N,on:z,emit:V,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:U,rootNode:function(){return t},scrollNext:function(t){q(r.index.add(1).get(),t,-1)},scrollPrev:function(t){q(r.index.add(-1).get(),t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:q,selectedScrollSnap:J,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return B(e,n),setTimeout(()=>j.emit("init"),0),X}function k(t={},e=[]){let n=(0,r.useRef)(t),i=(0,r.useRef)(e),[c,a]=(0,r.useState)(),[f,l]=(0,r.useState)(),s=(0,r.useCallback)(()=>{c&&c.reInit(n.current,i.current)},[c]);return(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&f){E.globalOptions=k.globalOptions;let t=E(f,n.current,i.current);return a(t),()=>t.destroy()}a(void 0)},[f,a]),(0,r.useEffect)(()=>{o(n.current,t)||(n.current=t,s())},[t,s]),(0,r.useEffect)(()=>{!function(t,e){if(t.length!==e.length)return!1;let n=u(t),r=u(e);return n.every((t,e)=>o(t,r[e]))}(i.current,e)&&(i.current=e,s())},[e,s]),[l,c]}E.globalOptions=void 0,k.globalOptions=void 0}}]);