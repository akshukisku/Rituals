import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  AuthState,
  LoginPayload,
  SignupPayload,
} from "../../typescript/interface/auth.interface";
import {
  LoginUserFns,
  RegisterUserFns,
} from "../../api/function/auth.function";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { account } from "../../lib/appwrite.config";

const user = Cookies.get("user")
  ? JSON.parse(Cookies.get("user") as string)
  : null;
const token = Cookies.get("token");
const role = Cookies.get("role") ?? null;
const initialState: AuthState = {
  isLoading: false,
  isError: null,
  user: user,
  isAuthenticate: !!token,
  role: role,
};

console.log("user Details", user);

export const RegisterUser = createAsyncThunk(
  "auth/register",
  async (data: SignupPayload, { rejectWithValue }) => {
    try {
      const response = await RegisterUserFns(data);
      console.log("Auth Response in Slice", response);
      return {
        success: true,
        message: "Register Successfully",
        data: response,
      };
    } catch {
      return rejectWithValue({
        success: false,
        message: "Failed To Register",
      });
    }
  },
);

export const LoginUser = createAsyncThunk<
  any, // responsetype -
  LoginPayload, // payloadTYpe
  { rejectValue: string }
>("auth/login", async (data: LoginPayload, { rejectWithValue }) => {
  console.log("data comming in authslice", data);
  try {
    const response = await LoginUserFns(data);
    console.log("response in auth slice", response);
    return response;
  } catch {
    const err = {
      success: false,
      message: "Failed to Login",
    };
    return rejectWithValue(err.message);
  }
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout:(state)=>{
     account.deleteSession("current");
      Cookies.remove("user");
      Cookies.remove("token");
      Cookies.remove("role");
      state.role=null;
      state.isAuthenticate=false;
      state.user=null;
      toast.success("Logout Succesfully");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(RegisterUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
         .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        console.log("login action fullfilled", action.payload);
        state.isAuthenticate = true;
        state.user = action.payload.user;
        state.role = action.payload.user.role;
        Cookies.set("user", JSON.stringify(action.payload.user));
        Cookies.set("role", action.payload.user.role);
        Cookies.set("token", "true");
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError =action.payload as string
      });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
