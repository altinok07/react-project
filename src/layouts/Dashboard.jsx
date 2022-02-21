import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Container>
        <Row>
          <Col md="3">
            <Categories />
          </Col>
          <Col md="9">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartDetail />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
