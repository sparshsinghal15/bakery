import React from "react";

import Row from "antd/es/row";
import Col from "antd/es/col";
import Card from "antd/es/card";

import { categories } from "../data/categories";

const Categories = () => {
  return (
    <div className="categories p-1">
      <Row gutter={[16, 16]}>
        {categories.map((category) => (
          <Category categoryData={category} />
        ))}
      </Row>
    </div>
  );
};

const Category = ({ categoryData }) => {
  return (
    <Col span={8}>
      <Card> Category Data</Card>
    </Col>
  );
};

export default Categories;
