"use client";
// import { Avatar, Badge } from "@mui/material";
import { Avatar, Badge } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { BellFilled } from "@ant-design/icons";
// import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
export default function Header() {
  const [count] = useState<number>(5);
  return (
    <div className="bg-[#fff] rounded-[16px] p-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Image
          src="/images/menu-hide-icon.svg"
          alt="menu-hide"
          width={18}
          height={18}
        />
        <h3 className="text-[#344767] font-[700] text-[20px]">Công việc</h3>
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
  );
}
