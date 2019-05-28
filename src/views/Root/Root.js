import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AppContext from "../../context";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AboutUsView from "../AboutUsView/AboutUsView";
import ContactView from "../ContactView/ContactView";
import SkicamsView from "../SkicamsView/SkicamsView";

import "./index.css";
import "./Root.css";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/about-us"
            component={AboutUsView}
            title="About Us - PGS Software"
          />
          <Route
            exact
            path="/skicams"
            component={SkicamsView}
            title="Skicams - PGS Software"
          />
          <Route
            exact
            path="/contact"
            component={ContactView}
            title="Contact - PGS Software"
          />

          <Route component={() => <Redirect to="/about-us" />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Root;
