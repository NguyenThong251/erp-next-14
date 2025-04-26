export  interface TUser {
    id: number;
    name: string;
    username: string;
    email: string;
    avatar: string;
    department_id: number;
    created_at: string;
    updated_at: string;
  }
  export interface LoginResponse {
    token: string;
    user: TUser;
  }