import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function BasicExample() {
  return (
    <>
      <div className="navbar-bg"></div>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-dark">
        <Container>
          <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>

            {/* Commented out the social icons and button for now */}
            <span className='navbar-text-'>
              <div className='social-icon'>
                  <a href=''>
                      <img src='' alt=''/>
                  </a>
                  <a href=''>
                      <img src='' alt=''/>
                  </a>
                  <a href=''>
                      <img src='' alt=''/>
                  </a>
              </div>

              <button className='vvd' onClick={() => console.log('connect')}>
                  <span>
                      Let's Connect
                  </span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;