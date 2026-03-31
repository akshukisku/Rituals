// import React from 'react'

import CategoriesCard from "../../components/CategoriesCard"
import CategorySidebar from "../../components/CategorySidebar"
import GiftsSection from "../GiftsSection"
import { anotherCategories } from "../../service/json/rituals.data"
import PriceSecrion from "./PriceSecrion"

const Categories = () => {
  return (
    <div className="flex ">
        <CategorySidebar/>

      <div className="gift-section p-2">
        <h2 className="text-center p-3">Return Gift & Hampers</h2>
        <GiftsSection/>

        <h3 className="text-center p-4">Gift by Price Range</h3>
        <PriceSecrion/>
        <div className="category flex flex-wrap gap-5 justify-center mt-5">
          {anotherCategories.map((category) => (
            <CategoriesCard key={category.id} data={category} />
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Categories