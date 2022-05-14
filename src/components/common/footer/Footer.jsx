import { BackTop, Col, Menu, Row, Typography } from "antd";
import React from "react";
import "./Footer.css";
export function Footer() {
  return (
    <div className="header-under footer" style={{ background: "#2d2d7a" }}>
      <Row className="Container">
        <Col
          span={10}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography.Title level={3} className="footer-title">
            TRƯỜNG THPT NGUYỄN DU
          </Typography.Title>
        </Col>
        <Col span={14}>
          <Menu
            mode="horizontal"
            style={{
              color: "white",
              background: "#2d2d7a",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <Menu.Item>Trang chủ</Menu.Item>
            <Menu.Item>Giới thiệu</Menu.Item>
            <Menu.Item>Liên hệ</Menu.Item>
          </Menu>
        </Col>
      </Row>
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  const style = {
    height: 40,
    width: 40,
    right: 40,
  };
  return <BackTop style={style} />;
}
