import Image from "next/image";

export default function Skyron() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Skyron</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
          <div className="p-6">
            <p className="text-lg text-gray-700 mb-6">
              Skyron is our advanced cloud security platform that provides
              comprehensive protection for your cloud infrastructure and
              applications. With AI-powered threat detection and automated
              response capabilities, Skyron ensures your cloud environment stays
              secure against evolving cyber threats.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Key Features
            </h2>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                Multi-cloud security management (AWS, Azure, Google Cloud)
              </li>
              <li className="mb-2">
                Continuous compliance monitoring and reporting
              </li>
              <li className="mb-2">
                Cloud workload protection and container security
              </li>
              <li className="mb-2">
                Identity and access management integration
              </li>
              <li className="mb-2">Data loss prevention for cloud storage</li>
              <li className="mb-2">
                Advanced threat intelligence and behavior analytics
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Use Cases
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Cloud Migration Security
                </h3>
                <p className="text-gray-700">
                  Ensure secure migration of applications and data to cloud
                  environments.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  DevSecOps Integration
                </h3>
                <p className="text-gray-700">
                  Integrate security into CI/CD pipelines for secure application
                  deployment.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Regulatory Compliance
                </h3>
                <p className="text-gray-700">
                  Maintain compliance with standards like GDPR, HIPAA, and PCI
                  DSS in cloud environments.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Hybrid Cloud Security
                </h3>
                <p className="text-gray-700">
                  Unified security management across on-premises and cloud
                  infrastructure.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="bg-blue-900 text-white py-3 px-8 rounded-full hover:bg-blue-800 transition-colors duration-300">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
