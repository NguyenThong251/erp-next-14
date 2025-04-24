"use client";
import React, { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  count?: number;
}

const tabs: TabItem[] = [
  { id: "todo", label: "Việc cần làm", count: 12 },
  { id: "assigned", label: "Việc giao cho tôi", count: 10 },
  { id: "pending", label: "Việc chờ duyệt" },
  { id: "delegated", label: "Việc tôi giao", count: 10 },
  { id: "managed", label: "Việc tôi quản lý", count: 10 },
];

export default function TabBar() {
  const [activeTab, setActiveTab] = useState<string>("todo");

  return (
    <div className="bg-[#fff] px-5 rounded-[16px] flex items-center justify-between">
      <div className="flex gap-[50px]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="flex flex-col py-5 relative cursor-pointer"
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="flex gap-1.5 items-center transition-all duration-300 ease-in-out">
              <h3
                className={`font-[500] text-[14px] transition-colors duration-300 ${
                  activeTab === tab.id ? "text-[#2275FF]" : "text-[#99A3B3]"
                }`}
              >
                {tab.label}
              </h3>
              {tab.count && (
                <div
                  className={`rounded-full text-white text-[12px] px-[5.5px] py-[3px] flex items-center justify-center transition-colors duration-300 ${
                    activeTab === tab.id ? "bg-[#2275FF]" : "bg-[#99A3B3]"
                  }`}
                >
                  {tab.count}
                </div>
              )}
            </div>

            {/* Thanh gạch dưới hiệu ứng mượt */}
            <div
              className={`absolute -bottom-[7px] left-0 h-1 rounded-t-[5px] bg-[#2275FF] transition-all duration-300 ease-in-out ${
                activeTab === tab.id ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Nút thêm công việc */}
      <div className="py-5">
        <button className="flex items-center bg-gradient-to-r from-[#21D4FD] to-[#2152FF] text-white text-sm font-medium rounded-[10px] px-4 py-2 transition-all hover:opacity-90 active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
          >
            <path
              d="M8 2.5C8 1.94687 7.55312 1.5 7 1.5C6.44688 1.5 6 1.94687 6 2.5V7H1.5C0.946875 7 0.5 7.44688 0.5 8C0.5 8.55312 0.946875 9 1.5 9H6V13.5C6 14.0531 6.44688 14.5 7 14.5C7.55312 14.5 8 14.0531 8 13.5V9H12.5C13.0531 9 13.5 8.55312 13.5 8C13.5 7.44688 13.0531 7 12.5 7H8V2.5Z"
              fill="white"
            />
          </svg>
          <span className="ml-2 text-[14px] font-[600]">Thêm công việc</span>
        </button>
      </div>
    </div>
  );
}
