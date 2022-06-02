import { Button, Checkbox, Form, Input, Space, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import React from "react";
import "./LoginLayout.css";
import { Link } from "react-router-dom";

export function LoginLayout() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="LoginLayout Container">
      <div className="LoginLayout-box">
        <Space direction="vertical" style={{marginBottom:30}}>
          <Typography.Text style={{ fontSize: 22, fontWeight: 900 }}>
            Đăng nhập
          </Typography.Text>
          <Typography.Text>
            Welcome back! Please enter your details.
          </Typography.Text>
        </Space>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên đăng nhập!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên đăng nhập"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Ghi nhớ thông tin</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" to="Register">
              Quên mật khẩu?
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{
                borderRadius: "20px",
                marginBottom: 20,
                background: "#2D2D7A",
              }}
            >
              Đăng nhập
            </Button>
            <Button
              htmlType="submit"
              className="login-form-button"
              style={{
                borderRadius: "20px",
                marginBottom: 20,
                color: "#4B6EA9",
              }}
              icon={<FacebookOutlined style={{ color: "#2054af" }} />}
            >
              Đăng nhập với Facebook
            </Button>
            <Button
              htmlType="submit"
              className="login-form-button"
              style={{
                borderRadius: "20px",
                marginBottom: 20,
                color: "#E66654",
              }}
              icon={<GooglePlusOutlined style={{ color: "#e4361f" }} />}
            >
              Đăng nhập với Google
            </Button>
            Bạn chưa là thành viên? <Link to={"/Register"}>Đăng ký ngay!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
