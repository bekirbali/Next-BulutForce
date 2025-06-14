import Link from "next/link";

export default function BilgiGuvenligi() {
  const subcategories = [
    {
      title: "Security Automation",
      path: "/cozumler/bilgi-guvenligi/guvenlik-otomasyonu",
      description: "Automation of security processes and management",
    },
    {
      title: "Security Information Event Management and Correlation System",
      path: "/cozumler/bilgi-guvenligi/guvenlik-bilgi-olay-yonetimi-ve-korelasyon-sistemi",
      description: "Tracking, analysis and management of security events",
    },
    {
      title: "Security Configuration Management and Compliance",
      path: "/cozumler/bilgi-guvenligi/guvenlik-yapilandirilmasi-ve-uyumluluk",
      description: "Configuration of systems according to security standards",
    },
    {
      title: "User Behavior Analysis",
      path: "/cozumler/bilgi-guvenligi/kullanici-davranisi-ve-analizi",
      description: "Tracking and analysis of user behavior",
    },
    {
      title: "Corporate Security Operations",
      path: "/cozumler/bilgi-guvenligi/kurumsal-guvenlik-operasyonu",
      description: "Management of security operations at the corporate level",
    },
    {
      title: "Cyber Risk Scoring",
      path: "/cozumler/bilgi-guvenligi/siber-risk-puanlamasi",
      description: "Evaluation and scoring of cyber risks",
    },
    {
      title: "Data Encryption and Device Encryption",
      path: "/cozumler/bilgi-guvenligi/veri-sifreleme-ve-cihaz-sifreleme",
      description: "Encryption of data and devices in a secure manner",
    },
    {
      title: "Application Security",
      path: "/cozumler/bilgi-guvenligi/uygulama-guvenligi",
      description: "Ensuring the security of software applications",
    },
    {
      title: "Threat Hunting with Artificial Intelligence",
      path: "/cozumler/bilgi-guvenligi/yapay-zeka-ile-tehdit-avi",
      description:
        "Detection of threats using artificial intelligence technologies",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Our Information Security Solutions
      </h1>

      <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
        We offer comprehensive information security solutions to protect and
        secure your corporate information assets.
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
