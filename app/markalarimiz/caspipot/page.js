import Image from "next/image";
import Link from "next/link";

export default function GuvenlikOtomasyonu() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/markalar/bulutforcecaspipotarkaplan.jpg"
          alt="Security Automation Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <div className="z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            WE ENSURE THE SECURITY OF YOUR VALUABLE DATA WITH CASPIPOT
          </h1>
        </div>
      </div>

      {/* Security Solutions Section */}
      <div className="py-16 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Operational Security Column */}
            <div className="flex flex-col items-center text-center p-6 group hover:bg-white hover:shadow-lg rounded-lg transition-all duration-300">
              <div className="w-24 h-24 rounded-full border-2 border-blue-700 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-transparent group-hover:bg-blue-700 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 uppercase mb-3">
                IMPROVE OPERATIONAL APPLICATION SECURITY
              </h3>
              <p className="text-gray-600">
                Defending your organization requires understanding who your
                attackers are, their most likely courses of action, and what
                attack techniques and methods they will use. Threat profiles are
                about establishing this context, the parameters and variables
                that impact your ability to defend effectively.
              </p>
            </div>

            {/* Defense Against Attacks Column */}
            <div className="flex flex-col items-center text-center p-6 group hover:bg-white hover:shadow-lg rounded-lg transition-all duration-300">
              <div className="w-24 h-24 rounded-full border-2 border-blue-700 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-transparent group-hover:bg-blue-700 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 uppercase mb-3">
                DEFENSE AGAINST ATTACKS IN ASM MONITOR
              </h3>
              <p className="text-gray-600">
                ASM plays a crucial role in identifying, assessing and
                mitigating these vulnerabilities.
              </p>
            </div>

            {/* Stress Tester Column */}
            <div className="flex flex-col items-center text-center p-6 group hover:bg-white hover:shadow-lg rounded-lg transition-all duration-300">
              <div className="w-24 h-24 rounded-full border-2 border-blue-700 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-transparent group-hover:bg-blue-700 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 uppercase mb-3">
                STRESS TESTER
              </h3>
              <p className="text-gray-600">
                During a stress test, various scenarios are simulated to push
                the web application to its limits. This includes scenarios such
                as a sudden increase in user traffic, a spike in transaction
                volume, or other events that could cause a significant increase
                in load. The goal is to identify performance issues, potential
                points of failure, and determine if the application can maintain
                acceptable levels of performance under stress.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Security Solution Layout */}
      <div
        className="flex flex-col md:flex-row items-center justify-center py-20 gap-10 bg-[#f8f8f8] rounded-2xl"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        {/* Image Section */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-1/2">
          <Image
            src="/assets/markalar/caspipotroket.png"
            alt="Rocket Girl Security"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
            The Perfect Solution for Application Security
          </h2>
          <p className="mb-6 text-gray-800">
            Protect your business against the latest cyber issues.
          </p>
          <ul className="list-disc pl-5 space-y-2 flex flex-col gap-4 text-gray-800">
            <li>Trap APPs</li>
            <li>Managed Web Service</li>
            <li>WAF Tester</li>
            <li>Breach Data Control</li>
            <li>WAF Rule Generator</li>
            <li>IOC Pool</li>
            <li>24/7 Automatic Reports</li>
            <li>Offensive Phishing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
