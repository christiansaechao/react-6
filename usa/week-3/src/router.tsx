import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import { Login } from "./pages/Login";

/** Homework
 * 1.
    * Navbar
    * Style Public Layout
*  2.
    * Protected Layout
    * Dashboard
*  3. Global State (Zustand)
    * Login / Signup store user info into 
    * global state and then consume username in dashboard   
 */

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    children: [
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
