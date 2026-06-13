
const blogs = [
  {
    id: 1,
    title: "Top 10 Fashion Trends in 2026",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    description:
      "Discover the latest fashion trends that are dominating this year.",
    date: "12 Jun 2026",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Running Shoes",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description:
      "A complete guide to selecting comfortable and durable running shoes.",
    date: "10 Jun 2026",
  },
  {
    id: 3,
    title: "Best Gadgets You Should Buy This Year",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description:
      "Explore the latest gadgets and smart devices worth buying.",
    date: "08 Jun 2026",
  },
  {
    id: 4,
    title: "Skincare Routine for Healthy Skin",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    description:
      "Simple skincare tips for glowing and healthy skin.",
    date: "05 Jun 2026",
  },
  {
    id: 5,
    title: "Home Decor Ideas for Small Apartments",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    description:
      "Creative ways to decorate your home without spending a fortune.",
    date: "02 Jun 2026",
  },
  {
    id: 6,
    title: "Must-Have Accessories for Every Outfit",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    description:
      "Accessories that instantly elevate your style.",
    date: "01 Jun 2026",
  },
];

const Blog = () => {

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Our Blog
          </h1>

          <p className="mt-4 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips,
            product guides, and shopping insights.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className=" rounded-2xl overflow-hidden">
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="w-full h-[250px] md:h-[500px] object-cover"
          />

          <div className="p-6">
            <span className="text-sm border px-3 py-1 rounded-full">
              Featured
            </span>

            <h2 className="text-2xl md:text-4xl font-bold mt-4">
              {blogs[0].title}
            </h2>

            <p className="mt-4">
              {blogs[0].description}
            </p>

            <button className="mt-6 border px-5 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="border rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm border px-3 py-1 rounded-full">
                    {blog.category}
                  </span>

                  <span className="text-sm">
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {blog.title}
                </h3>

                <p className="text-sm mb-4">
                  {blog.description}
                </p>

                <button className="border px-4 py-2 rounded-lg">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className=" py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">
            Subscribe to Our Newsletter
          </h2>

          <p className="mt-3">
            Get the latest articles, offers, and updates directly
            in your inbox.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border rounded-lg px-4 py-3"
            />

            <button className="border px-6 py-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;