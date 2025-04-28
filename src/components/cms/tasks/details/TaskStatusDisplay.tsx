import React from "react";

interface TaskStatusDisplayProps {
  dueDate?: string; // Hạn hoàn thành
  progress: number; // Tiến độ task
  getTaskStatus: (dueDate: string | undefined, progress: number) => string; // Hàm lấy trạng thái task
  onClick?: () => void; // Sự kiện click vào button trạng thái (nếu có)
}

const TaskStatusDisplay: React.FC<TaskStatusDisplayProps> = ({
  dueDate,
  progress,
  getTaskStatus,
  onClick,
}) => {
  // Xác định màu nền dựa trên progress và status
  const backgroundClass =
    progress >= 100
      ? "bg-green-500"
      : dueDate && getTaskStatus(dueDate, progress) === "overdue"
      ? "bg-red-500"
      : "bg-drakGrey";

  return (
    <div className="flex items-center">
      <span className="w-[150px] text-[14px] font-[400] text-drakGrey text-base/[14px]">
        Tình trạng
      </span>
      <button
        className={`text-[#FFF] ${backgroundClass} text-[14px] px-[12px] py-[6px] flex items-center justify-center rounded-[8px]`}
        onClick={onClick} // Thêm sự kiện click nếu có
      >
        {getTaskStatus(dueDate, progress) || "Chưa xác định"}{" "}
        {/* Hiển thị mặc định nếu không có trạng thái */}
      </button>
    </div>
  );
};

export default TaskStatusDisplay;
