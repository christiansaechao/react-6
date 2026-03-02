import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Home -> signup / login page
// set flag logged in true -> local storage
// ProtectedLayout -> User Dashboard

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        index: true,
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/protected-routes",
    Component: ProtectedRoutes,
    children: [
      {
        index: true,
        path: "dashboard",
        Component: Dashboard
      }
    ]
  }
]);
