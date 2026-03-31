import CategoriesCard from "../components/CategoriesCard";
import { Categoriescards } from "../service/json/rituals.data";
const CategoriesSection = () => {
  return (
    <section className="p-5 categories-section">
      <h2 className="text-xl font-bold text-center p-6">
        Featured Categories
      </h2>
      <div className="cards-section flex gap-5 flex-wrap md:justify-center">
        {Categoriescards.slice(0, 4).map((card) => (
          <CategoriesCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;