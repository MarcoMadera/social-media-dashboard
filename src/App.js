import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import OverView from "./components/OverView";

const App = () => (
  <Fragment>
    <Header followers={43} />
    <Cards />
    <OverView />
  </Fragment>
);

export default App;
