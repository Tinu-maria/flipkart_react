import './css/product.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/flipkart_react" className="textcolor me-3"><i>GadgetStore</i></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/product/get" className='text-light'><i class="bi bi-shop me-1"></i>Explore</Nav.Link>
          <Nav.Link href="/about" className='text-light'>About</Nav.Link>
          <Nav.Link href="/rating" className='text-light'>Rate Us</Nav.Link>
        </Nav>
        
        <Nav>
          <Nav.Link href="/product/post" className='text-light me-1'>
          <i class="bi bi-plus-square me-2"></i>Add On</Nav.Link>

          <NavDropdown title="Account" id="collasible-nav-dropdown" className='text-light' menuVariant="dark">
            <NavDropdown.Item href="/customers">Customers</NavDropdown.Item>
            <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#">
            <i class="bi bi-person-fill"></i> Signout
            </NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  );
}

export default Navigation;


