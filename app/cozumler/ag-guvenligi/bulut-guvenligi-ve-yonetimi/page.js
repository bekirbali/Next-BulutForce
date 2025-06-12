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
            Cloud Security Management
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            You can provide a single source of control for the security of
            websites, applications, and APIs hosted across multiple clouds.
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

      {/* Security Automation Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Cloud Security Management: Strategy for Keeping Your Data Safe in
              the Cloud
            </h2>
            <p className="text-md text-gray-600 max-w-4xl mx-auto">
              While cloud computing offers many opportunities for businesses to
              gain flexibility, scalability, and cost savings, it also brings
              security concerns. Cloud security management refers to the
              strategic approach businesses need to take to keep data and
              services stored in the cloud secure, prevent data leaks, and
              ensure compliance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-8 max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2 p-4">
              <ol className="list-decimal space-y-6 text-left pl-4">
                <li>
                  <strong>Data Encryption and Identity Management :</strong> The
                  identities of users who access data and services stored in the
                  cloud are securely managed. Data encryption ensures that data
                  is protected against unauthorized access, while identity
                  management allows access only to authorized users.
                </li>

                <li>
                  <strong>Threat Detection and Monitoring :</strong> Cloud
                  security management continuously monitors threats and detects
                  anomalies. Thanks to this monitoring, potential cyberattacks
                  or security breaches are quickly detected and intervened.
                </li>

                <li>
                  <strong>Compliance and Internal Auditing :</strong> Cloud
                  security management includes the steps required to ensure
                  compliance with local regulations and industry standards. At
                  the same time, with internal auditing and monitoring
                  mechanisms, businesses can ensure that security policies and
                  procedures are implemented correctly.
                </li>
              </ol>
            </div>
            <div className="w-full lg:w-1/2 p-4 flex items-center justify-center">
              <Image
                src="/assets/çözümler/bulutforceguvenlikyonetimi.jpg"
                alt="Ransomware Protection"
                width={500}
                height={300}
                className="object-contain h-[400px]"
              />
            </div>
          </div>

          <div className="w-full px-4 mb-12 max-w-5xl mx-auto">
            <ol className="list-decimal space-y-6 text-left pl-4" start="4">
              <li>
                <strong>Contingency and Data Recovery Plans :</strong> Cloud
                security management involves creating contingency and data
                recovery plans in case of potential security incidents or data
                loss. These plans are critical for ensuring business continuity
                and minimizing data loss.
              </li>
            </ol>
          </div>

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
                Protect Cloud Applications
              </h3>
              <p className="text-gray-600">
                It accelerates and protects your cloud applications both in
                process and at the point of origin.
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
                Protect Cloud Access
              </h3>
              <p className="text-gray-600">
                Authentication and identity management keep your data accurate
                without a VPN.
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
                Protect Cloud Connections
              </h3>
              <p className="text-gray-600">
                Protect not only HTTP protocols but also TCP/UDP services
                including SSH, SMTP and SFTP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
