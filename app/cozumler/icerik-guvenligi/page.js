import Link from "next/link";

export default function IcerikGuvenligi() {
  const subcategories = [
    {
      title: "Bulut Erişimi Güvenlik Aracısı",
      path: "/cozumler/icerik-guvenligi/bulut-erisimi-guvenlik-aracisi",
      description: "Bulut servislerine güvenli erişim yönetimi",
    },
    {
      title: "DLP - Veri Sızıntısı Önleme",
      path: "/cozumler/icerik-guvenligi/dlp-veri-sizintisi-onleme",
      description: "Hassas verilerin sızıntısını önleme çözümleri",
    },
    {
      title: "E-posta Güvenliği",
      path: "/cozumler/icerik-guvenligi/eposta-guvenligi",
      description: "E-posta iletişiminin güvenliğini sağlama çözümleri",
    },
    {
      title: "Konfigürasyon Yönetimi",
      path: "/cozumler/icerik-guvenligi/konfigurasyonyonetimi",
      description: "Sistem ve uygulama konfigürasyonlarının güvenli yönetimi",
    },
    {
      title: "URL/İçerik Filtreleme ve Geçit",
      path: "/cozumler/icerik-guvenligi/url-icerik-filtreleme-ve-gecit",
      description: "Web içerik filtreleme ve güvenli internet erişim çözümleri",
    },
    {
      title: "Veri Sınıflandırma",
      path: "/cozumler/icerik-guvenligi/veri-siniflandirma",
      description: "Kurumsal verilerin sınıflandırılması ve yönetimi",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 min-h-[500px]">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        İçerik Güvenliği Çözümlerimiz
      </h1>

      <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
        Kurumsal içerik ve verilerinizin güvenliğini sağlamak için gelişmiş
        içerik güvenliği çözümleri sunuyoruz.
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
