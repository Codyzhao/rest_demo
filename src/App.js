import React, { Component } from "react";
import "./App.css";
import Cards from "./component/Cards";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Cards />
      </Provider>
    );
  }
}

export default App;
