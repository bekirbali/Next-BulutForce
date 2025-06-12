import Image from "next/image";
import Link from "next/link";

export default function KullaniciDavranisiVeAnalizi() {
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
            User Behavior and Analytics
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

      {/* User Behavior Analytics Overview Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <p className="text-lg">
              With UBA solutions, we extract user behavior patterns across your
              online assets and apply algorithms and statistical analysis to
              detect significant potential anomalies from these patterns.
            </p>
          </div>

          <div className="text-center my-12">
            <h2 className="text-2xl font-semibold text-gray-800">
              It detects unknown threats and anomalous behavior using machine
              learning.
            </h2>
          </div>

          <div className="text-center mb-12">
            <p>
              UBA technologies analyze your historical data logs, including
              network and authentication logs collected and stored in daily log
              management and SIEM systems, to identify traffic patterns
              resulting from both normal and malicious user behavior.
            </p>
          </div>

          {/* Two-column layout with image on left, text on right */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            <div className="lg:w-[500px]">
              <Image
                src="/assets/çözümler/UBA.png"
                alt="User Behavior Analytics"
                width={500}
                height={350}
                className="object-contain"
              />
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
                The Importance of User Behavior
              </h3>

              <div className="space-y-6">
                <div>
                  <p>
                    <span className="font-semibold">
                      1. Personalized Experiences:
                    </span>{" "}
                    User behavior analytics helps businesses understand users'
                    interests and preferences, which can help them build loyalty
                    by offering more personalized content, products, and
                    services.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">
                      2. Product Development:
                    </span>{" "}
                    User behavior data provides insights for businesses to
                    improve their existing products and services, providing
                    guidance on which features are gaining traction or areas
                    needing improvements.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">
                      3. Marketing Strategies:
                    </span>{" "}
                    User behavior analysis is used to evaluate the impact of
                    marketing campaigns and shape future campaigns.
                    Understanding which channels are most effective ensures the
                    best use of budget.
                  </p>
                </div>
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
                Performs Advanced Threat Detection
              </h3>
              <p className="text-gray-600">
                It detects threats in your environment quickly and easily.
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
                Provides an Effective Response Process
              </h3>
              <p className="text-gray-600">
                Determines whether you can take action in response.
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
                Identifies Potential Problems
              </h3>
              <p className="text-gray-600">
                Analyzes problem details and solves them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
