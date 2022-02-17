import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProductById(id)
      .then((result) => setProduct(result.data.data));
  }, []);

  return (
    <div>
      <Card>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Container>
            <Row>
              <Col className="d-grid gap-2">
                <Button variant="outline-success">
                  {" "}
                  <h2 className="bi bi-cart"> Sepete Ekle</h2>{" "}
                </Button>
              </Col>
              <Col className="d-grid gap-2">
                <Button variant="outline-danger">
                  <h2 className="bi bi-heart"> Favorilere Ekle</h2>
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}
