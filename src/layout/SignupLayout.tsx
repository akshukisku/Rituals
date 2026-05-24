// import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../service/validation/signup.validation";
import { useNavigate } from "react-router-dom";
import type { SignupPayload } from "../typescript/interface/auth.interface";
import { useAppDispatch, useAppSelector } from "../hooks/useredux";
import { CircularProgress } from "@mui/material";
import { RegisterUser } from "../store/slices/auth.slice";
import { toast } from "sonner";

const SignupLayout = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { isLoading, isError } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupPayload>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignupPayload) => {
    try {
      const response = await dispatch(RegisterUser(data)).unwrap();
      console.log("Response in Singup Page", response);
      if (response.success) {
        toast.success(response?.message);
        if (response?.data) {
          navigate("/login");
        }
      } else {
        toast.error(response?.message);
      }
    } catch (error: any) {
      console.log("Error", error);
      toast.error(error?.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-[#f3ede4] rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* LEFT SIDE */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between"
        >
          <div className="mt-6 md:mt-0">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Create an account
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Sign up and get 30 day free trial
            </p>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <input
                  placeholder="Full name"
                  {...register("name")}
                  className="w-full p-3 rounded-full bg-white/60 outline-none text-sm sm:text-base border border-transparent focus:border-yellow-400"
                />
                <p className="text-red-500 text-xs mt-1 min-h-[18px] transition-all duration-200">
                  {errors.name?.message || ""}
                </p>
              </div>

              {/* Email */}
              <div>
                <input
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
            <button
              type="submit"
              className="w-full mt-6 bg-yellow-400 py-3 rounded-full font-medium hover:opacity-90 transition"
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress /> : "Signup"}
            </button>

            {isError && (
              <p className="text-red-500 text-sm text-center mt-3">{isError}</p>
            )}

            {/* Social */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                type="button"
                className="flex-1 border py-2 rounded-full text-sm"
              >
                Apple
              </button>
              <button
                type="button"
                className="flex-1 border py-2 rounded-full text-sm"
              >
                Google
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-600 mt-6">
            <a href="">
              <span>
                Have an account?{" "}
                <u onClick={() => navigate("/login")}>Sign in</u>
              </span>
            </a>
            <span className="underline">Terms & Conditions</span>
          </div>
        </form>

        {/* RIGHT SIDE */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/topmobilebanner.jpg"
            alt="team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;
