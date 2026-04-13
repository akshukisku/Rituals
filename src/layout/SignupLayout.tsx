const SignupLayout = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      
      {/* Main Card */}
      <div className="w-full max-w-6xl bg-[#f3ede4] rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT SIDE (FORM) */}
        <form className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between">

          {/* Form Content */}
          <div className="mt-6 md:mt-0">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Create an account
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Sign up and get 30 day free trial
            </p>

            <div className="space-y-4">
              <input
                placeholder="Full name"
                className="w-full p-3 rounded-full bg-white/60 outline-none text-sm sm:text-base"
              />
              <input
                placeholder="Email"
                className="w-full p-3 rounded-full bg-white/60 outline-none text-sm sm:text-base"
              />
              <input
                placeholder="Password"
                type="password"
                className="w-full p-3 rounded-full bg-white/60 outline-none text-sm sm:text-base"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-6 bg-yellow-400 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Submit
            </button>

            {/* Social */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                type="button"
                className="flex-1 border py-2 rounded-full text-sm"
              >
                 Apple
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
            <span>
              Have any account? <u>Sign in</u>
            </span>
            <span className="underline">Terms & Conditions</span>
          </div>
        </form>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="hidden md:block md:w-1/2 relative">
          
          <img
            src="/topmobilebanner.jpg"
            alt="team"
            className="w-full h-full object-cover"
          />

          {/* Floating Card Top */}
          <div className="absolute top-6 left-6 bg-yellow-300 px-4 py-2 rounded-xl shadow text-xs">
            <p className="font-medium">Task Review With Team</p>
            <p className="text-[10px]">09:30am - 10:00am</p>
          </div>

          {/* Floating Card Bottom */}
          <div className="absolute bottom-6 left-[380px] bg-white p-4 rounded-xl shadow w-[180px] text-xs">
            <p className="font-medium">Daily Meeting</p>
            <p className="text-gray-500">
              12:00pm - 01:00pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;