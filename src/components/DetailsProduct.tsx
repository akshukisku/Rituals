// import React from 'react'
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import OfferCard from './OfferCard'
import { offers } from '../service/json/offer.data'
import QuantityCounter from "./QuantityCounter";
import DeliveryPart from "./DeliveryPart";

const DetailsProduct = () => {
  return (
     <section className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-10">
      {/* LEFT SIDE - IMAGE GALLERY */}
      <div className="flex-1">
        {/* Main Image */}
        <img
          src="src\assets\return_card\return_1.jpg"
          className="w-full h-80 rounded-xl object-cover"
        />

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-3 mt-3">
          <img src="src\assets\return_card\return_2.jpg" className="rounded-lg w-full" />
          <img src="src\assets\return_card\return_3.jpg" className="rounded-lg w-full" />
          <img src="src\assets\return_card\return_4.jpg" className="rounded-lg w-full" />
          <img src="src\assets\return_card\return_5.jpg" className="rounded-lg w-full" />
          <img src="src\assets\gift_images\Gift_1.jpg" className="rounded-lg w-full" />
          <img src="src\assets\gift_images\Gift_2.jpg" className="rounded-lg w-full" />
        </div>
      </div>

      {/* RIGHT SIDE - PRODUCT INFO */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-[#5a0a2a]">
            Kids Printed Tin Jar
          </h1>
          <FiHeart />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-[#5a0a2a]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="text-sm text-gray-500">4 Reviews</span>
        </div>

        {/* Product ID */}
        <p className="text-sm text-gray-500 mt-2">Product Id | 1981383</p>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-lg font-semibold">$14.00</span>
          <span className="line-through text-gray-400">$24.00</span>
        </div>

        {/* Quantity + Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <QuantityCounter />

          <button className="border border-[#5a0a2a] px-6 py-2 rounded-full">
            Add to Cart
          </button>

          <button className="bg-[#5a0a2a] text-white px-6 py-2 rounded-full">
            Buy Now
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          Minimum order quantity - 10 units/pack
        </p>

        {/* Offers */}
 <div className="flex flex-wrap gap-4 mt-6">

  {offers.map((offer, index) => (
    <OfferCard
      key={index}
      title={offer.title}
      description={offer.description}
      offers={offer.offers}
    />
  ))}

</div>

        {/* Icons */}
       <DeliveryPart />

        {/* Specification */}
        <div className="mt-8">
          <h3 className="font-semibold text-[#5a0a2a] mb-2">
            Product Specification
          </h3>

          <ul className="text-sm text-gray-600 space-y-1 list-disc ml-5">
            <li>Brighten up your storage with this Vibrant Round Tin Jar.</li>
            <li>Adorned with whimsical colours.</li>
            <li>Strong lid and durable structure.</li>
            <li>Perfect for snacks, toys, or desk items.</li>
          </ul>
        </div>

        {/* Reviews */}
        <div className="mt-8 bg-[#efe6d5] rounded-2xl p-6">
          <h3 className="text-[#5a0a2a] font-semibold text-lg">
            Customer reviews
          </h3>

          <div className="flex items-center gap-2 mt-2 text-[#5a0a2a]">
            ★ ★ ★ ★<span className="text-sm text-gray-600">4 Reviews</span>
          </div>

          {/* Rating Bars */}
          <div className="mt-6 space-y-4">
            {[5, 4, 3, 2, 1].map((star) => (
              <div className="flex items-center gap-4">
                <div className="w-24 text-[#5a0a2a] text-sm">
                  {"★".repeat(star)}
                </div>

                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#5a0a2a] w-1/2 rounded-full"></div>
                </div>

                <div className="w-20 text-sm text-gray-600">{star} Reviews</div>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full bg-[#5a0a2a] text-white py-3 rounded-full">
            Give a review
          </button>
        </div>
      </div>
    </section>
  )
}

export default DetailsProduct