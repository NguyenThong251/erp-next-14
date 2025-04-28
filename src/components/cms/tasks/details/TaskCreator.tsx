import React from "react";
import Image from "next/image";
import { TUserTask } from "@/types";

interface TaskCreatorProps {
  creator: TUserTask | undefined;
  onClick?: () => void;
}

const TaskCreator: React.FC<TaskCreatorProps> = ({ creator, onClick }) => {
  return (
    <div className="flex items-center">
      <span className="w-[150px] text-[14px] font-[400] text-drakGrey text-base/[14px]">
        Người giao việc
      </span>
      <button
        className="flex items-center gap-[10px] px-[10px] rounded-[20px] bg-[#E7F3FF] py-[5px]"
        onClick={onClick}
      >
        <div className="">
          <Image
            src={creator?.avatar || "/images/avt.svg"}
            width={20}
            height={20}
            alt={creator?.name || "Người giao việc"}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center gap-[5px]">
          <span className="text-[14px] font-[400] text-textColor">
            {creator?.name || "Chưa có người giao"}{" "}
          </span>
        </div>
      </button>
    </div>
  );
};

export default TaskCreator;
