import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Carousel, Image, Space, Typography } from "antd";
import React from "react";
import "./CarouselLanding.css";
export function CarouselLanding() {
  return (
    <div className="CarouselLanding">
      <CarouselLandingImage />
      <CarouselLandingContent />
    </div>
  );
}

function CarouselLandingContent() {
  return (
    <div className="CarouselLanding-content">
      <Space direction="vertical" size="small">
        <Typography.Title
          level={1}
          style={{
            textTransform: "uppercase",
            color: "white",
            fontWeight: "900",
          }}
        >
          Sách
        </Typography.Title>
        <Typography.Title
          level={1}
          style={{
            marginTop: "-20px",
            textTransform: "uppercase",
            color: "#d1d138",
            fontWeight: "900",
          }}
        >
          Tư vấn du học hoa kỳ
        </Typography.Title>
        <Button className="CarouselLanding-content_btn" size="large">
          Xem ngay
        </Button>
      </Space>
    </div>
  );
}

function CarouselLandingImage() {
  const listImage = [
    {
      key: 1,
      src: "https://images.unsplash.com/photo-1652048483570-e4fbf597d241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      key: 2,
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      key: 3,
      src: "https://images.unsplash.com/photo-1652039033502-4448e74be6e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      key: 4,
      src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      key: 5,
      src: "https://images.unsplash.com/photo-1652345645898-dcc4aad9fb05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "white",
          fontSize: "30px",
          fontWeight: "bold",
          transform: "translate(-50px, -20px)",
          lineHeight: "1.5715",
        }}
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "White",
          fontSize: "30px",
          fontWeight: "bold",
          transform: "translate(50px, -20px)",
          lineHeight: "1.5715",
          zIndex: "1",
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
  };
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Carousel
      arrows
      {...settings}
      style={{
        textAlign: "center",
      }}
      dots={false}
      className="CarouselLanding"
    >
      {listImage.map((item) => (
        <div key={item?.key}>
          <Image
            src={item?.src}
            alt={item?.alt}
            preview={false}
            width="100%"
            height="500px"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}
