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
            Malware Analysis and Detection
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Advanced Steps in Preventing Digital Threats
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
            <p className="text-gray-600 max-w-4xl mx-auto">
              Malware has become a rapidly evolving threat in the cyber world.
              People, businesses, and even governments are in dire need of
              malware analysis and detection methods to protect themselves from
              these threats and keep their data safe. These processes are vital
              to detecting, analyzing, and neutralizing threats.
            </p>
          </div>

          <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2 p-4">
              <ol className="list-decimal space-y-6 text-left pl-4">
                <li>
                  <strong>Detection and Collection:</strong> The malware
                  analysis process starts with identifying potential malware
                  samples. These samples can come from different sources such as
                  security logs, email attachments, or malicious links.
                </li>

                <li>
                  <strong>Analyze and Isolate:</strong> Samples are isolated and
                  analyzed in a secure environment. This step is important to
                  understand how the malware works, what effects it has, and how
                  it spreads.
                </li>

                <li>
                  <strong>Root Cause Analysis:</strong> A more in-depth analysis
                  is performed to understand the root causes, such as how the
                  malware was developed, what vulnerabilities it targeted, and
                  how it spread.
                </li>
              </ol>
            </div>
            <div className="w-full lg:w-1/2 p-4 flex items-center justify-center">
              <Image
                src="/assets/çözümler/bulutforcekotuamacli.jpg"
                alt="Malware Analysis"
                width={500}
                height={300}
                className="object-contain h-[400px]"
              />
            </div>
          </div>

          <div className="w-full px-4 mb-12 max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Malware Detection:
            </h3>
            <ol className="list-decimal space-y-6 text-left pl-4">
              <li>
                <strong>Signature-Based Detection:</strong> Signatures of
                malware with certain characteristics are identified and malware
                bearing these signatures are detected. However, it may be
                difficult to detect new or original malware.
              </li>
              <li>
                <strong>Behavior-Based Detection:</strong> The behavioral
                patterns of malware are analyzed. When abnormal behavior or
                atypical operations are detected, malware can be detected.
              </li>
              <li>
                <strong>Machine Learning and AI:</strong> Machine learning and
                AI algorithms can detect malware by spotting anomalies and
                patterns in large data sets, providing better protection against
                constantly updated threats.
              </li>
            </ol>
            <p className="mt-6 text-gray-600">
              Malware analysis and detection are a cornerstone of a
              cybersecurity strategy. These processes are essential for
              businesses and individuals to protect their digital assets,
              prevent data leaks, and become more resilient to cyberattacks.
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
                Strategy
              </h3>
              <p className="text-gray-600">
                Malware analysis and detection is a cornerstone of any
                cybersecurity strategy.
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
                Period
              </h3>
              <p className="text-gray-600">
                Protecting the digital assets of businesses and individuals is
                important to prevent data leaks and become more resilient to
                cyberattacks.
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
                Behaviour
              </h3>
              <p className="text-gray-600">
                Malware behavior patterns are analyzed. Malware can be detected
                when abnormal behavior or atypical operations are detected .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
