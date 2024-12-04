import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/'><Navbar.Brand href="#home"><img src="/src/assets/logo/logo.png" alt="" /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            
          </Nav>
          <Nav className='p-s-3 text-center'>
            <Link className='mainmenu' to="/mainproduct" >Product</Link>
            <Link className='mainmenu' to="/blog"></Link>
            <Link className='mainmenu' to="/contact">Our solutions</Link>
            <Link className='mainmenu' to="/aboutus">Feature</Link>
            <Link className='mainmenu' to="/policy">Blogs</Link>
            <Link className='mainmenu' to="/pyment">Contact</Link>
            <Link className='mainmenu' to="/"><Button variant="danger">login</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;