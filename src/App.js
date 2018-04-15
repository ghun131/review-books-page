import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import IntroductionText from "./IntroductionText";
import BooksList from "./BooksList";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <IntroductionText />
        <BooksList />
      </div>
    );
  }
}

export default App;
