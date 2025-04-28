import React from "react";

interface ProjectStatusProps {
  projectName?: string; // Tên dự án
  status?: string; // Trạng thái (mặc định là "Cần thực hiện")
  onProjectClick?: () => void; // Sự kiện click vào nút dự án
  onStatusClick?: () => void; // Sự kiện click vào nút trạng thái
}

const ProjectStatus: React.FC<ProjectStatusProps> = ({
  projectName,
  status = "Cần thực hiện", // Giá trị mặc định nếu không truyền status
  onProjectClick,
  onStatusClick,
}) => {
  return (
    <div className="flex gap-[10px] items-center">
      <span className="text-drakGrey text-sm font-[400px]">Dự án / Nhóm</span>
      <button
        className="text-[14px] text-[#fff] bg-drakGrey py-[6px] px-[12px] rounded-[8px] flex items-center gap-[10px]"
        onClick={onProjectClick} // Thêm sự kiện click (nếu có)
      >
        {projectName || "Chưa có dự án"}{" "}
        {/* Hiển thị mặc định nếu không có projectName */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
        >
          <path
            d="M4.63408 6.80685C4.97588 7.14864 5.53096 7.14864 5.87275 6.80685L10.2478 2.43185C10.5896 2.09005 10.5896 1.53497 10.2478 1.19318C9.90596 0.851379 9.35088 0.851379 9.00908 1.19318L5.25205 4.95021L1.49502 1.19591C1.15322 0.854114 0.598144 0.854114 0.256348 1.19591C-0.0854492 1.53771 -0.0854492 2.09279 0.256348 2.43458L4.63135 6.80958L4.63408 6.80685Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        className="text-blackGrey text-[14px] bg-Grey py-[6px] px-[12px] rounded-[8px] flex items-center gap-[10px]"
        onClick={onStatusClick} // Thêm sự kiện click (nếu có)
      >
        {status}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
        >
          <path
            d="M5.13823 6.80685C5.48003 7.14864 6.03511 7.14864 6.3769 6.80685L10.7519 2.43185C11.0937 2.09005 11.0937 1.53497 10.7519 1.19318C10.4101 0.851379 9.85503 0.851379 9.51323 1.19318L5.7562 4.95021L1.99917 1.19591C1.65737 0.854114 1.10229 0.854114 0.760498 1.19591C0.418701 1.53771 0.418701 2.09279 0.760498 2.43458L5.1355 6.80958L5.13823 6.80685Z"
            fill="#64748B"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProjectStatus;
