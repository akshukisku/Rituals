// import React from 'react'
import Homehero from "../layout/Homepage/Homehero";
import PriceSecrion from "../layout/Homepage/PriceSecrion";
import ProductSection from "../layout/Homepage/ProductSection";
import ReturnGift from "../layout/Homepage/ReturnGift";
import ComboBundles from "../layout/Homepage/ComboBundles";
import SectionDivide from "../layout/Homepage/SectionDivide";
import PaintingSection from "../layout/Homepage/PaintingSection";
import WeddingStats from "../layout/Homepage/WeddingStats";
import Stores from "../components/Stores";
import TeamSection from "../layout/TeamSection";
import Banner from "../components/Banner";
import CategoriesSection from "../layout/Homepage/CategoriesSection";

const Homepage = () => {
  return (
    <div className="w-full">
      <Homehero />
      <CategoriesSection />
      <SectionDivide />
      <ProductSection />
      <ReturnGift />
      <ComboBundles />
      <SectionDivide />
      <PriceSecrion />
      <PaintingSection />
      <WeddingStats />
      <Stores />
      <Banner />
      <TeamSection />
    </div>
  );
};

export default Homepage;
