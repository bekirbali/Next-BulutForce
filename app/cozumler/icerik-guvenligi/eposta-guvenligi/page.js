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
            Email Encryption and WEB Security
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Secures messaging, web, and other applications that intruders could
            use as entry points to your data.
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

      {/* Holistic Security Approach Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Holistic Security Approach
            </h2>
            <p className="text-gray-600 mt-2">
              We help you protect your applications and data with a holistic
              approach that includes email and web security, application code
              reviews and vulnerability testing, and data loss prevention
              programs.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-10 max-w-5xl mx-auto">
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Email Security: Protecting Your Communications
                </h3>
                <p className="text-gray-600">
                  Although email is a widely used means of communication, it
                  requires extra security measures to ensure the confidentiality
                  of data sent and received. Email encryption is a method used
                  to protect data from unauthorized access. This process ensures
                  that messages can only be read by the recipient and helps keep
                  important data safe.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  WEB Security: Protecting Digital Assets
                </h3>
                <p className="text-gray-600">
                  Web security involves a set of measures aimed at keeping data
                  and services on the internet safe. Securing websites,
                  applications, and other online assets is critical for
                  businesses and individuals alike.
                </p>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/assets/çözümler/bulutforceepostasifreleme.jpg"
                alt="Security Solutions"
                width={500}
                height={400}
                className="object-contain rounded-lg shadow-lg"
              />
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
                Security
              </h3>
              <p className="text-gray-600">
                Email encryption ensures that data in messages is transmitted in
                a way that only the recipient can read, preventing confidential
                information from falling into the hands of unauthorized persons.
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
                Data Protection
              </h3>
              <p className="text-gray-600">
                Encryption ensures that data is protected while it is being
                transmitted or stored. This minimizes the risk of leaking
                sensitive information.
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
                Compatibility
              </h3>
              <p className="text-gray-600">
                In some industries, the secure transmission of sensitive data
                may be a legal requirement. Email encryption is used to meet
                these requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
