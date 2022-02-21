import React from "react";
import { Badge, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function CartSummary() {

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <NavDropdown title="Sepetiniz" id="collasible-nav-dropdown">
        {cartItems.map((cartItem) => (
          <NavDropdown.Item key={cartItem.product.productId}>
            {cartItem.product.productName} {" "}
            <Badge bg="secondary">{cartItem.quantity}</Badge>
          </NavDropdown.Item>
        ))}

        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/cart">
          Sepete Git
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}
