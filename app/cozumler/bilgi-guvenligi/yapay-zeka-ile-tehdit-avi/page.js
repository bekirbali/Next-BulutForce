import Image from "next/image";
import Link from "next/link";

export default function YapayZekaIleTehditAvi() {
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
            Threat Hunting with Artificial Intelligence
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Redefining Cybersecurity
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
          <div className="text-center mb-12 flex flex-col gap-4">
            <p className="text-gray-600 max-w-4xl mx-auto font-semibold">
              As cyber threats become increasingly complex and sophisticated,
              traditional security methods are becoming inadequate. Therefore,
              artificial intelligence (AI) technology stands out as an effective
              weapon in threat hunting. AI offers a new perspective in cyber
              security to detect, analyze and prevent threats.
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto font-semibold">
              AI offers a smarter, faster and more effective approach to threat
              hunting. Without being limited by traditional security methods,
              businesses can get ahead of threats more effectively with big data
              analysis and learning capabilities.
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto font-semibold">
              AI plays a key role in detecting anomalies and potential threats
              thanks to its ability to quickly analyze large amounts of data. AI
              algorithms identify anomalies and potential security breaches by
              learning normal usage patterns. This helps detect threats at an
              early stage and speeds up response times.
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
                Threat Detection and Analysis
              </h3>
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
                Automatic Response and Action
              </h3>
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
                Continuous Learning and Adapting
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
