import Banner from "../components/Banner";
import DetailsProduct from "../components/DetailsProduct";
import FeaturesSection from "../components/FeaturesSection";
import NewsSection from "../components/NewsSection";
// import ProductSection from "../layout/ProductSection";
import TestimonialSection from "../layout/TestimonialSection";
import YouMayLike from "../layout/YouMayLike";

const ProductDetail = () => {
  return (
    <>
      <DetailsProduct />
      <YouMayLike />
      <Banner />
      <TestimonialSection />
      <NewsSection />
      <FeaturesSection />
    </>
  );
};

export default ProductDetail;
