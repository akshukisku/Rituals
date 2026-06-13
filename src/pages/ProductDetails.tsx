import Banner from "../components/Banner";
import DetailsProduct from "../components/DetailsProduct";
import FeaturesSection from "../components/FeaturesSection";
import NewsSection from "../components/NewsSection";
// import ProductSection from "../layout/ProductSection";
import TestimonialSection from "../layout/TestimonialSection";

const ProductDetail = () => {
  return (
    <>
      <DetailsProduct />
      <Banner />
      <TestimonialSection />
      <NewsSection />
      <FeaturesSection />
    </>
  );
};

export default ProductDetail;
