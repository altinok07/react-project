import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ProductService from "../services/productService"

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    let productService = new ProductService();
    productService.getProducts().then(result=>setProducts(result.data.data))
  })

  return (
    <div>
      <Table id="productTable" striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category Id</th>
            <th>Units In Stock</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.productId}>
              <td>{p.productName}</td>
              <td>{p.categoryId}</td>
              <td>{p.unitsInStock}</td>
              <td>{p.unitPrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
