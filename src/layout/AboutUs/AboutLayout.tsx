// import React from 'react'
import { Package, User } from "lucide-react";

const AboutLayout = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10 items-start">

  {/* Left Content */}
  <div className="md:w-1/2">
    <h2 className="text-xl font-semibold text-[#5a0a2a] mb-4 font-">
      Who are we
    </h2>

    <p className="text-gray-600 leading-relaxed">
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over 2000 years old. Richard McClintock, a Latin professor
      at Hampden-Sydney College in Virginia, looked up one of the more
      obscure Latin words, consectetur, from a Lorem Ipsum passage.
    </p>
  </div>

  {/* Right Cards */}
  <div className="md:w-1/2 grid grid-cols-2 gap-6">

    {/* Card 1 */}
    <div className="flex flex-col items-center justify-center bg-[#F9F6C1] rounded-xl p-6 text-center shadow-md">
      <Package size={32} className="text-purple-900 mb-2" />
      <h3 className="font-bold text-purple-900 text-lg">2000+</h3>
      <p className="text-sm text-purple-900">Product Delivered</p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center justify-center bg-[#F9F6C1] rounded-xl p-6 text-center shadow-md">
      <User size={32} className="text-purple-900 mb-2" />
      <h3 className="font-bold text-purple-900 text-lg">3000+</h3>
      <p className="text-sm text-purple-900">Customer Reviews</p>
    </div>

  </div>

</section>
  )
}

export default AboutLayout