// import React from 'react'
import Homehero from './Homehero'
import Categories from '../CategoriesSection'
import PriceSecrion from './PriceSecrion'
import ProductSection from './ProductSection'
import ReturnGift from './ReturnGift'
import ComboBundles from './ComboBundles'
import SectionDivide from './SectionDivide'
import PaintingSection from './PaintingSection'
import WeddingStats from './WeddingStats'
import Stores from '../../components/Stores'
import TeamSection from '../TeamSection'
import Banner from '../../components/Banner'

const Homepage = () => {
  return (
  <div className='container'>
  <Homehero/>
  <Categories/>
  <SectionDivide/>
  <ProductSection/>
  <ReturnGift/>
  <ComboBundles/>
  <SectionDivide/>
  <PriceSecrion/>
  <PaintingSection/>
  <WeddingStats/>
  <Stores/>
  <Banner/>
  <TeamSection/>
  </div>
  )
}

export default Homepage