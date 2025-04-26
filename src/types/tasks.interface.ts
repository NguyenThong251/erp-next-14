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
  
export  interface TSubtask {
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
  
 export interface TTasksResponse {
    tasks: TTask[];
    total: number;
    current_page: number;
    last_page: number;
  }