import React from "react";
import routes from "../routes.json";
import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Home from "../pages/homepage/Home";
import SEO from "./SEO";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import CategoryPage from "../pages/categorypage/CategoryPage";
const components = {
  Home,
  Login,
  SignUp,
  CategoryPage,
};
function DynemicRouter() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, component, page }) => {
          const Component = components[component];
          return (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <SEO page={page} />
                  <Component />
                </>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default DynemicRouter;
