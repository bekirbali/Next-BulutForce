import Image from "next/image";
import Link from "next/link";

export default function UygulamaGuvenligi() {
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
            Application Security
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Application Security: Minimizing Risks in the Digital World
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
          <div className="text-center flex flex-col gap-4 mb-12">
            <p className="text-gray-600 max-w-4xl mx-auto font-semibold">
              Application security is a vital issue for businesses and
              individuals in today’s digital age. Securing mobile apps,
              websites, and other software is an important step in combating
              data leaks, cyberattacks, and other threats.
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto font-semibold">
              Application security not only ensures the safety of users, but
              also protects the reputation of the business. Creating application
              security strategies to protect user data, prevent data leaks, and
              counter malicious attacks is a must-have in the modern digital
              world.
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
                Weak Point Detection
              </h3>
              <p className="text-gray-600">
                Application security involves identifying and remediating
                vulnerabilities in software that could lead to cyber attackers
                attempting to infiltrate the system or perform malicious
                activities.
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
                Code Security
              </h3>
              <p className="text-gray-600">
                It requires the software code to be secure and error-free. To
                block malware and protect against data leaks, software code must
                be written properly and comply with security standards. Secure
                coding practices largely prevent cyber threats.
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
                Continuous Monitoring and Update
              </h3>
              <p className="text-gray-600">
                It does not end at one point. The application must be constantly
                monitored, tracked for security threats, and updated with new
                security measures. Continuous security audits throughout the
                application lifecycle are important to minimize potential risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
