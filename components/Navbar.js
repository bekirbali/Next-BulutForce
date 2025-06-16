"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import WorldIcon from "./WorldIcon";
import CircularLanguageSelector from "./CircularLanguageSelector";

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

  // Load gTranslate script only once on mount
  useEffect(() => {
    if (typeof window !== "undefined" && !window.gtranslateSettings) {
      window.gtranslateSettings = {
        default_language: "en",
        languages: ["en", "fr", "it", "es", "tr", "ru", "ar", "de"],
        wrapper_selector: ".gtranslate_wrapper",
      };
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

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
    <>
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
                  width={300}
                  height={50}
                  className="w-[250px] md:w-[300px]"
                />
              </Link>
            </div>

            {/* Navigation Menu (Desktop) */}
            <ul className="hidden md:flex space-x-8 items-center">
              <li className="relative group">
                <Link
                  href="/"
                  className="block py-4 px-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Home Page
                </Link>
              </li>

              <li className="relative group">
                <Link
                  href="/biz-kimiz"
                  className="block py-4 px-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  About Us
                </Link>
                <ul className="absolute left-0 top-full w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <li>
                    <Link
                      href="/biz-kimiz/hikayemiz"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/biz-kimiz/kariyer"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/biz-kimiz/duyurular"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                    >
                      Announcements
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <Link
                  href="/cozumler"
                  className="block py-4 px-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Solutions
                </Link>
                <ul className="absolute left-0 top-full w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <li className="relative group/nested">
                    <Link
                      href="/cozumler/bilgi-guvenligi"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                    >
                      <span className="flex items-center">
                        Information Security{" "}
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
                          Security Automation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/bilgi-guvenligi/guvenlik-bilgi-olay-yonetimi-ve-korelasyon-sistemi"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Security Information and Event Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/bilgi-guvenligi/guvenlik-yapilandirilmasi-ve-uyumluluk"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Security Configuration and Compliance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/bilgi-guvenligi/kullanici-davranisi-ve-analizi"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          User Behavior and Analytics
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/bilgi-guvenligi/kurumsal-guvenlik-operasyonu"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Enterprise Security Operations
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/bilgi-guvenligi/siber-risk-puanlamasi"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Cyber Risk Scoring
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/bilgi-guvenligi/veri-sifreleme-ve-cihaz-sifreleme"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Data Encryption and Device Encryption
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/bilgi-guvenligi/uygulama-guvenligi"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Application Security
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/bilgi-guvenligi/yapay-zeka-ile-tehdit-avi"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          AI-Powered Threat Hunting
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
                        Network Security{" "}
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
                          Network Security Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/ag-guvenligi/anti-ransomware-cozumleri"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Anti-Ransomware Solutions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/ag-guvenligi/bulut-guvenligi-ve-yonetimi"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Cloud Security and Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/ag-guvenligi/dns-ve-dhcp-yonetimi"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          DNS and DHCP Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/ag-guvenligi/guvenlik-acigi-yonetimi"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Vulnerability Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/ag-guvenligi/guvenlik-duvari-ve-ips-ids"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Firewall and IPS/IDS
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/ag-guvenligi/kotu-amacli-yazilim-analizi-ve-algilama"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Malware Analysis and Detection
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/ag-guvenligi/uc-nokta-guvenlik-yonetimi"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Endpoint Security Management
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
                        Content Security{" "}
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
                          Cloud Access Security Broker
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/icerik-guvenligi/dlp-veri-sizintisi-onleme"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          DLP - Data Loss Prevention
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/icerik-guvenligi/eposta-guvenligi"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Email Security
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/icerik-guvenligi/konfigurasyonyonetimi"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Configuration Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/icerik-guvenligi/url-icerik-filtreleme-ve-gecit"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          URL/Content Filtering and Gateway
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cozumler/icerik-guvenligi/veri-siniflandirma"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          Data Classification
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
                  Services
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
                  Our Brands
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
                  Contact Us
                </Link>
              </li>
              <li className="ml-4 flex items-center">
                <CircularLanguageSelector />
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
                  Home Page
                </Link>
              </li>
              <li className="w-full">
                <div className="flex items-center justify-between">
                  <Link
                    href="/biz-kimiz"
                    onClick={toggleMobileMenu}
                    className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                  >
                    About Us
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
                      • Our Story
                    </Link>
                    <Link
                      href="/biz-kimiz/kariyer"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                    >
                      • Careers
                    </Link>
                    <Link
                      href="/biz-kimiz/duyurular"
                      onClick={toggleMobileMenu}
                      className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm"
                    >
                      • Announcements
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
                    Solutions
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
                            Information Security
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
                          • Security Automation
                        </Link>
                        <Link
                          href="/cozumler/bilgi-guvenligi/guvenlik-bilgi-olay-yonetimi-ve-korelasyon-sistemi"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Security Information and Event Management
                        </Link>
                        <Link
                          href="/cozumler/bilgi-guvenligi/guvenlik-yapilandirilmasi-ve-uyumluluk"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Security Configuration and Compliance
                        </Link>
                        <Link
                          href="/cozumler/bilgi-guvenligi/kullanici-davranisi-ve-analizi"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • User Behavior and Analytics
                        </Link>
                        <Link
                          href="/cozumler/bilgi-guvenligi/kurumsal-guvenlik-operasyonu"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Enterprise Security Operations
                        </Link>
                        <Link
                          href="/cozumler/bilgi-guvenligi/siber-risk-puanlamasi"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Cyber Risk Scoring
                        </Link>
                        <Link
                          href="/cozumler/bilgi-guvenligi/veri-sifreleme-ve-cihaz-sifreleme"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Data Encryption and Device Encryption
                        </Link>
                        <Link
                          href="/cozumler/bilgi-guvenligi/uygulama-guvenligi"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Application Security
                        </Link>
                        <Link
                          href="/cozumler/bilgi-guvenligi/yapay-zeka-ile-tehdit-avi"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • AI-Powered Threat Hunting
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
                          <span className="flex items-center">
                            Network Security
                          </span>
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
                          • Network Security Management
                        </Link>
                        <Link
                          href="/cozumler/ag-guvenligi/anti-ransomware-cozumleri"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Anti-Ransomware Solutions
                        </Link>
                        <Link
                          href="/cozumler/ag-guvenligi/bulut-guvenligi-ve-yonetimi"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Cloud Security and Management
                        </Link>
                        <Link
                          href="/cozumler/ag-guvenligi/dns-ve-dhcp-yonetimi"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • DNS and DHCP Management
                        </Link>
                        <Link
                          href="/cozumler/ag-guvenligi/guvenlik-acigi-yonetimi"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Vulnerability Management
                        </Link>
                        <Link
                          href="/cozumler/ag-guvenligi/guvenlik-duvari-ve-ips-ids"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Firewall and IPS/IDS
                        </Link>
                        <Link
                          href="/cozumler/ag-guvenligi/kotu-amacli-yazilim-analizi-ve-algilama"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Malware Analysis and Detection
                        </Link>
                        <Link
                          href="/cozumler/ag-guvenligi/uc-nokta-guvenlik-yonetimi"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Endpoint Security Management
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
                            Content Security
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
                          • Cloud Access Security Broker
                        </Link>
                        <Link
                          href="/cozumler/icerik-guvenligi/dlp-veri-sizintisi-onleme"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • DLP - Data Loss Prevention
                        </Link>
                        <Link
                          href="/cozumler/icerik-guvenligi/eposta-guvenligi"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Email Security
                        </Link>
                        <Link
                          href="/cozumler/icerik-guvenligi/konfigurasyonyonetimi"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Configuration Management
                        </Link>
                        <Link
                          href="/cozumler/icerik-guvenligi/url-icerik-filtreleme-ve-gecit"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • URL/Content Filtering and Gateway
                        </Link>
                        <Link
                          href="/cozumler/icerik-guvenligi/veri-siniflandirma"
                          onClick={toggleMobileMenu}
                          className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-sm"
                        >
                          • Data Classification
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
                    Services
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
                    Our Brands
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
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <CircularLanguageSelector />
    </>
  );
};

export default Navbar;
