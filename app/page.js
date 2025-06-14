import Image from "next/image";
import BrandSlider from "@/components/BrandSlider";
import Link from "next/link";
import SecurityCards from "@/components/SecurityCards";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[900px] flex flex-col justify-center items-center text-white pb-32 px-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/anasayfa/homePageVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        <div className="relative z-20 text-center flex flex-col justify-center items-center flex-grow">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-wider break-words">
            BULUTFORCE
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto">
            It is an expert technology company that provides all corporate cyber
            security services from a single location
          </p>
          <div className="relative w-full pt-24">
            <div className="max-w-xl md:max-w-3xl mx-auto">
              <BrandSlider />
            </div>
          </div>
        </div>
        {/* Desktop Cards */}
        <SecurityCards />
      </section>

      {/* Mobile Cards */}
      <SecurityCards isMobile={true} />

      {/* Erken Tespit Arka Plan Image Section */}
      <section className="flex justify-center items-center bg-white mt-24 py-48">
        <div className="relative w-full max-w-7xl">
          <Image
            src="/assets/anasayfa/bulutforceErkenTespitArkaPlan.jpg"
            alt="Earlier detection. Faster intervention. Lower risk."
            width={1600}
            height={700}
            className="w-full h-auto rounded-lg object-cover"
            priority
          />
          <div
            className="absolute inset-0 flex items-center justify-center rounded-lg"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <h2 className="text-white text-4xl md:text-5xl font-bold text-center">
              Earlier detection. Faster intervention.
              <br />
              Lower risk.
            </h2>
          </div>
        </div>
      </section>

      {/* Corporate Info Section */}
      <section
        className="relative py-32 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('/assets/anasayfa/bulutforceMaviDesenArkaplan.png')",
        }}
      >
        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1000 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-32"
            style={{ fill: "white" }}
          >
            <path
              opacity="0.15"
              d="M0 14C0 14 88.64 17.48 300 50C560 90 814 77 1003 40L1015 68L1018 104H0V14Z"
            ></path>
            <path
              opacity="0.3"
              d="M0 45C0 45 271 90.13 500 77C657 68 830 30 1015 14V100H0V45Z"
            ></path>
            <path d="M0 58C0 58 188.29 90 508 90C798 90 1002 55 1002 55V100H0V58Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-y-24 text-center">
                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/anasayfa/bulutforcekurumsal.png"
                    alt="Corporate Structure"
                    width={120}
                    height={120}
                  />
                  <p className="mt-4 max-w-xs">
                    Corporate Structure and expert team
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/anasayfa/bulutforceglobal.png"
                    alt="Global Brands"
                    width={120}
                    height={120}
                  />
                  <p className="mt-4 max-w-xs">
                    We form solution partnerships with Global Brands.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/anasayfa/bulutforce20yıl.png"
                    alt="Experience"
                    width={120}
                    height={120}
                  />
                  <p className="mt-4 max-w-xs">
                    More than 20 years professional service experience
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/assets/anasayfa/bulutforceUcnokta.png"
                    alt="Experience"
                    width={120}
                    height={120}
                  />
                  <p className="mt-4 max-w-xs">10,000+ endpoint user</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
              <Image
                src="/assets/anasayfa/bulutforcekilit.png"
                alt="Security Lock"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
              We Introduce Your Corporate Assets to Operational Excellence.
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              With Our Wide Range Of Cyber Security Solutions, We Analyze
              Potential Risks Early And Create Full Protection Layers To Ensure
              Continuity Of Workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Installation and Professional Services Card */}
            <Link
              href="/hizmetler/installation-professional-services"
              className="block"
            >
              <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                <div className="h-96 relative">
                  <Image
                    src="/assets/anasayfa/bulutforceKurulum.jpg"
                    alt="Installation and Professional Services"
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-opacity group-hover:bg-opacity-60"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <h3 className="text-white text-2xl font-bold text-center px-4">
                      Installation
                      <br />
                      and
                      <br />
                      Professional
                      <br />
                      Services
                    </h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Advanced Support Card */}
            <Link href="/hizmetler/advanced-support" className="block">
              <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                <div className="h-96 relative">
                  <Image
                    src="/assets/anasayfa/bulutforceileriduzeydestek.jpg"
                    alt="Advanced Support"
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-opacity group-hover:bg-opacity-60"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <h3 className="text-white text-2xl font-bold text-center px-4">
                      Advanced
                      <br />
                      Support
                    </h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Support Plans Card */}
            <Link href="/hizmetler/support-plans" className="block">
              <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                <div className="h-96 relative">
                  <Image
                    src="/assets/anasayfa/bulutforcedestekplanları.jpg"
                    alt="Support Plans"
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-opacity group-hover:bg-opacity-60"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <h3 className="text-white text-2xl font-bold text-center px-4">
                      Support Plans
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Follow Bulutforce Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-16">
            Follow Bulutforce
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Academy Card */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src="/assets/anasayfa/bulutforceAkademi.png"
                  alt="Academy"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">Academy</h3>
              <p className="mb-6 text-gray-600">
                We train the experts of the future with our cyber security
                literature covering wide areas.
              </p>
              <Link
                href="/biz-kimiz/duyurular"
                className="bg-blue-800 text-white py-2 px-6 rounded-md hover:bg-blue-900 transition-colors duration-300"
              >
                Join the Academy
              </Link>
            </div>

            {/* Announcements Card */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src="/assets/anasayfa/bulutforceduyurular.png"
                  alt="Announcements"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">
                Announcements
              </h3>
              <p className="mb-6 text-gray-600">
                We keep up to date with the world of information technology and
                inform our users about the latest risks.
              </p>
              <Link
                href="/biz-kimiz/duyurular"
                className="bg-blue-800 text-white py-2 px-6 rounded-md hover:bg-blue-900 transition-colors duration-300"
              >
                Follow Announcements
              </Link>
            </div>

            {/* Blog Card */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src="/assets/anasayfa/bulutforceBlog.png"
                  alt="Blog"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">Blog</h3>
              <p className="mb-6 text-gray-600">
                We explain cyber security with blog posts that will help you
                improve your personal equipment.
              </p>
              <Link
                href="/biz-kimiz/duyurular"
                className="bg-blue-800 text-white py-2 px-6 rounded-md hover:bg-blue-900 transition-colors duration-300"
              >
                Read Blog Posts
              </Link>
            </div>

            {/* Events Card */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src="/assets/anasayfa/bulutforceEtkinlikler.png"
                  alt="Events"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">Events</h3>
              <p className="mb-6 text-gray-600">
                We organize events where you can learn about trends and
                strategies in cybersecurity.
              </p>
              <Link
                href="/biz-kimiz/duyurular"
                className="bg-blue-800 text-white py-2 px-6 rounded-md hover:bg-blue-900 transition-colors duration-300"
              >
                Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Parallax Background */}
      <section
        className="relative py-32 bg-cover bg-center bg-fixed flex items-center justify-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('/assets/anasayfa/bulutforcedetaylıbilgiarkaplan.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay with hexagon pattern and locks */}
        <div className="absolute inset-0 bg-blue-900/40"></div>

        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center h-full">
          <div className="flex justify-center items-center">
            <div className="text-center max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
                PLEASE CONTACT US FOR DETAILED
                <br />
                INFORMATION AND PRICE OFFERS.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
