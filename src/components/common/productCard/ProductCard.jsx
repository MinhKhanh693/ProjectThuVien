import { Button, Card, Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export function ProductCard() {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      style={{ width: 200 }}
      cover={
        <Image
          height={230}
          preview={false}
          style={{objectFit: "cover"}}
          onClick={() => {
            navigate("/ProjectThuVien/detail-page/1", { state: { id: 1 } });
          }}
          alt="book"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      }
      actions={[
        <Button
          style={{ color: "white", background: "#df1f26" }}
          onClick={() => {
            navigate("/ProjectThuVien/view-online/1");
          }}
        >
          Đọc sách online
        </Button>,
      ]}
    >
      <Card.Meta title="Học tốt tiếng anh" />
    </Card>
  );
}
