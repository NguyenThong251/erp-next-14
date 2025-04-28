import React from "react";

interface TaskDescriptionProps {
  description?: string | null; // Mô tả công việc
  onChange?: (value: string) => void; // Sự kiện khi thay đổi mô tả
  placeholder?: string; // Placeholder cho input
  disabled?: boolean; // Trạng thái disable (nếu cần)
}

const TaskDescription: React.FC<TaskDescriptionProps> = ({
  description,
  onChange,
  placeholder = "Nhập mô tả",
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <span className="w-[150px] text-[14px] font-[600] text-textColor text-base/[14px]">
        Mô tả công việc
      </span>
      <textarea
        placeholder={placeholder}
        value={description || ""} // Giá trị của textarea
        onChange={(e) => onChange?.(e.target.value)} // Gọi hàm onChange khi người dùng nhập
        className="w-full p-[15px] bg-[#F3F5F9] focus:outline-none focus:border-none h-[100px] text-textColor text-[14px] font-[400] flex flex-col items-start rounded-[16px]"
        disabled={disabled} // Trạng thái disable
      />
    </div>
  );
};

export default TaskDescription;
