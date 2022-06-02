import {
  CaretDownOutlined,
  MenuOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Dropdown,
  Image,
  Input,
  Menu,
  Row,
  Space,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoDpd from "./../../../asset/logo/logo-daiphatdat.png";
import "./Headers.css";

const iconStyle = {
  fontSize: "24px",
  color: "white",
  fontWeight: "bold",
};

export function Headers() {
  const [scroll, setscroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrooll = () => {
      if (window.scrollY > 100) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    };
    window.addEventListener("scroll", handleScrooll);
  }, []);

  const menu = (
    <Menu
      items={[
        {
          label: "SÁCH THAM KHẢO",
          key: "1",
          icon: <WalletOutlined />,
          style: { padding: 10 },
          onClick: () => {
            navigate("/ProjectThuVien/category-page");
          },
        },
        {
          label: "SÁCH THAM KHẢO",
          key: "2",
          icon: <WalletOutlined />,
          style: { padding: 10 },
          onClick: () => {
            navigate("/ProjectThuVien/category-page");
          },
        },
        {
          label: "SÁCH THAM KHẢO",
          key: "3",
          icon: <WalletOutlined />,
          style: { padding: 10 },
          onClick: () => {
            navigate("/ProjectThuVien/category-page");
          },
        },
      ]}
    />
  );
  return (
    <div className={scroll ? "header sticky" : "header"}>
      <HeaderAbove logoDpd={logoDpd} scroll={scroll} />
      <HeaderUnder menu={menu} iconStyle={iconStyle} />
    </div>
  );
}
//#region HeaderAbove
function HeaderAbove({ logoDpd, scroll }) {
  return (
    <div className="header-above Container">
      <Row>
        <Col
          span={6}
          style={{
            display: "flex",
          }}
        >
          <Link to="/ProjectThuVien">
            {scroll ? (
              <Typography.Title
                level={1}
                style={{
                  marginTop: 60,
                  color: "#081C6F",
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                ĐẠI PHÁT ĐẠT
              </Typography.Title>
            ) : (
              <Image
                width={111}
                height={80}
                src={logoDpd}
                alt="logo"
                preview={false}
              />
            )}
          </Link>
        </Col>
        <Col span={18}>
          <Space
            direction={scroll ? "horizontal" : "vertical"}
            size={scroll ? "large" : "middle"}
            style={{
              width: "100%",
              marginTop: scroll ? "60px" : "8px",
              justifyContent: scroll ? "center" : "",
            }}
          >
            <div className="header-above_auth">
              <Link to="/login" className="header-above_auth__item">
                Đăng nhập
              </Link>
              <span
                style={{
                  fontWeight: "bold",
                  padding: "0 5px",
                }}
                className="header-above_auth__item"
              >
                |
              </span>
              <Link to="/Register" className="header-above_auth__item">
                Đăng ký
              </Link>
            </div>
            <div className="header-above_search">
              <Input.Search
                placeholder="Nhập thứ gì đó để tìm kiếm"
                allowClear
                enterButton="Tìm kiếm"
                size="middle"
                loading
              />
            </div>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
//#endregion

//#region HeaderUnder
function HeaderUnder({ menu, iconStyle }) {
  return (
    <div className="header-under">
      <Row className="Container">
        <Col
          span={6}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Dropdown overlay={menu}>
            <Button
              style={{
                color: "white",
                background: "#df1f26",
                border: "1px solid white",
                padding: "0 21px 41px 21px",
              }}
            >
              <Space
                style={{
                  marginTop: "10px",
                }}
              >
                <MenuOutlined style={iconStyle} />
                Danh mục sách
                <CaretDownOutlined style={iconStyle} />
              </Space>
            </Button>
          </Dropdown>
        </Col>
        <Col span={18}>
          <Menu
            mode="horizontal"
            style={{
              color: "white",
              background: "#df1f26",
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
    </div>
  );
}
//#endregion
