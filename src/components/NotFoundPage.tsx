import Lottie from "lottie-react";
import NoFound from "../animations/NotFound.json";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <Lottie animationData={NoFound} loop />
      </div>
    </div>
  );
};

export default NotFoundPage;