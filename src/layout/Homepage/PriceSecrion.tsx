// import React from 'react'

import PriceCard from "../../components/PriceCard"
import { priceRanges } from "../../service/json/rituals.data"
const PriceSecrion = () => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center p-5">
      <div className="heading-section">
        <h2 className="font-semibold text-[30px] text-[#570835]">Gift by Price Range</h2>
      </div>
       <div className="card-section flex flex-wrap gap-4 items-center justify-center">
         {priceRanges.map((price)=>(
            <PriceCard price={price} key={price.id}/>
        ))}
       </div>
    </section>
  )
}

export default PriceSecrion