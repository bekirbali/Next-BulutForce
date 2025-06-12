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
            DLP (Data Leak Prevention)
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Keeping your important data safe is a critical factor for the
            sustainability of your business. We help you maintain your
            competitive advantage by taking your business's data security to the
            highest level with DLP solutions.
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
              In today’s world where technology is rapidly advancing, data is
              among the most valuable assets of businesses. This data can
              contain a variety of sensitive information, from customer
              information to financial reports, and it is critical that it is
              properly protected. This is where data loss prevention (DLP)
              solutions come into play and aim to maximize data security for
              you.
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto font-semibold">
              Our company was founded by a team specialized in DLP solutions and
              offers comprehensive solutions for the needs of businesses to
              protect their sensitive data. With our understanding based on
              customer satisfaction and our experienced team in the field, we
              offer the best practices to monitor, classify and prevent leaks of
              your data.
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
                Data Monitoring and Classification
              </h3>
              <p className="text-gray-600">
                Knowing where your data is and how it’s being used is important.
                Our DLP solutions automatically track and classify your data,
                allowing you to track who is accessing your valuable
                information.
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
                Leak Prevention
              </h3>
              <p className="text-gray-600">
                We not only monitor your sensitive data, but also intervene
                immediately when there is a risk of leakage. We detect and
                prevent data leaks, so your security is always protected.
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
                Warning and Reporting
              </h3>
              <p className="text-gray-600">
                When it comes to data security, being proactive is vital. Our
                DLP solutions identify potential threats, alert users, and
                provide detailed reports so you can manage risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
