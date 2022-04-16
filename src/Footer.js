import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      // <footer style={{ position: 'fixed', bottom: '0' }}>
      //   &copy;Danny/Marta
      // </footer>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>&copy;Danny/Marta</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
