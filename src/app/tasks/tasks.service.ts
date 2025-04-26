import api from "@/lib/api";
import { TTask, TTasksResponse } from "@/types";

export const tasksService = {
  // Lấy danh sách tasks có phân trang
  getTasks: async (page: number = 1) => {
    const response = await api.get<TTasksResponse>(`/tasks?page=${page}`);
    return response.data;
  },

  // Tìm kiếm tasks
  searchTasks: async (query: string, page: number = 1) => {
    const response = await api.get<TTasksResponse>("/tasks/search", {
      params: { query, page }
    });
    return response.data;
  },

  // Lấy chi tiết task
  getTaskDetail: async (id: number) => {
    const response = await api.get<{ task: TTask }>(`/tasks/${id}`);
    const task = response.data.task;
    
    // Xử lý file_urls
    task.file_urls = typeof task.file_urls === "string" 
      ? JSON.parse(task.file_urls) 
      : task.file_urls || [];

    // Xử lý subtasks
    task.subtasks = task.subtasks.map(subtask => ({
      ...subtask,
      file_urls: typeof subtask.file_urls === "string"
        ? JSON.parse(subtask.file_urls)
        : subtask.file_urls || []
    }));

    return task;
  }
};