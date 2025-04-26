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
        // Chỉ cần set state, zustand/persist sẽ tự động lưu vào localStorage
        set({ token, user });
        // Cập nhật header cho API calls
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      },

      clearAuth: () => {
        // Reset state
        set({ token: null, user: null });
        // Xóa header authorization
        delete api.defaults.headers.common["Authorization"];
      },

      checkAuth: async () => {
        try {
          const { token, user } = get();
          
          if (!token || !user) {
            return false;
          }

          // Cập nhật lại header cho API calls khi reload
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          return true;
        } catch (error) {
          console.error("Lỗi kiểm tra xác thực:", error);
          return false;
        }
      },
    }),
    {
      name: "auth-storage", // Tên của storage key trong localStorage
      partialize: (state) => ({ token: state.token, user: state.user }), // Chỉ lưu token và user
    }
  )
);

export default useAuthStore;