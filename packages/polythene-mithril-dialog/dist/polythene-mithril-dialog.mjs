import { StateComponent, renderer } from 'polythene-mithril-base';
import { Multi } from 'polythene-core';
import { classes, coreDialogInstance, transitions } from 'polythene-core-dialog';
import { DialogPane } from 'polythene-mithril-dialog-pane';
import { Shadow } from 'polythene-mithril-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DialogInstance = StateComponent(_extends({}, coreDialogInstance, {
  createProps: function createProps(vnode, args) {
    return coreDialogInstance.createProps(vnode, _extends(args, { Shadow: Shadow, DialogPane: DialogPane }));
  },
  createContent: function createContent(vnode, args) {
    return coreDialogInstance.createContent(vnode, _extends(args, { Shadow: Shadow, DialogPane: DialogPane }));
  }
}));

DialogInstance.displayName = "DialogInstance";

var options = {
  name: "dialog",
  bodyShowClass: classes.open,
  defaultId: "default_dialog",
  holderSelector: "div." + classes.holder,
  instance: DialogInstance,
  placeholder: "span." + classes.placeholder,
  transitions: transitions
};

var Multiple = Multi({ options: options, renderer: renderer });
var Dialog = StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Dialog[p] = Multiple[p];
});

Dialog.displayName = "Dialog";

export { DialogInstance, Dialog };
