(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7165],{67165:function(e,t,r){"use strict";var i=r(94213),o=r(32586),n=r(25659),a=r(57542),s=r(45119),u=r(97087),l=r.n(u),c=r(50959),d=function(e){var t,r=e.filePath,i=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",o=r.split(i).shift(),n=r.split(".").pop();return{path:o,filename:i.substring(0,i.lastIndexOf("."))||i,extension:n||""}},f=function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=d({filePath:e}),n=o.filename,a=o.path,s=o.extension;if(!["JPG","JPEG","WEBP","PNG","AVIF","GIF"].includes(s.toUpperCase()))return e;var u=s;["JPG","JPEG","PNG","GIF"].includes(s.toUpperCase())&&(u="WEBP");var l=a;"/"!=(null==l?void 0:l.substr(-1))&&(l+="/");var c=e.includes("_next/static/media");r&&(l=r.endsWith("/")&&l&&l.startsWith("/")?r+l.slice(1):r.endsWith("/")||!l||l.startsWith("/")?r+l:r+"/"+l);var f="".concat(c?r?r+"/":"":l).concat("_images","/").concat(n,"-opt-").concat(t,".").concat(u.toUpperCase());return i||"/"===f.charAt(0)||(f="/"+f),f},h=function(e){for(var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=3735928559^r,o=1103547991^r,n=0;n<e.length;n++)i=Math.imul(i^(t=e.charCodeAt(n)),2654435761),o=Math.imul(o^t,1597334677);return i=Math.imul(i^i>>>16,2246822507)^Math.imul(o^o>>>13,3266489909),4294967296*(2097151&(o=Math.imul(o^o>>>16,2246822507)^Math.imul(i^i>>>13,3266489909)))+(i>>>0)},p=function(e){var t=e.src,r=e.width,i=e.basePath;return f(function(e){try{var t=new URL(e).pathname.split(".").pop();if(t)return h(e).toString().concat(".",t)}catch(t){console.error("Error parsing URL",e,t)}return h(e).toString()}(t),r,i,!0)},g=function(e){var t=e.src,r=e.width,i=e.basePath,o="object"==typeof t,n=o?t.src:t,a=o&&t.width||void 0;if(o&&a&&r>a){var u=[640,768,1280,3840].map(Number),l=[384].map(Number),c=(0,s._)(u).concat((0,s._)(l));(c=c.filter(function(e,t,r){return r.indexOf(e)===t})).sort(function(e,t){return e-t});for(var d=null,h=0;h<c.length;h++)Number(c[h])>=a&&(null===d||Number(c[h])<d)&&(d=Number(c[h]));if(null!==d)return f(n,d,i)}return n.startsWith("http")?p({src:n,width:r,basePath:i}):f(n,r,i)},m=function(e){var t=e.src,r="object"==typeof t?t.src:t;return r.startsWith("http")||"/"===r.charAt(0)||(r="/"+r),r},v=(0,c.forwardRef)(function(e,t){var r=e.src,s=e.priority,u=void 0!==s&&s,d=e.loading,h=e.className,v=e.width,b=e.height,y=e.onLoad,_=e.unoptimized,w=e.placeholder,z=void 0===w?"blur":w,S=e.basePath,P=void 0===S?"":S,j=e.alt,C=e.blurDataURL,x=e.style,E=e.onError,R=e.overrideSrc,L=(0,n._)(e,["src","priority","loading","className","width","height","onLoad","unoptimized","placeholder","basePath","alt","blurDataURL","style","onError","overrideSrc"]),I=(0,a._)((0,c.useState)(!1),2),M=I[0],N=I[1],O=(0,c.useMemo)(function(){if(C)return C;var e="object"==typeof r?r.src:r;return!0===_?e:e.startsWith("http")?p({src:e,width:10,basePath:P}):f(e,10,P)},[C,r,_,P]),W="object"==typeof r?r.src.endsWith(".svg"):r.endsWith(".svg"),k=(0,a._)((0,c.useState)(!1),2),A=k[0],D=k[1],F="blur"===z&&!W&&O&&O.startsWith("/")&&!A?{backgroundSize:(null==x?void 0:x.objectFit)||"cover",backgroundPosition:(null==x?void 0:x.objectPosition)||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("'.concat(O,'")')}:void 0,G="object"==typeof r,U=G?r.src:r;return P&&!G&&U.startsWith("/")&&(U=P+U),!P||G||U.startsWith("/")||(U=P+"/"+U),c.createElement(l(),(0,o._)((0,i._)({ref:t,alt:void 0===j?"":j},L,v&&{width:v},b&&{height:b},d&&{loading:d},h&&{className:h},y&&{onLoad:y},R&&{overrideSrc:R},z&&{placeholder:F||A?"empty":z},_&&{unoptimized:_},u&&{priority:u},W&&{unoptimized:!0}),{style:(0,i._)({},x,F),loader:M||!0===_?function(){return m({src:R||r})}:function(e){return g({src:r,width:e.width,basePath:P})},blurDataURL:O,onError:function(e){N(!0),D(!0),E&&E(e)},onLoad:function(e){0===e.target.naturalWidth&&N(!0),D(!0),y&&y(e)},src:G?r:U}))});v.displayName="ExportedImage",t.Z=v},68301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(94213),o=r(32586),n=r(25659),a=r(57542),s=r(45119);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return P}});var u=r(42430),l=r(11778),c=r(11527),d=l._(r(50959)),f=u._(r(10422)),h=u._(r(70210)),p=r(62964),g=r(69838),m=r(77590);r(62966);var v=r(96227),b=u._(r(93998)),y={deviceSizes:[640,768,1280,3840],imageSizes:[384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function _(e,t,r,n,a,s,u){var l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),null==r?void 0:r.current){var s=new Event("load");Object.defineProperty(s,"target",{writable:!1,value:e});var u=!1,l=!1;r.current(o._(i._({},s),{nativeEvent:s,currentTarget:e,target:e,isDefaultPrevented:function(){return u},isPropagationStopped:function(){return l},persist:function(){},preventDefault:function(){u=!0,s.preventDefault()},stopPropagation:function(){l=!0,s.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}}))}function w(e){return d.use?{fetchPriority:e}:{fetchpriority:e}}var z=(0,d.forwardRef)(function(e,t){var r=e.src,a=e.srcSet,s=e.sizes,u=e.height,l=e.width,f=e.decoding,h=e.className,p=e.style,g=e.fetchPriority,m=e.placeholder,v=e.loading,b=e.unoptimized,y=e.fill,z=e.onLoadRef,S=e.onLoadingCompleteRef,P=e.setBlurComplete,j=e.setShowAltText,C=e.sizesInput,x=(e.onLoad,e.onError),E=n._(e,["src","srcSet","sizes","height","width","decoding","className","style","fetchPriority","placeholder","loading","unoptimized","fill","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","sizesInput","onLoad","onError"]);return(0,c.jsx)("img",o._(i._({},E,w(g)),{loading:v,width:l,height:u,decoding:f,"data-nimg":y?"fill":"1",className:h,style:p,sizes:s,srcSet:a,src:r,ref:(0,d.useCallback)(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&_(e,m,z,S,P,b,C))},[r,m,z,S,P,x,b,C,t]),onLoad:function(e){_(e.currentTarget,m,z,S,P,b,C)},onError:function(e){j(!0),"empty"!==m&&P(!0),x&&x(e)}}))});function S(e){var t=e.isAppRouter,r=e.imgAttributes,o=i._({as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy},w(r.fetchPriority));return t&&f.default.preload?(f.default.preload(r.src,o),null):(0,c.jsx)(h.default,{children:(0,c.jsx)("link",i._({rel:"preload",href:r.srcSet?void 0:r.src},o),"__nimg-"+r.src+r.srcSet+r.sizes)})}var P=(0,d.forwardRef)(function(e,t){var r=(0,d.useContext)(v.RouterContext),n=(0,d.useContext)(m.ImageConfigContext),u=(0,d.useMemo)(function(){var e=y||n||g.imageConfigDefault,t=s._(e.deviceSizes).concat(s._(e.imageSizes)).sort(function(e,t){return e-t}),r=e.deviceSizes.sort(function(e,t){return e-t});return o._(i._({},e),{allSizes:t,deviceSizes:r})},[n]),l=e.onLoad,f=e.onLoadingComplete,h=(0,d.useRef)(l);(0,d.useEffect)(function(){h.current=l},[l]);var _=(0,d.useRef)(f);(0,d.useEffect)(function(){_.current=f},[f]);var w=a._((0,d.useState)(!1),2),P=w[0],j=w[1],C=a._((0,d.useState)(!1),2),x=C[0],E=C[1],R=(0,p.getImgProps)(e,{defaultLoader:b.default,imgConf:u,blurComplete:P,showAltText:x}),L=R.props,I=R.meta;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(z,o._(i._({},L),{unoptimized:I.unoptimized,placeholder:I.placeholder,fill:I.fill,onLoadRef:h,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:E,sizesInput:e.sizes,ref:t})),I.priority?(0,c.jsx)(S,{isAppRouter:!r,imgAttributes:L}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},62964:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(94213),o=r(32586),n=r(25659);r(57542);var a=r(45119);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return d}}),r(62966);var s=r(8339),u=r(69838);function l(e){return void 0!==e.default}function c(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d(e,t){var r,d,f,h,p=e.src,g=e.sizes,m=e.unoptimized,v=void 0!==m&&m,b=e.priority,y=void 0!==b&&b,_=e.loading,w=e.className,z=e.quality,S=e.width,P=e.height,j=e.fill,C=void 0!==j&&j,x=e.style,E=e.overrideSrc,R=(e.onLoad,e.onLoadingComplete,e.placeholder),L=void 0===R?"empty":R,I=e.blurDataURL,M=e.fetchPriority,N=e.layout,O=e.objectFit,W=e.objectPosition,k=(e.lazyBoundary,e.lazyRoot,n._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","overrideSrc","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),A=t.imgConf,D=t.showAltText,F=t.blurComplete,G=t.defaultLoader,U=A||u.imageConfigDefault;if("allSizes"in U)d=U;else{var B=a._(U.deviceSizes).concat(a._(U.imageSizes)).sort(function(e,t){return e-t}),q=U.deviceSizes.sort(function(e,t){return e-t});d=o._(i._({},U),{allSizes:B,deviceSizes:q})}if(void 0===G)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");var T=k.loader||G;delete k.loader,delete k.srcSet;var J="__next_img_default"in T;if(J){if("custom"===d.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{var V=T;T=function(e){return e.config,V(n._(e,["config"]))}}if(N){"fill"===N&&(C=!0);var H={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];H&&(x=i._({},x,H));var Y={responsive:"100vw",fill:"100vw"}[N];Y&&!g&&(g=Y)}var Z="",$=c(S),K=c(P);if("object"==typeof(r=p)&&(l(r)||void 0!==r.src)){var Q=l(p)?p.default:p;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(Q));if(!Q.height||!Q.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(Q));if(f=Q.blurWidth,h=Q.blurHeight,I=I||Q.blurDataURL,Z=Q.src,!C){if($||K){if($&&!K){var X=$/Q.width;K=Math.round(Q.height*X)}else if(!$&&K){var ee=K/Q.height;$=Math.round(Q.width*ee)}}else $=Q.width,K=Q.height}}var et=!y&&("lazy"===_||void 0===_);(!(p="string"==typeof p?p:Z)||p.startsWith("data:")||p.startsWith("blob:"))&&(v=!0,et=!1),d.unoptimized&&(v=!0),J&&p.endsWith(".svg")&&!d.dangerouslyAllowSVG&&(v=!0),y&&(M="high");var er=c(z),ei=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:W}:{},D?{}:{color:"transparent"},x),eo=F||"empty"===L?null:"blur"===L?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:$,heightInt:K,blurWidth:f,blurHeight:h,blurDataURL:I||"",objectFit:ei.objectFit})+'")':'url("'+L+'")',en=eo?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:eo}:{},ea=function(e){var t=e.config,r=e.src,i=e.unoptimized,o=e.width,n=e.quality,s=e.sizes,u=e.loader;if(i)return{src:r,srcSet:void 0,sizes:void 0};var l=function(e,t,r){var i=e.deviceSizes,o=e.allSizes;if(r){for(var n=/(^|\s)(1?\d?\d)vw/g,s=[];u=n.exec(r);u)s.push(parseInt(u[2]));if(s.length){var u,l,c=.01*(l=Math).min.apply(l,a._(s));return{widths:o.filter(function(e){return e>=i[0]*c}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:a._(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,s),c=l.widths,d=l.kind,f=c.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:c.map(function(e,i){return u({config:t,src:r,quality:n,width:e})+" "+("w"===d?e:i+1)+d}).join(", "),src:u({config:t,src:r,quality:n,width:c[f]})}}({config:d,src:p,unoptimized:v,width:$,quality:er,sizes:g,loader:T});return{props:o._(i._({},k),{loading:et?"lazy":_,fetchPriority:M,width:$,height:K,decoding:"async",className:w,style:i._({},ei,en),sizes:ea.sizes,srcSet:ea.srcSet,src:E||ea.src}),meta:{unoptimized:v,priority:y,placeholder:L,fill:C}}}},8339:function(e,t){"use strict";function r(e){var t=e.widthInt,r=e.heightInt,i=e.blurWidth,o=e.blurHeight,n=e.blurDataURL,a=e.objectFit,s=i?40*i:t,u=o?40*o:r,l=s&&u?"viewBox='0 0 "+s+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},93538:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(57542);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return u}});var o=r(42430),n=r(62964),a=r(68301),s=o._(r(93998));function u(e){var t=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,768,1280,3840],imageSizes:[384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1}}).props,r=!0,o=!1,a=void 0;try{for(var u,l=Object.entries(t)[Symbol.iterator]();!(r=(u=l.next()).done);r=!0){var c=i._(u.value,2),d=c[0],f=c[1];void 0===f&&delete t[d]}}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return{props:t}}var l=a.Image},93998:function(e,t){"use strict";function r(e){var t=e.config,r=e.src,i=e.width,o=e.quality;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;var i=r},97087:function(e,t,r){e.exports=r(93538)}}]);