import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DataTasks } from "@/types/tasks.interface";

interface TaskStore {
  selectedTaskId: string | null;
  selectedTask: DataTasks | null;
  isDrawerOpen: boolean;
  openDrawer: (taskId: string, task: DataTasks) => void;
  closeDrawer: () => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      selectedTaskId: null,
      selectedTask: null,
      isDrawerOpen: false,
      openDrawer: (taskId, task) => set({ 
        selectedTaskId: taskId, 
        selectedTask: task, 
        isDrawerOpen: true 
      }),
      closeDrawer: () => set({ 
        isDrawerOpen: false,
        selectedTaskId: null,
        selectedTask: null
      }),
    }),
    {
      name: "task-storage", // unique name for localStorage key
      partialize: (state) => ({ 
        selectedTaskId: state.selectedTaskId,
        selectedTask: state.selectedTask,
        isDrawerOpen: state.isDrawerOpen
      }),
    }
  )
); 