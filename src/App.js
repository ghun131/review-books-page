import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "./App.css";
import NavBar from "./NavBar";
import IntroductionText from "./IntroductionText";
import BooksList from "./BooksList";

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <NavBar />
          <IntroductionText />
        </Jumbotron>
        <BooksList />
      </div>
    );
  }
}

export default App;
