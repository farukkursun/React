import React from "react";
import { Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/home">Clarusway</Logo>
      <Menu>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://github.com/farukkursun"> Github</a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
