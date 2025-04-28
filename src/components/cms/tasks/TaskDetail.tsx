"use client";
import { App, Badge, Spin, Tabs, TabsProps } from "antd";
import { useRef, useState } from "react";
import Comments from "./tabs/Comments";
import Files from "./tabs/Files";
import Progress from "./tabs/Progress";
import TaskScreenDetail from "./TaskScreenDetail";
import { TTask } from "@/types";
import { calculateTimeRemaining, formatDate, getTaskStatus } from "@/utils/day";
import ProjectStatus from "./details/ProjectStatus";
import PriorityIndicator from "./details/PriorityIndicator";
import TaskName from "./details/TaskName";
import AssigneeList from "./details/AssigneeList";
import DueDateDisplay from "./details/DueDateDisplay";
import TaskStatusDisplay from "./details/TaskStatusDisplay";
import TaskCreator from "./details/TaskCreator";
import TaskDescription from "./details/TaskDescription";

interface TaskDetailProps {
  task: TTask | null;
  onClose: () => void;
  loading?: boolean;
  error?: string;
}

export default function TaskDetail({
  task,
  onClose,
  loading = false,
  error,
}: TaskDetailProps) {
  const [activeKey, setActiveKey] = useState("1");
  const { modal } = App.useApp();
  const modalRef = useRef<{ destroy: () => void } | null>(null);
  const showTaskScreenDetail = () => {
    modalRef.current = modal.info({
      content: <TaskScreenDetail onClose={() => modalRef.current?.destroy()} />,
      width: "100%",
      transitionName: "app-zoom",
      className: "custom-modal-height",
      footer: null,
      icon: null,

      centered: false,
      style: {
        top: 24,
        right: 16,
        position: "fixed",
        margin: 0,
      },
    });
  };
  const onChange = (key: string) => {
    setActiveKey(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <span>Tiến trình</span>,
      children: (
        <Progress checklists={task?.checklists} subtasks={task?.subtasks} />
      ),
    },
    {
      key: "2",
      label: (
        <span className="px-[8px] pt-[5px] pb-[8px] text-[14px] font-[400]">
          Files{" "}
          <Badge
            count={2}
            style={{
              backgroundColor: activeKey === "2" ? "#1890ff" : "#d9d9d9", // Màu xanh khi active, xám khi không active
              color: activeKey === "2" ? "#fff" : "#000", // Chữ trắng khi active, đen khi không active
            }}
          />
        </span>
      ),
      children: <Files />,
    },
    {
      key: "3",
      label: (
        <span>
          Bình luận{" "}
          <Badge
            count={5}
            style={{
              backgroundColor: activeKey === "3" ? "#1890ff" : "#d9d9d9", // Màu xanh khi active, xám khi không active
              color: activeKey === "3" ? "#fff" : "#000", // Chữ trắng khi active, đen khi không active
            }}
          />
        </span>
      ),
      children: <Comments />,
    },
  ];
  if (error) {
    return (
      <div className="flex items-center justify-center h-[400px] text-red-500">
        {error}
      </div>
    );
  }

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-[400px]">
          <Spin size="large" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col gap-5 w-full p-5">
          <div className="header-task-detail flex items-center justify-between">
            <div className="flex items-end gap-[15px]">
              <button onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.6162 0.822266C14.019 0.419502 14.6577 0.394355 15.0898 0.74707L15.1729 0.822266C15.5754 1.22484 15.6002 1.86284 15.248 2.29492L15.1729 2.37891L9.91016 7.64648L9.55664 8L9.91016 8.35352L15.1777 13.6162C15.5805 14.019 15.6056 14.6577 15.2529 15.0898L15.1777 15.1729C14.7752 15.5754 14.1372 15.6002 13.7051 15.248L13.6211 15.1729L8.35352 9.91016L8 9.55664L7.64648 9.91016L2.38379 15.1777C1.98103 15.5805 1.34227 15.6056 0.910156 15.2529L0.827148 15.1777C0.42463 14.7752 0.399776 14.1372 0.751953 13.7051L0.827148 13.6211L6.08984 8.35352L6.44336 8L6.08984 7.64648L0.822266 2.38379C0.419503 1.98103 0.394356 1.34227 0.74707 0.910156L0.822266 0.827148C1.22484 0.424629 1.86284 0.399775 2.29492 0.751953L2.37891 0.827148L7.64648 6.08984L8 6.44336L8.35352 6.08984L13.6162 0.822266Z"
                    fill="#A0AEC0"
                    stroke="#A0AEC0"
                  />
                </svg>
              </button>
              <button onClick={showTaskScreenDetail}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2251_7688)">
                    <path
                      d="M10.75 0H15.25C15.6656 0 16 0.334375 16 0.75V5.25C16 5.55312 15.8188 5.82812 15.5375 5.94375C15.2563 6.05937 14.9344 5.99687 14.7188 5.78125L13.5 4.5625L10.7812 7.28125C10.4875 7.575 10.0125 7.575 9.72188 7.28125L8.72188 6.28125C8.42813 5.9875 8.42813 5.5125 8.72188 5.22188L11.4406 2.50312L10.2188 1.28125C10.0031 1.06562 9.94062 0.74375 10.0562 0.4625C10.1719 0.18125 10.4469 0 10.75 0ZM5.25 16H0.75C0.334375 16 0 15.6656 0 15.25V10.75C0 10.4469 0.18125 10.1719 0.4625 10.0562C0.74375 9.94062 1.06562 10.0031 1.28125 10.2188L2.5 11.4375L5.21875 8.71875C5.5125 8.425 5.9875 8.425 6.27812 8.71875L7.27812 9.71875C7.57187 10.0125 7.57187 10.4875 7.27812 10.7781L4.55937 13.4969L5.77812 14.7156C5.99375 14.9312 6.05625 15.2531 5.94063 15.5344C5.825 15.8156 5.55 15.9969 5.24687 15.9969L5.25 16Z"
                      fill="#A0AEC0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2251_7688">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="relative px-[15px] py-[5px] overflow-hidden rounded-[8px] border-[1px] border-[#E2E8F0] group">
              <div className="flex items-center gap-[10px] relative z-10">
                <span className="text-textColor text-[14px] font-[400] text-base/[14px]">
                  {task?.status === "in_progress"
                    ? "Đang thực hiện"
                    : task?.status === "completed"
                    ? "Hoàn thành"
                    : task?.status === "pending"
                    ? "Chờ xử lý"
                    : task?.status}
                </span>
                <span>|</span>
                <div className="flex items-center gap-[5px]">
                  <span>{task?.progress}%</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                  >
                    <path
                      d="M4.88213 6.80685C5.22393 7.14864 5.779 7.14864 6.1208 6.80685L10.4958 2.43185C10.8376 2.09005 10.8376 1.53497 10.4958 1.19318C10.154 0.851379 9.59893 0.851379 9.25713 1.19318L5.5001 4.95021L1.74307 1.19591C1.40127 0.854114 0.846191 0.854114 0.504395 1.19591C0.162598 1.53771 0.162598 2.09279 0.504395 2.43458L4.87939 6.80958L4.88213 6.80685Z"
                      fill="#A0AEC0"
                    />
                  </svg>
                </div>
              </div>
              <div
                className=" transition-all duration-300 absolute bg-[#21D4FD66] h-full top-0 left-0 transition-all duration-300"
                style={{ width: `${task?.progress || 0}%` }}
              />
              {/* <Slider
          value={task?.progress || 0}
          step={25}
          marks={{
            0: '0',
            25: '25',
            50: '50',
            75: '75',
            100: '100'
          }}
          onChange={(value) => {
            console.log("New progress:", value);
          }}
        /> */}
            </div>
            <div className="flex items-center gap-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_2251_7697)">
                  <path
                    d="M15.4969 5.20625C15.5969 5.47813 15.5126 5.78125 15.2969 5.975L13.9438 7.20625C13.9782 7.46563 13.9969 7.73125 13.9969 8C13.9969 8.26875 13.9782 8.53438 13.9438 8.79375L15.2969 10.025C15.5126 10.2188 15.5969 10.5219 15.4969 10.7937C15.3594 11.1656 15.1938 11.5219 15.0032 11.8656L14.8563 12.1187C14.6501 12.4625 14.4188 12.7875 14.1657 13.0938C13.9813 13.3188 13.6751 13.3937 13.4001 13.3062L11.6594 12.7531C11.2407 13.075 10.7782 13.3438 10.2844 13.5469L9.89381 15.3313C9.83131 15.6156 9.61256 15.8406 9.32506 15.8875C8.89381 15.9594 8.45006 15.9969 7.99693 15.9969C7.54381 15.9969 7.10006 15.9594 6.66881 15.8875C6.38131 15.8406 6.16256 15.6156 6.10006 15.3313L5.70943 13.5469C5.21568 13.3438 4.75318 13.075 4.33443 12.7531L2.59693 13.3094C2.32193 13.3969 2.01568 13.3188 1.83131 13.0969C1.57818 12.7906 1.34693 12.4656 1.14068 12.1219L0.993807 11.8687C0.803182 11.525 0.637557 11.1687 0.500057 10.7969C0.400057 10.525 0.484432 10.2219 0.700057 10.0281L2.05318 8.79688C2.01881 8.53438 2.00006 8.26875 2.00006 8C2.00006 7.73125 2.01881 7.46563 2.05318 7.20625L0.700057 5.975C0.484432 5.78125 0.400057 5.47813 0.500057 5.20625C0.637557 4.83438 0.803182 4.47813 0.993807 4.13438L1.14068 3.88125C1.34693 3.5375 1.57818 3.2125 1.83131 2.90625C2.01568 2.68125 2.32193 2.60625 2.59693 2.69375L4.33756 3.24688C4.75631 2.925 5.21881 2.65625 5.71256 2.45312L6.10318 0.66875C6.16568 0.384375 6.38443 0.159375 6.67193 0.1125C7.10318 0.0375 7.54693 0 8.00006 0C8.45318 0 8.89693 0.0375 9.32818 0.109375C9.61568 0.15625 9.83443 0.38125 9.89693 0.665625L10.2876 2.45C10.7813 2.65313 11.2438 2.92188 11.6626 3.24375L13.4032 2.69062C13.6782 2.60312 13.9844 2.68125 14.1688 2.90313C14.4219 3.20938 14.6532 3.53437 14.8594 3.87812L15.0063 4.13125C15.1969 4.475 15.3626 4.83125 15.5001 5.20312L15.4969 5.20625ZM8.00006 10.5C8.6631 10.5 9.29898 10.2366 9.76782 9.76777C10.2367 9.29893 10.5001 8.66304 10.5001 8C10.5001 7.33696 10.2367 6.70107 9.76782 6.23223C9.29898 5.76339 8.6631 5.5 8.00006 5.5C7.33702 5.5 6.70113 5.76339 6.23229 6.23223C5.76345 6.70107 5.50006 7.33696 5.50006 8C5.50006 8.66304 5.76345 9.29893 6.23229 9.76777C6.70113 10.2366 7.33702 10.5 8.00006 10.5Z"
                    fill="#A0AEC0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2251_7697">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="p-[9px]  bg-[#EBEFF5] rounded-[6px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                >
                  <path
                    d="M0.25 8C0.25 7.53587 0.434374 7.09075 0.762563 6.76256C1.09075 6.43437 1.53587 6.25 2 6.25C2.46413 6.25 2.90925 6.43437 3.23744 6.76256C3.56563 7.09075 3.75 7.53587 3.75 8C3.75 8.46413 3.56563 8.90925 3.23744 9.23744C2.90925 9.56563 2.46413 9.75 2 9.75C1.53587 9.75 1.09075 9.56563 0.762563 9.23744C0.434374 8.90925 0.25 8.46413 0.25 8ZM5.25 8C5.25 7.53587 5.43437 7.09075 5.76256 6.76256C6.09075 6.43437 6.53587 6.25 7 6.25C7.46413 6.25 7.90925 6.43437 8.23744 6.76256C8.56563 7.09075 8.75 7.53587 8.75 8C8.75 8.46413 8.56563 8.90925 8.23744 9.23744C7.90925 9.56563 7.46413 9.75 7 9.75C6.53587 9.75 6.09075 9.56563 5.76256 9.23744C5.43437 8.90925 5.25 8.46413 5.25 8ZM12 6.25C12.4641 6.25 12.9092 6.43437 13.2374 6.76256C13.5656 7.09075 13.75 7.53587 13.75 8C13.75 8.46413 13.5656 8.90925 13.2374 9.23744C12.9092 9.56563 12.4641 9.75 12 9.75C11.5359 9.75 11.0908 9.56563 10.7626 9.23744C10.4344 8.90925 10.25 8.46413 10.25 8C10.25 7.53587 10.4344 7.09075 10.7626 6.76256C11.0908 6.43437 11.5359 6.25 12 6.25Z"
                    fill="#A0AEC0"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center justify-between">
              <ProjectStatus
                projectName={task?.project?.name} // Truyền tên dự án
                status={task?.status} // Truyền trạng thái (nếu có)
                onProjectClick={() => console.log("Clicked on project")} // Sự kiện click vào nút dự án
                onStatusClick={() => console.log("Clicked on status")} // Sự kiện click vào nút trạng thái
              />
              <PriorityIndicator
                priority={task?.priority || "normal"}
                onClick={() => console.log("Clicked on priority")}
              />
            </div>
            <TaskName name={task?.name} />
          </div>
          <div className="flex gap-5 flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="638"
              height="2"
              viewBox="0 0 638 2"
              fill="none"
            >
              <path d="M0 1H638" stroke="url(#paint0_linear_2266_7728)" />
              <defs>
                <linearGradient
                  id="paint0_linear_2266_7728"
                  x1="0"
                  y1="1"
                  x2="631.846"
                  y2="1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E0E1E2" stopOpacity="0" />
                  <stop offset="0.5" stop-color="#E2E8F0" />
                  <stop offset="1" stop-color="#E0E1E2" stopOpacity="0.15625" />
                </linearGradient>
              </defs>
            </svg>

            <AssigneeList
              assignees={task?.assignees}
              onAddAssigneeClick={() => console.log("Mở form thêm assignee")} // Sự kiện click vào biểu tượng "+"
              onAssigneeClick={(assignee) =>
                console.log(`Clicked on assignee: ${assignee.name}`)
              } // Sự kiện click vào assignee
            />

            <DueDateDisplay
              dueDate={task?.due_date}
              formatDate={(date?: string) => formatDate(date) || ""}
              calculateTimeRemaining={calculateTimeRemaining}
              onClick={() => console.log("Mở lịch để chỉnh sửa ngày")} // Sự kiện click vào biểu tượng lịch
            />

            <TaskStatusDisplay
              dueDate={task?.due_date}
              progress={task?.progress || 0}
              getTaskStatus={getTaskStatus}
              onClick={() => console.log("Mở dropdown để thay đổi trạng thái")} // Sự kiện click vào button trạng thái
            />
            <TaskCreator
              creator={task?.creator}
              onClick={() => console.log("Clicked on creator")}
            />

            <TaskDescription
              description={task?.description}
              placeholder="Nhập mô tả công việc tại đây"
              disabled={false} // Có thể chỉnh sửa
            />
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </div>
      </>
    );
  }
}
