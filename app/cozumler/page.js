import Link from "next/link";
import Image from "next/image";

export default function Cozumler() {
  const mainCategories = [
    {
      title: "Information Security",
      path: "/cozumler/bilgi-guvenligi",
      description:
        "Comprehensive information security solutions to protect and secure your corporate information assets.",
      bgImage: "/assets/bizkimiz/kariyer.jpg", // First image
      subcategories: [
        "Security Automation",
        "Security Information Event Management",
        "Security Configuration Management",
        "User Behavior Analysis",
        "Corporate Security Operations",
        "and more...",
      ],
    },
    {
      title: "Network Security",
      path: "/cozumler/ag-guvenligi",
      description:
        "Comprehensive network security solutions to protect and secure your corporate network infrastructure.",
      bgImage: "/assets/bizkimiz/kariyerbanner.jpg", // Second image
      subcategories: [
        "Network Security Management",
        "Anti Ransomware Solutions",
        "Cloud Security and Management",
        "DNS and DHCP Management",
        "Vulnerability Management",
        "and more...",
      ],
    },
    {
      title: "Content Security",
      path: "/cozumler/icerik-guvenligi",
      description:
        "Advanced content security solutions to protect and secure your corporate content and data.",
      bgImage: "/assets/bizkimiz/ourstoryBanner.jpg", // Third image
      subcategories: [
        "Cloud Access Security Agent",
        "DLP - Data Leakage Prevention",
        "Email Security",
        "Configuration Management",
        "URL/Content Filtering and Gateway",
        "Data Classification",
        "and more...",
      ],
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 min-h-[600px]">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">
        Our Security Solutions
      </h1>

      <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
        As BulutForce, we offer comprehensive and integrated security solutions
        to protect against modern cyber threats. We design tailored security
        strategies to safeguard your digital assets, meeting your specific
        needs.
      </p>

      <div className="space-y-16">
        {mainCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="flex flex-col md:flex-row">
              <div
                className="md:w-1/3 p-8 flex flex-col justify-center relative"
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${category.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Dark overlay using rgba */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.75)", // Darker overlay (0.75 opacity)
                  }}
                ></div>

                {/* Content with higher z-index to appear above the background */}
                <div className="relative z-10 text-white">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    {category.title}
                  </h2>
                  <p className="text-center">{category.description}</p>
                  <div className="mt-6 text-center">
                    <Link
                      href={category.path}
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Detailed Information
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 p-8">
                <h3 className="text-xl font-semibold mb-6 text-blue-700">
                  Solutions We Offer in{" "}
                  <span className="underline"> {category.title} </span>
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.subcategories.map((subcat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{subcat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={category.path}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center hover:cursor-pointer"
                  >
                    View All{" "}
                    <p className="font-bold mx-1 hover:!cursor-pointer">
                      {" "}
                      {category.title}{" "}
                    </p>{" "}
                    Solutions
                    <svg
                      className="w-5 h-5 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
