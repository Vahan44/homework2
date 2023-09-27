import "./App.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import { Button } from "react-bootstrap";
const App = () => {
    return (<>
        <Navbar expand="lg" className="bg-dark">
      <Container >
        <Navbar.Brand className = "text-light" href="#home">Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className = "text-light" href="#">Home</Nav.Link>
            <Nav.Link className = "text-light" href="#">Obaut</Nav.Link>
            <Container className="d-flex align-items-end justify-content-end col-10 ">
            <FormControl type="text" placeholder="Search" />
            <Button className="col-3">Log in</Button>
            <Button className="col-3">Regiser</Button>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}

export default App;