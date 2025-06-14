import Link from "next/link";

export default function AgGuvenligi() {
  const subcategories = [
    {
      title: "Network Security Management",
      path: "/cozumler/ag-guvenligi/ag-guvenligi-yonetimi",
      description: "Management and monitoring of network infrastructure",
    },
    {
      title: "Anti Ransomware Solutions",
      path: "/cozumler/ag-guvenligi/anti-ransomware-cozumleri",
      description: "Protection and prevention solutions against ransomware",
    },
    {
      title: "Cloud Security and Management",
      path: "/cozumler/ag-guvenligi/bulut-guvenligi-ve-yonetimi",
      description: "Management and security of cloud infrastructure",
    },
    {
      title: "DNS and DHCP Management",
      path: "/cozumler/ag-guvenligi/dns-ve-dhcp-yonetimi",
      description: "Secure management of DNS and DHCP services",
    },
    {
      title: "Vulnerability Management",
      path: "/cozumler/ag-guvenligi/guvenlik-acigi-yonetimi",
      description: "Detection and management of security vulnerabilities",
    },
    {
      title: "Firewall and IPS/IDS",
      path: "/cozumler/ag-guvenligi/guvenlik-duvari-ve-ips-ids",
      description:
        "Advanced security firewall and attack detection/prevention systems",
    },
    {
      title: "Malicious Software Analysis and Detection",
      path: "/cozumler/ag-guvenligi/kotu-amacli-yazilim-analizi-ve-algilama",
      description: "Detection and analysis of malicious software",
    },
    {
      title: "Endpoint Security Management",
      path: "/cozumler/ag-guvenligi/uc-nokta-guvenlik-yonetimi",
      description: "Management of endpoint security",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Our Network Security Solutions
      </h1>

      <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
        We offer comprehensive network security solutions to protect and secure
        your corporate network infrastructure.
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
