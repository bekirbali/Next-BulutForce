import Link from "next/link";

export default function AgGuvenligi() {
  const subcategories = [
    {
      title: "Ağ Güvenliği Yönetimi",
      path: "/cozumler/ag-guvenligi/ag-guvenligi-yonetimi",
      description: "Ağ altyapısının güvenlik yönetimi ve izlenmesi",
    },
    {
      title: "Anti Ransomware Çözümleri",
      path: "/cozumler/ag-guvenligi/anti-ransomware-cozumleri",
      description: "Fidye yazılımlarına karşı koruma ve önleme çözümleri",
    },
    {
      title: "Bulut Güvenliği ve Yönetimi",
      path: "/cozumler/ag-guvenligi/bulut-guvenligi-ve-yonetimi",
      description: "Bulut altyapılarının güvenliği ve yönetimi",
    },
    {
      title: "DNS ve DHCP Yönetimi",
      path: "/cozumler/ag-guvenligi/dns-ve-dhcp-yonetimi",
      description: "DNS ve DHCP servislerinin güvenli yönetimi",
    },
    {
      title: "Güvenlik Açığı Yönetimi",
      path: "/cozumler/ag-guvenligi/guvenlik-acigi-yonetimi",
      description: "Güvenlik açıklarının tespiti ve yönetimi",
    },
    {
      title: "Güvenlik Duvarı ve IPS/IDS",
      path: "/cozumler/ag-guvenligi/guvenlik-duvari-ve-ips-ids",
      description:
        "Gelişmiş güvenlik duvarı ve saldırı tespit/önleme sistemleri",
    },
    {
      title: "Kötü Amaçlı Yazılım Analizi ve Algılama",
      path: "/cozumler/ag-guvenligi/kotu-amacli-yazilim-analizi-ve-algilama",
      description: "Zararlı yazılımların tespiti ve analizi",
    },
    {
      title: "Uç Nokta Güvenlik Yönetimi",
      path: "/cozumler/ag-guvenligi/uc-nokta-guvenlik-yonetimi",
      description: "Son kullanıcı cihazlarının güvenlik yönetimi",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Ağ Güvenliği Çözümlerimiz
      </h1>

      <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
        Kurumsal ağ altyapınızı dış tehditlerden korumak ve güvenliğini sağlamak
        için kapsamlı ağ güvenliği çözümleri sunuyoruz.
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
