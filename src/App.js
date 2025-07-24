import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="app">
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center"
              style={{ color: "#8b0101" }}
            >
              <FontAwesomeIcon icon={faBurger} size="xl" />
              <span className="ms-3 lh-1 fw-semibold">
                Dempsey's
                <br></br>
                Poboys
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="text-center" id="basiv-navbar-nav">
            <Nav className="me-auto justify-content-center w-100 ">
              <Link
                to="/"
                className="nav-link text-uppercase text-center fw-semibold"
                style={{ color: "#8b0101" }}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="nav-link text-uppercase text-center fw-semibold"
                style={{ color: "#8b0101" }}
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="nav-link text-uppercase text-center fw-semibold"
                style={{ color: "#8b0101" }}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="nav-link text-uppercase text-center fw-semibold"
                style={{ color: "#8b0101" }}
              >
                Contact
              </Link>
            </Nav>
            <Link to="/contact">
              <button
                type="button"
                className="btn  rounded-0 text-capitalize my-3 my-lg-0 ms-lg-4 text-nowrap"
                style={{ backgroundColor: "#8b0101", color: "white" }}
              >
                Contact Us
              </button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
