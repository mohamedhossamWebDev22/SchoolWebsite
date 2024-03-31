import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigBar() {
  return (
    <Navbar expand="lg" bg="success" className="bg-body-tertiary shadow px-auto fixed-top">
      <Container>
      <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link href="#why" className="text-light text-hov">لماذا نحن؟</Nav.Link>
            <Nav.Link href="#news" className="text-light text-hov">أخبار</Nav.Link>
            <Nav.Link href="#home" className="text-light text-hov">الرئيسية</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home" className="text-light mx-auto">
          <a className="fontTitle fs-2 text-light text-none">البراعم</a> الابتدائية
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigBar;
