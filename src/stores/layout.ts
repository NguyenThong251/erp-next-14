import { create } from "zustand";
import { persist } from "zustand/middleware";
// import "@/styles/globals.scss";
interface SidebarStore {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      isSidebarVisible: true,
      toggleSidebar: () =>
        set((state) => ({ isSidebarVisible: !state.isSidebarVisible })),
    }),
    {
      name: "sidebar-storage", // unique name for localStorage key
      partialize: (state) => ({ isSidebarVisible: state.isSidebarVisible }),
    }
  )
);
