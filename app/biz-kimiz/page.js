import Image from "next/image";
import Link from "next/link";

export default function BizKimiz() {
  const categories = [
    {
      title: "Our Story",
      description:
        "Since 2012, we have specialized in cyber security and have been providing comprehensive solutions to our corporate customers.",
      path: "/biz-kimiz/hikayemiz",
      image: "/assets/anasayfa/bulutforceileriduzeydestek.jpg",
      stats: [
        "Since 2012",
        "165+ solution partners in 13 countries",
        "20+ years of professional service experience",
        "450,000 endpoint users",
      ],
    },
    {
      title: "Career",
      description:
        "Join our innovative and dynamic team. Discover career opportunities in the cyber security field and become part of our success story.",
      path: "/biz-kimiz/kariyer",
      image: "/assets/bizkimiz/kariyerBanner.jpg",
      highlights: [
        "Innovative projects",
        "Continuous development opportunities",
        "Competitive advantages",
        "Dynamic work environment",
      ],
    },
    {
      title: "News",
      description:
        "Stay updated with the latest news, events, and important developments from our company. Stay informed about our latest announcements and blog posts.",
      path: "/biz-kimiz/duyurular",
      image: "/assets/bizkimiz/kariyer.jpg",
      features: ["Latest news", "Blog posts", "Events", "Success stories"],
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 min-h-[600px]">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">
        Who We Are?
      </h1>

      <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
        As BulutForce, we are a technology company that has been specializing in
        corporate cyber security needs since 2012. We have been working to
        provide the best service to our customers since 2012.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
                style={{ filter: "brightness(0.8)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                {category.title}
              </h2>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-4">{category.description}</p>

              <ul className="space-y-2 mb-6">
                {(
                  category.stats ||
                  category.highlights ||
                  category.features
                )?.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-4 h-4 text-blue-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href={category.path}>
                <button className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition-colors duration-300">
                  More Information
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
