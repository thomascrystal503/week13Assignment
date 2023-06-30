import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="TODO#home">Welcome</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="TODO#home">Home</Nav.Link>
          <Nav.Link href="TODO#features">About</Nav.Link>
          <Nav.Link href="TODO#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
