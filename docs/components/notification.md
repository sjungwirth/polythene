_This is documentation for Polythene 0.3. A newer version of Polythene - compatible with Mithril 1.x - is available at https://github.com/ArthurClemens/polythene_


# Notification and Snackbar

Shows a temporary message. Messages can be queued.

The information on this page refers to the `notification` component, but can also be used for the `snackbar` component - both components use the same code base, and only differ in appearance (style and transitions).

`notification` is a message that appears at the center of the screen. It is not used by Material Design in this form (there exists an Android-only notification which uses list tile for layout), but is a common enough design pattern to warrant a ready-made component. To use `snackbar`, use the example code below and substitute `notification` with `snackbar`.

Importing notification:

~~~javascript
import m from 'mithril';
import { Notification } from 'polythene';
~~~

Importing snackbar:

~~~javascript
import m from 'mithril';
import { Snackbar } from 'polythene';
~~~


## Usage

Other than most other components, `notification` is invoked through function calls `show` and `hide`.

It is a global global component - only one notification container may appear on the screen. It needs a place in the root view so that it is not obstructed by other components:

~~~javascript
import m from 'mithril';
import { Notification } from 'polythene';

const app = {};
app.view = (ctrl, opts) => {
    return [
        // app content
        // optional dialog
        m('#notifications', m(Notification))
    ];
};
~~~

We are using `#notifications` as a container for future notification messages. When no notification is shown, its only contents is a placeholder span.


The notification component is called using:

~~~javascript
Notification.show(options);
Notification.hide();
~~~

Function calls are described below.

Any time `show` is called to show a message, this message will be queued. Subsequent messages will wait until the displayed message is hidden.


### Examples

~~~javascript
import { Notification } from 'polythene';

Notification.show({
    title: 'This is the message',
    containerSelector: '#notifications'
});

Notification.show({
    title: 'This is a second message',
    containerSelector: '#notifications'
});
~~~

Add an action:

~~~javascript
Notification.show({
    title: 'This is the message',
    action: m(Button, {
        label: 'Undo',
        events: {
            onclick: () => {
                // do something
            }
        }
    }),
    containerSelector: '#notifications'
})
~~~

With a little more work, we can make the notification pause when a dialog is shown. In this example we want to pause the notification when the dialog is on screen, then unpause on cancel, and hide on OK:

~~~javascript
import { Dialog } from 'polythene';

const actionDialog = () => {
    return {
        class: 'notification-action-dialog',
        body: 'You pressed a notification action',
        footer: [
            m(button, {
                label: 'Cancel',
                events: {
                    onclick: () => {
                        dialog.hide();
                        notification.unpause();
                    }
                }
            }),
            m(Button, {
                label: 'OK',
                events: {
                    onclick: () => {
                        dialog.hide();
                        notification.hide();
                    }
                }
            })
        ],
        backdrop: true,
        modal: true
    };
};

Notification.show({
    title: 'This is the message',
    action: m(Button, {
        label: 'Undo',
        events: {
            onclick: () => {
                Notification.pause();
                Dialog.show(actionDialog());
            }
        }
    }),
    containerSelector: '#notifications'
})
~~~

### Function calls

~~~javascript
Notification.show(options);
Notification.hide();
Notification.pause();
Notification.unpause();
Notification.clear();
Notification.count();
~~~

Functions that return a promise:

* show
* hide


#### show

~~~javascript
Notification.show(options);
~~~

~~~javascript
Notification.show(options).then(() => (console.log('notification shown')));
~~~

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **options** | required | Options object or Function that returns an options object | | See options table below |

#### hide

Hides the current message.

~~~javascript
Notification.hide();
~~~

~~~javascript
Notification.hide().then(() => (console.log('notification hidden')));
~~~

#### pause

Pauses the timer of the current message.

~~~javascript
Notification.pause();
~~~

#### unpause

Unpauses the timer of the current message.

~~~javascript
Notification.unpause();
~~~

#### clear

Clears the lists of messages.

~~~javascript
Notification.clear();
~~~

If a message is on screen, this would suddenly disappear. You might first want to hide the current message before clearing all:

~~~javascript
onclick: () => {
    Notification.hide().then(() => {
        Notification.clear();
        m.redraw();
    });
}
~~~

#### count

Returns the number of messages.

~~~javascript
let messages = Notification.count();
~~~

### Transitions

Show and hide transitions are defined in a Polythene theme file, module `polythene/notification/theme/notification/transitions`. This module can be overridden to implement custom functions (see Theming).


### Callbacks

Two optional callbacks are used after the transition: `didShow` and `didHide` (see also [Dialog](dialog).md).


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div.layout.center' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-notification pe-notification--notification' (or 'pe-notification pe-notification--snackbar') |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Notification specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **containerSelector** | required | String |  | Selector of container HTML element (does not need to be the direct parent); for instance if a FAB button needs to move together with the notification, both the FAB and notification will be placed in the same container; transitions will then move both simultaneously |
| **title** | required | String | | Text |
| **action** | optional | Mithril element | | Will likely contain a button |
| **timeout** | optional | Number (seconds) | 3 | How long the notification should be displayed before it hides automatically; use `0` to not hide automatically |
| **dismissSelector** | optional | String | | Not used yet; will implement "Disappear after user interaction elsewhere" |

### Notification appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **layout** | optional | String: 'horizontal' or 'vertical' | 'horizontal' | Sets the arrangement of the action; by default the action is placed right to the title, but longer action labels better fit below the title |

### Transition options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **transition** | optional | String: 'both', 'show', 'hide', 'none' | 'both' | Sets when a transition is used |
| **showDuration** | optional | Number | .150 | The show transition duration in seconds |
| **hideDuration** | optional | Number | .150 | The hide transition duration in seconds |
| **showDelay** | optional | Number | 0 | The show delay duration in milliseconds |
| **hideDelay** | optional | Number | 0 | The hide delay duration in milliseconds |


## Styling

When a notification is show, the placeholder span is replaced with HTML (the exact content depends on the message passed):

~~~html
<div class="pe-notification__holder">
    <div class="pe-notification">
        <div class="pe-notification__content">
            <div class="pe-notification__title">...</div>
        </div>
    </div>
</div>
~~~

To prevent the overlay from interactive with the items below, add style `pointer-events: none`.

An example of a custom notification style in j2c format:

~~~javascript
' .pe-notification__holder': {
    'pointer-events': 'none'
},
' .pe-notification': {
    background: 'rgba(34, 34, 34, 0.4)'
},
' .pe-notification__title': {
    'font-weight': 'bold',
    'font-size': '23px',
    'text-align': 'center'
}
~~~


## Inheritance/composition

Notification and Snackbar are composed with [Selection control](selection-control.md).