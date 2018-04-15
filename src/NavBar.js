import React, { Component } from "react";
import { Navbar, Nav, NavItem, Glyphicon, Button } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand><Glyphicon bsSize="large" glyph="book"/> Books Review</Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem className="text-white" eventKey={1}>
                <h3>About</h3>
                <p>All of books I have read so far and what I find interesting about them</p>
              </NavItem>
              <NavItem eventKey={2}>
                <h3>Contact</h3>
                <ul className="list-unstyled">
                  <li>
                    <Button bsStyle="link">Twitter</Button>
                  </li>
                  <li>
                    <Button bsStyle="link">Facebook</Button>
                  </li>
                  <li>
                    <Button bsStyle="link">Email me!</Button>
                  </li>
                </ul>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
      </div>
    );
  }
}

export default NavBar;