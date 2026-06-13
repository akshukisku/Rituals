// import React from 'react'

import Banner from "../components/Banner"
import CardLayout from "../layout/CardLayout"
// import YouMayLike from "../layout/YouMayLike"
import Stores from "../components/Stores"

const Cart = () => {
  return (
    <div className="w-full">
    <CardLayout/>
    <Banner />
    <Stores/>
    </div>
  )
}

export default Cart