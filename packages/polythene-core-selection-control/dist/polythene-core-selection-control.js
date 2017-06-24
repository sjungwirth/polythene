!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core"),require("polythene-theme"),require("polythene-core-css")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-theme","polythene-core-css"],e):e(o.polythene=o.polythene||{},o["polythene-core"],o["polythene-theme"],o["polythene-core-css"])}(this,function(o,e,t,n){"use strict";function r(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function l(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function c(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function i(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}var a={component:"pe-control",formLabel:"pe-control__form-label",input:"pe-control__input",label:"pe-control__label",disabled:"pe-control--disabled",inactive:"pe-control--inactive",large:"pe-control--large",medium:"pe-control--medium",off:"pe-control--off",on:"pe-control--on",regular:"pe-control--regular",small:"pe-control--small",box:"pe-control__box",button:"pe-control__button",buttonOff:"pe-control__button--off",buttonOn:"pe-control__button--on"},_=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},u=function(o){return o.attrs.element||"div"},s=function(o,e){var t=o.attrs,n=void 0!==t.defaultChecked?!!t.defaultChecked:!!t.checked,r=e(n),l=e(n),c=function(){var o=void 0!==t.checked?t.checked:r();r(!o),l(!o)},i=void 0!==t.onChange?function(o){return c(),t.onChange({event:o,checked:r(),value:t.value})}:function(){return c()};return{checked:r,onChange:i,redrawOnUpdate:e.merge([l])}},p={small:a.small,regular:a.regular,medium:a.medium,large:a.large},d=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"regular";return p[o]},f=function(o,e){var t=void 0!==o.checked?o.checked:e.checked(),n=void 0!==o.selectable&&o.selectable(t);return{checked:t,inactive:o.disabled||!n}},b=function(o,t){var n=t.keys,r=o.attrs,l=o.state,c=f(r,l),i=c.checked,u=c.inactive;return _({},e.filterSupportedAttributes(r),{className:[a.component,r.instanceClass,i?a.on:a.off,r.disabled?a.disabled:null,u?a.inactive:null,d(r.size),"dark"===r.tone?"pe-dark-tone":null,"light"===r.tone?"pe-light-tone":null,r.className||r[n.class]].join(" ")},r.events)},g=function(o,e){var t=e.renderer,n=e.keys,l=e.ViewControl,c=o.state,i=o.attrs,u=f(i,c),s=u.checked,p=u.inactive;return t("label",{className:a.formLabel},[t(l,_({},i,{inactive:p,checked:s,onChange:c.onChange,key:"control"})),i.label?t("."+a.label,_({},{key:"label"},p?null:r({},n.onclick,c.onChange)),i.label):null])},h=Object.freeze({getElement:u,getInitialState:s,createProps:b,createContent:g}),v=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},m=function(o){return o.attrs.element||"."+a.box},y=function(o,e,t,n){return v({},{className:n,key:e},t[e]?t[e]:{svg:o.trust(t.icons[e])},t.icon,t.size?{size:t.size}:null)},k=function(o,e){var t=e.renderer,n=e.keys,r=e.Icon,c=e.IconButton,i=o.attrs;return t(c,v({},{element:"div",key:i.key,className:a.button,content:[{iconType:"iconOn",className:a.buttonOn},{iconType:"iconOff",className:a.buttonOff}].map(function(o){return t(r,y(t,o.iconType,i,o.className))}),ripple:{center:!0},disabled:i.disabled,events:l({},n.onclick,i.onChange),inactive:i.inactive},i.iconButton))},x=Object.freeze({getElement:m,createContent:k}),z=t.vars.rgba,O={label_font_size:2*t.vars.grid_unit_component,label_height:3*t.vars.grid_unit_component,label_padding_before:4*t.vars.grid_unit,label_padding_after:0,button_size:6*t.vars.grid_unit_component,icon_size:3*t.vars.grid_unit_component,animation_duration:t.vars.animation_duration,color_light_on:t.vars.rgba(t.vars.color_primary),color_light_off:z(t.vars.color_light_foreground,t.vars.blend_light_text_secondary),color_light_label:z(t.vars.color_light_foreground,t.vars.blend_light_text_secondary),color_light_disabled:z(t.vars.color_light_foreground,t.vars.blend_light_text_disabled),color_light_thumb_off_focus_opacity:.08,color_light_thumb_on_focus_opacity:.11,color_light_focus_on:z(t.vars.color_primary),color_light_focus_on_opacity:.11,color_light_focus_off:z(t.vars.color_light_foreground),color_light_focus_off_opacity:.07,color_dark_on:t.vars.rgba(t.vars.color_primary),color_dark_off:z(t.vars.color_dark_foreground,t.vars.blend_dark_text_secondary),color_dark_label:z(t.vars.color_dark_foreground,t.vars.blend_dark_text_secondary),color_dark_disabled:z(t.vars.color_dark_foreground,t.vars.blend_dark_text_disabled),color_dark_thumb_off_focus_opacity:.08,color_dark_thumb_on_focus_opacity:.11,color_dark_focus_on:z(t.vars.color_primary),color_dark_focus_on_opacity:.14,color_dark_focus_off:z(t.vars.color_dark_foreground),color_dark_focus_off_opacity:.09},C=function(o,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.vars.unit_icon_size,l=r+o.label_height,c=(l-r)/2;return{" .pe-control__form-label":{height:e+"px"}," .pe-control__box":{width:r+"px",height:r+"px"}," .pe-button__content":{width:l+"px",height:l+"px"," .pe-icon":[n.mixin.fit(c)]}}},j=function(o,e){return[c({},o,{display:"inline-block",boxSizing:"border-box",margin:0,padding:0," .pe-control__form-label":[n.flex.layoutHorizontal,n.flex.layoutCenter,{position:"relative",cursor:"pointer",fontSize:e.label_font_size+"px",lineHeight:e.label_height+"px",margin:0,color:"inherit",":focus":{outline:0}}],".pe-control--inactive":{" .pe-control__form-label":{cursor:"default"}}," .pe-control__box":{position:"relative",display:"inline-block",boxSizing:"border-box",width:e.label_height+"px",height:e.label_height+"px",color:"inherit",":focus":{outline:0}}," .pe-button.pe-control__button":[n.mixin.defaultTransition("opacity",e.animation_duration),{position:"absolute",left:-(e.button_size-e.icon_size)/2+"px",top:-(e.button_size-e.icon_size)/2+"px",zIndex:1}],".pe-control--off":{" .pe-control__button--on":{opacity:0,zIndex:0}," .pe-control__button--off":{opacity:1,zIndex:1}},".pe-control--on":{" .pe-control__button--on":{opacity:1,zIndex:1}," .pe-control__button--off":{opacity:0,zIndex:0}}," .pe-control__label":[n.mixin.defaultTransition("all",e.animation_duration),{paddingLeft:e.label_padding_before+"px",paddingRight:e.label_padding_after+"px"}],".pe-control--disabled":{" .pe-control__form-label":{cursor:"auto"}," .pe-control__button":{pointerEvents:"none"}}," .pe-button__content":{" .pe-icon":{position:"absolute"}},".pe-control--small":C(e,t.vars.unit_icon_size_small,t.vars.unit_icon_size_small),".pe-control--regular":C(e,e.label_height,t.vars.unit_icon_size),".pe-control--medium":C(e,t.vars.unit_icon_size_medium,t.vars.unit_icon_size_medium),".pe-control--large":C(e,t.vars.unit_icon_size_large,t.vars.unit_icon_size_large)})]},w=function(o,e,t,n){return[i({},o.map(function(o){return o+e}).join(","),{color:t["color_"+n+"_on"]," .pe-control__label":{color:t["color_"+n+"_label"]}," .pe-control__box":{" .pe-control__button":{color:"inherit"," .pe-control__button--on":{color:t["color_"+n+"_on_icon"]||"inherit"}," .pe-control__button--off":{color:t["color_"+n+"_off_icon"]||t["color_"+n+"_off"]}}},".pe-control--off":{" .pe-button--focus .pe-button__focus":{opacity:t["color_"+n+"_focus_off_opacity"],backgroundColor:t["color_"+n+"_focus_off"]}," .pe-control__label":{color:t["color_"+n+"_off_label"]||t["color_"+n+"_label"]}},".pe-control--on":{" .pe-button--focus .pe-button__focus":{opacity:t["color_"+n+"_focus_on_opacity"],backgroundColor:t["color_"+n+"_focus_on"]}," .pe-control__label":{color:t["color_"+n+"_on_label"]||t["color_"+n+"_label"]}},".pe-control--disabled":{" .pe-control__label":{color:t["color_"+n+"_disabled"]}," .pe-control__box":{" .pe-control__button--on, .pe-control__button--off":{color:t["color_"+n+"_disabled"]}}}})]},I=function(o,e){return[w([".pe-dark-tone",".pe-dark-tone "],o,e,"dark"),w(["",".pe-light-tone",".pe-light-tone "],o,e,"light")]};o.coreSelectionControl=h,o.viewControl=x,o.classes=a,o.vars=O,o.layout=j,o.color=I,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-selection-control.js.map
