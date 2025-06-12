import Image from "next/image";
import Link from "next/link";

export default function SiberRiskPuanlamasi() {
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
            Cyber ​​Risk Scoring
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Cyber ​​risk scoring solutions provide an accurate assessment of an
            organization's cybersecurity posture
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
            <p className="text-md text-gray-600 max-w-4xl mx-auto font-semibold">
              Cyber ​​risk scoring is a strategic approach developed to ensure
              that an organization is protected against cyber threats and
              security breaches. In today's digital world, cyber risks faced by
              businesses have become increasingly complex and serious.
              Therefore, businesses must be prepared for cyber risks and create
              defense mechanisms against possible attacks.
            </p>
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
                Risk assessment
              </h3>
              <p className="text-gray-600">
                The first step is to identify and assess the business's cyber
                risks. This involves identifying potential threats,
                vulnerabilities, and critical assets. Risks are classified and
                prioritized.
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
                Prevention and Protection
              </h3>
              <p className="text-gray-600">
                At the heart of cyber risk planning is preventing attacks and
                closing vulnerabilities. At this stage, the company implements
                technical measures such as security software, firewalls, access
                controls and encryption, as well as organizational measures such
                as staff training and security policies.
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
                Detection and Monitoring
              </h3>
              <p className="text-gray-600">
                Detecting attacks and responding quickly is an important element
                of cyber risk planning. The business needs to establish
                continuous monitoring and detection systems to detect anomalies
                at an early stage and proactively respond to potential threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
