import Image from "next/image";
import Link from "next/link";

export default function GuvenlikOtomasyonu() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/anasayfa/bulutforcedetaylıbilgiarkaplan.jpg"
          alt="Security Automation Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Network Security Management
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Provides comprehensive corporate network protection against the most
            advanced cybersecurity threats.
          </p>
          <div className="mt-8">
            <Link href="/hizmetler/support-plans">
              <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors hover:cursor-pointer">
                REVIEW SUPPORT PLANS
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Network Security Management Overview Section */}
      <div className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              It is designed to protect your network and data from multiple
              layers of attacks with hardware and software solutions.
            </h2>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
              NETWORK SECURITY MANAGEMENT IS A SUITE OF CYBERSECURITY SERVICES
              THAT INCLUDE CONSULTING AND IMPLEMENTATION DESIGNED TO HARDEN
              CONTROL SYSTEM NETWORKS AGAINST THE MOVEMENT OF MALWARE FROM ONE
              SYSTEM OR ASSET TO ANOTHER.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-8">
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/assets/çözümler/modem.png"
                alt="Network Security Device"
                width={800}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          {/* Features and Specifications - Two Column Layout */}
          <div className="mt-16">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left Column - Content Sections */}
              <div className="md:w-1/2">
                <div className="grid grid-cols-1 gap-8">
                  {/* Internet Access Provision Section */}
                  <div className="border-b pb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      INTERNET ACCESS PROVISION SERVICE IN PUBLIC AREA
                    </h3>
                    <p className="text-gray-700 mb-6">
                      There is a registration system with Turkish identity
                      verification that works in integration with the General
                      Directorate of Population and Citizenship Affairs, and a
                      Subscriber Information Management System that allows
                      reporting of users' Web traffic.
                    </p>
                  </div>

                  {/* Internet Traffic Security Section */}
                  <div className="border-b pb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      INTERNET TRAFFIC SECURITY
                    </h3>
                    <p className="text-gray-700 mb-6">
                      It features cyber attack detection and prevention, web
                      content filtering, user limitation, address blocking,
                      account authorization, and bandwidth load balancing.
                    </p>
                  </div>

                  {/* Law Obligations Section */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      OBLIGATIONS UNDER LAW NO. 5651
                    </h3>
                    <p className="text-gray-700 mb-6">
                      DHCP Logs, Web logs, portal logs are prepared, the
                      transaction is signed with a time stamp in accordance with
                      Law No. 5651 and archived for 2 years.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Single Image */}
              <div className="md:w-1/2">
                <div className="flex flex-col items-center justify-center h-full">
                  <Image
                    src="/assets/çözümler/areas.jpg"
                    alt="Application Areas"
                    width={750}
                    height={900}
                    className="object-contain"
                  />
                  <div className="mt-8">
                    <Link href="/iletisim">
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 hover:cursor-pointer transition-colors">
                        Get Information for Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Automation Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/çözümler/bulutforce3cizgi.jpg"
                  alt="Advanced Threat Detection"
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Packet Filtering
              </h3>
              <p className="text-gray-600">
                A small amount of data is analyzed and distributed according to
                the filter's standards.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/çözümler/bulutforce3cizgi.jpg"
                  alt="Effective Response Process"
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Next Generation Firewall
              </h3>
              <p className="text-gray-600">
                Application-level auditable firewall with deep analysis
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="flex justify-center mb-6">
                <Image
                  src="/assets/çözümler/bulutforce3cizgi.jpg"
                  alt="Identifies Potential Problems"
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Proxy Service
              </h3>
              <p className="text-gray-600">
                Network security system that protects flows at the application
                layer while filtering them
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
