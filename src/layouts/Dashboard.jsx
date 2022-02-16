import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Col, Container, Row } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col md="3">
            <Categories />
          </Col>
          <Col md="9">
            <ProductList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
