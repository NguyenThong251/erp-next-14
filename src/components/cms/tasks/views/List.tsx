import { DataTasks } from "@/types";
import { Avatar, Table, TableColumnsType, TableProps, Tag } from "antd";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { mockTasks } from "@/lib/data/TaskData";

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
      const statusConfig: Record<string, { color: string; textColor: string }> =
        {
          "Đang hoạt động": { color: "#E8F5E9", textColor: "#2E7D32" },
          "Chờ duyệt": { color: "#FFF3E0", textColor: "#EF6C00" },
          "Hoàn thành": { color: "#E3F2FD", textColor: "#1565C0" },
        };
      const config = statusConfig[status] || {
        color: "#F5F5F5",
        textColor: "#616161",
      };
      return (
        <Tag
          color={config.color}
          className="border-0 rounded-[16px] px-3 py-1"
          style={{ color: config.textColor }}
        >
          {status}
        </Tag>
      );
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
export default function List() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onChange: TableProps<DataTasks>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    type: "checkbox" as const,
  };

  return (
    <div className="px-5 ">
      <div className="bg-[#fff] p-5 flex gap-5 rounded-[16px] flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button className="bg-[#fff] h-[40px] justify-center rounded-[10px] px-3 flex items-center gap-3 text-[14px] text-drakGrey font-[400]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
              >
                <path
                  d="M0.139103 0.817882C0.374825 0.317867 0.87484 0 1.42843 0H16.8575C17.4111 0 17.9111 0.317867 18.1468 0.817882C18.3825 1.3179 18.3111 1.9072 17.9611 2.33579L11.4287 10.3182V14.8576C11.4287 15.2897 11.1859 15.6862 10.7966 15.8791C10.4073 16.0719 9.94654 16.0326 9.6001 15.7719L7.31432 14.0576C7.02503 13.8433 6.85716 13.504 6.85716 13.1433V10.3182L0.321252 2.33221C-0.0251874 1.9072 -0.10019 1.31433 0.139103 0.817882Z"
                  fill="#A0AEC0"
                />
              </svg>
              Lọc
            </button>
            <button className="bg-[#fff] h-[40px] justify-center rounded-[10px] px-3 flex items-center gap-3 text-[14px] text-drakGrey font-[400]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
              >
                <g clip-path="url(#clip0_2867_7753)">
                  <path
                    d="M5.02163 1.325C4.83101 1.11875 4.56538 1 4.28413 1C4.00288 1 3.73726 1.11875 3.54663 1.325L0.796634 4.325C0.424759 4.73125 0.449759 5.36563 0.859134 5.7375C1.26851 6.10938 1.89976 6.08438 2.27163 5.675L3.28413 4.57188V14C3.28413 14.5531 3.73101 15 4.28413 15C4.83726 15 5.28413 14.5531 5.28413 14V4.57188L6.29663 5.67812C6.66851 6.08437 7.30288 6.1125 7.70913 5.74062C8.11538 5.36875 8.14351 4.73438 7.77163 4.32812L5.02163 1.32812V1.325ZM10.2841 15H11.2841C11.8373 15 12.2841 14.5531 12.2841 14C12.2841 13.4469 11.8373 13 11.2841 13H10.2841C9.73101 13 9.28413 13.4469 9.28413 14C9.28413 14.5531 9.73101 15 10.2841 15ZM10.2841 11H13.2841C13.8373 11 14.2841 10.5531 14.2841 10C14.2841 9.44687 13.8373 9 13.2841 9H10.2841C9.73101 9 9.28413 9.44687 9.28413 10C9.28413 10.5531 9.73101 11 10.2841 11ZM10.2841 7H15.2841C15.8373 7 16.2841 6.55312 16.2841 6C16.2841 5.44688 15.8373 5 15.2841 5H10.2841C9.73101 5 9.28413 5.44688 9.28413 6C9.28413 6.55312 9.73101 7 10.2841 7ZM10.2841 3H17.2841C17.8373 3 18.2841 2.55313 18.2841 2C18.2841 1.44687 17.8373 1 17.2841 1H10.2841C9.73101 1 9.28413 1.44687 9.28413 2C9.28413 2.55313 9.73101 3 10.2841 3Z"
                    fill="#A0AEC0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2867_7753">
                    <rect
                      width="18"
                      height="16"
                      fill="white"
                      transform="translate(0.284119)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Sắp xếp
            </button>
            <div className="py-5">
              <button className="flex items-center bg-gradient-to-r from-[#21D4FD] to-[#2152FF] text-white text-sm font-medium rounded-[10px] px-4 py-2 transition-all hover:opacity-90 active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                >
                  <path
                    d="M8 2.5C8 1.94687 7.55312 1.5 7 1.5C6.44688 1.5 6 1.94687 6 2.5V7H1.5C0.946875 7 0.5 7.44688 0.5 8C0.5 8.55312 0.946875 9 1.5 9H6V13.5C6 14.0531 6.44688 14.5 7 14.5C7.55312 14.5 8 14.0531 8 13.5V9H12.5C13.0531 9 13.5 8.55312 13.5 8C13.5 7.44688 13.0531 7 12.5 7H8V2.5Z"
                    fill="white"
                  />
                </svg>
                <span className="ml-2 text-[14px] font-[600]">
                  Thêm công việc
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="font-[14px] text-drakGrey font[400]">1 đến 20</div>
            <div className="flex items-center gap-[10px]">
              <button className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-secondGrey">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                >
                  <path
                    d="M0.724473 8.9413C0.203843 8.42067 0.203843 7.57517 0.724473 7.05454L7.38854 0.390471C7.90917 -0.130157 8.75467 -0.130157 9.2753 0.390471C9.79593 0.911101 9.79593 1.75661 9.2753 2.27724L3.55254 8L9.27113 13.7228C9.79176 14.2434 9.79176 15.0889 9.27113 15.6095C8.7505 16.1302 7.905 16.1302 7.38437 15.6095L0.720307 8.94546L0.724473 8.9413Z"
                    fill="#A0AEC0"
                  />
                </svg>
              </button>
              <span className="rounded-[10px] w-[65px] h-[40px] border-[1px] border-[#E2E8F0] flex items-center justify-center">
                1
              </span>
              <span>/ 1</span>

              <button className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] bg-secondGrey">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                >
                  <path
                    d="M9.27553 7.0587C9.79616 7.57933 9.79616 8.42483 9.27553 8.94546L2.61146 15.6095C2.09083 16.1302 1.24533 16.1302 0.724701 15.6095C0.204071 15.0889 0.204071 14.2434 0.724701 13.7228L6.44746 8L0.728866 2.27724C0.208236 1.75661 0.208236 0.911102 0.728866 0.390472C1.2495 -0.130157 2.095 -0.130157 2.61563 0.390472L9.27969 7.05454L9.27553 7.0587Z"
                    fill="#A0AEC0"
                  />
                </svg>
              </button>
            </div>
            <div className="">
              <div className="flex items-center justify-center px-[15px] h-[40px] rounded-[10px] bg-secondGrey">
                <span className="text-drakGrey font-[500] text-[14px]">
                  Tổng: 20
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className=" overflow-y-hidden overscroll-y-none [&_.ant-table-thead]:sticky [&_.ant-table-thead]:top-0 [&_.ant-table-thead]:z-10 [&_.ant-table-thead]:bg-white [&_.ant-table]:w-full [&_.ant-table]:min-w-[800px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Table<DataTasks>
            rowSelection={rowSelection}
            columns={columns}
            dataSource={mockTasks}
            // pagination={{
            //   total: mockTasks.length,
            //   pageSize: 10,
            //   showSizeChanger: false,
            //   showTotal: (total) => `Tổng ${total}`,
            // }}
            onChange={onChange}
            pagination={false}
            // onRow={(record) => ({
            //   // onClick: () => handleRowClick(record),
            //   onClick: () => showModal(),
            //   style: { cursor: "pointer" },
            // })}
            className="bg-white rounded-lg shadow-sm"
            scroll={{ x: "max-content", y: "calc(100vh - 460px)" }}
          />
        </div>
      </div>
    </div>
  );
}
