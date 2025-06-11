import Link from "next/link";
import Image from "next/image";

export default function Markalarimiz() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Markalarımız
      </h1>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 mb-10 text-center">
          BulutForce, sektördeki en güvenilir ve yenilikçi güvenlik çözümlerini
          sunmak için kendi geliştirdiği özel markaları ile hizmet vermektedir.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Caspiot Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-blue-900 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Caspipot</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Caspipot, IoT cihazları ve endüstriyel kontrol sistemleri için
                geliştirilmiş gelişmiş bir güvenlik çözümüdür. Gerçek zamanlı
                izleme ve tehdit tespiti ile bağlantılı cihazlarınızı korur.
              </p>
              <Link
                href="/markalarimiz/caspipot"
                className="block text-center bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-900 transition-colors duration-300"
              >
                Detaylı Bilgi
              </Link>
            </div>
          </div>

          {/* Skyron Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-blue-800 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Skyron</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Skyron, bulut altyapınız ve uygulamalarınız için kapsamlı koruma
                sağlayan gelişmiş bir bulut güvenlik platformudur. Yapay zeka
                destekli tehdit tespiti ve otomatik müdahale yetenekleri ile
                bulut ortamınızı güvende tutar.
              </p>
              <Link
                href="/markalarimiz/skyron"
                className="block text-center bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-900 transition-colors duration-300"
              >
                Detaylı Bilgi
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Çözüm Ortaklıklarımız
          </h3>
          <p className="text-gray-700 mb-6">
            BulutForce olarak, müşterilerimize en yüksek kalitede hizmet sunmak
            için sektör lideri global markalarla çözüm ortaklıkları
            geliştiriyoruz.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-blue-900 text-white py-3 px-8 rounded-full hover:bg-blue-800 transition-colors duration-300"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  );
}
