import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar id="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand id="navTitle">My Favorite Books</Navbar.Brand>
          <NavItem>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/About" className="nav-link">
              About
            </Link>
          </NavItem>
        </Navbar>
      </>
    );
  }
}

export default Header;
