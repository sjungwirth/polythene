define(["polythene/polythene/polythene","mithril","polythene/icon/icon","css!./item"],function(n,e,t){"use strict";return{view:function(l,o){var i,c,r;return o=o||{},i=o.tag||"div[center][horizontal][layout]",c=n.componentProps({classList:["item"]},o,this,l),r=[o.icon?e.component(t,o.icon):null,o.label?e("div",o.label):null,o.content?o.content:null],e(i,c,n.embellish(r,o))}}});