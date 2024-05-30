import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/NavBar.css"
import { BsEnvelopePaperHeartFill, BsGithub, BsLinkedin} from "react-icons/bs";
import { IconContext } from 'react-icons';

function NavBar() {
  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand href="#">
              {/* <img
                    alt=""
                    src="/img/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '} */}
                  Sarah Jang
            </Navbar.Brand>
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="mailto:ssjang@umass.edu">
                <IconContext.Provider value={{size: 25}}>
                    <BsEnvelopePaperHeartFill />
                </IconContext.Provider>
            </Nav.Link>
            <Nav.Link href="https://github.com/ssjang25" target="_blank">
                <IconContext.Provider value={{size: 25}}>
                        <BsGithub />
                </IconContext.Provider>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/ssjang2025/"target="_blank">
                <IconContext.Provider value={{size: 25}}>
                    <BsLinkedin />
                </IconContext.Provider>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
