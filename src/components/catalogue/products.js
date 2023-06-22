import React from "react";

import Card from "antd/es/card/Card";
import Row from "antd/es/row";
import Col from "antd/es/col";

import { products } from "../../data/products";

const Products = () => {
  return (
    <div className="products">
      <Row gutter={[8, 8]}>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </Row>
    </div>
  );
};

const Product = ({ product }) => {
  return (
    <Col xl={6} md={12} sm={24}>
      <Card
        className="product-card text-center"
        cover={<img height={"300px"} alt="example" src={product.image} />}
      >
        <div className="title">{product.title}</div>
        <div className="price">{product.price}</div>
      </Card>
    </Col>
  );
};

export default Products;
