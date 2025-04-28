import React from "react";
import Image from "next/image";
import { Tooltip } from "antd";
import { TAssignee } from "@/types";

interface AssigneeListProps {
  assignees: TAssignee[] | undefined; // Danh sách assignees
  onAddAssigneeClick?: () => void; // Sự kiện click vào biểu tượng "+" (nếu có)
  onAssigneeClick?: (assignee: TAssignee) => void; // Sự kiện click vào assignee (nếu có)
}

const AssigneeList: React.FC<AssigneeListProps> = ({
  assignees,
  onAddAssigneeClick,
  onAssigneeClick,
}) => {
  return (
    <div className="flex items-center">
      <span className="w-[150px] text-[14px] font-[400] text-drakGrey text-base/[14px]">
        Chịu trách nhiệm
      </span>
      <div className="flex items-center gap-[10px]">
        {/* Tìm primary assignee */}
        {assignees && assignees.length > 0 ? (
          <>
            {/* Hiển thị primary assignee (nếu có) */}
            {assignees.map((assignee) =>
              assignee.pivot.role === "primary" ? (
                <button
                  key={assignee.id}
                  className="flex items-center gap-[10px] px-[10px] rounded-[20px] bg-[#E7F3FF] py-[5px]"
                  onClick={() => onAssigneeClick?.(assignee)} // Thêm sự kiện click
                >
                  <div className="">
                    <Image
                      src={assignee.avatar || "/images/avt.svg"}
                      width={20}
                      height={20}
                      alt={assignee.name}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <span className="text-[13px] font-[400] text-textBlue">
                      {assignee.name}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                    >
                      <path
                        d="M8.27679 1.98214C8.58214 1.79464 8.78571 1.45446 8.78571 1.07143C8.78571 0.479464 8.30625 0 7.71429 0C7.12232 0 6.64286 0.479464 6.64286 1.07143C6.64286 1.45714 6.84643 1.79464 7.15179 1.98214L5.61696 5.05179C5.37321 5.53929 4.74107 5.67857 4.31518 5.33839L1.92857 3.42857C2.0625 3.24911 2.14286 3.02679 2.14286 2.78571C2.14286 2.19375 1.66339 1.71429 1.07143 1.71429C0.479464 1.71429 0 2.19375 0 2.78571C0 3.37768 0.479464 3.85714 1.07143 3.85714C1.07679 3.85714 1.08482 3.85714 1.09018 3.85714L2.31429 10.5911C2.46161 11.4054 3.17143 12 4.00179 12H11.4268C12.2545 12 12.9643 11.408 13.1143 10.5911L14.3384 3.85714C14.3438 3.85714 14.3518 3.85714 14.3571 3.85714C14.9491 3.85714 15.4286 3.37768 15.4286 2.78571C15.4286 2.19375 14.9491 1.71429 14.3571 1.71429C13.7652 1.71429 13.2857 2.19375 13.2857 2.78571C13.2857 3.02679 13.3661 3.24911 13.5 3.42857L11.1134 5.33839C10.6875 5.67857 10.0554 5.53929 9.81161 5.05179L8.27679 1.98214Z"
                        fill="url(#paint0_linear_2271_7812)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2271_7812"
                          x1="0.474643"
                          y1="1.42857"
                          x2="15.4248"
                          y2="8.70809"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FAB534" />
                          <stop offset="1" stop-color="#F64F39" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </button>
              ) : null
            )}

            {/* Dòng phân cách nếu có primary assignee */}
            {assignees.some(
              (assignee) => assignee.pivot.role === "primary"
            ) && <div className="w-[1px] h-[20px] bg-Grey"></div>}

            {/* Hiển thị các assignees còn lại (không phải primary) */}
            <div className="flex items-center gap-[10px]">
              {/* Lọc và hiển thị tối đa 2 assignees có role là member */}
              {assignees
                .filter((assignee) => assignee.pivot.role !== "primary")
                .slice(0, 2)
                .map((assignee) => (
                  <button
                    key={assignee.id}
                    className="flex items-center gap-[10px] px-[10px] rounded-[20px] bg-[#E7F3FF] py-[5px]"
                    onClick={() => onAssigneeClick?.(assignee)} // Thêm sự kiện click
                  >
                    <div>
                      <Image
                        src={assignee.avatar}
                        width={20}
                        height={20}
                        alt={assignee.name}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <span className="text-[13px] font-[400] text-textColor">
                        {assignee.username}
                      </span>
                    </div>
                  </button>
                ))}

              {/* Nếu có nhiều hơn 2 assignees (không tính primary), hiển thị icon "3 chấm" */}
              {assignees.filter((assignee) => assignee.pivot.role !== "primary")
                .length > 2 && (
                <>
                  <div className="w-[1px] h-[20px] bg-Grey"></div>
                  <Tooltip
                    title={
                      <div className="flex flex-col gap-1">
                        {assignees
                          .filter(
                            (assignee) => assignee.pivot.role !== "primary"
                          )
                          .slice(2)
                          .map((assignee) => (
                            <span
                              key={assignee.id}
                              className="text-[14px] text-[#fff]"
                            >
                              {assignee.name}
                            </span>
                          ))}
                      </div>
                    }
                    placement="bottom"
                  >
                    <div className="flex items-center justify-center w-[30px] h-[30px] rounded-[20px] bg-Grey cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2 7C2 7.55228 1.55228 8 1 8C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6C1.55228 6 2 6.44772 2 7Z"
                          fill="#A0AEC0"
                        />
                        <path
                          d="M8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7Z"
                          fill="#A0AEC0"
                        />
                        <path
                          d="M14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7Z"
                          fill="#A0AEC0"
                        />
                      </svg>
                    </div>
                  </Tooltip>
                </>
              )}
            </div>

            {/* Hiển thị icon "+" nếu không có primary assignee */}
            {assignees.every(
              (assignee) => assignee.pivot.role !== "primary"
            ) && (
              <div
                className="flex items-center justify-center w-[30px] h-[30px] rounded-[20px] bg-Grey ml-4 cursor-pointer"
                onClick={onAddAssigneeClick} // Thêm sự kiện click
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                >
                  <path
                    d="M5.45349 1.89116C5.45349 1.33116 5.90745 0.877197 6.46745 0.877197C7.02745 0.877197 7.48142 1.33116 7.48142 1.89116V12.1088C7.48142 12.6688 7.02745 13.1228 6.46745 13.1228C5.90745 13.1228 5.45349 12.6688 5.45349 12.1088V1.89116Z"
                    fill="#A0AEC0"
                  />
                  <path
                    d="M0.305664 7.03898C0.305664 6.47899 0.759632 6.02502 1.31963 6.02502H11.5373C12.0973 6.02502 12.5512 6.47899 12.5512 7.03898C12.5512 7.59898 12.0973 8.05295 11.5373 8.05295H1.31963C0.759631 8.05295 0.305664 7.59898 0.305664 7.03898Z"
                    fill="#A0AEC0"
                  />
                </svg>
              </div>
            )}
          </>
        ) : (
          // Hiển thị icon "+" nếu không có assignee nào
          <div
            className="flex items-center justify-center w-[30px] h-[30px] rounded-[20px] bg-Grey cursor-pointer"
            onClick={onAddAssigneeClick} // Thêm sự kiện click
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
            >
              <path
                d="M5.45349 1.89116C5.45349 1.33116 5.90745 0.877197 6.46745 0.877197C7.02745 0.877197 7.48142 1.33116 7.48142 1.89116V12.1088C7.48142 12.6688 7.02745 13.1228 6.46745 13.1228C5.90745 13.1228 5.45349 12.6688 5.45349 12.1088V1.89116Z"
                fill="#A0AEC0"
              />
              <path
                d="M0.305664 7.03898C0.305664 6.47899 0.759632 6.02502 1.31963 6.02502H11.5373C12.0973 6.02502 12.5512 6.47899 12.5512 7.03898C12.5512 7.59898 12.0973 8.05295 11.5373 8.05295H1.31963C0.759631 8.05295 0.305664 7.59898 0.305664 7.03898Z"
                fill="#A0AEC0"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssigneeList;
