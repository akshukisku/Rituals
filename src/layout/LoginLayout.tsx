// import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../service/validation/login.validation";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import { toast } from "sonner";
import api from "../lib/AxiosInstance";
import { EndPoints } from "../service/helper/EndPoint";
import { CircularProgress } from "@mui/material";

const LoginLayout = () => {

  const [isLoading,setisLoading]=useState(false);

  const [error,setError]=useState(null);



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async(data: any) => {
      setisLoading(true);
    try {
      const response = await api.post(`${EndPoints.auth.login}`, data);
      //  console.log(data);
      console.log("response login---", response);
      if (response.status === 200) {
        toast.success(response.data.message);
        // localStorage.setItem("token", response.data.accessToken);
        // localStorage.setItem("role", response.data.user.role);
        // localStorage.setItem("userDetails", JSON.stringify(response.data.user));
        if (response.data.user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }

        reset();
        setError(null);
      }
    } catch (error: any) {
      console.log(error.response);
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      setisLoading(false);
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
            <p className="text-sm text-gray-600 mb-6">
              Login to your account
            </p>

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
disabled={isLoading}>
              {isLoading ? <CircularProgress/>:"Login"}
            </button>
            {error && (
  <p className="text-red-500 text-xs mt-2 text-center">
    {error}
  </p>
)}
            {/* Social Login */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button type="button" className="flex-1 border py-2 rounded-full text-sm">
                 Apple
              </button>
              <button type="button" className="flex-1 border py-2 rounded-full text-sm">
                Google
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-600 mt-6">
         <a href="">
             <span>
              Don’t have an account? <u onClick={()=>navigate("/signup")}>Sign up</u>
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