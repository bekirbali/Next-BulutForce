import Image from "next/image";
import Link from "next/link";

export default function KurumsalGuvenlikOperasyonu() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
            Corporate Security Operations
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Security orchestration replaces manual incident response processes
            with machine learning decision making
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

      {/* Security Orchestration Overview Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-10">
              Security orchestration involves combining people, processes, and
              technology in the most effective way to strengthen an
              organization's security architecture. By streamlining security
              processes, connecting different security tools and technologies,
              and maintaining the right balance between machine-assisted
              security automation and human intervention, security professionals
              are empowered to conduct incident response effectively and
              efficiently.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  The Importance of Corporate Security
                </h2>
                <p className="text-gray-700 mb-4">
                  Corporate security operations aim to protect the IT
                  infrastructure, data and other digital assets of the business.
                  These operations are of great importance in the following
                  areas:
                </p>
                <ol className="space-y-6 mt-6">
                  <li className="flex">
                    <span className="font-bold mr-2">1.</span>
                    <div>
                      <span className="font-bold">Data Security:</span>{" "}
                      Businesses need to protect sensitive customer information,
                      financial data, and other critical information. Enterprise
                      security operations defend against data leaks and
                      malicious attacks.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">2.</span>
                    <div>
                      <span className="font-bold">
                        Vulnerability Management:
                      </span>{" "}
                      Identifying and remediating vulnerabilities in systems is
                      a fundamental part of security operations. This helps
                      prevent potential attacks.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">3.</span>
                    <div>
                      <span className="font-bold">Damage Mitigation:</span> In
                      the event of attacks or security breaches, a rapid and
                      effective response is required. Enterprise security
                      operations are designed to mitigate the effects of attacks
                      and ensure business continuity.
                    </div>
                  </li>
                </ol>
              </div>

              {/* Right Column */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Elements of a Corporate Security Operation
                </h2>
                <p className="text-gray-700 mb-4">
                  The enterprise security operation may include the following
                  elements:
                </p>
                <ol className="space-y-6 mt-6">
                  <li className="flex">
                    <span className="font-bold mr-2">1.</span>
                    <div>
                      <span className="font-bold">
                        Monitoring and Detection:
                      </span>{" "}
                      Continuous monitoring of systems and detection of
                      anomalies is important to identify potential threats in
                      advance.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">2.</span>
                    <div>
                      <span className="font-bold">Penetration Tests:</span>{" "}
                      Penetration tests performed by ethical hackers to detect
                      vulnerabilities in the business's systems help in
                      resolving the vulnerabilities.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">3.</span>
                    <div>
                      <span className="font-bold">Incident Response:</span>{" "}
                      Rapid response to security incidents and breaches helps
                      reduce damage.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">4.</span>
                    <div>
                      <span className="font-bold">Training and Awareness:</span>{" "}
                      Training employees on security issues and increasing their
                      awareness helps reduce human-related security risks.
                    </div>
                  </li>
                </ol>
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
                Centralize Security Incident Data
              </h3>
              <p className="text-gray-600">
                Ensure that all the information needed to effectively respond to
                an incident is available in a single interface, making it easier
                for security teams to quickly understand threats.
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
                Practice Incident Response
              </h3>
              <p className="text-gray-600">
                If the potential threat is part of a broader pattern, leverage
                threat intelligence and other IOC platforms to quickly
                understand the security regulatory issue and facilitate
                effective action.
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
                Optimized Security
              </h3>
              <p className="text-gray-600">
                Streamline complex processes and create consistent incident
                response workflows that minimize the potential for error.
                Simplify security operations management and enable teams to
                focus on threats that require human decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
