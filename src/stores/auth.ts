import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TUser } from "@/types";
import api from "@/lib/api";

interface AuthState {
  user: TUser | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  setAuth: (token: string, user: TUser) => void;
  clearAuth: () => void;
  checkAuth: () => Promise<boolean>;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      setAuth: (token: string, user: TUser) => {
        set({ token, user });
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      },

      clearAuth: () => {
        set({ token: null, user: null });
        delete api.defaults.headers.common["Authorization"];
      },

      checkAuth: async () => {
        try {
          const { token, user } = get();
          
          if (!token || !user) {
            return false;
          }

          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          return true;
        } catch (error) {
          console.error("Lỗi kiểm tra xác thực:", error);
          return false;
        }
      },
    }),
    {
      name: "auth-storage", 
      partialize: (state) => ({ token: state.token, user: state.user }), 
    }
  )
);

export default useAuthStore;