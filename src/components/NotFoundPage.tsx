import Lottie from "lottie-react";
import NoFound from "../animations/NotFound.json";
// import CharacterNotFound  from "../animations/404 Error Page not Found.json"
const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      
      <div className="w-[600px] md:w-[65vw]">
        <Lottie animationData={NoFound} loop={true} />
      </div>
      
    </div>
  );
};

export default NotFoundPage;