export type LoginResponse = {
      success: true;
      message: string;
      user: User;
    }


export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload extends LoginPayload {
  name: string;
  role?: string;
}

export interface User extends SignupPayload {
  $id: string;
  phone:string | number
}

export interface AuthState {
  isLoading: boolean;
  isError: string | null;
  isAuthenticate: boolean;
  role: string | null;
  user: User | null;
}
