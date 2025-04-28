import React from "react";

interface DueDateDisplayProps {
  dueDate?: string; // Hạn hoàn thành
  formatDate: (date?: string) => string; // Hàm định dạng ngày
  calculateTimeRemaining: (date?: string) => string; // Hàm tính thời gian còn lại
  onClick?: () => void; // Sự kiện click vào biểu tượng lịch (nếu có)
}

const DueDateDisplay: React.FC<DueDateDisplayProps> = ({
  dueDate,
  formatDate,
  calculateTimeRemaining,
  onClick,
}) => {
  return (
    <div className="flex items-center">
      <span className="w-[150px] text-[14px] font-[400] text-drakGrey text-base/[14px]">
        Hạn hoàn thành
      </span>
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center gap-1">
          <span className="text-[14px] font-[400] text-textColor">
            {dueDate ? formatDate(dueDate) : "Chưa có hạn"}{" "}
            {/* Hiển thị mặc định nếu không có dueDate */}
          </span>
          {dueDate && (
            <span className="text-[14px] font-[400] text-drakGrey">
              (Tổng: {calculateTimeRemaining(dueDate)})
            </span>
          )}
        </div>
        <div
          className="flex items-center justify-center w-[30px] h-[30px] rounded-[20px] bg-Grey cursor-pointer"
          onClick={onClick} // Thêm sự kiện click nếu có
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M5.03125 0.65625C5.03125 0.292578 4.73867 0 4.375 0C4.01133 0 3.71875 0.292578 3.71875 0.65625V1.75H2.625C1.65977 1.75 0.875 2.53477 0.875 3.5V3.9375V5.25V12.25C0.875 13.2152 1.65977 14 2.625 14H11.375C12.3402 14 13.125 13.2152 13.125 12.25V5.25V3.9375V3.5C13.125 2.53477 12.3402 1.75 11.375 1.75H10.2812V0.65625C10.2812 0.292578 9.98867 0 9.625 0C9.26133 0 8.96875 0.292578 8.96875 0.65625V1.75H5.03125V0.65625ZM2.1875 5.25H11.8125V12.25C11.8125 12.4906 11.6156 12.6875 11.375 12.6875H2.625C2.38437 12.6875 2.1875 12.4906 2.1875 12.25V5.25Z"
              fill="#A0AEC0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DueDateDisplay;
