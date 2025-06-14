"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    bizKimiz: false,
    cozumler: false,
    bilgiGuvenligi: false,
    agGuvenligi: false,
    icerikGuvenligi: false,
    hizmetler: false,
    markalarimiz: false,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset all dropdowns when closing mobile menu
    if (isMobileMenuOpen) {
      setOpenDropdowns({
        bizKimiz: false,
        cozumler: false,
        bilgiGuvenligi: false,
        agGuvenligi: false,
        icerikGuvenligi: false,
        hizmetler: false,
        markalarimiz: false,
      });
    }
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdowns((prev) => {
      // Define parent-child relationships
      const parentMap = {
        bilgiGuvenligi: "cozumler",
        agGuvenligi: "cozumler",
        icerikGuvenligi: "cozumler",
      };
      // Top-level dropdowns
      const topLevel = ["bizKimiz", "cozumler", "hizmetler", "markalarimiz"];
      // If toggling a top-level dropdown
      if (topLevel.includes(dropdown)) {
        const newState = Object.keys(prev).reduce((acc, key) => {
          acc[key] = false;
          return acc;
        }, {});
        newState[dropdown] = !prev[dropdown];
        return newState;
      }
      // If toggling a subcategory (child)
      const parent = parentMap[dropdown];
      const newState = { ...prev };
      // Close all siblings at this level
      Object.keys(parentMap).forEach((key) => {
        if (parentMap[key] === parent) newState[key] = false;
      });
      newState[dropdown] = !prev[dropdown];
      // Keep parent open
      newState[parent] = true;
      return newState;
    });
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 font-[lato]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold py-2 text-gray-800 hover:text-gray-900 transition-colors duration-200"
            >
              <Image
                src="/assets/markalar/logos/bflogo.png"
                alt="BulutForce"
                width={200}
                height={50}
              />
            </Link>
          </div>

          {/* Navigation Menu (Desktop) */}
          <ul className="hidden md:flex space-x-8">
            <li className="relative group">
              <Link
                href="/"
                className="block py-4 px-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Ana Sayfa
              </Link>
            </li>

            <li className="relative group">
              <Link
                href="/biz-kimiz"
                className="block py-4 px-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Biz Kimiz?
              </Link>
              <ul className="absolute left-0 top-full w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <Link
                    href="/biz-kimiz/hikayemiz"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    Hikayemiz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/biz-kimiz/kariyer"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    Kariyer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/biz-kimiz/duyurular"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    Duyurular
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <Link
                href="/cozumler"
                className="block py-4 px-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Çözümler
              </Link>
              <ul className="absolute left-0 top-full w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li className="relative group/nested">
                  <Link
                    href="/cozumler/bilgi-guvenligi"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      Bilgi Güvenliği{" "}
                      <svg
                        className="ml-1 w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                  <ul className="absolute left-full top-0 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/guvenlik-otomasyonu"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Güvenlik Otomasyonu
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/guvenlik-bilgi-olay-yonetimi-ve-korelasyon-sistemi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Güvenlik Bilgi Olay Yönetimi ve Korelasyon Sistemi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/guvenlik-yapilandirilmasi-ve-uyumluluk"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Güvenlik Yapılandırılması ve Uyumluluk
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/kullanici-davranisi-ve-analizi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Kullanıcı Davranışı ve Analizi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/kurumsal-guvenlik-operasyonu"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Kurumsal Güvenlik Operasyonu
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/siber-risk-puanlamasi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Siber Risk Puanlaması
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/veri-sifreleme-ve-cihaz-sifreleme"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Veri Şifreleme ve Cihaz Şifreleme
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/uygulama-guvenligi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Uygulama Güvenliği
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/bilgi-guvenligi/yapay-zeka-ile-tehdit-avi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Yapay Zeka ile Tehdit Avı
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="relative group/nested">
                  <Link
                    href="/cozumler/ag-guvenligi"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      Ağ Güvenliği{" "}
                      <svg
                        className="ml-1 w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                  <ul className="absolute left-full top-0 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/ag-guvenligi-yonetimi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Ağ Güvenliği Yönetimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/anti-ransomware-cozumleri"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Anti Ransomware Çözümleri
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/bulut-guvenligi-ve-yonetimi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Bulut Güvenliği ve Yönetimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/dns-ve-dhcp-yonetimi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        DNS ve DHCP Yönetimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/guvenlik-acigi-yonetimi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Güvenlik Açığı Yönetimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/guvenlik-duvari-ve-ips-ids"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Güvenlik Duvarı ve IPS/IDS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/kotu-amacli-yazilim-analizi-ve-algilama"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Kötü Amaçlı Yazılım Analizi ve Algılama
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/ag-guvenligi/uc-nokta-guvenlik-yonetimi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Uç Nokta Güvenlik Yönetimi
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="relative group/nested">
                  <Link
                    href="/cozumler/icerik-guvenligi"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      İçerik Güvenliği{" "}
                      <svg
                        className="ml-1 w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                  <ul className="absolute left-full top-0 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                    <li>
                      <Link
                        href="/cozumler/icerik-guvenligi/bulut-erisimi-guvenlik-aracisi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Bulut Erişimi Güvenlik Aracısı
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/icerik-guvenligi/dlp-veri-sizintisi-onleme"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        DLP - Veri Sızıntısı Önleme
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/icerik-guvenligi/eposta-guvenligi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        E-posta Güvenliği
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/icerik-guvenligi/konfigurasyonyonetimi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Konfigürasyon Yönetimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/icerik-guvenligi/url-icerik-filtreleme-ve-gecit"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        URL/İçerik Filtreleme ve Geçit
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cozumler/icerik-guvenligi/veri-siniflandirma"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        Veri Sınıflandırma
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <Link
                href="/hizmetler"
                className="block py-4 px-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Hizmetler
              </Link>
              <ul className="absolute left-0 top-full w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <Link
                    href="/hizmetler/installation-professional-services"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    Installation and Professional Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hizmetler/advanced-support"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    Advanced Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hizmetler/support-plans"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    Support Plans
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <Link
                href="/markalarimiz"
                className="block py-4 px-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Markalarımız
              </Link>
              <ul className="absolute left-0 top-full w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <Link
                    href="/markalarimiz/caspipot"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    Caspipot
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cozumler/ag-guvenligi/ag-guvenligi-yonetimi"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                  >
                    Skyron
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <Link
                href="/iletisim"
                className="block py-4 px-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                İletişim
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
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
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-4">
            <li className="w-full">
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              >
                Ana Sayfa
              </Link>
            </li>
            <li className="w-full">
              <div className="flex items-center justify-between">
                <Link
                  href="/biz-kimiz"
                  onClick={toggleMobileMenu}
                  className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                >
                  Biz Kimiz?
                </Link>
                <button
                  onClick={() => toggleDropdown("bizKimiz")}
                  className="px-4 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      openDropdowns.bizKimiz ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {openDropdowns.bizKimiz && (
                <div className="pl-4 bg-gray-50">
                  <Link
                    href="/biz-kimiz/hikayemiz"
                    onClick={toggleMobileMenu}
                    className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                  >
                    • Hikayemiz
                  </Link>
                  <Link
                    href="/biz-kimiz/kariyer"
                    onClick={toggleMobileMenu}
                    className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                  >
                    • Kariyer
                  </Link>
                  <Link
                    href="/biz-kimiz/duyurular"
                    onClick={toggleMobileMenu}
                    className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                  >
                    • Duyurular
                  </Link>
                </div>
              )}
            </li>
            <li className="w-full">
              <div className="flex items-center justify-between">
                <Link
                  href="/cozumler"
                  onClick={toggleMobileMenu}
                  className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                >
                  Çözümler
                </Link>
                <button
                  onClick={() => toggleDropdown("cozumler")}
                  className="px-4 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      openDropdowns.cozumler ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {openDropdowns.cozumler && (
                <div className="pl-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/cozumler/bilgi-guvenligi"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                    >
                      <Link
                        href="/cozumler/bilgi-guvenligi"
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span className="flex items-center">
                          Bilgi Güvenliği
                        </span>
                      </Link>
                    </Link>
                    <button
                      onClick={() => toggleDropdown("bilgiGuvenligi")}
                      className="px-4 text-gray-700 hover:text-gray-900"
                    >
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${
                          openDropdowns.bilgiGuvenligi ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  {openDropdowns.bilgiGuvenligi && (
                    <div className="pl-4 bg-gray-100">
                      <Link
                        href="/cozumler/bilgi-guvenligi/guvenlik-otomasyonu"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Güvenlik Otomasyonu
                      </Link>
                      <Link
                        href="/cozumler/bilgi-guvenligi/guvenlik-bilgi-olay-yonetimi-ve-korelasyon-sistemi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Güvenlik Bilgi Olay Yönetimi ve Korelasyon Sistemi
                      </Link>
                      <Link
                        href="/cozumler/bilgi-guvenligi/guvenlik-yapilandirilmasi-ve-uyumluluk"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Güvenlik Yapılandırılması ve Uyumluluk
                      </Link>
                      <Link
                        href="/cozumler/bilgi-guvenligi/kullanici-davranisi-ve-analizi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Kullanıcı Davranışı ve Analizi
                      </Link>
                      <Link
                        href="/cozumler/bilgi-guvenligi/kurumsal-guvenlik-operasyonu"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Kurumsal Güvenlik Operasyonu
                      </Link>
                      <Link
                        href="/cozumler/bilgi-guvenligi/siber-risk-puanlamasi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Siber Risk Puanlaması
                      </Link>
                      <Link
                        href="/cozumler/bilgi-guvenligi/veri-sifreleme-ve-cihaz-sifreleme"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Veri Şifreleme ve Cihaz Şifreleme
                      </Link>
                      <Link
                        href="/cozumler/bilgi-guvenligi/uygulama-guvenligi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Uygulama Güvenliği
                      </Link>
                      <Link
                        href="/cozumler/bilgi-guvenligi/yapay-zeka-ile-tehdit-avi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Yapay Zeka ile Tehdit Avı
                      </Link>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <Link
                      href="/cozumler/ag-guvenligi"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                    >
                      <Link
                        href="/cozumler/ag-guvenligi"
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span className="flex items-center">Ağ Güvenliği</span>
                      </Link>
                    </Link>
                    <button
                      onClick={() => toggleDropdown("agGuvenligi")}
                      className="px-4 text-gray-700 hover:text-gray-900"
                    >
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${
                          openDropdowns.agGuvenligi ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  {openDropdowns.agGuvenligi && (
                    <div className="pl-4 bg-gray-100">
                      <Link
                        href="/cozumler/ag-guvenligi/ag-guvenligi-yonetimi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Ağ Güvenliği Yönetimi
                      </Link>
                      <Link
                        href="/cozumler/ag-guvenligi/anti-ransomware-cozumleri"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Anti Ransomware Çözümleri
                      </Link>
                      <Link
                        href="/cozumler/ag-guvenligi/bulut-guvenligi-ve-yonetimi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Bulut Güvenliği ve Yönetimi
                      </Link>
                      <Link
                        href="/cozumler/ag-guvenligi/dns-ve-dhcp-yonetimi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • DNS ve DHCP Yönetimi
                      </Link>
                      <Link
                        href="/cozumler/ag-guvenligi/guvenlik-acigi-yonetimi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Güvenlik Açığı Yönetimi
                      </Link>
                      <Link
                        href="/cozumler/ag-guvenligi/guvenlik-duvari-ve-ips-ids"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Güvenlik Duvarı ve IPS/IDS
                      </Link>
                      <Link
                        href="/cozumler/ag-guvenligi/kotu-amacli-yazilim-analizi-ve-algilama"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Kötü Amaçlı Yazılım Analizi ve Algılama
                      </Link>
                      <Link
                        href="/cozumler/ag-guvenligi/uc-nokta-guvenlik-yonetimi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Uç Nokta Güvenlik Yönetimi
                      </Link>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <Link
                      href="/cozumler/icerik-guvenligi"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                    >
                      <Link
                        href="/cozumler/icerik-guvenligi"
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span className="flex items-center">
                          İçerik Güvenliği
                        </span>
                      </Link>
                    </Link>
                    <button
                      onClick={() => toggleDropdown("icerikGuvenligi")}
                      className="px-4 text-gray-700 hover:text-gray-900"
                    >
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${
                          openDropdowns.icerikGuvenligi ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  {openDropdowns.icerikGuvenligi && (
                    <div className="pl-4 bg-gray-100">
                      <Link
                        href="/cozumler/icerik-guvenligi/bulut-erisimi-guvenlik-aracisi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Bulut Erişimi Güvenlik Aracısı
                      </Link>
                      <Link
                        href="/cozumler/icerik-guvenligi/dlp-veri-sizintisi-onleme"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • DLP - Veri Sızıntısı Önleme
                      </Link>
                      <Link
                        href="/cozumler/icerik-guvenligi/eposta-guvenligi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • E-posta Güvenliği
                      </Link>
                      <Link
                        href="/cozumler/icerik-guvenligi/konfigurasyonyonetimi"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Konfigürasyon Yönetimi
                      </Link>
                      <Link
                        href="/cozumler/icerik-guvenligi/url-icerik-filtreleme-ve-gecit"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • URL/İçerik Filtreleme ve Geçit
                      </Link>
                      <Link
                        href="/cozumler/icerik-guvenligi/veri-siniflandirma"
                        onClick={toggleMobileMenu}
                        className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                      >
                        • Veri Sınıflandırma
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </li>
            <li className="w-full">
              <div className="flex items-center justify-between">
                <Link
                  href="/hizmetler"
                  onClick={toggleMobileMenu}
                  className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                >
                  Hizmetler
                </Link>
                <button
                  onClick={() => toggleDropdown("hizmetler")}
                  className="px-4 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      openDropdowns.hizmetler ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {openDropdowns.hizmetler && (
                <div className="pl-4 bg-gray-50">
                  <Link
                    href="/hizmetler/installation-professional-services"
                    onClick={toggleMobileMenu}
                    className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                  >
                    • Installation and Professional Services
                  </Link>
                  <Link
                    href="/hizmetler/advanced-support"
                    onClick={toggleMobileMenu}
                    className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                  >
                    • Advanced Support
                  </Link>
                  <Link
                    href="/hizmetler/support-plans"
                    onClick={toggleMobileMenu}
                    className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                  >
                    • Support Plans
                  </Link>
                </div>
              )}
            </li>
            <li className="w-full">
              <div className="flex items-center justify-between">
                <Link
                  href="/markalarimiz"
                  onClick={toggleMobileMenu}
                  className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                >
                  Markalarımız
                </Link>
                <button
                  onClick={() => toggleDropdown("markalarimiz")}
                  className="px-4 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      openDropdowns.markalarimiz ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {openDropdowns.markalarimiz && (
                <div className="pl-4 bg-gray-50">
                  <Link
                    href="/markalarimiz/caspipot"
                    onClick={toggleMobileMenu}
                    className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                  >
                    • Caspipot
                  </Link>
                  <Link
                    href="/markalarimiz/skyron"
                    onClick={toggleMobileMenu}
                    className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                  >
                    • Skyron
                  </Link>
                </div>
              )}
            </li>
            <li className="w-full">
              <Link
                href="/iletisim"
                onClick={toggleMobileMenu}
                className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
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
