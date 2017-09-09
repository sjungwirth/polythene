import { filterSupportedAttributes } from 'polythene-core';

var classes = {
  component: "pe-svg"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// import { customTheme } from "./theme";
var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

// export const theme = customTheme;

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
};

var svg = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

// export { default as classes } from "./classes";
// export { default as vars } from "./theme/vars";

export { svg as coreSVG };
