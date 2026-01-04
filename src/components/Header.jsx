import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default function Header({ onInfoClick }) {
  return (
    <Navbar color="info" dark expand="md">
      <NavbarBrand href="#">Tip Calculator</NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink href="#" onClick={onInfoClick}>
            Info
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
