import { Button, Col, Divider, Pagination, Row } from "antd";
import React from "react";
import { ProductCard } from "./../productCard";
import "./ProductsFrame.css";

export function ProductsFrame(props) {
  const Arr = [10, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="ProductsFrame">
      <Divider plain className="ProductsFrame-title">
        {props.title}
      </Divider>

      <Row className="ProductsFrame-product_box" gutter={[50, 30]}>
        {Arr.map((item) => (
          <Col span={2.4}>
            <ProductCard />
          </Col>
        ))}
      </Row>
      <div className="ProductsFrame-more">
        {props.isCategoryPage ? (
          <Paginations />
        ) : (
          <Button size="middle">Xem thêm sách khác</Button>
        )}
      </div>
    </div>
  );
}

function Paginations() {
  return (
    <div className="ProductsFram-more_pagination">
      <Pagination showQuickJumper defaultCurrent={1} total={500} />
    </div>
  );
}
