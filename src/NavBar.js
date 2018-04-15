import React, { Component } from "react";
import { Navbar, Nav, NavItem, Glyphicon } from "react-bootstrap";

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
                    <a>Twitter</a>
                  </li>
                  <li>
                    <a>Facebook</a>
                  </li>
                  <li>
                    <a>Email me</a>
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