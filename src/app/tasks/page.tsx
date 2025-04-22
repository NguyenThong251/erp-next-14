"use client";
import TabBar from "@/components/cms/tasks/TabBar";
import Table from "@/components/cms/tasks/Table";
import React, { useState } from "react";
import TaskDetail from "@/components/cms/tasks/TaskDetail";

export default function TasksPage() {
  const [activeTab, setActiveTab] = useState<"Ngày" | "Tháng" | "Năm">("Ngày");

  const handleTabClick = (tab: "Ngày" | "Tháng" | "Năm") => {
    setActiveTab(tab);
  };
  return (
    <>
      <TabBar />
      <div className="bg-[#fff] p-5 rounded-[16px]  flex flex-col gap-4 ">
        <div className=" flex items-center justify-between ">
          <div className="flex justify-between items-center gap-5">
            <div className="flex items-center gap-3 bg-[#F3F5F9] rounded-[10px] px-3 py-2 h-[40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
              >
                <path
                  d="M0.139103 0.817882C0.374825 0.317867 0.87484 0 1.42843 0H16.8575C17.4111 0 17.9111 0.317867 18.1468 0.817882C18.3825 1.3179 18.3111 1.9072 17.9611 2.33579L11.4287 10.3182V14.8576C11.4287 15.2897 11.1859 15.6862 10.7966 15.8791C10.4073 16.0719 9.94654 16.0326 9.6001 15.7719L7.31432 14.0576C7.02503 13.8433 6.85716 13.504 6.85716 13.1433V10.3182L0.321252 2.33221C-0.0251874 1.9072 -0.10019 1.31433 0.139103 0.817882Z"
                  fill="#A0AEC0"
                />
              </svg>
              <span className="text-[#A0AEC0] text-[14px] font-[400]">Lọc</span>
            </div>
            <div className="w-[300px] flex items-center gap-3 border-[1px] h-[40px] rounded-[10px] border-[#E2E8F0]  px-3 py-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <g clipPath="url(#clip0_2176_4428)">
                  <path
                    d="M13.2841 6.5C13.2841 7.93437 12.8185 9.25938 12.0341 10.3344L15.9904 14.2937C16.381 14.6844 16.381 15.3188 15.9904 15.7094C15.5997 16.1 14.9654 16.1 14.5747 15.7094L10.6185 11.75C9.54349 12.5375 8.21849 13 6.78412 13C3.19349 13 0.284119 10.0906 0.284119 6.5C0.284119 2.90937 3.19349 0 6.78412 0C10.3747 0 13.2841 2.90937 13.2841 6.5ZM6.78412 11C7.37507 11 7.96023 10.8836 8.50619 10.6575C9.05216 10.4313 9.54823 10.0998 9.9661 9.68198C10.384 9.26412 10.7154 8.76804 10.9416 8.22208C11.1677 7.67611 11.2841 7.09095 11.2841 6.5C11.2841 5.90905 11.1677 5.32389 10.9416 4.77792C10.7154 4.23196 10.384 3.73588 9.9661 3.31802C9.54823 2.90016 9.05216 2.56869 8.50619 2.34254C7.96023 2.1164 7.37507 2 6.78412 2C6.19317 2 5.60801 2.1164 5.06204 2.34254C4.51608 2.56869 4.02 2.90016 3.60214 3.31802C3.18427 3.73588 2.85281 4.23196 2.62666 4.77792C2.40051 5.32389 2.28412 5.90905 2.28412 6.5C2.28412 7.09095 2.40051 7.67611 2.62666 8.22208C2.85281 8.76804 3.18427 9.26412 3.60214 9.68198C4.02 10.0998 4.51608 10.4313 5.06204 10.6575C5.60801 10.8836 6.19317 11 6.78412 11Z"
                    fill="#A0AEC0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2176_4428">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.284119)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <input
                className="w-full focus:outline-none focus:border-none"
                type="text"
                placeholder="Tìm kiếm công việc"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex  items-center gap-4 border-r-2 border-r-[#EBEFF5] px-4">
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                >
                  <path
                    d="M0.726914 8.9413C0.206285 8.42067 0.206285 7.57517 0.726914 7.05454L7.39098 0.390471C7.91161 -0.130157 8.75711 -0.130157 9.27774 0.390471C9.79837 0.911101 9.79837 1.75661 9.27774 2.27724L3.55498 8L9.27358 13.7228C9.79421 14.2434 9.79421 15.0889 9.27358 15.6095C8.75295 16.1302 7.90744 16.1302 7.38681 15.6095L0.722749 8.94546L0.726914 8.9413Z"
                    fill="#A0AEC0"
                  />
                </svg>
                <span className="text-[#344767] text-[14px] font-[600]">
                  Tháng 6 2023
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                >
                  <path
                    d="M9.60951 7.0587C10.1301 7.57933 10.1301 8.42483 9.60951 8.94546L2.94545 15.6095C2.42482 16.1302 1.57932 16.1302 1.05869 15.6095C0.538055 15.0889 0.538055 14.2434 1.05869 13.7228L6.78145 8L1.06285 2.27724C0.54222 1.75661 0.54222 0.911102 1.06285 0.390472C1.58348 -0.130157 2.42898 -0.130157 2.94961 0.390472L9.61368 7.05454L9.60951 7.0587Z"
                    fill="#A0AEC0"
                  />
                </svg>
              </div>
              <span className="font-[400] text-[14px] text-[#A0AEC0]">
                Hôm nay
              </span>
            </div>
            {/* <div className="px-4 ">
              <div className="bg-[#F3F5F9] gap-[5px] flex items-center  rounded-[10px]">
                <div className="cursor-pointer px-5 bg-[#A0AEC0] rounded-[10px] py-2 font-[500] text-[#FFF] text-[14px]">
                  Ngày
                </div>
                <div className="cursor-pointer px-5  rounded-[10px] py-2 font-[500] text-[#A0AEC0] text-[14px]">
                  Tháng
                </div>
                <div className="cursor-pointer px-5  rounded-[10px] py-2 font-[500] text-[#A0AEC0] text-[14px]">
                  Năm
                </div>
              </div>
            </div> */}
            <div className="px-4">
              <div className="bg-[#F3F5F9] gap-[5px] flex items-center rounded-[10px]">
                <div
                  className={`cursor-pointer px-5 rounded-[10px] py-2 font-[500] text-[14px] ${
                    activeTab === "Ngày"
                      ? "bg-[#A0AEC0] text-[#FFF]"
                      : "bg-transparent text-[#A0AEC0]"
                  }`}
                  onClick={() => handleTabClick("Ngày")}
                >
                  Ngày
                </div>
                <div
                  className={`cursor-pointer px-5 rounded-[10px] py-2 font-[500] text-[14px] ${
                    activeTab === "Tháng"
                      ? "bg-[#A0AEC0] text-[#FFF]"
                      : "bg-transparent text-[#A0AEC0]"
                  }`}
                  onClick={() => handleTabClick("Tháng")}
                >
                  Tháng
                </div>
                <div
                  className={`cursor-pointer px-5 rounded-[10px] py-2 font-[500] text-[14px] ${
                    activeTab === "Năm"
                      ? "bg-[#A0AEC0] text-[#FFF]"
                      : "bg-transparent text-[#A0AEC0]"
                  }`}
                  onClick={() => handleTabClick("Năm")}
                >
                  Năm
                </div>
              </div>
            </div>
            <div className="pl-4 ">
              <div className="bg-[#F3F5F9] gap-[5px] flex items-center  rounded-[10px]">
                <div className="cursor-pointer px-2  rounded-[10px] py-2 font-[500] text-[#A0AEC0] text-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                  >
                    <path
                      d="M6.32812 1.39062C6.32812 0.89707 5.93105 0.5 5.4375 0.5C4.94395 0.5 4.54688 0.89707 4.54688 1.39062V2.875H3.0625C1.75254 2.875 0.6875 3.94004 0.6875 5.25V5.84375V7.625V17.125C0.6875 18.435 1.75254 19.5 3.0625 19.5H14.9375C16.2475 19.5 17.3125 18.435 17.3125 17.125V7.625V5.84375V5.25C17.3125 3.94004 16.2475 2.875 14.9375 2.875H13.4531V1.39062C13.4531 0.89707 13.0561 0.5 12.5625 0.5C12.0689 0.5 11.6719 0.89707 11.6719 1.39062V2.875H6.32812V1.39062ZM2.46875 7.625H15.5312V17.125C15.5312 17.4516 15.2641 17.7188 14.9375 17.7188H3.0625C2.73594 17.7188 2.46875 17.4516 2.46875 17.125V7.625Z"
                      fill="#A0AEC0"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer px-2 bg-[#A0AEC0] rounded-[10px] py-2 font-[500] text-[#FFF] text-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                  >
                    <path
                      d="M2.3077 3.69231C2.79733 3.69231 3.26691 3.4978 3.61313 3.15158C3.95935 2.80536 4.15386 2.33578 4.15386 1.84615C4.15386 1.35652 3.95935 0.886947 3.61313 0.540726C3.26691 0.194505 2.79733 0 2.3077 0C1.81807 0 1.34849 0.194505 1.00227 0.540726C0.656053 0.886947 0.461548 1.35652 0.461548 1.84615C0.461548 2.33578 0.656053 2.80536 1.00227 3.15158C1.34849 3.4978 1.81807 3.69231 2.3077 3.69231ZM7.23078 0.615385C6.55001 0.615385 6.00001 1.16538 6.00001 1.84615C6.00001 2.52692 6.55001 3.07692 7.23078 3.07692H18.3077C18.9885 3.07692 19.5385 2.52692 19.5385 1.84615C19.5385 1.16538 18.9885 0.615385 18.3077 0.615385H7.23078ZM7.23078 6.76923C6.55001 6.76923 6.00001 7.31923 6.00001 8C6.00001 8.68077 6.55001 9.23077 7.23078 9.23077H18.3077C18.9885 9.23077 19.5385 8.68077 19.5385 8C19.5385 7.31923 18.9885 6.76923 18.3077 6.76923H7.23078ZM7.23078 12.9231C6.55001 12.9231 6.00001 13.4731 6.00001 14.1538C6.00001 14.8346 6.55001 15.3846 7.23078 15.3846H18.3077C18.9885 15.3846 19.5385 14.8346 19.5385 14.1538C19.5385 13.4731 18.9885 12.9231 18.3077 12.9231H7.23078ZM2.3077 16C2.79733 16 3.26691 15.8055 3.61313 15.4593C3.95935 15.1131 4.15386 14.6435 4.15386 14.1538C4.15386 13.6642 3.95935 13.1946 3.61313 12.8484C3.26691 12.5022 2.79733 12.3077 2.3077 12.3077C1.81807 12.3077 1.34849 12.5022 1.00227 12.8484C0.656053 13.1946 0.461548 13.6642 0.461548 14.1538C0.461548 14.6435 0.656053 15.1131 1.00227 15.4593C1.34849 15.8055 1.81807 16 2.3077 16ZM4.15386 8C4.15386 7.75756 4.1061 7.51749 4.01333 7.29351C3.92055 7.06952 3.78456 6.866 3.61313 6.69457C3.4417 6.52314 3.23818 6.38715 3.01419 6.29438C2.79021 6.2016 2.55014 6.15385 2.3077 6.15385C2.06526 6.15385 1.82519 6.2016 1.60121 6.29438C1.37722 6.38715 1.17371 6.52314 1.00227 6.69457C0.830843 6.866 0.694856 7.06952 0.602078 7.29351C0.5093 7.51749 0.461548 7.75756 0.461548 8C0.461548 8.24244 0.5093 8.48251 0.602078 8.70649C0.694856 8.93048 0.830843 9.134 1.00227 9.30543C1.17371 9.47686 1.37722 9.61285 1.60121 9.70562C1.82519 9.7984 2.06526 9.84615 2.3077 9.84615C2.55014 9.84615 2.79021 9.7984 3.01419 9.70562C3.23818 9.61285 3.4417 9.47686 3.61313 9.30543C3.78456 9.134 3.92055 8.93048 4.01333 8.70649C4.1061 8.48251 4.15386 8.24244 4.15386 8Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table />
      </div>
      <TaskDetail />
    </>
  );
}
