import Image from "next/image";

export default function Caspipot() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Caspipot</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
          <div className="p-6">
            <p className="text-lg text-gray-700 mb-6">
              Caspipot is our flagship IoT security solution that protects your
              connected devices and industrial control systems from cyber
              threats. With advanced monitoring capabilities and real-time
              threat detection, Caspipot ensures your IoT ecosystem remains
              secure.
            </p>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Key Features
            </h2>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                Real-time device monitoring and anomaly detection
              </li>
              <li className="mb-2">
                Secure communication protocols for IoT devices
              </li>
              <li className="mb-2">
                Automated vulnerability scanning and patching
              </li>
              <li className="mb-2">
                Custom security policies for different device types
              </li>
              <li className="mb-2">
                Integration with existing security infrastructure
              </li>
              <li className="mb-2">
                Comprehensive dashboard for threat visualization
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Use Cases
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Smart Buildings
                </h3>
                <p className="text-gray-700">
                  Protect connected building systems including HVAC, lighting,
                  and access control.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Industrial IoT
                </h3>
                <p className="text-gray-700">
                  Secure industrial control systems and manufacturing equipment.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Healthcare Devices
                </h3>
                <p className="text-gray-700">
                  Ensure medical devices comply with security standards and
                  patient data is protected.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Smart Cities
                </h3>
                <p className="text-gray-700">
                  Protect public infrastructure and connected city services from
                  cyber attacks.
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
