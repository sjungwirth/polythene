import { StateComponent, ViewComponent } from 'polythene-mithril-base';
import { coreRadioButton } from 'polythene-core-radio-button';
import { coreSelectionControl, viewControl } from 'polythene-core-selection-control';
import { Icon } from 'polythene-mithril-icon';
import { IconButton } from 'polythene-mithril-icon-button';

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = ViewComponent(_extends$2({}, viewControl, {
  createContent: function createContent(vnode, args) {
    return viewControl.createContent(vnode, _extends$2(args, { Icon: Icon, IconButton: IconButton }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = StateComponent(_extends$1({}, coreSelectionControl, {
  createContent: function createContent(vnode, args) {
    return coreSelectionControl.createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RadioButton = StateComponent(_extends({}, coreRadioButton, {
  component: SelectionControl
}));

RadioButton.displayName = "RadioButton";

export { RadioButton };
