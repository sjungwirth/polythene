import { classes as notificationClasses } from "polythene-core-notification";

export default Object.assign(
  {},
  notificationClasses,
  {
    component:      "pe-notification pe-snackbar",

    // elements
    holder:         "pe-snackbar__holder",
    placeholder:    "pe-snackbar__placeholder",

    // states
    open:           "pe-snackbar--open",
  }
);
