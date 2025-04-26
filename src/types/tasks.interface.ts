export interface DataTasks {
  key: React.Key;
  taskName: string;
  department: string;
  project: string;
  startDate: string;
  dueDate: string;
  status: string;
  condition: string;
  members: string[];
  id: number; // Add this field for click handler
}

//
export interface TUserTask {
  id: number;
  name: string;
  avatar: string;
}

export interface TProject {
  id: number;
  name: string;
}

export interface TAssignee {
  id: number;
  name: string;
  pivot: { role: string };
}

export interface TSubtask {
  id: number;
  name: string;
  status: string;
  file_urls: string[];
}

export interface TChecklist {
  id: number;
  content: string;
  is_completed: boolean;
}

export interface TTask {
  id: number;
  name: string;
  description: string | null;
  status: string;
  priority: string;
  progress: number;
  due_date: string;
  file_urls: string[];
  creator: TUserTask;
  project: TProject | null;
  assignees: TAssignee[];
  subtasks: TSubtask[];
  checklists: TChecklist[];
}
export interface TTaskDetail {
  id: number;
  name: string;
  description: string;
  start_date: string;
  due_date: string;
  estimated_time: string;
  status: string;
  priority: string;
  progress: number;
  file_urls: string[] | string;
  creator_id: number;
  project_id: number;
  created_at: string;
  updated_at: string;
  creator: {
    id: number;
    username: string;
    name: string;
    email: string;
    avatar: string;
    department_id: number;
  };
  project: {
    id: number;
    name: string;
    description: string;
  };
  assignees: Array<{
    id: number;
    username: string;
    name: string;
    email: string;
    avatar: string;
    department_id: number;
    pivot: {
      task_id: number;
      user_id: number;
      role: string;
    };
  }>;
  subtasks: Array<{
    id: number;
    name: string;
    description: string;
    due_date: string;
    status: string;
    file_urls: string[] | null;
    task_id: number;
    user_id: number;
  }>;
  checklists: Array<{
    id: number;
    content: string;
    is_completed: boolean;
    task_id: number;
    subtask_id: number | null;
  }>;
}
export interface TTasksResponse {
  tasks: TTask[];
  total: number;
  current_page: number;
  last_page: number;
  per_page: number;
}
