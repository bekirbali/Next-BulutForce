import Link from "next/link";

export default function BilgiGuvenligi() {
  const subcategories = [
    {
      title: "Güvenlik Otomasyonu",
      path: "/cozumler/bilgi-guvenligi/guvenlik-otomasyonu",
      description: "Güvenlik süreçlerinin otomatikleştirilmesi ve yönetimi",
    },
    {
      title: "Güvenlik Bilgi Olay Yönetimi ve Korelasyon Sistemi",
      path: "/cozumler/bilgi-guvenligi/guvenlik-bilgi-olay-yonetimi-ve-korelasyon-sistemi",
      description: "Güvenlik olaylarının izlenmesi, analizi ve yönetimi",
    },
    {
      title: "Güvenlik Yapılandırılması ve Uyumluluk",
      path: "/cozumler/bilgi-guvenligi/guvenlik-yapilandirilmasi-ve-uyumluluk",
      description: "Sistemlerin güvenlik standartlarına uygun yapılandırılması",
    },
    {
      title: "Kullanıcı Davranışı ve Analizi",
      path: "/cozumler/bilgi-guvenligi/kullanici-davranisi-ve-analizi",
      description: "Kullanıcı davranışlarının izlenmesi ve analizi",
    },
    {
      title: "Kurumsal Güvenlik Operasyonu",
      path: "/cozumler/bilgi-guvenligi/kurumsal-guvenlik-operasyonu",
      description: "Kurumsal düzeyde güvenlik operasyonlarının yönetimi",
    },
    {
      title: "Siber Risk Puanlaması",
      path: "/cozumler/bilgi-guvenligi/siber-risk-puanlamasi",
      description: "Siber risklerin değerlendirilmesi ve puanlanması",
    },
    {
      title: "Veri Şifreleme ve Cihaz Şifreleme",
      path: "/cozumler/bilgi-guvenligi/veri-sifreleme-ve-cihaz-sifreleme",
      description: "Verilerin ve cihazların güvenli şekilde şifrelenmesi",
    },
    {
      title: "Uygulama Güvenliği",
      path: "/cozumler/bilgi-guvenligi/uygulama-guvenligi",
      description: "Yazılım uygulamalarının güvenliğinin sağlanması",
    },
    {
      title: "Yapay Zeka ile Tehdit Avı",
      path: "/cozumler/bilgi-guvenligi/yapay-zeka-ile-tehdit-avi",
      description:
        "Yapay zeka teknolojileri kullanarak tehditlerin tespit edilmesi",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Bilgi Güvenliği Çözümlerimiz
      </h1>

      <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
        Kurumsal bilgi varlıklarınızı korumak ve güvenliğini sağlamak için
        kapsamlı bilgi güvenliği çözümleri sunuyoruz.
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
              Daha fazla bilgi →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
