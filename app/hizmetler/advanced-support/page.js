import Image from "next/image";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

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
            Advanced Support
          </h1>
          <p className="text-sm md:text-base text-white mt-4 max-w-3xl px-4 mx-auto">
            Our experts support your core business by protecting your complex IT
            environment. Our annual maintenance services offer our customers
            comprehensive support plans to meet their IT management needs.
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

      {/* Three-column feature section */}
      <div className="flex flex-col md:flex-row py-12 px-4 gap-4 max-w-5xl mx-auto">
        <div className="flex-1 p-8 flex items-center justify-center rounded-lg relative overflow-hidden shadow-md">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-600 z-0"></div>
          <p className="text-center max-w-md text-white relative z-10 font-medium">
            Our expert team members are equipped with the latest technology and
            industry trends. We provide you with the most up-to-date and
            effective solutions to increase your business's competitive
            advantage.
          </p>
        </div>

        <div className="flex-1 p-8 flex items-center justify-center rounded-lg relative overflow-hidden shadow-md">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-500 z-0"></div>
          <p className="text-center max-w-md text-white relative z-10 font-medium">
            Dealing with advanced complex problems requires experience and
            expertise. Our experienced team is here to solve complex problems
            quickly and effectively.
          </p>
        </div>

        <div className="flex-1 p-8 flex items-center justify-center rounded-lg relative overflow-hidden shadow-md">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 z-0"></div>
          <p className="text-center max-w-md text-white relative z-10 font-medium">
            Every business is different and has different requirements. Our
            advanced support services support you by providing solutions
            tailored to your business's specific needs.
          </p>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
            Our Advanced Support Services
          </h2>
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}
