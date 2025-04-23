"use client";

import { Menu } from "antd";
import React from "react";
import {
  DashboardFilled,
  HomeOutlined,
  UserAddOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";

interface MenuListProps {
  darkTheme: boolean;
  collapsed?: boolean;
}
export default function MenuList({ darkTheme, collapsed }: MenuListProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuClick = ({ key }: { key: string }) => {
    // Chuyển trang khi click
    if (key === "nhansu") {
      router.push("/nhansu");
    }
    if (key === "dashboard") {
      router.push("/dashboard");
    }
    if (key === "hr") {
      router.push("/hr");
    }
  };
  return (
    <Menu
      theme={darkTheme ? "light" : "dark"}
      mode="inline"
      className="h-[86vh] flex flex-col gap-[12px] relative border-0"
      onClick={handleMenuClick}
      selectedKeys={[pathname.split('/')[1] || 'dashboard']}
    >
      <Menu.Item
        key={"dashboard"}
        icon={
          <DashboardFilled
            style={
              {
                //   fontSize: 16,
                //   color: "#fff",
                //   padding: 7,
                //   height: "40px",
                //   width: "40px",
                //   display: "flex",
                //   justifyContent: "center",
                //   alignContent: "center",
                //   backgroundColor: "#17C1E8",
                //   borderRadius: "9px",
              }
            }
          >
            {!collapsed && (
              <h3 className="text-[#344767] font-[600] text-[14px]">
                Bảng điều khiển
              </h3>
            )}
          </DashboardFilled>
        }
      >
        {!collapsed && (
          <h3 className="text-[#344767] font-[600] text-[14px]">
            Bảng điều khiển
          </h3>
        )}
      </Menu.Item>

      <Menu.ItemGroup
        key={"personal"}
        title={
          !collapsed && (
            <h3 className="text-[12px] font-[600] text-[#34476780] px-4">
              CÁ NHÂN
            </h3>
          )
        }
      >
        <Menu.SubMenu
          key={"canhanParent"}
          icon={<UserAddOutlined />}
          title={
            !collapsed && (
              <h3 className="text-[#67748E] font-[400] text-[14px]">Cá nhân</h3>
            )
          }
        >
          <Menu.Item key={"canhanChildren"} icon={<UserAddOutlined />}>
            {!collapsed && (
              <h3 className="text-[#67748E] font-[400] text-[14px]">Cá nhân</h3>
            )}
          </Menu.Item>
        </Menu.SubMenu>
      </Menu.ItemGroup>
      {/* group */}

      <Menu.ItemGroup
        key={"work"}
        title={
          !collapsed && (
            <h3 className="text-[12px] font-[600] text-[#34476780] px-4">
              CÔNG VIỆC
            </h3>
          )
        }
      >
        <Menu.Item key={"kinhdoanh"} icon={<UserAddOutlined />}>
          {!collapsed && (
            <h3 className="text-[#67748E] font-[400] text-[14px]">Kinh doanh</h3>
          )}
        </Menu.Item>
        <Menu.Item key={"nhansu"} icon={<HomeOutlined />}>
          {!collapsed && (
            <h3 className="text-[#67748E] font-[400] text-[14px]">Nhân sự</h3>
          )}
        </Menu.Item>
        <Menu.Item key={"hr"} icon={<TeamOutlined />}>
          {!collapsed && (
            <h3 className="text-[#67748E] font-[400] text-[14px]">HR</h3>
          )}
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
}
