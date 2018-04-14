import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";

const IntroductionText = () => {
  return (
    <div>
      <h1>A big heading</h1>
      <p>A short description about the reasons why I make this app </p>
      <ButtonToolbar>
        <Button bsStyle="primary">First action</Button>
        <Button>Second action</Button>
      </ButtonToolbar>
    </div>
  );
};

export default IntroductionText;
