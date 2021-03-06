import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  withRouter,
} from "react-router-dom";
import { addFastClick } from "polythene-fastclick";
import { addTypography, addLayoutStyles } from "polythene-css";
import "polythene-css";
import { rules as css } from "./styles";
import { renderer as h, List, Toolbar, ListTile, Snackbar, Notification } from "polythene-react";
import Page from "./Page";
import routes from "./routes";
import ScrollToTop from "./ScrollToTop";

addTypography();
addLayoutStyles();
addFastClick();

const NavBar = () =>
  h(css.headerRow, null,
    h(Toolbar,
      {
        style: {
          backgroundColor: "rgba(255,255,255,.93)"
        }
      },
      h("span", "Polythene Components for React")
    )
  );

const Index = () =>
  h("div", null, [
    NavBar(),
    h(".navbar-spacer"),
    h(List,
      { className: "index-list" },
      routes.map(route => (
        h(withRouter(({ history }) =>
          h(ListTile, {
            title: route.name,
            key: route.path,
            hoverable: true,
            url: {
              href: route.path,
              onClick: e => (e.preventDefault(), history.push(route.path))
            }
          })
        ))
      ))
    ),
    h(Snackbar),
    h(Notification)
  ]);

const routerMap = routes.map(route =>
  h(Route,
    {
      path: route.path,
      render: props => Page(Object.assign({}, props, { name: route.name, tests: route.tests, previous: "/" })),
    }
  )).concat([
  h(Route, {
    exact: true,
    path: "/",
    component: Index
  })
]);

const App = () => (
  h(Router, null, 
    h(ScrollToTop, null,
      h("div", routerMap)
    )
  )
);

const mountNode = document.querySelector("#app");
ReactDOM.render(h(App), mountNode);

