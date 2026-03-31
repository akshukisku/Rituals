import { MdPayment } from "react-icons/md";
import { FaUndoAlt } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";


const DeliveryPart = () => {
  return (
      <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600">

      <div className="flex items-center gap-2">
        <MdPayment className="text-lg text-purple-600" />
        <span>Pay on Delivery</span>
      </div>

      <div className="flex items-center gap-2">
        <FaUndoAlt className="text-lg text-purple-600" />
        <span>10 day return</span>
      </div>

      <div className="flex items-center gap-2">
        <BsShieldCheck className="text-lg text-purple-600" />
        <span>Trusted Delivery</span>
      </div>

      <div className="flex items-center gap-2">
        <FaTruckFast className="text-lg text-purple-600" />
        <span>Free Delivery</span>
      </div>

    </div>
  )
}

export default DeliveryPart