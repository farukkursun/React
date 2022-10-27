import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";
//!react-bootstrap MyNavbar component
const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              style={({ isActive }) => ({ color: isActive && "red" })}
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({ color: isActive && "red" })}
              className="nav-link"
              to="/teacher"
            >
              Teacher
            </NavLink>
            <NavLink
              style={({ isActive }) => ({ color: isActive && "red" })}
              className="nav-link"
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) => ({ color: isActive && "red" })}
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
