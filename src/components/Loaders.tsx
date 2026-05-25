import Lottie from "lottie-react";
import Loading from "../animations/Loading.json";
// import LoadingText from "../animations/loading_text.json"

const Loaders = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/40">
      <div className="w-28 h-28">
        <Lottie animationData={Loading} loop={true} />
      </div>
    </div>
  );
};

export default Loaders;