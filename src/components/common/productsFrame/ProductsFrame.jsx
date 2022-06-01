import { Button, Col, Divider, Pagination, Row } from "antd";
import React from "react";
import { ProductCard } from "./../productCard";
import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import "./ProductsFrame.css";

export function ProductsFrame(props) {
  const Arr = [10, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="ProductsFrame">
      <Divider
        plain
        className="ProductsFrame-title"
        style={{ borderTopColor: "black" }}
      >
        {props.title}
      </Divider>
      <OverPack hideProps={{ tweenOne: { reverse: true } }}>
        <QueueAnim
          key="queue"
          leaveReverse
          style={{
            marginLeft: -230,
          }}
        >
          <Row className="ProductsFrame-product_box" gutter={[50, 30]}>
            {Arr.map((item, index) => (
              <TweenOne
                key={index}
                animation={{
                  x: 230,
                  opacity: 1,
                  delay: index * 100,
                }}
                style={{ opacity: 0 }}
              >
                <Col span={2.4} key={index}>
                  <ProductCard />
                </Col>
              </TweenOne>
            ))}
          </Row>
        </QueueAnim>
        <div className="ProductsFrame-more">
          {props.isCategoryPage ? (
            <Paginations />
          ) : (
            <Button size="middle">Xem thêm sách khác</Button>
          )}
        </div>
      </OverPack>
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
