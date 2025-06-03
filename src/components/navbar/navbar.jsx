import './navbar.css' ;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand  as={Link} to="/" >
        GRANDE CITY CROSSFIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Container >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to ="/leaderboard">Leaderboard</NavDropdown.Item>
              <NavDropdown.Item 
              href='https://grandecitycrossfit.sites.zenplanner.com/sign-up-now.cfm'
                target="_blank"
                rel="noopener noreferrer">
                Sign Up!
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/coaches">Coaches</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to ="/contact">
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