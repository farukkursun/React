import React from "react";
import { Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Clarusway>"}</i>
        <span>Recipe</span>
      </Logo>

      <Menu>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://github.com/farukkursun" target="blank">
          Github{" "}
        </a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
