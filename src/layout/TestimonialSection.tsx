
import { testimonials } from "../service/json/testimonial.data";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <section className="py-12 px-4">

      <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-center">

        {testimonials.map((item) => (
          <TestimonialCard
            key={item.id}
            name={item.name}
            role={item.role}
            image={item.image}
            message={item.message}
          />
        ))}

      </div>

    </section>
  );
};

export default TestimonialSection;