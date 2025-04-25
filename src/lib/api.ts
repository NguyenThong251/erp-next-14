import axios, { AxiosInstance } from "axios";
import useAuthStore from "@/stores/auth";
import Cookies from "js-cookie";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token || Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
