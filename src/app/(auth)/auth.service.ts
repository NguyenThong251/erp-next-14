import api from "@/lib/api";
import { TUser } from "@/types";

interface LoginResponse {
  token: string;
  user: TUser;
}

export const authService = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/login", {
      username,
      password,
    });
    return response.data;
  },
  register: async (name: string, username: string, password: string) => {
    const response = await api.post("/register", {
      name,
      username,
      password,
    });
    return response.data;
  },
};