import Image from "next/image";
import Link from "next/link";

export default function GuvenlikYapilandirilmasiVeUyumluluk() {
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
            Security Configuration and Compliance
          </h1>
          <div className="mt-8">
            <Link href="/hizmetler/support-plans">
              <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors hover:cursor-pointer">
                SUPPORT PLANS
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Security Configuration and Compatibility Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Security Configuration */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Security Configuration
              </h2>
              <p className="text-gray-600 mb-4">
                Security of cloud services is one of the top priorities for
                businesses to protect their sensitive data. Security
                configuration involves properly setting up, configuring, and
                managing cloud infrastructure and services.
              </p>
              <p className="text-gray-600 mb-4">
                When working with cloud providers, businesses need to take
                effective security measures to ensure the security and privacy
                of their data. This includes steps such as establishing strong
                authentication and authorization policies, using data
                encryption, and installing firewalls and intrusion detection
                systems.
              </p>
              <p className="text-gray-600">
                It is also important to carefully examine the security features
                offered by cloud service providers. Providers that have industry
                compliance standards such as ISO 27001, SOC 2, PCI DSS should be
                preferred. Security configuration protects against attacks and
                protects the reputation of businesses.
              </p>
            </div>

            {/* Compatibility */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Compatibility
              </h2>
              <p className="text-gray-600 mb-4">
                Many industries today are subject to strict regulations
                regarding data storage and processing, so it is important for
                businesses to comply with these regulations when using cloud
                services.
              </p>
              <p className="text-gray-600 mb-4">
                Businesses in industries like healthcare, finance, and education
                must be compliant, especially when handling sensitive data like
                personal health information (PHI), financial data, and student
                records. This compliance may require following regulations like
                HIPAA, GDPR, and CCPA.
              </p>
              <p className="text-gray-600">
                Compliance certifications of cloud providers are also important.
                Compliance with data location, data protection and reporting
                requirements will help businesses ease their compliance
                processes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Automation Features Section */}
      <div className="py-16">
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
                Offers Policy Flexibility
              </h3>
              <p className="text-gray-600">
                SCM solutions offer a multitude of policies and configurations,
                thus allowing organizations to tune the tool as per their
                requirements.
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
                Provides Operating System and Application Support
              </h3>
              <p className="text-gray-600">
                Provides support for every operating system and application in
                solution environments.
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
                Controls the Operational Cycle
              </h3>
              <p className="text-gray-600">
                SCM solutions enable manual action by reporting configuration
                issues to the help desk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
