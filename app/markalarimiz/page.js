import Link from "next/link";
import Image from "next/image";

export default function Markalarimiz() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        Our Brands
      </h1>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 mb-10 text-center">
          As BulutForce, we offer services with our own developed brands to
          provide the most reliable and innovative security solutions in the
          industry.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Todyl Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
            <div className="h-48 relative flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/markalar/todyl_card_banner.png"
                alt="Todyl Banner"
                fill
                className="object-cover z-0 scale-[1.12]"
              />
              <div className="absolute inset-0 bg-black/25 z-10"></div>
              <h2 className="text-3xl font-bold text-white relative z-20 notranslate" translate="no">Todyl</h2>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-700 mb-6 flex-grow">
                Todyl is an all-in-one cloud-first security platform that integrates SASE, Endpoint Security, SIEM, MXDR, and GRC into a single agent, providing comprehensive protection and simplified management for enterprises.
              </p>
              <Link
                href="/markalarimiz/todyl"
                className="block text-center bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-colors duration-300 mt-auto"
              >
                More information
              </Link>
            </div>
          </div>

          {/* Acronis Cyber Protect Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
            <div className="h-48 relative flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/markalar/acronis_card_banner.png"
                alt="Acronis Cyber Protect Banner"
                fill
                className="object-cover z-0 scale-[1.12]"
              />
              <div className="absolute inset-0 bg-black/25 z-10"></div>
              <h2 className="text-3xl font-bold text-white relative z-20 notranslate" translate="no">Acronis Cyber Protect</h2>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-700 mb-6 flex-grow">
                Acronis Cyber Protect integrates cybersecurity, data protection, and endpoint management into a single, unified solution to safeguard modern businesses from cyber threats, data loss, and downtime.
              </p>
              <Link
                href="/markalarimiz/acronis"
                className="block text-center bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-colors duration-300 mt-auto"
              >
                More information
              </Link>
            </div>
          </div>

          {/* Commented out previous brands
          // Caspiot Card
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
            <div className="h-48 bg-primary flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Caspipot</h2>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-700 mb-6 flex-grow">
                Caspipot is an advanced security solution developed for IoT
                devices and industrial control systems. It monitors connected
                devices in real time and detects threats.
              </p>
              <Link
                href="/markalarimiz/caspipot"
                className="block text-center bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-colors duration-300 mt-auto"
              >
                More information
              </Link>
            </div>
          </div>

          // Skyron Card
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
            <div className="h-48 bg-[#2b5f83] flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Skyron</h2>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-700 mb-6 flex-grow">
                Skyron is an advanced cloud security platform that provides
                comprehensive protection for your cloud infrastructure and
                applications. It uses artificial intelligence-supported threat
                detection and automatic intervention capabilities to keep your
                cloud environment secure.
              </p>
              <Link
                href="/cozumler/ag-guvenligi/ag-guvenligi-yonetimi"
                className="block text-center bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-colors duration-300 mt-auto"
              >
                More information
              </Link>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
