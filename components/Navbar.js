"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-blue-900 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-200"
            >
              BulutForce
            </Link>
          </div>

          {/* Navigation Menu (Desktop) */}
          <ul className="hidden md:flex space-x-8">
            <li className="relative group">
              <Link
                href="/"
                className="block py-4 px-3 text-white hover:text-blue-200 transition-colors duration-200"
              >
                Ana Sayfa
              </Link>
            </li>

            <li className="relative group">
              <Link
                href="/biz-kimiz"
                className="block py-4 px-3 text-white hover:text-blue-200 transition-colors duration-200"
              >
                Biz Kimiz?
              </Link>
              <ul className="absolute left-0 top-full w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <Link
                    href="/biz-kimiz/hikayemiz"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Hikayemiz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/biz-kimiz/kariyer"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Kariyer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/biz-kimiz/duyurular"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Duyurular
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <Link
                href="/cozumler"
                className="block py-4 px-3 text-white hover:text-blue-200 transition-colors duration-200"
              >
                Çözümler
              </Link>
              <ul className="absolute left-0 top-full w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li className="relative group/nested">
                  <Link
                    href="/cozumler/bilgi-guvenligi"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Bilgi Güvenliği →
                  </Link>
                  <ul className="absolute left-full top-0 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/guvenlik-otomasyonu"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Güvenlik Otomasyonu
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/guvenlik-bilgi-olay-yonetimi-ve-korelasyon-sistemi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Güvenlik Bilgi Olay Yönetimi ve Korelasyon Sistemi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/guvenlik-yapilandirilmasi-ve-uyumluluk"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Güvenlik Yapılandırılması ve Uyumluluk
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/kullanici-davranisi-ve-analizi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Kullanıcı Davranışı ve Analizi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/kurumsal-guvenlik-operasyonu"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Kurumsal Güvenlik Operasyonu
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/siber-risk-puanlamasi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Siber Risk Puanlaması
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/veri-sifreleme-ve-cihaz-sifreleme"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Veri Şifreleme ve Cihaz Şifreleme
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/uygulama-guvenligi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Uygulama Güvenliği
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/yapay-zeka-ile-tehdit-avi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Yapay Zeka ile Tehdit Avı
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="relative group/nested">
                  <Link
                    href="/cozumler/ag-guvenligi"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Ağ Güvenliği →
                  </Link>
                  <ul className="absolute left-full top-0 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/ag-guvenligi-yonetimi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Ağ Güvenliği Yönetimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/anti-ransomware-cozumleri"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Anti Ransomware Çözümleri
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/bulut-guvenligi-ve-yonetimi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Bulut Güvenliği ve Yönetimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/dns-ve-dhcp-yonetimi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        DNS ve DHCP Yönetimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/guvenlik-acigi-yonetimi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Güvenlik Açığı Yönetimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/guvenlik-duvari-ve-ips-ids"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Güvenlik Duvarı ve IPS/IDS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/kotu-amacli-yazilim-analizi-ve-algilama"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Kötü Amaçlı Yazılım Analizi ve Algılama
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/uc-nokta-guvenlik-yonetimi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Uç Nokta Güvenlik Yönetimi
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="relative group/nested">
                  <Link
                    href="/cozumler/icerik-guvenligi"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    İçerik Güvenliği →
                  </Link>
                  <ul className="absolute left-full top-0 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                    <li>
                      <Link
                        href="/cozumler/icerik-guvenligi/bulut-erisimi-guvenlik-aracisi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        Bulut Erişimi Güvenlik Aracısı
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/icerik-guvenligi/dlp-veri-sizintisi-onleme"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        DLP - Veri Sızıntısı Önleme
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/icerik-guvenligi/eposta-guvenligi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        E-posta Güvenliği
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <Link
                href="/hizmetler"
                className="block py-4 px-3 text-white hover:text-blue-200 transition-colors duration-200"
              >
                Hizmetler
              </Link>
              <ul className="absolute left-0 top-full w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <Link
                    href="/hizmetler/installation-professional-services"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Installation and Professional Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hizmetler/advanced-support"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Advanced Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hizmetler/support-plans"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Support Plans
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <Link
                href="/markalarimiz"
                className="block py-4 px-3 text-white hover:text-blue-200 transition-colors duration-200"
              >
                Markalarımız
              </Link>
              <ul className="absolute left-0 top-full w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <Link
                    href="/markalarimiz/caspipot"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Caspipot
                  </Link>
                </li>
                <li>
                  <Link
                    href="/markalarimiz/skyron"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Skyron
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link
                href="/iletisim"
                className="block py-4 px-3 text-white hover:text-blue-200 transition-colors duration-200"
              >
                İletişim
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800">
          <ul className="flex flex-col items-center py-4">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 text-white hover:text-blue-200 transition-colors duration-200"
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                href="/biz-kimiz"
                className="block py-2 px-4 text-white hover:text-blue-200 transition-colors duration-200"
              >
                Biz Kimiz?
              </Link>
            </li>
            <li>
              <Link
                href="/cozumler"
                className="block py-2 px-4 text-white hover:text-blue-200 transition-colors duration-200"
              >
                Çözümler
              </Link>
            </li>
            <li>
              <Link
                href="/hizmetler"
                className="block py-2 px-4 text-white hover:text-blue-200 transition-colors duration-200"
              >
                Hizmetler
              </Link>
              <div className="pl-4">
                <Link
                  href="/hizmetler/installation-professional-services"
                  className="block py-2 px-4 text-white hover:text-blue-200 transition-colors duration-200 text-sm"
                >
                  - Installation and Professional Services
                </Link>
                <Link
                  href="/hizmetler/advanced-support"
                  className="block py-2 px-4 text-white hover:text-blue-200 transition-colors duration-200 text-sm"
                >
                  - Advanced Support
                </Link>
                <Link
                  href="/hizmetler/support-plans"
                  className="block py-2 px-4 text-white hover:text-blue-200 transition-colors duration-200 text-sm"
                >
                  - Support Plans
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/markalarimiz"
                className="block py-2 px-4 text-white hover:text-blue-200 transition-colors duration-200"
              >
                Markalarımız
              </Link>
              <div className="pl-4">
                <Link
                  href="/markalarimiz/caspipot"
                  className="block py-2 px-4 text-white hover:text-blue-200 transition-colors duration-200 text-sm"
                >
                  - Caspipot
                </Link>
                <Link
                  href="/markalarimiz/skyron"
                  className="block py-2 px-4 text-white hover:text-blue-200 transition-colors duration-200 text-sm"
                >
                  - Skyron
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/iletisim"
                className="block py-2 px-4 text-white hover:text-blue-200 transition-colors duration-200"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
