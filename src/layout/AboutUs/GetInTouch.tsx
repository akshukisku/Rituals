// import React from 'react'

const GetInTouch = () => {
  return (
    <section className="bg-[#ded6c8] py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-900 mb-3">
            Get In Touch
          </h2>

          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            At Rituals, we redefine gifting in India with an extensive range of
            5,000+ gifts crafted for retail and bulk needs. From premium and
            utility gifts to return and corporate gifting, each product is
            designed to elevate every occasion with quality and elegance.
          </p>

          <h3 className="font-semibold text-purple-900 mb-2">Maps</h3>

          <iframe
            src="https://www.google.com/maps?q=Kolkata&output=embed"
            className="rounded-xl border-4 border-blue-400 w-full max-w-md h-64"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="bg-white/60 rounded-full px-5 py-3 outline-none"
          />

          <input
            type="email"
            placeholder="Type your mail id"
            className="bg-white/60 rounded-full px-5 py-3 outline-none"
          />

          <textarea
            placeholder="Write your queries"
            rows={4}
            className="bg-white/60 rounded-xl px-5 py-3 outline-none"
          />

          <button
            type="submit"
            className="bg-purple-900 text-white px-6 py-2 rounded-full w-fit hover:bg-purple-800 transition"
          >
            Get Call Back
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
