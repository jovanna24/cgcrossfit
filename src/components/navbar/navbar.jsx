import './navbar.css' ;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/smallgccf.jpg';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand  as={Link} to="/" >
        {/* <img
            src={logo}
            alt="Grande City CrossFit Logo"
            className="d-inline-block align-top"
          /> */}
        GRANDE CITY CROSSFIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Container className='pe-0'>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Leaderboard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sign Up!
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something?</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}; 

export default NavBar;