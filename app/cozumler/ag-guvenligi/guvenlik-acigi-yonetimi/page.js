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
            Vulnerability Management
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            We focus on risk processes with a hacker approach and stay one step
            ahead of constantly evolving threats.
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
              Vulnerability Management: Preventing Threats and Protecting Data
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              In today’s digital world, businesses and individuals are faced
              with increasing cyber threats every day. One of these threats is
              security vulnerabilities. Vulnerability management is a strategic
              approach that businesses and organizations use to identify,
              analyze, and fix vulnerabilities in their software, hardware, and
              network infrastructures.
            </p>
          </div>

          <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2 p-4">
              <ol className="list-decimal space-y-6 text-left pl-4">
                <li>
                  <strong>Detection and Assessment :</strong> The first step is
                  to identify potential vulnerabilities and assess their
                  severity. This step is accomplished through methods such as
                  ongoing security scans, penetration testing, and vulnerability
                  analysis.
                </li>

                <li>
                  <strong>Prioritization :</strong> Identified vulnerabilities
                  are prioritized based on their severity. Vulnerabilities in
                  critical systems and data are addressed first.
                </li>

                <li>
                  <strong>Patching and Remediation :</strong> Vulnerabilities
                  are fixed and patches are applied. This means patching
                  software and systems with security updates.
                </li>
                <li>
                  <strong>Monitoring and Testing :</strong> Systems are
                  continually monitored and tested following remediation. This
                  step ensures that vulnerabilities are truly closed.
                </li>
              </ol>
            </div>
            <div className="w-full lg:w-1/2 p-4 flex items-center justify-center">
              <Image
                src="/assets/çözümler/bulutforceguvenlikacigi.jpg"
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
                <strong>Communication and Awareness :</strong> All stakeholders
                within the business are informed about security vulnerabilities
                and the measures taken. This encourages a transparent approach.
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
                Data Protection
              </h3>
              <p className="text-gray-600">
                Vulnerability management helps protect sensitive data. Timely
                detection and remediation of vulnerabilities provides an
                effective defense against data leaks.
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
                Business Continuity
              </h3>
              <p className="text-gray-600">
                Vulnerability management is important to prevent interruptions
                that may occur due to security vulnerabilities, thus ensuring
                business continuity.
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
                Reputation Protection
              </h3>
              <p className="text-gray-600">
                Vulnerabilities damage a business's reputation. Effectively
                managing vulnerabilities helps maintain customer trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
