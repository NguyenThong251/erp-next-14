export  interface TUser {
    name: string;
    username: string;
    email: string;
    avatar: string;
  }
  export interface LoginResponse {
    token: string;
    user: TUser;
  }