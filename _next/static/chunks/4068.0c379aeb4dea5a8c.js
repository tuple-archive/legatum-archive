(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4068],{96104:function(){},30583:function(e,t,r){"use strict";r.d(t,{Jx:function(){return z},ZP:function(){return k}});var n=r(50959);let o=n.createContext(null);function a(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!a(e[r],t[r]))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let n of r)if(!t.hasOwnProperty(n)||!a(e[n],t[n]))return!1;return!0}return!1}function i(e,t){if(!e.getProjection)return;let r=e.getProjection();a(r,t.getProjection())||t.setProjection(r)}function s(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function l(e,t){let r=t.viewState||t,n=!1;if("longitude"in r&&"latitude"in r){let t=e.center;e.center=new t.constructor(r.longitude,r.latitude),n=n||t!==e.center}if("zoom"in r){let t=e.zoom;e.zoom=r.zoom,n=n||t!==e.zoom}if("bearing"in r){let t=e.bearing;e.bearing=r.bearing,n=n||t!==e.bearing}if("pitch"in r){let t=e.pitch;e.pitch=r.pitch,n=n||t!==e.pitch}return r.padding&&!e.isPaddingEqual(r.padding)&&(n=!0,e.padding=r.padding),n}let u=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function d(e){if(!e)return null;if("string"==typeof e||("toJS"in e&&(e=e.toJS()),!e.layers))return e;let t={};for(let r of e.layers)t[r.id]=r;let r=e.layers.map(e=>{let r=null;"interactive"in e&&(r=Object.assign({},e),delete r.interactive);let n=t[e.ref];if(n)for(let t of(r=r||Object.assign({},e),delete r.ref,u))t in n&&(r[t]=n[t]);return r||e});return{...e,layers:r}}var c=r(14224);let p={version:8,sources:{},layers:[]},f={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},m={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},h={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},g=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],v=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class y{constructor(e,t,r){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=e=>{let t=this.props[h[e.type]];t?t(e):"error"===e.type&&console.error(e.error)},this._onPointerEvent=e=>{("mousemove"===e.type||"mouseout"===e.type)&&this._updateHover(e);let t=this.props[f[e.type]];t&&(this.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type&&(e.features=this._hoveredFeatures||this._queryRenderedFeatures(e.point)),t(e),delete e.features)},this._onCameraEvent=e=>{if(!this._internalUpdate){let t=this.props[m[e.type]];t&&t(e)}e.type in this._deferredEvents&&(this._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(r)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){let t=this.props;this.props=e;let r=this._updateSettings(e,t);r&&this._createShadowTransform(this._map);let n=this._updateSize(e),o=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(r||n||o&&!this._map.isMoving())&&this.redraw()}static reuse(e,t){let r=y.savedMaps.pop();if(!r)return null;let n=r.map,o=n.getContainer();for(t.className=o.className;o.childNodes.length>0;)t.appendChild(o.childNodes[0]);n._container=t;let a=n._resizeObserver;a&&(a.disconnect(),a.observe(t)),r.setProps({...e,styleDiffing:!1}),n.resize();let{initialViewState:i}=e;return i&&(i.bounds?n.fitBounds(i.bounds,{...i.fitBoundsOptions,duration:0}):r._updateViewState(i,!1)),n.isStyleLoaded()?n.fire("load"):n.once("styledata",()=>n.fire("load")),n._update(),r}_initialize(e){let{props:t}=this,{mapStyle:r=p}=t,n={...t,...t.initialViewState,accessToken:t.mapboxAccessToken||function(){let e=null;if("undefined"!=typeof location){let t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||c.env.MapboxAccessToken}catch(e){}try{e=e||c.env.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(e){}return e}()||null,container:e,style:d(r)},o=n.initialViewState||n.viewState||n;if(Object.assign(n,{center:[o.longitude||0,o.latitude||0],zoom:o.zoom||0,pitch:o.pitch||0,bearing:o.bearing||0}),t.gl){let e=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=e,t.gl)}let a=new this._MapClass(n);o.padding&&a.setPadding(o.padding),t.cursor&&(a.getCanvas().style.cursor=t.cursor),this._createShadowTransform(a);let s=a._render;a._render=e=>{this._inRender=!0,s.call(a,e),this._inRender=!1};let l=a._renderTaskQueue.run;a._renderTaskQueue.run=e=>{l.call(a._renderTaskQueue,e),this._onBeforeRepaint()},a.on("render",()=>this._onAfterRepaint());let u=a.fire;for(let e in a.fire=this._fireEvent.bind(this,u),a.on("resize",()=>{this._renderTransform.resize(a.transform.width,a.transform.height)}),a.on("styledata",()=>{this._updateStyleComponents(this.props,{}),i(a.transform,this._renderTransform)}),a.on("sourcedata",()=>this._updateStyleComponents(this.props,{})),f)a.on(e,this._onPointerEvent);for(let e in m)a.on(e,this._onCameraEvent);for(let e in h)a.on(e,this._onEvent);this._map=a}recycle(){let e=this.map.getContainer().querySelector("[mapboxgl-children]");null==e||e.remove(),y.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){let e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){let t=function(e){let t=e.clone();return t.pixelsToGLUnits=e.pixelsToGLUnits,t}(e.transform);e.painter.transform=t,this._renderTransform=t}_updateSize(e){let{viewState:t}=e;if(t){let e=this._map;if(t.width!==e.transform.width||t.height!==e.transform.height)return e.resize(),!0}return!1}_updateViewState(e,t){if(this._internalUpdate)return!1;let r=this._map,n=this._renderTransform,{zoom:o,pitch:a,bearing:i}=n,u=r.isMoving();u&&(n.cameraElevationReference="sea");let d=l(n,{...s(r.transform),...e});if(u&&(n.cameraElevationReference="ground"),d&&t){let e=this._deferredEvents;e.move=!0,e.zoom||(e.zoom=o!==n.zoom),e.rotate||(e.rotate=i!==n.bearing),e.pitch||(e.pitch=a!==n.pitch)}return u||l(r.transform,e),d}_updateSettings(e,t){let r=this._map,n=!1;for(let o of g)if(o in e&&!a(e[o],t[o])){n=!0;let t=r[`set${o[0].toUpperCase()}${o.slice(1)}`];null==t||t.call(r,e[o])}return n}_updateStyle(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==t.mapStyle){let{mapStyle:t=p,styleDiffing:r=!0}=e,n={diff:r};return"localIdeographFontFamily"in e&&(n.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(d(t),n),!0}return!1}_updateStyleComponents(e,t){let r=this._map,n=!1;return r.isStyleLoaded()&&("light"in e&&r.setLight&&!a(e.light,t.light)&&(n=!0,r.setLight(e.light)),"fog"in e&&r.setFog&&!a(e.fog,t.fog)&&(n=!0,r.setFog(e.fog)),"terrain"in e&&r.setTerrain&&!a(e.terrain,t.terrain)&&(!e.terrain||r.getSource(e.terrain.source))&&(n=!0,r.setTerrain(e.terrain))),n}_updateHandlers(e,t){var r,n;let o=this._map,i=!1;for(let s of v){let l=null===(r=e[s])||void 0===r||r;a(l,null===(n=t[s])||void 0===n||n)||(i=!0,l?o[s].enable(l):o[s].disable())}return i}_queryRenderedFeatures(e){let t=this._map,r=t.transform,{interactiveLayerIds:n=[]}=this.props;try{return t.transform=this._renderTransform,t.queryRenderedFeatures(e,{layers:n.filter(t.getLayer.bind(t))})}catch(e){return[]}finally{t.transform=r}}_updateHover(e){var t;let{props:r}=this;if(r.interactiveLayerIds&&(r.onMouseMove||r.onMouseEnter||r.onMouseLeave)){let r=e.type,n=(null===(t=this._hoveredFeatures)||void 0===t?void 0:t.length)>0,o=this._queryRenderedFeatures(e.point),a=o.length>0;!a&&n&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=o,a&&!n&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=r}else this._hoveredFeatures=null}_fireEvent(e,t,r){let n=this._map,o=n.transform,a="string"==typeof t?t:t.type;return("move"===a&&this._updateViewState(this.props,!1),a in m&&("object"==typeof t&&(t.viewState=s(o)),this._map.isMoving()))?(n.transform=this._renderTransform,e.call(n,t,r),n.transform=o):e.call(n,t,r),n}_onBeforeRepaint(){let e=this._map;for(let t in this._internalUpdate=!0,this._deferredEvents)this._deferredEvents[t]&&e.fire(t);this._internalUpdate=!1;let t=this._map.transform;e.transform=this._renderTransform,this._onAfterRepaint=()=>{i(this._renderTransform,t),e.transform=t}}}y.savedMaps=[];let _=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"],E="undefined"!=typeof document?n.useLayoutEffect:n.useEffect,b=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"],x=n.createContext(null);var C=r(10422);let L=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function M(e,t){if(!e||!t)return;let r=e.style;for(let e in t){let n=t[e];Number.isFinite(n)&&!L.test(e)?r[e]=`${n}px`:r[e]=n}}var S=(0,n.memo)((0,n.forwardRef)(function(e,t){let{map:r,mapLib:o}=(0,n.useContext)(x),a=(0,n.useRef)({props:e});a.current.props=e;let i=(0,n.useMemo)(()=>{let t=!1;n.Children.forEach(e.children,e=>{e&&(t=!0)});let r={...e,element:t?document.createElement("div"):null},s=new o.Marker(r);return s.setLngLat([e.longitude,e.latitude]),s.getElement().addEventListener("click",e=>{var t,r;null===(r=(t=a.current.props).onClick)||void 0===r||r.call(t,{type:"click",target:s,originalEvent:e})}),s.on("dragstart",e=>{var t,r;e.lngLat=i.getLngLat(),null===(r=(t=a.current.props).onDragStart)||void 0===r||r.call(t,e)}),s.on("drag",e=>{var t,r;e.lngLat=i.getLngLat(),null===(r=(t=a.current.props).onDrag)||void 0===r||r.call(t,e)}),s.on("dragend",e=>{var t,r;e.lngLat=i.getLngLat(),null===(r=(t=a.current.props).onDragEnd)||void 0===r||r.call(t,e)}),s},[]);(0,n.useEffect)(()=>(i.addTo(r.getMap()),()=>{i.remove()}),[]);let{longitude:s,latitude:l,offset:u,style:d,draggable:c=!1,popup:p=null,rotation:f=0,rotationAlignment:m="auto",pitchAlignment:h="auto"}=e;return(0,n.useEffect)(()=>{M(i.getElement(),d)},[d]),(0,n.useImperativeHandle)(t,()=>i,[]),(i.getLngLat().lng!==s||i.getLngLat().lat!==l)&&i.setLngLat([s,l]),u&&!function(e,t){let r=Array.isArray(e)?e[0]:e?e.x:0,n=Array.isArray(e)?e[1]:e?e.y:0,o=Array.isArray(t)?t[0]:t?t.x:0,a=Array.isArray(t)?t[1]:t?t.y:0;return r===o&&n===a}(i.getOffset(),u)&&i.setOffset(u),i.isDraggable()!==c&&i.setDraggable(c),i.getRotation()!==f&&i.setRotation(f),i.getRotationAlignment()!==m&&i.setRotationAlignment(m),i.getPitchAlignment()!==h&&i.setPitchAlignment(h),i.getPopup()!==p&&i.setPopup(p),(0,C.createPortal)(e.children,i.getElement())}));function P(e){return new Set(e?e.trim().split(/\s+/):[])}(0,n.memo)((0,n.forwardRef)(function(e,t){let{map:r,mapLib:o}=(0,n.useContext)(x),i=(0,n.useMemo)(()=>document.createElement("div"),[]),s=(0,n.useRef)({props:e});s.current.props=e;let l=(0,n.useMemo)(()=>{let t={...e},r=new o.Popup(t);return r.setLngLat([e.longitude,e.latitude]),r.once("open",e=>{var t,r;null===(r=(t=s.current.props).onOpen)||void 0===r||r.call(t,e)}),r},[]);if((0,n.useEffect)(()=>{let e=e=>{var t,r;null===(r=(t=s.current.props).onClose)||void 0===r||r.call(t,e)};return l.on("close",e),l.setDOMContent(i).addTo(r.getMap()),()=>{l.off("close",e),l.isOpen()&&l.remove()}},[]),(0,n.useEffect)(()=>{M(l.getElement(),e.style)},[e.style]),(0,n.useImperativeHandle)(t,()=>l,[]),l.isOpen()&&((l.getLngLat().lng!==e.longitude||l.getLngLat().lat!==e.latitude)&&l.setLngLat([e.longitude,e.latitude]),e.offset&&!a(l.options.offset,e.offset)&&l.setOffset(e.offset),(l.options.anchor!==e.anchor||l.options.maxWidth!==e.maxWidth)&&(l.options.anchor=e.anchor,l.setMaxWidth(e.maxWidth)),l.options.className!==e.className)){let t=P(l.options.className),r=P(e.className);for(let e of t)r.has(e)||l.removeClassName(e);for(let e of r)t.has(e)||l.addClassName(e);l.options.className=e.className}return(0,C.createPortal)(e.children,i)}));var w=function(e,t,r,o){let a=(0,n.useContext)(x),i=(0,n.useMemo)(()=>e(a),[]);return(0,n.useEffect)(()=>{let e=o||r||t,n="function"==typeof t&&"function"==typeof r?t:null,s="function"==typeof r?r:"function"==typeof t?t:null,{map:l}=a;return!l.hasControl(i)&&(l.addControl(i,null==e?void 0:e.position),n&&n(a)),()=>{s&&s(a),l.hasControl(i)&&l.removeControl(i)}},[]),i};(0,n.memo)(function(e){let t=w(({mapLib:t})=>new t.AttributionControl(e),{position:e.position});return(0,n.useEffect)(()=>{M(t._container,e.style)},[e.style]),null}),(0,n.memo)(function(e){let t=w(({mapLib:t})=>new t.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)}),{position:e.position});return(0,n.useEffect)(()=>{M(t._controlContainer,e.style)},[e.style]),null}),(0,n.memo)((0,n.forwardRef)(function(e,t){let r=(0,n.useRef)({props:e}),o=w(({mapLib:t})=>{let n=new t.GeolocateControl(e),o=n._setupUI;return n._setupUI=e=>{n._container.hasChildNodes()||o(e)},n.on("geolocate",e=>{var t,n;null===(n=(t=r.current.props).onGeolocate)||void 0===n||n.call(t,e)}),n.on("error",e=>{var t,n;null===(n=(t=r.current.props).onError)||void 0===n||n.call(t,e)}),n.on("outofmaxbounds",e=>{var t,n;null===(n=(t=r.current.props).onOutOfMaxBounds)||void 0===n||n.call(t,e)}),n.on("trackuserlocationstart",e=>{var t,n;null===(n=(t=r.current.props).onTrackUserLocationStart)||void 0===n||n.call(t,e)}),n.on("trackuserlocationend",e=>{var t,n;null===(n=(t=r.current.props).onTrackUserLocationEnd)||void 0===n||n.call(t,e)}),n},{position:e.position});return r.current.props=e,(0,n.useImperativeHandle)(t,()=>o,[]),(0,n.useEffect)(()=>{M(o._container,e.style)},[e.style]),null})),(0,n.memo)(function(e){let t=w(({mapLib:t})=>new t.NavigationControl(e),{position:e.position});return(0,n.useEffect)(()=>{M(t._container,e.style)},[e.style]),null}),(0,n.memo)(function(e){let t=w(({mapLib:t})=>new t.ScaleControl(e),{position:e.position}),r=(0,n.useRef)(e),o=r.current;r.current=e;let{style:a}=e;return void 0!==e.maxWidth&&e.maxWidth!==o.maxWidth&&(t.options.maxWidth=e.maxWidth),void 0!==e.unit&&e.unit!==o.unit&&t.setUnit(e.unit),(0,n.useEffect)(()=>{M(t._container,a)},[a]),null});let R=r.e(4130).then(r.t.bind(r,86463,23)),T=n.forwardRef(function(e,t){return function(e,t,r){let a=(0,n.useContext)(o),[i,s]=(0,n.useState)(null),l=(0,n.useRef)(),{current:u}=(0,n.useRef)({mapLib:null,map:null});(0,n.useEffect)(()=>{let t;let n=e.mapLib,o=!0;return Promise.resolve(n||r).then(r=>{if(!o)return;if(!r)throw Error("Invalid mapLib");let n="Map"in r?r:r.default;if(!n.Map)throw Error("Invalid mapLib");if(function(e,t){for(let r of b)r in t&&(e[r]=t[r]);let{RTLTextPlugin:r="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=t;r&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(r,e=>{e&&console.error(e)},!0)}(n,e),!n.supported||n.supported(e))e.reuseMaps&&(t=y.reuse(e,l.current)),t||(t=new y(n.Map,e,l.current)),u.map=function(e){if(!e)return null;let t=e.map,r={getMap:()=>t,getCenter:()=>e.transform.center,getZoom:()=>e.transform.zoom,getBearing:()=>e.transform.bearing,getPitch:()=>e.transform.pitch,getPadding:()=>e.transform.padding,getBounds:()=>e.transform.getBounds(),project:r=>{let n=t.transform;t.transform=e.transform;let o=t.project(r);return t.transform=n,o},unproject:r=>{let n=t.transform;t.transform=e.transform;let o=t.unproject(r);return t.transform=n,o},queryTerrainElevation:(r,n)=>{let o=t.transform;t.transform=e.transform;let a=t.queryTerrainElevation(r,n);return t.transform=o,a},queryRenderedFeatures:(r,n)=>{let o=t.transform;t.transform=e.transform;let a=t.queryRenderedFeatures(r,n);return t.transform=o,a}};for(let e of function(e){let t=new Set,r=e;for(;r;){for(let n of Object.getOwnPropertyNames(r))"_"!==n[0]&&"function"==typeof e[n]&&"fire"!==n&&"setEventedParent"!==n&&t.add(n);r=Object.getPrototypeOf(r)}return Array.from(t)}(t))e in r||_.includes(e)||(r[e]=t[e].bind(t));return r}(t),u.mapLib=n,s(t),null==a||a.onMapMount(u.map,e.id);else throw Error("Map is not supported by this browser")}).catch(t=>{let{onError:r}=e;r?r({type:"error",target:null,originalEvent:null,error:t}):console.error(t)}),()=>{o=!1,t&&(null==a||a.onMapUnmount(e.id),e.reuseMaps?t.recycle():t.destroy())}},[]),E(()=>{i&&i.setProps(e)}),(0,n.useImperativeHandle)(t,()=>u.map,[i]);let d=(0,n.useMemo)(()=>({position:"relative",width:"100%",height:"100%",...e.style}),[e.style]);return n.createElement("div",{id:e.id,ref:l,style:d},i&&n.createElement(x.Provider,{value:u},n.createElement("div",{"mapboxgl-children":"",style:{height:"100%"}},e.children)))}(e,t,R)}),z=S;var k=T}}]);