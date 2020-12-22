import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "../header/header";
import HeaderLogoContainer from "../header-logo/header-logo-container";
import FallBack from "../common/fallback/fallback";
import { ToastContainer } from "react-toastify";
import Footer from "../footer/footer";
import ScrollToTop from "../common/scroll-to-top/scroll-to-top";

import "react-toastify/dist/ReactToastify.css";
import "./app.scss";
import Account from "../Account/account";

const CategoriesContainer = React.lazy(() => import("../categories/categories-container"));
const GoodsContainer = React.lazy(() => import("../goods/goods-container"));
const GoodContainer = React.lazy(() => import("../good/good-container"));
const GoodsBuild = React.lazy(() => import("../goods-build/goods-build-container"));
const NotFound = React.lazy(() => import("../not-found/not-found"));
const Home = React.lazy(() => import("../home/home"));

//FIX
const App = () => {
  return (
    <div className="app">
      <Router>
        <HeaderLogoContainer />
        <Header />
        <Suspense fallback={<FallBack />}>
          <Switch>
            {pages
              .map(({ component, paths }) =>
                paths.map((path) => (
                  <Route exact path={path} component={component} key={path} />
                ))
              )
              .flat()}
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
          <ScrollToTop />
          <ToastContainer limit={3} />
        </Suspense>
      </Router>
    </div>
  );
};

const pages = [
  {
    component: CategoriesContainer,
    paths: [
      "/products",
      "/products/flowers",
      "/products/vegetables",
      "/products/fruits",
    ],
  },
  {
    component: GoodContainer,
    paths: [
      "/products/flowers/basic/:id",
      "/products/flowers/exotic/:id",
      "/products/vegetables/basic/:id",
      "/products/vegetables/exotic/:id",
      "/products/fruits/basic/:id",
      "/products/fruits/exotic/:id",
      "/products/other/:id",
    ],
  },
  {
    component: GoodsBuild,
    paths: ["/sets/:id"],
  },
  {
    component: GoodsContainer,
    paths: [
      "/products/flowers/basic",
      "/products/flowers/exotic",
      "/products/vegetables/basic",
      "/products/vegetables/exotic",
      "/products/fruits/basic",
      "/products/fruits/exotic",
      "/products/other",
    ],
  },
  {
    component: NotFound,
    paths: ["/404"],
  },
];

export default React.memo(App);
