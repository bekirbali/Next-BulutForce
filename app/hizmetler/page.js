import Link from "next/link";

export default function Hizmetler() {
  const services = [
    {
      title: "Installation and Professional Services",
      description:
        "Professional services for the installation and configuration of security solutions.",
      path: "/hizmetler/installation-professional-services",
    },
    {
      title: "Advanced Support",
      description:
        "Advanced support and intervention services for critical systems to ensure uninterrupted operation.",
      path: "/hizmetler/advanced-support",
    },
    {
      title: "Support Plans",
      description:
        "Customized support plans tailored to your needs at different levels.",
      path: "/hizmetler/support-plans",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 min-h-[500px]">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">
        Our Services
      </h1>

      <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
        As BulutForce, we offer comprehensive and professional services to meet
        your corporate cyber security needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link
              href={service.path}
              className="text-blue-500 hover:text-blue-700 inline-flex items-center"
            >
              More information
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
