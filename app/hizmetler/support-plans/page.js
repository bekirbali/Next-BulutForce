import Image from "next/image";
import Link from "next/link";

export default function SupportPlans() {
  return (
    <div>
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
            Support Plans
          </h1>
        </div>
      </div>

      {/* Support Plans Cards */}
      <div className="bg-[#1d4e72] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Standard Plan */}
            <div className="bg-white p-8 shadow-lg rounded-lg relative flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <div>
                  <Image
                    src="/assets/hizmetler/bulutforcestandart.png"
                    alt="Standard Plan"
                    width={80}
                    height={80}
                    className="text-white"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-6">
                Standard
              </h3>
              <ul className="space-y-3 text-center flex-grow">
                <li>Remote Support</li>
                <li>Number of Calls 6</li>
                <li>Response Time for Level 1 (30 Minutes)</li>
                <li>Response Time for Level 2 (1 Hour)</li>
                <li>Response Time for Levels 3 and 4 (8 Hours)</li>
                <li>Major Upgrades and Improvements</li>
              </ul>
              <div className="mt-8 text-center">
                <Link href="/iletisim">
                  <button className="border-2 border-[#e67e22] text-[#e67e22] px-6 py-2 rounded-md font-medium hover:bg-[#e67e22] hover:text-white transition-colors">
                    GET INFORMATION
                  </button>
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-8 shadow-lg rounded-lg relative flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <div>
                  <Image
                    src="/assets/hizmetler/bulutforcepremium.png"
                    alt="Standard Plan"
                    width={80}
                    height={80}
                    className="text-white"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-6">
                Premium
              </h3>
              <ul className="space-y-3 text-center flex-grow">
                <li>Remote Support</li>
                <li>Number of Calls 12</li>
                <li>On-Site / On-Site Support (2 Times)</li>
                <li>Response Time for Level 1 (30 Minutes)</li>
                <li>Response Time for Level 2 (1 Hour)</li>
                <li>Response Time for Levels 3 and 4 (4 Hours)</li>
                <li>Hotfixes and Service Packs</li>
                <li>Important Updates and Improvements</li>
              </ul>
              <div className="mt-8 text-center">
                <Link href="/iletisim">
                  <button className="border-2 border-[#e67e22] text-[#e67e22] px-6 py-2 rounded-md font-medium hover:bg-[#e67e22] hover:text-white transition-colors">
                    GET INFORMATION
                  </button>
                </Link>
              </div>
            </div>

            {/* Elite Plan */}
            <div className="bg-white p-8 shadow-lg rounded-lg relative flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <div>
                  <Image
                    src="/assets/hizmetler/bulutforceelite.png"
                    alt="Standard Plan"
                    width={80}
                    height={80}
                    className="text-white"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-6">Elite</h3>
              <ul className="space-y-3 text-center flex-grow">
                <li>Remote Support</li>
                <li>Unlimited Number of Calls</li>
                <li>On-Site Support (6 Times)</li>
                <li>Response Time for Level 1 (30 Minutes)</li>
                <li>Response Time for Level 2 (1 Hour)</li>
                <li>Response Time for Levels 3 and 4 (2 Hours)</li>
                <li>Hotfixes and Service Packs</li>
                <li>Important Updates and Improvements</li>
                <li>System Health Check Service</li>
              </ul>
              <div className="mt-8 text-center">
                <Link href="/iletisim">
                  <button className="border-2 border-[#e67e22] text-[#e67e22] px-6 py-2 rounded-md font-medium hover:bg-[#e67e22] hover:text-white transition-colors">
                    GET INFORMATION
                  </button>
                </Link>
              </div>
            </div>

            {/* Diamond Plan */}
            <div className="bg-white p-8 shadow-lg rounded-lg relative flex flex-col h-full">
              <div className="flex justify-center mb-4">
                <div>
                  <Image
                    src="/assets/hizmetler/bulutforcediamond.png"
                    alt="Diamond Plan"
                    width={80}
                    height={80}
                    className="text-white"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-6">
                Diamond
              </h3>
              <ul className="space-y-3 text-center flex-grow">
                <li>Remote Support</li>
                <li>On-Site Support (12 Times)</li>
                <li>Unlimited Number of Calls</li>
                <li>Response Time for Level 1 (15 Minutes)</li>
                <li>Response Time for Level 2 (30 Minutes)</li>
                <li>Response Time for Levels 3 and 4 (1 Hour)</li>
                <li>Hotfixes and Service Packs</li>
                <li>Important Updates and Improvements</li>
                <li>System Health Check Service</li>
                <li>Technical Account Management</li>
              </ul>
              <div className="mt-8 text-center">
                <Link href="/iletisim">
                  <button className="border-2 border-[#e67e22] text-[#e67e22] px-6 py-2 rounded-md font-medium hover:bg-[#e67e22] hover:text-white transition-colors">
                    GET INFORMATION
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
