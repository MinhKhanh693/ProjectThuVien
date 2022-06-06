import { Button, Space, Typography } from "antd";
import BannerAnim, { Element } from "rc-banner-anim";
import "rc-banner-anim/assets/index.css";
import TweenOne from "rc-tween-one";
import React from "react";
import "./CarouselLanding.css";
export function CarouselLanding() {
  return (
    <div className="CarouselLanding">
      <CarouselLandingImage />
    </div>
  );
}

function CarouselLandingImage() {
  const listImage = [
    {
      key: 1,
      src: "https://images.unsplash.com/photo-1539035104074-dee66086b5e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      key: 2,
      src: "https://images.unsplash.com/photo-1599033153041-e88627ca70bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      key: 3,
      src: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80",
    },
    {
      key: 4,
      src: "https://images.unsplash.com/photo-1460551204960-763bc82b7d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    },
    {
      key: 5,
      src: "https://images.unsplash.com/photo-1653211103394-4ba2d0c0873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <BannerAnim style={{ height: 550}} autoPlaySpeed={3000} autoPlay>
      {listImage.map((item, index) => (
        <Element
          key={item.key}
          style={{ height: 550 }}
          followParallax={{
            delay: 1000,
            data: [
              {
                id: item.key,
                value: 20,
                bgPosition: "50%",
                type: ["backgroundPositionX"],
              },
              { id: "title", value: 50, type: "x" },
              { id: "content", value: -30, type: "x" },
            ],
          }}
        >
          <Element.BgElement
            key={item.key}
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            id={item.key}
          />
          <CarouselLangdingContent />
        </Element>
      ))}
    </BannerAnim>
  );
  function CarouselLangdingContent() {
    return (
      <div className="CarouselLanding-content">
        <Space direction="vertical" size="small">
          <TweenOne animation={{ y: 30, opacity: 0, type: "from" }} id="title">
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
          </TweenOne>
          <TweenOne
            animation={{ y: 30, opacity: 0, type: "from" }}
            id="content"
          >
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
          </TweenOne>
          <TweenOne animation={{ y: 30, opacity: 0, type: "from" }}>
            <Button className="CarouselLanding-content_btn" size="large">
              Xem ngay
            </Button>
          </TweenOne>
        </Space>
      </div>
    );
  }
}
