import Image from "next/image";
import React from "react";
import Link from "next/link";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Menu() {
  return (
    <div className="px-[25px] flex flex-col gap-2">
      {/* dashboard */}
      <div className="flex items-center gap-2.5 py-[5px]  text-[#34476780] mt-2">
        {/* <Dashboard sx={{ fontSize: 28, color: "#3B82F6", mr: 1 }} /> */}
        <Image
          src="/images/dashboard-icon.svg"
          alt="ERP Quốc Duy Logo"
          width={40}
          height={40}
        />
        <h3 className="text-[#344767] font-[600] text-[14px]">
          Bảng điều khiển
        </h3>
      </div>
      {/* Profile */}
      <h3 className=" text-[12px] font-[600] text-[#34476780]">CÁ NHÂN</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 py-[5px] ">
          {/* <Dashboard sx={{ fontSize: 28, color: "#3B82F6", mr: 1 }} /> */}
          <Image
            src="/images/canhan-icon.svg"
            alt="ERP Quốc Duy Logo"
            width={40}
            height={40}
          />
          <h3 className="text-[#67748E] font-[400] text-[14px]">Cá nhân</h3>
        </div>
        <div className="">{/* <KeyboardArrowDownIcon /> */}</div>
      </div>
      {/* work */}
      <h3 className=" text-[12px] font-[600] text-[#34476780]"> CÔNG VIỆC</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 py-[5px] ">
          {/* <Dashboard sx={{ fontSize: 28, color: "#3B82F6", mr: 1 }} /> */}
          <Image
            src="/images/canhan-icon.svg"
            alt="ERP Quốc Duy Logo"
            width={40}
            height={40}
          />
          <h3 className="text-[#67748E] font-[400] text-[14px]">Kinh doanh</h3>
        </div>
        <div className="">{/* <KeyboardArrowDownIcon /> */}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 py-[5px] ">
          {/* <Dashboard sx={{ fontSize: 28, color: "#3B82F6", mr: 1 }} /> */}
          <Image
            src="/images/khohang-icon.svg"
            alt="ERP Quốc Duy Logo"
            width={40}
            height={40}
          />
          <h3 className="text-[#67748E] font-[400] text-[14px]">Kho hàng</h3>
        </div>
        <div className="">{/* <KeyboardArrowDownIcon /> */}</div>
      </div>
      <Link href={"/hr"} className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 py-[5px] ">
          {/* <Dashboard sx={{ fontSize: 28, color: "#3B82F6", mr: 1 }} /> */}
          <Image
            src="/images/nhansu.svg"
            alt="ERP Quốc Duy Logo"
            width={40}
            height={40}
          />
          <h3 className="text-[#67748E] font-[400] text-[14px]">Nhân sự</h3>
        </div>
        <div className="">{/* <KeyboardArrowDownIcon /> */}</div>
      </Link>
    </div>
  );
}
