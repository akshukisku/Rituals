// import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../service/validation/login.validation";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Apple, Chrome } from "lucide-react";
import { CircularProgress } from "@mui/material";
import type { LoginPayload } from "../typescript/interface/auth.interface";
import { useAppDispatch, useAppSelector } from "../hooks/useredux";
import { LoginUser } from "../store/slices/auth.slice";

const LoginLayout = () => {
  const { isLoading, isError } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginPayload>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginPayload) => {
    try {
      const response = await dispatch(LoginUser(data)).unwrap();

      console.log("Response in Login page", response);

      if (response.success) {
        toast.success(response?.message);

        // RESET FORM
        reset();

        if (response?.user?.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (error: any) {
      console.log("Error", error);
      toast.error(error?.message);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-[#f3ede4] rounded-3xl shadow-xl flex flex-col md:flex-row-reverse overflow-hidden">
        {/* LEFT SIDE */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between"
        >
          <div className="mt-6 md:mt-0">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Welcome back 👋
            </h2>
            <p className="text-sm text-gray-600 mb-6">Login to your account</p>

            {/* Inputs */}
            <div className="space-y-4">
              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full p-3 rounded-full bg-white/60 outline-none text-sm sm:text-base border border-transparent focus:border-yellow-400"
                />
                <p className="text-red-500 text-xs mt-1 min-h-[18px] transition-all duration-200">
                  {errors.email?.message || ""}
                </p>
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full p-3 rounded-full bg-white/60 outline-none text-sm sm:text-base border border-transparent focus:border-yellow-400"
                />
                <p className="text-red-500 text-xs mt-1 min-h-[18px] transition-all duration-200">
                  {errors.password?.message || ""}
                </p>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-2">
              <span className="text-xs text-gray-600 cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-6 bg-yellow-400 py-3 rounded-full font-medium hover:opacity-90 transition"
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress /> : "Login"}
            </button>
            {isError && (
              <p className="text-red-500 text-xs mt-2 text-center">{isError}</p>
            )}
            {/* Social Login */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                type="button"
                className="flex-1 border py-2 rounded-full text-sm flex items-center justify-center gap-2"
              >
                <Apple size={18} />
                Apple
              </button>

              <button
                type="button"
                className="flex-1 border py-2 rounded-full text-sm flex items-center justify-center gap-2"
              >
                <Chrome size={18} />
                Google
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-600 mt-6">
            <a href="">
              <span>
                Don’t have an account?{" "}
                <u onClick={() => navigate("/signup")}>Sign up</u>
              </span>
            </a>
            <span className="underline">Terms & Conditions</span>
          </div>
        </form>

        {/* RIGHT SIDE */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/essentails.jpg"
            alt="workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
