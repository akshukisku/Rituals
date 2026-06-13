// import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Package,
  RotateCcw,
  Truck,
  MessageSquare,
} from "lucide-react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Orders are typically delivered within 3-7 business days.",
  },
  {
    question: "Can I return a product?",
    answer: "Yes, returns are accepted within 7 days of delivery.",
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order from the Orders section in your account.",
  },
];

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className=" py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Have questions about your order, returns, shipping, or products?
            We're here to help.
          </p>
        </div>
      </section>

      {/* Help Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Package className="mx-auto mb-3" />
            <h3 className="font-semibold">Order Issues</h3>
            <p className="text-sm text-gray-500 mt-2">
              Get support for order-related problems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <RotateCcw className="mx-auto mb-3" />
            <h3 className="font-semibold">Returns</h3>
            <p className="text-sm text-gray-500 mt-2">
              Easy returns and refund assistance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Truck className="mx-auto mb-3" />
            <h3 className="font-semibold">Shipping</h3>
            <p className="text-sm text-gray-500 mt-2">
              Shipping and delivery information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <MessageSquare className="mx-auto mb-3" />
            <h3 className="font-semibold">Product Help</h3>
            <p className="text-sm text-gray-500 mt-2">
              Questions about products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-lg px-4 py-3 w-full"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border rounded-lg px-4 py-3 w-full"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="border rounded-lg px-4 py-3 w-full"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="border rounded-lg px-4 py-3 w-full"
              />

              <button
                type="submit"
                className=" px-8 py-3 rounded-lg hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Mail />
                  <span>support@yourstore.com</span>
                </div>

                <div className="flex gap-3">
                  <Phone />
                  <span>+91 98765 43210</span>
                </div>

                <div className="flex gap-3">
                  <MapPin />
                  <span>123 Commerce Street, New Delhi, India</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl mb-4">Business Hours</h3>

              <div className="space-y-2 flex flex-col">
                <span>Monday - Friday: 9 AM - 6 PM</span>
                <span>Saturday: 10 AM - 4 PM</span>
                <span>Sunday: Closed</span>
              </div>

              <Clock className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white p-5 rounded-xl shadow-sm">
              <summary className="font-semibold cursor-pointer">
                {faq.question}
              </summary>

              <p className="mt-3 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Google Map */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <iframe
            title="location"
            src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[300px] md:h-[450px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-black text-white py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-5">Follow Us</h2>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
