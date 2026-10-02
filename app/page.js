import Image from "next/image";
import BrandSlider from "@/components/BrandSlider";
import Link from "next/link";
import SecurityCards from "@/components/SecurityCards";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[720px] md:h-[780px] flex flex-col justify-center items-center text-white px-4 pb-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/anasayfa/homePageVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>
        
        {/* Hero Title & Subtitle */}
        <div className="relative z-20 text-center flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wider break-words notranslate" translate="no">
            BULUTFORCE
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto">
            It is an expert technology company that provides all corporate cyber
            security services from a single location
          </p>
        </div>

        {/* Desktop Cards (Yarısı videoda, yarısı dışarıda) */}
        <SecurityCards />
      </section>

      {/* Mobile Cards (Mobil akış) */}
      <SecurityCards isMobile={true} />

      {/* Erken Tespit Arka Plan Image Section */}
      <section className="flex justify-center items-center px-4 mt-6 md:mt-64 py-4 md:py-6">
        <div className="relative w-full max-w-7xl md:px-0">
          <Image
            src="/assets/anasayfa/Todyl.jpeg"
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
            <h2 className="text-white text-xl sm:text-3xl md:text-5xl font-bold text-center px-4 md:px-0">
              Unified Cybersecurity and Data <br className="hidden sm:inline" />
              Protection with Todyl
            </h2>
          </div>
        </div>
      </section>

      {/* Highlights: Siber Güvenlik & MSP Section */}
      <section className="px-4 py-4 md:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Siber Güvenlik & SASE Card */}
            <div className="bg-white/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5">
                  Siber Güvenlik &amp; SASE
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Uçtan uca veri koruması, EDR/XDR ve SIEM entegrasyonu.
                </p>
              </div>
            </div>

            {/* 7/24 Kesintisiz MSP Card */}
            <div className="bg-white/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5">
                  7/24 Kesintisiz MSP
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Uzman kadro ile sürekli izleme ve operasyonel destek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Info Section
      <section
        className="relative py-32 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('/assets/anasayfa/bulutforceMaviDesenArkaplan.png')",
        }}
      >
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
                    src="/assets/anasayfa/bulutforce20yil.png"
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
      */}

      {/* Acronis Section */}
      <section className="flex justify-center items-center px-4 py-4 md:py-8">
        <div className="relative w-full max-w-7xl md:px-0">
          <Image
            src="/assets/anasayfa/acronishomepagenew.jpg"
            alt="Acronis Cyber Protect Cloud - Acronis Cyber Frame Solutions"
            width={1600}
            height={700}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
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
                    sizes="(max-width: 768px) 100vw, 33vw"
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
                    sizes="(max-width: 768px) 100vw, 33vw"
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
                    src="/assets/anasayfa/bulutforcedestekplanlari.jpg"
                    alt="Support Plans"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-16">
            Follow <span>Bulutforce</span>
          </h2>
          {/* <h2 className="text-4xl font-bold text-center text-black mb-16">
            Follow <span className="notranslate" translate="no">Bulutforce</span>
          </h2> */}

          <div className="grid md:grid-cols-4 gap-8">
            {/* Academy Card */}
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-4">
                <Image
                  src="/assets/anasayfa/bulutforceAkademi.png"
                  alt="Academy"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">Academy</h3>
              <p className="mb-6 text-gray-600 flex-grow">
                We train the experts of the future with our cyber security
                literature covering wide areas.
              </p>
              <Link
                href="/biz-kimiz/duyurular"
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-hover hover:cursor-pointer transition-colors duration-300 mt-auto"
              >
                Join the Academy
              </Link>
            </div>

            {/* Announcements Card */}
            <div className="flex flex-col items-center text-center h-full">
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
              <p className="mb-6 text-gray-600 flex-grow">
                We keep up to date with the world of information technology and
                inform our users about the latest risks.
              </p>
              <Link
                href="/biz-kimiz/duyurular"
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-hover hover:cursor-pointer transition-colors duration-300 mt-auto"
              >
                Follow Announcements
              </Link>
            </div>

            {/* Blog Card */}
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-4">
                <Image
                  src="/assets/anasayfa/bulutforceBlog.png"
                  alt="Blog"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">Blog</h3>
              <p className="mb-6 text-gray-600 flex-grow">
                We explain cyber security with blog posts that will help you
                improve your personal equipment.
              </p>
              <Link
                href="/biz-kimiz/duyurular"
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-hover hover:cursor-pointer transition-colors duration-300 mt-auto"
              >
                Read Blog Posts
              </Link>
            </div>

            {/* Events Card */}
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-4">
                <Image
                  src="/assets/anasayfa/bulutforceEtkinlikler.png"
                  alt="Events"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">Events</h3>
              <p className="mb-6 text-gray-600 flex-grow">
                We organize events where you can learn about trends and
                strategies in cybersecurity.
              </p>
              <Link
                href="/biz-kimiz/duyurular"
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-hover hover:cursor-pointer transition-colors duration-300 mt-auto"
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
            "url('/assets/anasayfa/bulutforcedetaylibilgiarkaplan.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay with hexagon pattern and locks */}
        <div className="absolute inset-0 bg-blue-900/40"></div>

        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center h-full">
          <div className="flex justify-center items-center">
            <div className="text-center max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
                PLEASE REACH US FOR DETAILED
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
