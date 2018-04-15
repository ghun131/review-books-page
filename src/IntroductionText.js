import React from "react";
import { Jumbotron } from "react-bootstrap";

const IntroductionText = () => {
  return (
    <Jumbotron>
      <div className="text-center">
        <h1>All the books I read</h1>
        <p>
          This app is dedicated to collect all of my reviews about all the books
          I have read over the years
        </p>
      </div>
    </Jumbotron>
  );
};

export default IntroductionText;
