import { Button, Checkbox, Form, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterLayout.css";

export function RegisterLayout() {
  const [result, setResult] = useState(null);

  const onFinish = (values) => {
    const res = "error"; //<--- change this to see different result
    if (res === "success") {
      setResult({ result: "success" });
    } else {
      setResult({ result: "error" });
    }
  };
  return (
    <div className="RegisterLayout Container">
      <div className="RegisterLayout-box">
        <Space direction="vertical" style={{ marginBottom: 30 }}>
          <Typography.Text style={{ fontSize: 22, fontWeight: 900 }}>
            Đăng ký
          </Typography.Text>
          <Typography.Text>
            Welcome to us! Please enter your details.
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
            label="Họ và tên"
            name="fullname"
            hasFeedback
            validateStatus={
              result
                ? result.result === "success"
                  ? "success"
                  : "warning"
                : undefined
            }
            tooltip="Bạn muốn người khác gọi bạn là gì?"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên!",
                whitespace: true,
              },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            hasFeedback
            validateStatus={
              result
                ? result.result === "success"
                  ? "success"
                  : "warning"
                : undefined
            }
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên đăng nhập!",
              },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            hasFeedback
            validateStatus={
              result
                ? result.result === "success"
                  ? "success"
                  : "warning"
                : undefined
            }
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
              {
                pattern: /.{8,}/,
                message: "Mât khẩu phải có ít nhất 8 ký tự!",
              },
            ]}
          >
            <Input.Password type="password" allowClear />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Xác nhận mật khẩu"
            hasFeedback
            validateStatus={
              result
                ? result.result === "success"
                  ? "success"
                  : "warning"
                : undefined
            }
            rules={[
              {
                required: true,
                message: "Vui lòng nhập lại mật khẩu!",
              },
            ]}
          >
            <Input.Password type="confirmPassword" allowClear />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            hasFeedback
            validateStatus={
              result
                ? result.result === "success"
                  ? "success"
                  : "warning"
                : undefined
            }
            rules={[
              {
                type: "email",
                message: "Đầu vào không hợp lệ E-mail!",
              },
              {
                required: true,
                message: "Vui lòng nhập E-mail của bạn!",
              },
            ]}
          >
            <Input type="email" allowClear />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Nên chấp nhận quy định")),
              },
            ]}
          >
            <Checkbox>
              Tôi đã đọc <Link to="">quy định</Link>
            </Checkbox>
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
                width: "100%",
              }}
            >
              Đăng ký
            </Button>
            Bạn đã là thành viên? <Link to={"/Login"}>Đăng nhập ngay!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
