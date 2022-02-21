import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions";

export default function ProductList() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []);

  function handleAddToCart(product) {
    dispatch(addToCart(product));
    toast.success(`${product.productName} Sepete`);
  }

  return (
    <div>
      <Table id="productTable" striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category Name</th>
            <th>Units In Stock</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.productId}>
              <td>
                <Link to={`/products/${p.productId}`} id="productName">
                  {p.productName}
                </Link>
              </td>
              <td>{p.categoryName}</td>
              <td>{p.unitsInStock}</td>
              <td>{p.unitPrice}</td>
              <td>
                <Button variant="secondary" onClick={() => handleAddToCart(p)}>
                  Sepete Ekle
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
