import React from "react";
import { NavDropdown } from "react-bootstrap";
export default function CartSummary() {
  return (
    <div>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item>Action</NavDropdown.Item>
        <NavDropdown.Item>Another action</NavDropdown.Item>
        <NavDropdown.Item>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}