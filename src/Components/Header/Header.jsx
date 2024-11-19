import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="/src/assets/logo/logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            
          </Nav>
          <Nav className='p-s-3 text-center'>
          <NavDropdown title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Main Product card</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Main Product card added              </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          <NavDropdown title="Our Solutions" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bike</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Car</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Fleet</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                School Bus
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#deets" className=''>Download</Nav.Link>
            <Nav.Link href="#deets">Blogs</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            Contact
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="danger">Danger</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;