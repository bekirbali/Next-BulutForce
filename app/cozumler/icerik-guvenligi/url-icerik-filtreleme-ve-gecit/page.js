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
            URL / Content Filtering and Gateway
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Safe and Productive Digital Experience
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

      {/* URL/Content Filtering and Gateway Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                URL/Content Filtering and Gateway Solutions
              </h2>
              <p className="text-gray-700 mb-6">
                URL/Content filtering and gateway solutions are important
                security tools that enable businesses to control and manage
                network traffic. These solutions increase network security by
                protecting against malicious content, while also optimizing
                employee productivity and resource utilization.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                URL/Content Filtering:
              </h3>
              <p className="text-gray-700">
                URL/Content filtering is used to control users' access to
                certain websites or types of content. These solutions allow
                blocking certain categories (e.g. social media, gaming sites) or
                harmful sites (phishing, malware). This limits users' access to
                sites that may contain unsafe content or cause time-wasting.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Gateway:
              </h3>
              <p className="text-gray-700">
                A gateway is a point that directs and controls network traffic.
                Gateway solutions monitor, analyze and, if necessary, block
                incoming and outgoing traffic. This increases network security
                by filtering malicious traffic, while also ensuring high
                performance and efficiency.
              </p>
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
                Protection from Harmful Content
              </h3>
              <p className="text-gray-600">
                Malicious websites, malware, and phishing attacks have the
                potential to harm users' devices or steal sensitive information.
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
                Efficiency and Productivity
              </h3>
              <p className="text-gray-600">
                These solutions are used to ensure that users stay productive at
                work or school and prevent them from wasting time on unnecessary
                content.
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
                Traffic Control
              </h3>
              <p className="text-gray-600">
                URL/Content filtering and gateway solutions ensure efficient use
                of bandwidth, for example by controlling excessive consumption
                of video and media content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
