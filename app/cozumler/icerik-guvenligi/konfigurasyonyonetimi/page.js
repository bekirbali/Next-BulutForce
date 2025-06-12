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
            Configuration Management
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Balance Between Order and Security.
          </p>
          <div className="mt-8">
            <Link href="/hizmetler/support-plans">
              <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors hover:cursor-pointer">
                SUPPORT PLANS
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Configuration Management Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Configuration Management: The Balance Between Order and Security
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Configuration management is a process that ensures the orderly and
              secure management of information systems and infrastructures. This
              process aims to effectively manage the changes, configurations and
              sustainability of hardware, software, network devices and other
              components. Configuration management plays a vital role in
              improving the security of enterprises' networks, reducing the
              probability of errors and maintaining system integrity.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
            <div className="md:w-1/2">
              <Image
                src="/assets/çözümler/bulutforcekonfigurasyon.jpg"
                alt="Configuration Management"
                width={600}
                height={400}
                className="object-contain "
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Configuration Management Process:
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Creating an Inventory
                    </h4>
                    <p className="text-gray-600 mt-2">
                      First of all, all components and assets in the IT system
                      are recorded in a detailed inventory list.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Change Management
                    </h4>
                    <p className="text-gray-600 mt-2">
                      All changes, such as adding new components, applying
                      updates, or changing configurations, are recorded and
                      tracked.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Version Control
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Different versions of software and configuration files are
                      managed. This allows reverting to previous versions in
                      case of rollback need.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Monitoring and Alerts
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Configuration changes are continuously monitored and, when
                      necessary, notified to business owners with automatic
                      alerts.
                    </p>
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
                System Integrity
              </h3>
              <p className="text-gray-600">
                Configuration management ensures that the system is configured
                in a stable and correct manner, thus minimizing unwanted errors
                and incompatibilities.
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
                Security
              </h3>
              <p className="text-gray-600">
                Properly configured systems help minimize security gaps and
                vulnerabilities.
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
                Business Continuity
              </h3>
              <p className="text-gray-600">
                Configuration management increases the system's resistance to
                erroneous or unintended changes, thus ensuring business
                continuity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
