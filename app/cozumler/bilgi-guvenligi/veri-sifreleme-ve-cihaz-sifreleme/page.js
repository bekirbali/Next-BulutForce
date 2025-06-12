import Image from "next/image";
import Link from "next/link";

export default function VeriSifrelemeVeCihazSifreleme() {
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
            Data Encryption and Device Encryption
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Data and device encryption is an integral part of modern
            cybersecurity strategies.
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
              Data and device encryption is one of the key strategies in
              cybersecurity. These methods ensure that sensitive data and
              devices are protected from unauthorized access, so businesses and
              individuals can maintain the highest level of data security.
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto font-semibold">
              Data and device encryption is an integral part of modern
              cybersecurity strategies, enabling businesses and individuals to
              securely manage their digital assets, with benefits such as data
              privacy, protection against unauthorized access, and regulatory
              compliance.
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
                Data Protection
              </h3>
              <p className="text-gray-600">
                Data encryption involves encoding sensitive data in a complex
                format using an encryption algorithm. This prevents unauthorized
                access to data, and if data is stolen, it is very difficult to
                decipher the stolen data. Data encryption not only ensures
                confidentiality but also supports regulatory compliance.
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
                Device Security
              </h3>
              <p className="text-gray-600">
                Device encryption ensures that data remains safe, especially in
                the event of loss or theft of portable devices such as mobile
                devices and laptops. When device encryption is used,
                authentication is required to unlock the device and access data.
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
                Preventing Data Leaks
              </h3>
              <p className="text-gray-600">
                Data and device encryption greatly prevents data leaks. If a
                device is stolen or lost, the risk of data leaks is minimized as
                unauthorized access to encrypted data cannot be gained. This
                helps protect business reputation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
