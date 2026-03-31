import { AiFillApple } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="w-full bg-[#efe8b9] rounded-xl 
    flex flex-col md:flex-row 
    items-center justify-between 
    gap-6 md:gap-10 
    px-6 md:px-8 py-6">

      {/* QR Section */}
      <div className="flex flex-col items-center">

        <div className="w-[90px] h-[120px] border-4 border-[#5a0a2a] rounded-lg flex flex-col items-center justify-center bg-white">

          <img
            src="/QR_code.png"
            alt="qr_code"
            className="w-14 h-14 object-contain"
          />

          <p className="text-[#5a0a2a] font-semibold mt-2 text-sm">
            Scan Me
          </p>

        </div>

      </div>

      {/* Content */}
      <div className="text-center md:text-center max-w-md " >

        <h3 className="text-[#5a0a2a] font-semibold text-2xl">
          Stay ahead of the deals!
        </h3>

        <p className="text-lg text-gray-700 mt-5">
          Experience shopping made easy – grab our app for deals,
          speed and convenience.
        </p>

      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center md:items-end gap-3">

        <div className="flex gap-3">

          <button className="w-10 h-10 bg-[#5a0a2a] text-white rounded-full flex items-center justify-center">
            <FiDownload size={18} />
          </button>

          <button className="w-10 h-10 bg-[#5a0a2a] text-white rounded-full flex items-center justify-center">
            <AiFillApple size={18} />
          </button>

        </div>

        <button className="bg-[#5a0a2a] text-white text-xs px-4 py-1 rounded-full">
          Download now
        </button>

      </div>

    </div>
  );
};

export default Banner;