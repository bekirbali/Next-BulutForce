import Link from "next/link";

export default function IcerikGuvenligi() {
  const subcategories = [
    {
      title: "Cloud Access Security Agent",
      path: "/cozumler/icerik-guvenligi/bulut-erisimi-guvenlik-aracisi",
      description: "Secure management of access to cloud services",
    },
    {
      title: "DLP - Data Leakage Prevention",
      path: "/cozumler/icerik-guvenligi/dlp-veri-sizintisi-onleme",
      description: "Solutions to prevent the leakage of sensitive data",
    },
    {
      title: "Email Security",
      path: "/cozumler/icerik-guvenligi/eposta-guvenligi",
      description: "Solutions to ensure the security of email communication",
    },
    {
      title: "Configuration Management",
      path: "/cozumler/icerik-guvenligi/konfigurasyonyonetimi",
      description: "Secure management of system and application configurations",
    },
    {
      title: "URL/Content Filtering and Gateway",
      path: "/cozumler/icerik-guvenligi/url-icerik-filtreleme-ve-gecit",
      description: "Web content filtering and secure internet access solutions",
    },
    {
      title: "Data Classification",
      path: "/cozumler/icerik-guvenligi/veri-siniflandirma",
      description: "Classification and management of corporate data",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 min-h-[500px]">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Our Content Security Solutions
      </h1>

      <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
        We offer advanced content security solutions to protect and secure your
        corporate content and data.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subcategories.map((subcategory, index) => (
          <Link
            href={subcategory.path}
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-xl border border-gray-100"
          >
            <h2 className="text-xl font-semibold mb-3 text-blue-700">
              {subcategory.title}
            </h2>
            <p className="text-gray-600">{subcategory.description}</p>
            <div className="mt-4 text-blue-600 font-medium">
              More information
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
