import { GoChevronUp } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-[#e9e1d6] text-[#5a0a2a] relative overflow-hidden px-4 sm:px-6 lg:px-9">

      <div className="container">

        {/* TOP SECTION */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {/* Description */}
          <div className="lg:col-span-2 max-w-[460px] leading-relaxed">
            <p className="text-base sm:text-lg font-semibold">
              At Rituals, we redefine gifting in India with an extensive range
              of 5,000+ gifts crafted for retail and bulk needs. From premium
              utility gifts to return and corporate gifting, each product is
              designed to elevate every occasion with quality and elegance.
            </p>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Details</h3>
            <ul className="space-y-2 text-sm">
              {["About Us", "FAQ's", "Blogs"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="font-medium hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              {["support@rituals.com", "+91 948403302114"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="font-medium hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Policy</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Return & Refunds",
                "Shipping",
                "Terms of Service",
                "Refund Policy",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="font-medium hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
           {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              {["Track your Order","Register on Rituals","Order History"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="font-medium hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* BIG RITUALS TEXT + BOTTOM */}
      <div className="container flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 pb-8">

        {/* Big Text */}
        <div className="flex items-center gap-4">

          <h2 className="text-[70px] sm:text-[100px] md:text-[140px] lg:text-[200px] font-bold leading-none">
            Rituals
          </h2>

          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#e7dfb8] rounded-full border-2 border-[#6a1236]">
            <span className="text-[#6a1236] text-xl sm:text-2xl font-semibold">
              R
            </span>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">

          <p className="text-center sm:text-left">
            2026 Rituals. All rights reserved by ari
          </p>

          <ul className="flex gap-6">
            {["Facebook", "Instagram", "Behance", "Dribble"].map(
              (item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>

        </div>

      </div>

      {/* Scroll To Top */}
      <button className="absolute right-4 sm:right-10 bottom-60 sm:bottom-20 w-10 h-10 border border-[#5a0a2a] rounded-full flex items-center justify-center hover:bg-[#5a0a2a] hover:text-white transition">
        <GoChevronUp size={22} />
      </button>

    </footer>
  );
};

export default Footer;