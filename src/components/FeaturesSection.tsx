import { FiTag, FiStar, FiPackage } from "react-icons/fi";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiTag size={28} />,
      title: "100% Branded Product",
    },
    {
      icon: <FiStar size={28} />,
      title: "100% Original Product",
    },
    {
      icon: <FiPackage size={28} />,
      title: "Free Shipping",
    },
  ];

  return (
    <section className="py-10 px-4">

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between gap-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center text-[#5a0a2a] text-center
              w-full
              sm:w-[45%]
              md:w-[30%]
            "
          >
            <div className="mb-3">
              {feature.icon}
            </div>

            <p className="text-sm font-medium">
              {feature.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default FeaturesSection;