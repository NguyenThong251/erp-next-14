"use client";
import { useState, useEffect } from "react";
import useAuthStore from "@/stores/auth";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
  avatar: string;
}

interface Project {
  id: number;
  name: string;
}

interface Assignee {
  id: number;
  name: string;
  pivot: { role: string };
}

interface Subtask {
  id: number;
  name: string;
  status: string;
  file_urls: string[];
}

interface Checklist {
  id: number;
  content: string;
  is_completed: boolean;
}

interface Task {
  id: number;
  name: string;
  description: string | null;
  status: string;
  priority: string;
  progress: number;
  due_date: string;
  file_urls: string[];
  creator: User;
  project: Project | null;
  assignees: Assignee[];
  subtasks: Subtask[];
  checklists: Checklist[];
}

interface TasksResponse {
  tasks: Task[];
  total: number;
  current_page: number;
  last_page: number;
}

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { token, user, checkAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
      const isAuthenticated = await checkAuth();
      if (!isAuthenticated || !token) {
        router.push("/login");
      }
    };
    verifyAuth();
  }, [token, checkAuth, router]);
  const fetchTasks = async () => {
    if (!token) return;
    try {
      const response = await api.get<TasksResponse>(`/tasks?page=${page}`);
      setTasks(response.data.tasks);
      setTotalPages(response.data.last_page);
    } catch (err: any) {
      if (err.response?.status === 401) {
        router.push("/login");
      }
    }
  };

  const handleSearch = async () => {
    if (!token) return;
    try {
      const response = await api.get<TasksResponse>("/tasks/search", {
        params: { query, page },
      });
      setTasks(response.data.tasks);
      setTotalPages(response.data.last_page);
      setPage(response.data.current_page);
    } catch (err: any) {
      if (err.response?.status === 401) {
        router.push("/login");
      }
    }
  };

  const fetchTaskDetails = async (id: number) => {
    if (!token) return;
    try {
      const response = await api.get<{ task: Task }>(`/tasks/${id}`);
      const task = response.data.task;
      task.file_urls =
        typeof task.file_urls === "string"
          ? JSON.parse(task.file_urls)
          : task.file_urls || [];
      task.subtasks = task.subtasks.map((subtask) => ({
        ...subtask,
        file_urls:
          typeof subtask.file_urls === "string"
            ? JSON.parse(subtask.file_urls)
            : subtask.file_urls || [],
      }));
      setSelectedTask(task);
    } catch (err: any) {
      if (err.response?.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    if (token) {
      if (query) {
        handleSearch();
      } else {
        fetchTasks();
      }
    }
  }, [page, query, token]);

  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search tasks..."
          className="border p-2 rounded w-full"
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Task List</h2>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="border p-4 rounded cursor-pointer"
              onClick={() => fetchTaskDetails(task.id)}
            >
              <h3 className="font-bold">{task.name}</h3>
              <p>Creator: {task.creator.name}</p>
              <p>Status: {task.status}</p>
              <p>Priority: {task.priority}</p>
              <p>Progress: {task.progress}%</p>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="mr-2 p-2 bg-gray-200 rounded"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="p-2 bg-gray-200 rounded"
          >
            Next
          </button>
        </div>
      </div>

      {selectedTask && (
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">{selectedTask.name}</h2>
          <p>
            <strong>Creator:</strong> {selectedTask.creator.name}
          </p>
          <p>
            <strong>Project:</strong> {selectedTask.project?.name || "N/A"}
          </p>
          <p>
            <strong>Priority:</strong> {selectedTask.priority}
          </p>
          <p>
            <strong>Progress:</strong> {selectedTask.progress}%
          </p>
          <p>
            <strong>Due Date:</strong>{" "}
            {new Date(selectedTask.due_date).toLocaleDateString()}
          </p>
          <p>
            <strong>Assignees:</strong>{" "}
            {selectedTask.assignees
              .map((a) => `${a.name} (${a.pivot.role})`)
              .join(", ")}
          </p>
          <p>
            <strong>Description:</strong> {selectedTask.description || "N/A"}
          </p>
          <h3 className="font-semibold mt-4">Files</h3>
          <ul>
            {selectedTask.file_urls.map((url, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  File {index + 1}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="font-semibold mt-4">Subtasks</h3>
          <ul>
            {selectedTask.subtasks.map((subtask) => (
              <li key={subtask.id}>
                {subtask.name} - {subtask.status}
                <ul>
                  {subtask.file_urls.map((url, index) => (
                    <li key={index}>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        Subtask File {index + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <h3 className="font-semibold mt-4">Checklists</h3>
          <ul>
            {selectedTask.checklists.map((checklist) => (
              <li key={checklist.id}>
                {checklist.content} -{" "}
                {checklist.is_completed ? "Completed" : "Pending"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
