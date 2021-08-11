import { lazy } from "react";

export const mainRoutes = [
  //public
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../pages/HomePage") /* webpackChunkName: "HomePage" */),
    exact: true,
    isPrivate: false,
    restricted: false,
  },
  {
    name: "About",
    path: "/about",
    component: () => <h2>AboutPage</h2>,
    exact: true,
    isPrivate: false,
    restricted: false,
  },
  //private
  {
    name: "ContactsPage",
    path: "/contacts",
    component: lazy(() => import("../pages/ContactsPage") /* webpackChunkName: "ContactsPage" */),
    exact: true,
    isPrivate: true,
    restricted: false,
  },
  //restricted
  {
    name: "Registration",
    path: "/signup",
    component: lazy(() => import("../pages/AuthPage") /* webpackChunkName: "AuthPage" */),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
  {
    name: "Login",
    path: "/signin",
    component: lazy(() => import("../pages/AuthPage") /* webpackChunkName: "AuthPage" */),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
];
