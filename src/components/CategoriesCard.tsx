// import React from 'react'

import type { CategoryCardProps } from "../type/interface/rituals.interface";

const CategoriesCard = ({ data }: CategoryCardProps) => {
  return (
    <div className="w-[220px] rounded-3xl bg-[#6b0f3a] px-2 py-2 cursor-pointer group transition-all duration-300">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-[300px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <div className="flex justify-center items-center px-6 py-2 ">
        <h3 className="text-white text-sm font-medium text-center">
          {data.title}
        </h3>
      </div>
    </div>
  );
};

export default CategoriesCard;
