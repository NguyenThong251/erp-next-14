"use client";
import { Avatar, Badge, Layout, theme } from "antd";
import React, { useState } from "react";

import Sider from "antd/es/layout/Sider";
import Logo from "../ui/Logo";
import MenuList from "./MenuList";
import { Header } from "antd/es/layout/layout";
import {
  BellFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import ToggleThemeButton from "./ToggleThemeButton";

export default function LayoutBase({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [count] = useState<number>(5);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <Layout>
      <Sider
        width={250}
        style={{
          overflow: "hidden",
          height: "96vh",
          position: "fixed",
          left: 16,
          borderRadius: 16,
        }}
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "light" : "dark"}
      >
        <Logo collapsed={collapsed} />
        <MenuList darkTheme={darkTheme} collapsed={collapsed} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 96 : 266 }}>
        <Header
          style={{
            position: "fixed",
            right: 16,
            left: collapsed ? 116 : 281,
            background: colorBgContainer,
          }}
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-5">
              <div
                className="cursor-pointer text-[20px] hover:text-[#3B82F6] transition-colors"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? (
                  <MenuUnfoldOutlined style={{ fontSize: 20 }} />
                ) : (
                  <MenuFoldOutlined style={{ fontSize: 20 }} />
                )}
              </div>
              <h3 className="text-[#344767] font-[700] text-[20px]">
                Công việc
              </h3>
            </div>
            <div className="flex gap-5 items-center">
              <div className="">
                <Badge count={count}>
                  <BellFilled className="text-[18px] p-2 bg-[#E9ECEF] rounded-full" />
                </Badge>
              </div>
              <div className="">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
              </div>
            </div>
          </div>
        </Header>
        <Layout
          style={{
            background: "#F8F9FA",
            borderRadius: 16,
            position: "absolute",
            top: 108,
            left: collapsed ? 116 : 281,
            right: 16,
            bottom: 0,
            overflow: "hidden",
            height: "86vh",
          }}
        >
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
}
