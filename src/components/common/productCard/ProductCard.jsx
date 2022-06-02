import { Button, Card } from "antd";
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
        <img
          onClick={() => {
            navigate("/ProjectThuVien/detail-page/1", { state: { id: 1 } });
          }}
          alt="book"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
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
