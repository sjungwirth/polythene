[Back to Polythene Spinner main page](../spinner.md)

# Spinner component for Mithril


## Options

[Spinner options](../spinner.md)


## Usage

<a href="https://jsfiddle.net/ArthurClemens/hnzvnhxa/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

A typical Material Design (indeterminate) spinner:

~~~javascript
import { MaterialDesignSpinner as Spinner } from "polythene-mithril"
~~~

A typical iOS (indeterminate) spinner:

~~~javascript
import { IOSSpinner as Spinner } from "polythene-mithril"
~~~

A Material Design determinate spinner:

~~~javascript
import { MaterialDesignProgressSpinner as Spinner } from "polythene-mithril"
~~~

Display the Spinner:

~~~javascript
m(Spinner, { show: true })
~~~

### Show

By default the Spinner is hidden. To show the spinner, either:

* Set option `show` to true
* Set option `permanent` to true (for testing and demos)

### Progress spinner

To show a spinner "filling" a progress circle:

~~~javascript
import { MaterialDesignProgressSpinner as Spinner } from "polythene-mithril"

m(Spinner,
  {
    show: true,
    percentage: vnode.state.percentage
  }
)
~~~

The progress spinner draws a circle between 0 and 360 degrees. The completeness is set with `percentage`, with a range between `0.0` and `1.0`. This value would normally be set by a progress function, for instance a loader.

For demonstration purposes, this can be emulated with a "step" function that updates the percentage until 1.0 is reached:

~~~javascript
import m from "mithril"
import stream from "mithril/stream"
import { MaterialDesignProgressSpinner as Spinner, RaisedButton } from "polythene-mithril"

const STEP_DURATION = 2000

const Test = {
  oninit: vnode => {
    const start = stream(null)
    const percentage = stream(0)
    const step = timestamp => {
      if (!start()) start(timestamp)
      const progress = timestamp - start()
      percentage(Math.min(1, 1.0 / STEP_DURATION * progress))
      m.redraw()
      if (progress < STEP_DURATION) {
        window.requestAnimationFrame(step)
      }
    }
    vnode.state = {
      start,
      step,
      percentage
    }
  },
  view: ({ state }) => {
    const percentage = state.percentage()
    return [
      m(Spinner, {
        show: true,
        percentage
      }),
      m(RaisedButton, {
        label: "Run",
        events: {
          onclick: () => (
            state.start(null),
            window.requestAnimationFrame(state.step)
          )
        }
      })
    ]
  }
}
~~~


## Appearance

### Single color

For MaterialDesignSpinner and MaterialDesignProgressSpinner.

Use option `singleColor` to use only one color (by default the primary color).

### Styling

Below are examples how to change the Spinner appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
import { MaterialDesignSpinnerCSS } from "polythene-css"

MaterialDesignSpinnerCSS.addStyle(".themed-spinner", {
  color_light_background: "#2196F3",
  border_radius:          0
})

m(Spinner, {
  className: "themed-spinner"
})
~~~

#### CSS

Change CSS using the CSS classes in:

* `polythene-core-ios-spinner/src/classes.js`
* `polythene-core-material-design-spinner/src/classes.js`
* `polythene-core-material-design-progress-spinner/src/classes.js`

Class names can be accessed by calling the `classes` property on the imported spinner:

~~~javascript
import { MaterialDesignProgressSpinner as Spinner } from "polythene-mithril"

// MaterialDesignProgressSpinner.classes
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(MaterialDesignProgressSpinner, {
  style: {
    color: "red"
  }
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


