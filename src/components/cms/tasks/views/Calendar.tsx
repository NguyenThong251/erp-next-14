"use client";
import type { CalendarProps } from "antd";
import { Calendar as CalendarAntd } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { useState } from "react";

dayjs.extend(isoWeek);

export default function CustomCalendar() {
  const [mode, setMode] = useState<"month" | "year">("month");
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const getListData = (value: Dayjs) => {
    let listData: { type: string; content: string }[] = [];
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." },
        ];
        break;
      case 15:
        listData = [
          { type: "warning", content: "This is warning event" },
          { type: "success", content: "This is very long usual event......" },
          { type: "error", content: "This is error event 1." },
          { type: "error", content: "This is error event 2." },
          { type: "error", content: "This is error event 3." },
          { type: "error", content: "This is error event 4." },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <div className="">
        {/* <div>{value.date()}</div> */}
        <ul className="events flex flex-col gap-[10px]">
          {listData.map((item) => (
            <li
              key={item.content}
              className={`text-[#fff] rounded-[6px] px-[7px] py-[2px] truncate text-xs ${
                item.type === "success"
                  ? "__bg-success"
                  : item.type === "warning"
                  ? "__bg-primary"
                  : "__bg-danger"
              }`}
            >
              <span className="event-text truncate">{item.content}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    // if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    setSelectedDate(value);
    setMode(mode === "year" ? "year" : "month"); // Đồng bộ mode với panel
  };
  const handleModeChange = (newMode: "month" | "year") => {
    setMode(newMode);
  };
  // Custom header to replace default header (exclude year mode)
  const headerRender: CalendarProps<Dayjs>["headerRender"] = ({
    value,
    onChange,
  }) => {
    return (
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-[13px] items-center">
          <button
            onClick={() => {
              const newValue =
                mode === "month"
                  ? value.subtract(1, "month")
                  : value.subtract(1, "year");
              onChange(newValue);
              setSelectedDate(newValue);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
            >
              <path
                d="M0.341647 8.32364C-0.113904 7.86809 -0.113904 7.12827 0.341647 6.67272L6.1727 0.841663C6.62825 0.386112 7.36807 0.386112 7.82362 0.841663C8.27917 1.29721 8.27917 2.03703 7.82362 2.49258L2.8162 7.5L7.81998 12.5074C8.27553 12.963 8.27553 13.7028 7.81998 14.1583C7.36442 14.6139 6.62461 14.6139 6.16906 14.1583L0.338003 8.32728L0.341647 8.32364Z"
                fill="#A0AEC0"
              />
            </svg>
          </button>
          <div className="text-[14px] font-[600] text-textColor">
            {mode === "month"
              ? value.format("MMMM YYYY")
              : value.format("YYYY")}
          </div>
          <button
            onClick={() => {
              const newValue =
                mode === "month" ? value.add(1, "month") : value.add(1, "year");
              onChange(newValue);
              setSelectedDate(newValue);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
            >
              <path
                d="M7.98892 6.67636C8.44447 7.13191 8.44447 7.87173 7.98892 8.32728L2.15786 14.1583C1.70231 14.6139 0.962498 14.6139 0.506947 14.1583C0.0513954 13.7028 0.0513954 12.963 0.506947 12.5074L5.51436 7.5L0.510591 2.49258C0.0550398 2.03703 0.0550398 1.29721 0.510591 0.841663C0.966142 0.386112 1.70596 0.386112 2.16151 0.841663L7.99256 6.67272L7.98892 6.67636Z"
                fill="#A0AEC0"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-5 items-center ">
          <div className="flex items-center  rounded-[50px] border-[2px] border-drakGrey overflow-hidden">
            <button
              className={`px-[17px] text-[14px] font-[400] transition-all duration-300 ease-in-out ${
                mode === "month"
                  ? "bg-drakGrey text-[#fff]"
                  : "bg-[#fff] text-blackGrey"
              }`}
              onClick={() => handleModeChange("month")}
            >
              Tháng
            </button>
            <button
              className={`px-[17px] text-[14px] font-[400] transition-all duration-300 ease-in-out  ${
                mode === "year"
                  ? "bg-drakGrey text-[#fff]"
                  : "bg-[#fff] text-blackGrey"
              }`}
              onClick={() => handleModeChange("year")}
            >
              Năm
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M0.167373 1.85825C0.451 1.25661 1.05263 0.874146 1.71873 0.874146H20.2834C20.9495 0.874146 21.5511 1.25661 21.8348 1.85825C22.1184 2.45988 22.0324 3.16895 21.6113 3.68463L13.7514 13.2893V18.7512C13.7514 19.2712 13.4592 19.7482 12.9907 19.9803C12.5223 20.2123 11.968 20.1651 11.5511 19.8514L8.80081 17.7886C8.45272 17.5308 8.25074 17.1225 8.25074 16.6885V13.2893L0.386539 3.68033C-0.0303062 3.16895 -0.120551 2.45558 0.167373 1.85825Z"
              fill="#A0AEC0"
            />
          </svg>
        </div>
      </div>
    );
  };

  // Render only the selected week in week mode

  // Handle date selection
  const onSelect = (value: Dayjs) => {
    setSelectedDate(value);
    console.log("Date selected:", value.format("YYYY-MM-DD"));
  };

  return (
    <div className="px-5">
      <CalendarAntd
        style={{
          padding: 20,
          borderRadius: 16,
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
        mode={mode} // Always use month mode for rendering, handle week mode via custom logic
        value={selectedDate}
        onPanelChange={onPanelChange}
        onSelect={onSelect}
        headerRender={headerRender}
        fullscreen={true}
        cellRender={cellRender}
      />
    </div>
  );
}
