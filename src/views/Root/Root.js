import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        <AppContext.Provider>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={AboutUsView}
              title="About Us - PGS Software"
            />
            <Route
              path="/skicams"
              component={SkicamsView}
              title="Skicams - PGS Software"
            />
            <Route
              path="/contact"
              component={ContactView}
              title="Contact - PGS Software"
            />
            <Route
              path="/For-PGS"
              component={AboutUsView}
              title="About Us - PGS Software"
            />
            <Route component={AboutUsView} />
          </Switch>
          <Footer />
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
