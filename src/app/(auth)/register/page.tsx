"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined, IdcardOutlined } from "@ant-design/icons";
import { authService } from "../auth.service";

interface RegisterForm {
  name: string;
  username: string;
  password: string;
}

export default function Register() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();

  const handleRegister = async (values: RegisterForm) => {
    setLoading(true);
    try {
      await authService.register(values.name, values.username, values.password);
      notification.success({
        message: "Đăng ký thành công",
        description: "Vui lòng đăng nhập để tiếp tục",
        placement: "topRight",
      });
      router.push("/login");
    } catch (err: any) {
      notification.error({
        message: "Đăng ký thất bại",
        description: err.response?.data?.message || "Vui lòng kiểm tra lại thông tin đăng ký",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Đăng ký tài khoản</h2>
          <p className="mt-2 text-gray-600">Vui lòng điền thông tin đăng ký</p>
        </div>

        <Form
          form={form}
          name="register"
          onFinish={handleRegister}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input
              prefix={<IdcardOutlined className="text-gray-400" />}
              placeholder="Họ và tên"
              className="rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="Tên đăng nhập"
              className="rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Mật khẩu"
              className="rounded-lg"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 rounded-lg h-12 text-lg"
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
