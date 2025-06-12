import Image from "next/image";
import Link from "next/link";

export default function InstallationProfessionalServices() {
  return (
    <div>
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
            Installation and Professional Services
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Customer satisfaction depends on good technology and fast, smooth
            and successful implementation by professional experts. Our proven
            implementation methodology ensures your solution is done right the
            first time and helps you achieve maximum value.
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

      {/* Planning and Process Management Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Planning and Process Management
            </h2>
            <p className="text-gray-600">
              We analyze your corporate assets and determine the potential risk
              profile. We provide a mitigation report that outlines how to
              optimize your security policy, policy implementation, and disaster
              recovery. We develop an architecture customized to your unique
              environment and business needs to achieve your security goals.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[300px] w-full">
              <Image
                src="/assets/hizmetler/bulutforcekurulum1.jpg"
                alt="Security Planning"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Management and Development Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <div className="relative h-[300px] w-full">
              <Image
                src="/assets/hizmetler/bulutforcekurulum2.jpg"
                alt="Management and Development"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Management and Development
            </h2>
            <p className="text-gray-600">
              We offer full-focused guidance from our expert engineers on the
              installation, configuration and management of our security
              solutions. We also offer assistance in managing your project and
              allocating appropriate resources within the system to ensure a
              successful and timely rollout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
