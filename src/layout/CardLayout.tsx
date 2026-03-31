// import React from 'react'

import CartItem from "../components/CardItem"
import CartSummary from "../components/CardSummary"
import SpecialInstruction from "../components/SpecialInstruction"

const CardLayout = () => {
  return (
        <section className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-semibold text-[#5a0a2a] mb-6">
        Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Cart Items */}
        <div className="flex-1 flex flex-col gap-4">

          <CartItem
            image="src/assets/gift_images/Gift_1.jpg"
            name="Kids Printed Tin Jar"
            price={14}
            oldPrice={24}
            productId="1981383"
          />

          <CartItem
            image="src/assets/gift_images/Gift_2.jpg"
            name="Favor Bags"
            price={14}
            oldPrice={24}
            productId="9548840"
          />

        </div>

        {/* Summary */}
        <div className="w-full lg:w-[320px] flex flex-col gap-6">
          <CartSummary />
          <SpecialInstruction />
        </div>

      </div>

    </section>
  )
}

export default CardLayout