"use client";
import { useState } from "react";
import useAuthStore from "@/stores/auth";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

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
interface LoginResponse {
  token: string;
  user: TUser;
}

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { setAuth } = useAuthStore();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await api.post<LoginResponse>("/login", {
        username: username,
        password: password,
      });
      console.log(response.data);
      const { token, user } = response.data;
      if (token) {
        setAuth(token, user);
        router.push("/hr");
      } else {
        setError("Login failed: No token received");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="border p-2 rounded w-full mb-4"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
}
