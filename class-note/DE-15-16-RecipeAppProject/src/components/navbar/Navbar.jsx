import React from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react";
const Navbar = () => {
  const [acik, setAcik]=useState(false)
  return (
    <Nav>
      <Logo onClick={()=>setAcik(false)} to="/home">
        <i>{"<Clarusway>"}</i>
        <span>Recipe</span>
      </Logo>
      <Hamburger onClick={()=>setAcik(!acik)}>
        <GiHamburgerMenu/>
      </Hamburger>
      <Menu onClick={()=>setAcik(!acik)} osman={acik}>
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
