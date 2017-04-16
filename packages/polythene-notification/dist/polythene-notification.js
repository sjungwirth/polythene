!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core"),require("mithril"),require("polythene-css"),require("polythene-theme"),require("polythene-utilities")):"function"==typeof define&&define.amd?define(["exports","polythene-core","mithril","polythene-css","polythene-theme","polythene-utilities"],e):e(t.polythene=t.polythene||{},t["polythene-core"],t.m,t["polythene-css"],t["polythene-theme"],t["polythene-utilities"])}(this,function(t,e,n,i,o,r){"use strict";function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n="default"in n?n.default:n;var u={component:"pe-notification",holder:"pe-notification__holder",placeholder:"pe-notification__placeholder",content:"pe-notification__content",title:"pe-notification__title",multilineTitle:"pe-notification__title--multiline",action:"pe-notification__action",horizontal:"pe-notification--horizontal",vertical:"pe-notification--vertical",hasContainer:"pe-notification--container"},d=o.vars.rgba,s={width:274,min_height:80,border_radius:o.vars.unit_block_border_radius,title_padding_h:8,title_single_padding_v:14,title_multi_padding_v:20,side_padding:16,font_size:14,line_height:20,color_light_background:d(o.vars.color_light_background),color_light_text:d(o.vars.color_light_foreground,o.vars.blend_light_dark_primary),color_dark_background:d(o.vars.color_dark_background),color_dark_text:d(o.vars.color_dark_foreground,o.vars.blend_light_text_primary)},p=function(t,e){return[l({},t,[i.flex.layoutCenter,{width:e.width+"px",minHeight:e.min_height+"px",position:"relative",padding:"0 "+e.side_padding+"px",margin:"0 auto",borderRadius:e.border_radius+"px",pointerEvents:"all"," .pe-notification__content":{width:"100%"}," .pe-notification__title":{padding:e.title_single_padding_v+"px "+e.title_padding_h+"px",fontSize:e.font_size+"px",lineHeight:e.line_height+"px"}," .pe-notification__action":{" .pe-button":{margin:0}},"&.pe-notification--horizontal":{" .pe-notification__content":i.flex.layoutHorizontal," .pe-notification__title":i.flex.flex()," .pe-notification__title--multi-line":{paddingTop:e.title_multi_padding_v+"px",paddingBottom:e.title_multi_padding_v+"px"}," .pe-notification__action":i.flex.layoutCenter},"&.pe-notification--vertical":{" .pe-notification__content":i.flex.layoutVertical," .pe-notification__title":{paddingBottom:"4px"}," .pe-notification__title--multi-line":{paddingTop:e.title_multi_padding_v+"px"}," .pe-notification__action":i.flex.layoutEndJustified}}])]},f=function(t,e,n,i){return[a({},t.map(function(t){return t+e}).join(","),{color:n["color_"+i+"_text"],background:n["color_"+i+"_background"]})]},_=function(t,e){return[f([".pe-dark-tone",".pe-dark-tone "],t,e,"dark"),f(["",".pe-light-tone",".pe-light-tone "],t,e,"light")]},h=function(t){return[c({},t,[i.flex.layoutCenterCenter,{top:0,right:0,bottom:0,left:0,zIndex:o.vars.z_notification,pointerEvents:"none",".pe-multiple--screen":{position:"fixed"},".pe-multiple--container":{position:"absolute"}}])]},g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},m=[p,_],y="."+u.component,v=[h],b="."+u.holder,w=function(t,e){return i.styler.generateStyles([t,y],g({},s,e),m),i.styler.generateStyles([t,b],g({},s,e),v)};i.styler.generateStyles([y],s,m),i.styler.generateStyles([b],s,v);var x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},k=function(t){t.isPaused=!0,t.timer&&t.timer.pause()},S=function(t){t.isPaused=!1,t.timer&&t.timer.resume()},C=function(t){t.timer&&t.timer.stop()},j=function(t,e){if(t.containerEl=t.containerEl||document.querySelector(e.containerSelector||t.element),e.containerSelector){t.containerEl.querySelector(t.element).classList.add(u.hasContainer)}},P=function(t,n){j(t,n),C(t),t.transitioning=!0;var i=n.transitions||t.transitions;return e.show(x({},n,i.show(t.containerEl,n))).then(function(){t.transitioning=!1,t.didShow&&t.didShow(t.instanceId);var e=n.timeout;if(0===e);else{var i=void 0!==e?e:3;t.timer=new r.Timer(function(){z(t,n)},i)}})},z=function(t,i){C(t);var o=t.instanceId;t.transitioning=!0;var r=i.transitions||t.transitions;return e.hide(x({},i,r.hide(t.containerEl,i))).then(function(){C(t),t.transitioning=!1,t.didHide&&t.didHide(o),n.redraw()})},E=function(t,i){return n(i.element||"div",x({},e.filterSupportedAttributes(i),{class:[t.class,"light"===i.tone?null:"pe-dark-tone","light"===i.tone?"pe-light-tone":null,i.containerSelector?u.hasContainer:null,"vertical"===i.layout?u.vertical:u.horizontal,"dark"===i.tone?"pe-dark-tone":null,"light"===i.tone?"pe-light-tone":null,i.class].join(" "),oncreate:function(e){var n=e.dom;t.el=n,P(t,i)},onclick:function(t){return t.preventDefault()}}),n("div",{class:u.content},i.content||[i.title?n("div",{class:u.title,oncreate:function(t){var e=t.dom;e.getBoundingClientRect().height>parseInt(window.getComputedStyle(e).lineHeight,10)+parseInt(window.getComputedStyle(e).paddingTop,10)+parseInt(window.getComputedStyle(e).paddingBottom,10)&&e.classList.add(u.multilineTitle)}},i.title):null,i.action?n("div",{class:u.action},[i.action]):null]))},O={theme:w,oninit:function(t){var e=t.attrs;t.state=x(t.state,e,{el:null,containerEl:null,dismissEl:null,transitioning:!1,timer:null,isPaused:!1})},view:function(t){var e=t.state,n=t.attrs,i="function"==typeof n.opts?n.opts():n.opts;return n.hide&&!e.transitioning&&z(e,i),n.pause&&!e.isPaused?k(e):n.unpause&&e.isPaused&&S(e),E(e,i)}},D=function(t,e){return{el:t,showDuration:e.showDuration||.5,showDelay:e.showDelay||0,beforeShow:function(){return t.style.opacity=0},show:function(){return t.style.opacity=1}}},q=function(t,e){return{el:t,hideDuration:e.hideDuration||.5,hideDelay:e.hideDelay||0,hide:function(){return t.style.opacity=0}}},I={show:D,hide:q},H=e.multiple({instance:O,transitions:I,queue:!0,defaultId:"default_notification",class:u.component,element:"."+u.holder,placeholder:"span."+u.placeholder,bodyShowClass:u.open});t.default=H,t.classes=u,t.instance=O,t.vars=s,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-notification.js.map
