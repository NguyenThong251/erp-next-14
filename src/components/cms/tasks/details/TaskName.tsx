import React from "react";

interface TaskNameProps {
  name?: string; // Tên của task
}

const TaskName: React.FC<TaskNameProps> = ({ name }) => {
  return (
    <div className="text-textColor text-[20px] text-base/[20px] font-[600]">
      {name || "Chưa có tên task"} {/* Hiển thị mặc định nếu không có tên */}
    </div>
  );
};

export default TaskName;
