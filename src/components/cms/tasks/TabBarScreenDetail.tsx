"use client";
import React, { useEffect, useState } from "react";
import Table from "./views/Table";
import List from "./views/List";
import Calendar from "./views/Calendar";
import Timeline from "./views/Timeline";

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
const TableView = () => <Table />;
const ListView = () => <List />;
const CalendarView = () => <Calendar />;
const TimelineView = () => <Timeline />;
const tabComponents: Record<"table" | "list" | "day" | "timeline", React.FC> = {
  table: TableView,
  list: ListView,
  day: CalendarView,
  timeline: TimelineView,
};
export default function TabBarScreenDetail() {
  const [activeTab, setActiveTab] = useState<string>("todo");
  const [activeTabDay, setActiveTabDay] = useState<
    "table" | "list" | "day" | "timeline"
  >("table");

  const handleTabClick = (tab: "table" | "list" | "day" | "timeline") => {
    setActiveTabDay(tab);
  };
  useEffect(() => {}, [activeTabDay]);
  const ActiveComponent = tabComponents[activeTabDay];
  return (
    <div className="flex flex-col gap-5 ">
      <div className="bg-[#fff] px-5  flex items-center justify-between">
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
          <div className="px-4">
            <div className="bg-[#F3F5F9] gap-[5px] flex items-center rounded-[10px]">
              <div
                className={`cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center gap-[10px] px-5 rounded-[10px] py-2 font-[500] text-[14px] ${
                  activeTabDay === "table"
                    ? "bg-[#A0AEC0] text-[#FFF]"
                    : "bg-transparent text-[#A0AEC0]"
                }`}
                onClick={() => handleTabClick("table")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                >
                  <path
                    d="M0.390991 2C0.390991 0.896875 1.28787 0 2.39099 0H14.391C15.4941 0 16.391 0.896875 16.391 2V12C16.391 13.1031 15.4941 14 14.391 14H2.39099C1.28787 14 0.390991 13.1031 0.390991 12V2ZM2.39099 4V12H7.39099V4H2.39099ZM14.391 4H9.39099V12H14.391V4Z"
                    fill="white"
                  />
                </svg>
                Bảng
              </div>
              <div
                className={`cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center gap-[10px] px-5 rounded-[10px] py-2 font-[500] text-[14px] ${
                  activeTabDay === "list"
                    ? "bg-[#A0AEC0] text-[#FFF]"
                    : "bg-transparent text-[#A0AEC0]"
                }`}
                onClick={() => handleTabClick("list")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                >
                  <path
                    d="M2.00638 3.23077C2.4348 3.23077 2.84568 3.06058 3.14863 2.75763C3.45157 2.45469 3.62176 2.04381 3.62176 1.61538C3.62176 1.18696 3.45157 0.776079 3.14863 0.473135C2.84568 0.170192 2.4348 0 2.00638 0C1.57795 0 1.16707 0.170192 0.864126 0.473135C0.561183 0.776079 0.390991 1.18696 0.390991 1.61538C0.390991 2.04381 0.561183 2.45469 0.864126 2.75763C1.16707 3.06058 1.57795 3.23077 2.00638 3.23077ZM6.31407 0.538462C5.7184 0.538462 5.23715 1.01971 5.23715 1.61538C5.23715 2.21106 5.7184 2.69231 6.31407 2.69231H16.0064C16.602 2.69231 17.0833 2.21106 17.0833 1.61538C17.0833 1.01971 16.602 0.538462 16.0064 0.538462H6.31407ZM6.31407 5.92308C5.7184 5.92308 5.23715 6.40433 5.23715 7C5.23715 7.59567 5.7184 8.07692 6.31407 8.07692H16.0064C16.602 8.07692 17.0833 7.59567 17.0833 7C17.0833 6.40433 16.602 5.92308 16.0064 5.92308H6.31407ZM6.31407 11.3077C5.7184 11.3077 5.23715 11.7889 5.23715 12.3846C5.23715 12.9803 5.7184 13.4615 6.31407 13.4615H16.0064C16.602 13.4615 17.0833 12.9803 17.0833 12.3846C17.0833 11.7889 16.602 11.3077 16.0064 11.3077H6.31407ZM2.00638 14C2.4348 14 2.84568 13.8298 3.14863 13.5269C3.45157 13.2239 3.62176 12.813 3.62176 12.3846C3.62176 11.9562 3.45157 11.5453 3.14863 11.2424C2.84568 10.9394 2.4348 10.7692 2.00638 10.7692C1.57795 10.7692 1.16707 10.9394 0.864126 11.2424C0.561183 11.5453 0.390991 11.9562 0.390991 12.3846C0.390991 12.813 0.561183 13.2239 0.864126 13.5269C1.16707 13.8298 1.57795 14 2.00638 14ZM3.62176 7C3.62176 6.78787 3.57998 6.57781 3.4988 6.38182C3.41762 6.18583 3.29863 6.00775 3.14863 5.85775C2.99862 5.70775 2.82054 5.58876 2.62456 5.50758C2.42857 5.4264 2.21851 5.38462 2.00638 5.38462C1.79424 5.38462 1.58418 5.4264 1.38819 5.50758C1.19221 5.58876 1.01413 5.70775 0.864126 5.85775C0.714124 6.00775 0.595136 6.18583 0.513955 6.38182C0.432774 6.57781 0.390991 6.78787 0.390991 7C0.390991 7.21214 0.432774 7.42219 0.513955 7.61818C0.595136 7.81417 0.714124 7.99225 0.864126 8.14225C1.01413 8.29225 1.19221 8.41124 1.38819 8.49242C1.58418 8.5736 1.79424 8.61539 2.00638 8.61539C2.21851 8.61539 2.42857 8.5736 2.62456 8.49242C2.82054 8.41124 2.99862 8.29225 3.14863 8.14225C3.29863 7.99225 3.41762 7.81417 3.4988 7.61818C3.57998 7.42219 3.62176 7.21214 3.62176 7Z"
                    fill="#99A3B3"
                  />
                </svg>
                Danh sách
              </div>
              <div
                className={`cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center gap-[10px] px-5 rounded-[10px] py-2 font-[500] text-[14px] ${
                  activeTabDay === "day"
                    ? "bg-[#A0AEC0] text-[#FFF]"
                    : "bg-transparent text-[#A0AEC0]"
                }`}
                onClick={() => handleTabClick("day")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                >
                  <path
                    d="M4.23956 0.65625C4.23956 0.292578 3.94698 0 3.58331 0C3.21964 0 2.92706 0.292578 2.92706 0.65625V1.75H1.83331C0.868079 1.75 0.083313 2.53477 0.083313 3.5V3.9375V5.25V12.25C0.083313 13.2152 0.868079 14 1.83331 14H10.5833C11.5485 14 12.3333 13.2152 12.3333 12.25V5.25V3.9375V3.5C12.3333 2.53477 11.5485 1.75 10.5833 1.75H9.48956V0.65625C9.48956 0.292578 9.19699 0 8.83331 0C8.46964 0 8.17706 0.292578 8.17706 0.65625V1.75H4.23956V0.65625ZM1.39581 5.25H11.0208V12.25C11.0208 12.4906 10.8239 12.6875 10.5833 12.6875H1.83331C1.59269 12.6875 1.39581 12.4906 1.39581 12.25V5.25Z"
                    fill="#A0AEC0"
                  />
                </svg>
                Lịch
              </div>
              <div
                className={`cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center gap-[10px] px-5 rounded-[10px] py-2 font-[500] text-[14px] ${
                  activeTabDay === "timeline"
                    ? "bg-[#A0AEC0] text-[#FFF]"
                    : "bg-transparent text-[#A0AEC0]"
                }`}
                onClick={() => handleTabClick("timeline")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                >
                  <path
                    d="M4.06665 1.63333C4.2523 1.63333 4.43035 1.70708 4.56162 1.83836C4.6929 1.96963 4.76665 2.14768 4.76665 2.33333C4.76665 2.51898 4.6929 2.69703 4.56162 2.82831C4.43035 2.95958 4.2523 3.03333 4.06665 3.03333C3.88099 3.03333 3.70295 2.95958 3.57167 2.82831C3.4404 2.69703 3.36665 2.51898 3.36665 2.33333C3.36665 2.14768 3.4404 1.96963 3.57167 1.83836C3.70295 1.70708 3.88099 1.63333 4.06665 1.63333ZM4.99998 4.47125C5.8254 4.1125 6.39998 3.29 6.39998 2.33333C6.39998 1.04417 5.35581 0 4.06665 0C2.77748 0 1.73331 1.04417 1.73331 2.33333C1.73331 3.29 2.3079 4.1125 3.13331 4.47125V6.06667H1.26665C0.750396 6.06667 0.333313 6.48375 0.333313 7C0.333313 7.51625 0.750396 7.93333 1.26665 7.93333H8.73331V9.52875C7.9079 9.8875 7.33331 10.71 7.33331 11.6667C7.33331 12.9558 8.37748 14 9.66665 14C10.9558 14 12 12.9558 12 11.6667C12 10.71 11.4254 9.8875 10.6 9.52875V7.93333H18.0666C18.5829 7.93333 19 7.51625 19 7C19 6.48375 18.5829 6.06667 18.0666 6.06667H16.2V4.47125C17.0254 4.1125 17.6 3.29 17.6 2.33333C17.6 1.04417 16.5558 0 15.2666 0C13.9775 0 12.9333 1.04417 12.9333 2.33333C12.9333 3.29 13.5079 4.1125 14.3333 4.47125V6.06667H4.99998V4.47125ZM14.5666 2.33333C14.5666 2.14768 14.6404 1.96963 14.7717 1.83836C14.9029 1.70708 15.081 1.63333 15.2666 1.63333C15.4523 1.63333 15.6303 1.70708 15.7616 1.83836C15.8929 1.96963 15.9666 2.14768 15.9666 2.33333C15.9666 2.51898 15.8929 2.69703 15.7616 2.82831C15.6303 2.95958 15.4523 3.03333 15.2666 3.03333C15.081 3.03333 14.9029 2.95958 14.7717 2.82831C14.6404 2.69703 14.5666 2.51898 14.5666 2.33333ZM9.66665 10.9667C9.8523 10.9667 10.0303 11.0404 10.1616 11.1717C10.2929 11.303 10.3666 11.481 10.3666 11.6667C10.3666 11.8523 10.2929 12.0304 10.1616 12.1616C10.0303 12.2929 9.8523 12.3667 9.66665 12.3667C9.48099 12.3667 9.30295 12.2929 9.17167 12.1616C9.0404 12.0304 8.96665 11.8523 8.96665 11.6667C8.96665 11.481 9.0404 11.303 9.17167 11.1717C9.30295 11.0404 9.48099 10.9667 9.66665 10.9667Z"
                    fill="#99A3B3"
                  />
                </svg>
                Timeline
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ActiveComponent />
      </div>
    </div>
  );
}
