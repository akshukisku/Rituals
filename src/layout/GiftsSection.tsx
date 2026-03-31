// import React from 'react'
import { gifts } from '../service/json/rituals.data'
import GiftCard from '../components/GiftCard'

const GiftsSection = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      {gifts.slice(0,8).map((gift)=>(
        <GiftCard key={gift.id} gift={gift}/>
      ))}
    </div>
  )
}

export default GiftsSection