// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { TUser } from "@/types";
// import api from "@/lib/api";
// import Cookies from "js-cookie";
// interface AuthState {
//   user: TUser | null;
//   token: string | null;
//   isLoading: boolean;
//   error: string | null;
//   setAuth: (token: string, user: TUser) => void;
//   clearAuth: () => void;
//   checkAuth: () => Promise<boolean>;
// }

// const useAuthStore = create<AuthState>()(
//   persist(
//     (set, get) => ({
//       user: null,
//       token: null,
//       isLoading: false,
//       error: null,

//       setAuth: (token: string, user: TUser) => {
//         set({ token, user });
//         api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//       },

//       clearAuth: () => {
//         set({ token: null, user: null });
//         delete api.defaults.headers.common["Authorization"];
//       },

//       checkAuth: async () => {
//         try {
//           const { token, user } = get();

//           if (!token || !user) {
//             return false;
//           }

//           api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//           return true;
//         } catch (error) {
//           console.error("Lỗi kiểm tra xác thực:", error);
//           return false;
//         }
//       },
//     }),
//     {
//       name: "auth-storage",
//       partialize: (state) => ({ token: state.token, user: state.user }),
//     }
//   )
// );

// export default useAuthStore;
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TUser } from "@/types";
import api from "@/lib/api";
import Cookies from "js-cookie";

interface AuthState {
  user: TUser | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
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

      login: async (credentials: { email: string; password: string }) => {
        try {
          set({ isLoading: true, error: null });
          const response = await api.post("/login", credentials);
          const { token, user } = response.data;
          get().setAuth(token, user);
          set({ isLoading: false });
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.response?.data.message || "Đăng nhập thất bại",
          });
          throw error;
        }
      },

      setAuth: (token: string, user: TUser) => {
        set({ token, user });
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        Cookies.set("token", token, {
          path: "/",
          expires: 1 / 24,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
        });
      },

      clearAuth: () => {
        set({ token: null, user: null });
        delete api.defaults.headers.common["Authorization"];
        Cookies.remove("token", { path: "/" });
      },

      checkAuth: async () => {
        try {
          const { token, user } = get();
          const cookieToken = Cookies.get("token");

          if (!token || !user || token !== cookieToken) {
            set({ token: null, user: null });
            Cookies.remove("token", { path: "/" });
            return false;
          }

          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          return true;
        } catch (error: any) {
          console.error("Lỗi kiểm tra xác thực:", error);
          if (error.response?.status === 401) {
            set({ token: null, user: null });
            delete api.defaults.headers.common["Authorization"];
            Cookies.remove("token", { path: "/" });
          }
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