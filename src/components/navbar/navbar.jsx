import './navbar.css' ;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const NavBar = () => { 

const [expanded, setExpanded] = useState(false); 

const handleNavClick = () => {
  setExpanded(false);
};

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container>
        <Navbar.Brand  as={Link} to="/" onClick={handleNavClick} >
        GRANDE CITY CROSSFIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        </Container>
        <Container >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="/schedule" onClick={handleNavClick}>Schedule</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to ="/drop-in" onClick={handleNavClick}>Drop In</NavDropdown.Item>
              <NavDropdown.Item 
              href='https://grandecitycrossfit.sites.zenplanner.com/sign-up-now.cfm'
                target="_blank"
                rel="noopener noreferrer">
                Sign Up!
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/coaches" onClick={handleNavClick}>Coaches</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to ="/contact" onClick={handleNavClick}>
                Say Hi! 👋
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}; 

export default NavBar;