import { DataTasks } from "@/types/tasks/tasks.interface";

export const mockTasks: DataTasks[] = [
  {
    key: '1',
    taskName: '[Báo giá] phản hồi khách hàng BOHO',
    department: 'Cá nhân',
    project: 'Công việc cá nhân',
    startDate: '26/08/2023',
    dueDate: '28/08/2023',
    status: 'Đang hoạt động',
    condition: 'Đã xong đúng hạn',
    members: ['Công Du']
  },
  {
    key: '2',
    taskName: '[Báo giá] phân tích yêu cầu khách hàng ABC',
    department: 'Kinh doanh',
    project: 'Dự án ABC',
    startDate: '25/08/2023',
    dueDate: '27/08/2023',
    status: 'Đang hoạt động',
    condition: 'Còn 2 ngày',
    members: ['Công Du', 'Minh Anh']
  },
  {
    key: '3',
    taskName: '[Khảo sát] khách hàng tiềm năng XYZ',
    department: 'Cá nhân',
    project: 'Công việc cá nhân',
    startDate: '26/08/2023',
    dueDate: '29/08/2023',
    status: 'Chờ duyệt',
    condition: 'Còn 3 ngày',
    members: ['Công Du']
  },
  {
    key: '4',
    taskName: '[Báo cáo] tổng kết doanh số Q2/2023',
    department: 'Kinh doanh',
    project: 'Báo cáo quý',
    startDate: '26/08/2023',
    dueDate: '28/08/2023',
    status: 'Đang hoạt động',
    condition: 'Đã xong đúng hạn',
    members: ['Công Du', 'Thu Hà']
  },
  {
    key: '5',
    taskName: '[Hợp đồng] ký kết với đối tác DEF',
    department: 'Cá nhân',
    project: 'Công việc cá nhân',
    startDate: '26/08/2023',
    dueDate: '30/08/2023',
    status: 'Đang hoạt động',
    condition: 'Còn 4 ngày',
    members: ['Công Du']
  },
  {
    key: '6',
    taskName: '[Đào tạo] hướng dẫn nhân viên mới',
    department: 'Nhân sự',
    project: 'Onboarding',
    startDate: '26/08/2023',
    dueDate: '28/08/2023',
    status: 'Hoàn thành',
    condition: 'Đã xong đúng hạn',
    members: ['Công Du', 'Lan Anh']
  },
  {
    key: '7',
    taskName: '[Meeting] họp review sprint với team',
    department: 'Cá nhân',
    project: 'Công việc cá nhân',
    startDate: '26/08/2023',
    dueDate: '26/08/2023',
    status: 'Hoàn thành',
    condition: 'Đã xong đúng hạn',
    members: ['Công Du']
  },
  {
    key: '8',
    taskName: '[Báo giá] dự án mới khách hàng GHI',
    department: 'Kinh doanh',
    project: 'Dự án GHI',
    startDate: '26/08/2023',
    dueDate: '29/08/2023',
    status: 'Đang hoạt động',
    condition: 'Còn 3 ngày',
    members: ['Công Du', 'Hoàng Nam']
  },
  {
    key: '9',
    taskName: '[Khảo sát] nhu cầu khách hàng JKL',
    department: 'Cá nhân',
    project: 'Công việc cá nhân',
    startDate: '26/08/2023',
    dueDate: '28/08/2023',
    status: 'Chờ duyệt',
    condition: 'Còn 2 ngày',
    members: ['Công Du']
  },
  {
    key: '10',
    taskName: '[Report] phân tích thị trường Q3/2023',
    department: 'Kinh doanh',
    project: 'Báo cáo quý',
    startDate: '26/08/2023',
    dueDate: '31/08/2023',
    status: 'Đang hoạt động',
    condition: 'Còn 5 ngày',
    members: ['Công Du', 'Minh Tuấn']
  }
];