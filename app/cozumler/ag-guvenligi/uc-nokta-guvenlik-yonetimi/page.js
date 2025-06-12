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
            Endpoint Security Management
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            The key to device protection strategy
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

      {/* Endpoint Security Management Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-800 mb-8">
              Today, protecting businesses and individuals from cyber threats is
              not limited to network and infrastructure security. Endpoint
              security management is a strategic approach that aims to protect
              end-user devices (computers, mobile devices, tablets). Endpoint
              security protects the data and applications on these devices,
              while providing an effective defense mechanism against cyber
              threats.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              The Importance of Endpoint Security Management:
            </h2>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Multi-Device Protection:
                  </h3>
                  <p className="text-gray-700">
                    Businesses access data across different types of devices.
                    Endpoint security makes it easy to maintain security
                    standards across this variety of devices.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Data Protection:
                  </h3>
                  <p className="text-gray-700">
                    Endpoint security ensures that data stored or processed on
                    devices is protected. This prevents data leaks and malware
                    threats.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Malware Detection and Blocking:
                  </h3>
                  <p className="text-gray-700">
                    Endpoint security solutions detect and block malware and
                    viruses.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Advanced Monitoring and Analysis:
                  </h3>
                  <p className="text-gray-700">
                    Endpoint security monitors the activities taking place on
                    devices, detects and analyzes anomalies. This helps detect
                    cyberattacks at an early stage.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 relative h-[200px]">
              <Image
                src="/assets/çözümler/bulutforceucnokta.jpg"
                alt="Endpoint security management"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-70 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-center px-4 font-medium">
                  Endpoint security management plays a critical role in the
                  digital world where cyber threats are on the rise.
                </p>
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
                Antivirus and Antimalware Protection
              </h3>
              <p className="text-gray-600">
                Antivirus and antimalware solutions are used to protect against
                malware.
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
                Advanced Threat Analysis
              </h3>
              <p className="text-gray-600">
                Endpoint security solutions detect and analyze advanced threats
                and identify anomalous activities using behavioral analysis and
                artificial intelligence techniques.
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
                Device Management and Monitoring
              </h3>
              <p className="text-gray-600">
                Endpoint security allows for remote management and monitoring of
                devices. This makes it easy to implement security updates and
                policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
