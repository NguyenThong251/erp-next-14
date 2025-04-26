import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";
import { TUser } from "@/types";

interface AuthState {
  token: string | null;
  user: TUser | null;
  isAuthenticated: boolean;
  setAuth: (token: string, user: TUser) => void;
  clearAuth: () => void;
  checkAuth: () => Promise<boolean>;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,
  setAuth: (token: string, user: TUser) => {
    Cookies.set("token", token, { expires: 7 });
    Cookies.set("user", JSON.stringify(user), { expires: 7 });
    set({ token, user, isAuthenticated: true });

    // Cấu hình axios default header khi có token
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  },
  clearAuth: () => {
    Cookies.remove("token");
    Cookies.remove("user");
    delete axios.defaults.headers.common["Authorization"];
    set({ token: null, user: null, isAuthenticated: false });
  },
  checkAuth: async () => {
    const token = Cookies.get("token");
    console.log(token);
    const userStr = Cookies.get("user");
    console.log(userStr);
    let user: TUser | null = null;

    if (!token || !userStr) {
      set({ token: null, user: null, isAuthenticated: false });
      return false;
    }

    try {
      user = JSON.parse(userStr);
      if (token && user) {
        set({ token, user, isAuthenticated: true });
        // Cấu hình lại axios header
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return true;
      }
    } catch (err) {
      console.error("Lỗi khi parse user từ cookies:", err);
      Cookies.remove("token");
      Cookies.remove("user");
      delete axios.defaults.headers.common["Authorization"];
    }

    set({ token: null, user: null, isAuthenticated: false });
    return false;
  },
}));

// Interceptor để xử lý token hết hạn
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const store = useAuthStore.getState();
      store.clearAuth();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default useAuthStore;
