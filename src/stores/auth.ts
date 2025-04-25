import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

interface TUser {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar: string;
  department_id: number;
  created_at: string;
  updated_at: string;
}

interface AuthState {
  token: string | null;
  user: TUser | null;
  setAuth: (token: string, user: TUser) => void;
  clearAuth: () => void;
  checkAuth: () => Promise<boolean>;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  setAuth: (token: string, user: TUser) => {
    Cookies.set("token", token, { expires: 7 });
    Cookies.set("user", JSON.stringify(user), { expires: 7 }); // Lưu user vào cookies
    set({ token, user });
  },
  clearAuth: () => {
    Cookies.remove("token");
    Cookies.remove("user");
    set({ token: null, user: null });
  },
  checkAuth: async () => {
    const token = Cookies.get("token");
    const userStr = Cookies.get("user");
    let user: TUser | null = null;

    // Khôi phục user từ cookies nếu có
    if (userStr) {
      try {
        user = JSON.parse(userStr);
        console.log("Parsed user from cookies:", user); // Debug
      } catch (err) {
        console.error("Failed to parse user from cookies:", err);
        Cookies.remove("user");
      }
    }

    if (token) {
      try {
        await axios.get("http://localhost:8000/api/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        set({ token, user }); // Khôi phục token và user
        console.log("checkAuth success:", { token, user }); // Debug
        return true;
      } catch (err) {
        console.error("checkAuth failed:", err); // Debug
        Cookies.remove("token");
        Cookies.remove("user");
        set({ token: null, user: null });
        return false;
      }
    }

    set({ token: null, user: null });
    return false;
  },
}));

export default useAuthStore;
