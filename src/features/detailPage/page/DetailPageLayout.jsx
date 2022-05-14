import {
  Button,
  Col,
  Divider,
  Image,
  Row,
  Skeleton,
  Space,
  Typography,
} from "antd";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { CarouselLanding } from "../../../components/common/carouselLanding";
import { ProductsFrame } from "../../../components/common/productsFrame";
const textBold = { fontWeight: "900", fontSize: "18px" };
const text = { fontWeight: "100", fontSize: "18px" };
export function DetailPageLayout() {
  return (
    <Fragment>
      <CarouselLanding />
      <div className="detailPage Container" style={{ marginTop: 30 }}>
        <Divider
          plain
          style={{ fontSize: 30, fontWeight: "bold", marginBottom: 30 }}
        >
          Chi tiết sản phẩm
        </Divider>
        <Row gutter={[30, 0]}>
          <Col span={10}>
            <DetailImage />
          </Col>
          <Col span={14}>
            <DetailInfo textBold={textBold} text={text} />
          </Col>
        </Row>
        <div className="detailPage-relatedProducts" style={{ marginTop: 40 }}>
          <ProductsFrame title="KHÁM PHÁ THÊM CÁC TỰA SÁCH KHÁC" />
        </div>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1651047493663-bc21171d7f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="background"
        width="100%"
        style={{ objectFit: "cover", height: "500px", marginTop: 40 }}
        preview={false}
      ></Image>
    </Fragment>
  );
}

function DetailImage() {
  return (
    <Image
      width="100%"
      height="600px"
      src="https://images.unsplash.com/photo-1651931673839-7420f18a186a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
      placeholder={<Skeleton.Image active></Skeleton.Image>}
    ></Image>
  );
}

function DetailInfo({ textBold, text }) {
  const navigate = useNavigate();
  return (
    <div className="detailPage-info">
      <Typography.Title level={3}>Học tốt tiếng anh</Typography.Title>
      <Space direction="vertical">
        <Typography.Text style={textBold}>
          Chuyên mục: <Typography.Text style={text}>Ngoại ngữ</Typography.Text>
        </Typography.Text>
        <Typography.Text style={textBold}>
          Tác giả: <Typography.Text style={text}>Vĩnh Bá</Typography.Text>
        </Typography.Text>
        <Typography.Text style={textBold}>
          Nhà xuất bản:{" "}
          <Typography.Text style={text}>
            Tổng hợp thành phố Hồ Chí Minh
          </Typography.Text>
        </Typography.Text>
        <Typography.Text style={textBold}>
          Xuất bản năm: <Typography.Text style={text}>2012</Typography.Text>
        </Typography.Text>
        <Typography.Text style={textBold}>
          Giới thiệu:{" "}
          <Typography.Text style={text}>
            Học tốt Tiếng Anh 6, sách giải bài tập tiếng anh lớp 6
          </Typography.Text>
        </Typography.Text>
        <Button
          size="large"
          style={{
            color: "white",
            background: "red",
            marginTop: 20,
          }}
          onClick={() => {
            navigate("/view-online/1");
          }}
        >
          Đọc sách online
        </Button>
      </Space>
    </div>
  );
}
