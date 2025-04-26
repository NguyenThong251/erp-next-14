"use client";
import React, { useRef, useState } from "react";
import { Table, Tag, Avatar, App } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { DataTasks } from "@/types/tasks.interface";
import { UserOutlined } from "@ant-design/icons";
import TaskDetail from "./TaskDetail";
import { tasksService } from "@/app/tasks/tasks.service";

interface TableComponentProps {
  data: DataTasks[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const columns: TableColumnsType<DataTasks> = [
  {
    title: "Tên công việc",
    dataIndex: "taskName",

    sorter: (a, b) => a.taskName.localeCompare(b.taskName),
    render: (text, record, index) => (
      <>
        <div className=" flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              opacity="0.96"
              d="M10.3075 0C10.6668 0 10.9949 0.20311 11.1512 0.527304L13.8307 6.04642L19.8146 6.92916C20.1661 6.97994 20.4591 7.22602 20.5684 7.56584C20.6778 7.90565 20.588 8.27281 20.338 8.52279L15.9985 12.8272L17.0218 18.9048C17.0804 19.2564 16.9359 19.6118 16.6469 19.8227C16.3578 20.0336 15.9711 20.0571 15.6587 19.8891L10.3075 17.03L4.96024 19.8852C4.64386 20.0532 4.26108 20.0297 3.97204 19.8188C3.683 19.6079 3.53457 19.2525 3.59316 18.9009L4.61652 12.8233L0.277004 8.52279C0.0231169 8.27281 -0.0628141 7.90175 0.0465526 7.56584C0.155919 7.22992 0.448866 6.98385 0.800402 6.92916L6.78433 6.04642L9.46381 0.527304C9.62395 0.20311 9.94815 0 10.3075 0ZM10.3075 3.0857L8.25687 7.31195C8.12016 7.58927 7.85846 7.78457 7.54989 7.83144L2.92915 8.51108L6.28436 11.835C6.49919 12.0499 6.60075 12.3545 6.54997 12.6553L5.75706 17.3307L9.86612 15.1356C10.1434 14.9872 10.4755 14.9872 10.7489 15.1356L14.8579 17.3307L14.0689 12.6592C14.0182 12.3584 14.1158 12.0538 14.3345 11.839L17.6898 8.51498L13.069 7.83144C12.7643 7.78457 12.4987 7.59318 12.362 7.31195L10.3075 3.0857Z"
              fill="#E2E8F0"
            />
          </svg>
          <span className="text-[14px] font-medium text-[#111111] ">
            {index + 1}
          </span>
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
              fill="url(#paint0_linear_2176_6637)"
            />
            <path
              d="M6.50562 12.8832C5.98637 12.3889 5.96612 11.5672 6.4604 11.048C6.95468 10.5287 7.77632 10.5085 8.29557 11.0028L12.6057 15.1055L11.7107 16.0457C11.2164 16.565 10.3948 16.5852 9.87552 16.091L6.50562 12.8832Z"
              fill="white"
            />
            <path
              d="M10.7084 13.3129L15.4947 8.24132C15.9903 7.71613 16.8179 7.69218 17.3431 8.18783C17.8683 8.68348 17.8922 9.51103 17.3966 10.0362L12.6103 15.1078L10.7084 13.3129Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2176_6637"
                x1="0.909091"
                y1="5.28"
                x2="23.9626"
                y2="7.53587"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#82E12F" />
                <stop offset="1" stop-color="#2CB735" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[14px] font-[400] text-[#344767]">{text}</span>
        </div>
      </>
    ),
  },
  {
    title: "Phòng ban",
    dataIndex: "department",
    sorter: (a, b) => a.department.localeCompare(b.department),
    render: (text) => (
      <span className="text-[14px] text-[#344767]">{text}</span>
    ),
  },
  {
    title: "Dự án / Nhóm",
    dataIndex: "project",
    sorter: (a, b) => a.project.localeCompare(b.project),
    render: (text) => (
      <span className="text-[14px] text-[#344767]">{text}</span>
    ),
  },
  {
    title: "Ngày bắt đầu",
    dataIndex: "startDate",
    sorter: (a, b) =>
      new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    render: (text) => (
      <span className="text-[14px] text-[#344767]">{text}</span>
    ),
  },
  {
    title: "Hạn hoàn thành",
    dataIndex: "dueDate",
    sorter: (a, b) =>
      new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
    render: (text) => (
      <span className="text-[14px] text-[#344767]">{text}</span>
    ),
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (status) => {
      return <span className="text-[14px] text-[#344767]">{status}</span>;
    },
  },
  {
    title: "Tình trạng",
    dataIndex: "condition",
    sorter: (a, b) => a.condition.localeCompare(b.condition),
    render: (text) => (
      <span className="text-[14px] text-[#344767]">{text}</span>
    ),
  },
  {
    title: "Người thực hiện",
    dataIndex: "members",
    sorter: (a, b) => a.members[0].localeCompare(b.members[0]),
    render: (members) => (
      <Avatar.Group
        max={{
          count: 2,
          style: { color: "#f56a00", backgroundColor: "#fde3cf" },
        }}
      >
        {members.map((member: string, index: number) => (
          <Avatar key={index} size={32} icon={<UserOutlined />} />
        ))}
      </Avatar.Group>
    ),
  },
];

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  page,
  totalPages,
  onPageChange,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  console.log(data);
  const onChange: TableProps<DataTasks>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const { modal } = App.useApp();
  const modalRef = useRef<{ destroy: () => void } | null>(null);

  const showModal = async (taskId: number) => {
    try {
      const taskDetail = await tasksService.getTaskDetail(taskId);
      modalRef.current = modal.info({
        content: (
          <TaskDetail
            task={taskDetail}
            onClose={() => modalRef.current?.destroy()}
          />
        ),
        width: 678,
        transitionName: "app-slide",
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
    } catch (error) {
      console.error("Error fetching task detail:", error);
    }
  };

  return (
    <div className="overflow-y-hidden overscroll-y-none [&_.ant-table-thead]:sticky [&_.ant-table-thead]:top-0 [&_.ant-table-thead]:z-10 [&_.ant-table-thead]:bg-white [&_.ant-table]:w-full [&_.ant-table]:min-w-[800px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Table<DataTasks>
        rowSelection={{
          selectedRowKeys,
          onChange: (selectedKeys) => {
            setSelectedRowKeys(selectedKeys);
          },
        }}
        columns={columns}
        dataSource={data}
        pagination={{
          current: page,
          total: totalPages,
          pageSize: 8,
          showSizeChanger: false,
          showTotal: (total) => `Tổng ${total}`,
          onChange: onPageChange,
        }}
        onRow={(record) => ({
          onClick: () => showModal(record.id),
          style: { cursor: "pointer" },
        })}
      />
    </div>
  );
};

export default TableComponent;
