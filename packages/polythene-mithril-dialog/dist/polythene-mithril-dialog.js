!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-mithril-base"),require("polythene-core"),require("polythene-core-dialog"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core","polythene-core-dialog","polythene-mithril-shadow"],o):o(e.polythene=e.polythene||{},e["polythene-mithril-base"],e["polythene-core"],e["polythene-core-dialog"],e["polythene-mithril-shadow"])}(this,function(e,o,t,n,r){"use strict";var a=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i=o.stateComponent(a({},n.coreDialogInstance,{createProps:function(e,o){return n.coreDialogInstance.createProps(e,a(o,{Shadow:r.Shadow}))},createContent:function(e,o){return n.coreDialogInstance.createContent(e,a(o,{Shadow:r.Shadow}))}}));i.displayName="DialogInstance";var l={bodyShowClass:n.classes.open,defaultId:"default_dialog",element:"div."+n.classes.holder,instance:i,placeholder:"span."+n.classes.placeholder,transitions:n.transitions},s=t.multipleHOC({options:l,renderer:o.renderer}),c=o.stateComponent(s);Object.getOwnPropertyNames(s).forEach(function(e){return c[e]=s[e]}),c.theme=n.coreDialogInstance.theme,c.displayName="Dialog",e.DialogInstance=i,e.Dialog=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-dialog.js.map
