import React from "react";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function CartSummary() {
  return (
    <div>
      <NavDropdown title="Sepetiniz" id="collasible-nav-dropdown">
        <NavDropdown.Item>Acer Laptop</NavDropdown.Item>
        <NavDropdown.Item>Asus Laptop</NavDropdown.Item>
        <NavDropdown.Item>Dell Laptop</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/cart">Sepete Git</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
