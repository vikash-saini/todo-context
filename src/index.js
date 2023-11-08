import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import AppProvider from "./constants/AppProvider";
import { WalkThroughDispatch } from "./constants/AppProvider";
import { ThemeContext } from "./constants/theme-context";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Parent from "./components/parent";
import Users from "./components/users";
import ClickCounter from "./components/clickCounter";
import HoverCounter from "./components/hoverCounter";
import UserForm from "./components/UserForm";
import Accordian from "./components/Accordian";
import {dummyData} from "./datasource";

const AppComponent = () => {
  return (
    <>
      <AppProvider>
        <App />
      </AppProvider>
    </>
  );
};

const Root = () => {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`useCallback-useMemo`}>useCallback</Link>
            </li>
            <li>
              <Link to={`contact`}>Contact</Link>
            </li>
            <li>
              <Link to={`users`}>Users</Link>
            </li>
            <li>
              <Link to={`useCallback-useMemo`}>UseCallback-useMemo</Link>
            </li>
            <li>
              <Link to={`hoc`}>HOC</Link>
            </li>
            <li>
              <Link to={`userForm`}>User Form</Link>
            </li>
            <li>
              <Link to={`accordian`}>Accordian</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <AppComponent />,
      },
      {
        path: "contact",
        element: <p>Hello</p>,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "useCallback-useMemo",
        element: <Parent />,
      },
      {
        path: "hoc",
        element: (
          <>
            <HoverCounter /> <ClickCounter name="vikas">
              <div>Hello</div>
            </ClickCounter>
          </>
        ),
      },
      {
        path: "userForm",
        element: <UserForm />,
      },
      {
        path: "accordian",
        element: <Accordian data={dummyData}/>,
      },
    ],
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
