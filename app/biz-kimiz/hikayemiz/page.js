import Image from "next/image";
import Link from "next/link";

export default function Hikayemiz() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Banner Section */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/bizkimiz/ourstoryBanner.jpg"
          alt="Banner"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "brightness(0.6)" }}
        />
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            HİKAYEMİZ
          </h1>
        </div>
      </div>

      {/* Main Content with Light Background */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              It is an expert technology company that offers all the corporate
              cyber security services that an institution may need from a single
              place.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="h-56 w-56 mb-8 relative">
                <Image
                  src="/assets/bizkimiz/bulutforcebizkimizbina.png"
                  alt="Founded"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-center text-lg text-gray-800">
                Since 2012
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="h-56 w-56 mb-8 relative">
                <Image
                  src="/assets/bizkimiz/bulutforcebizkimizdunya.png"
                  alt="Global Reach"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-center text-lg text-gray-800">
                More than 165 solution partners in 13 countries
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="h-56 w-56 mb-8 relative">
                <Image
                  src="/assets/bizkimiz/bulutforcebizkimiztik.png"
                  alt="Experience"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-center text-lg text-gray-800">
                More than 20 years of professional service experience
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <div className="h-56 w-56 mb-8 relative">
                <Image
                  src="/assets/bizkimiz/bulutforcebizkimizcubuk.png"
                  alt="Users"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-center text-lg text-gray-800">
                450,000 endpoint users
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator using SVG */}
      <div className="w-full bg-white relative">
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ transform: "translateY(1px)" }}
        >
          <svg
            viewBox="0 0 1000 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-32"
          >
            <path
              className="fill-white"
              d="M500 47.0297C184.4 47.0297 -26 100 -26 100H1026C1026 100 815.6 47.0297 500 47.0297ZM1026 -5.94059H-26V-7H1026V-5.94059Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Support Section with Simple Parallax Background */}
      <div
        className="relative h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url('/assets/anasayfa/bulutforcedetaylıbilgiarkaplan.jpg')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(17, 24, 39, 0.75)" }}
        ></div>
        <div className="z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Yardım ve Destek Alın
          </h2>
          <p className="text-white text-opacity-90 text-lg mb-8">
            ÇÖZÜMLER, HİZMETLER, ETKİNLİKLER VEYA DİĞER SORULAR İÇİN İLETİŞİM
            FORMUNU DOLDURARAK DESTEK ALIN.
          </p>
          <div className="flex justify-center">
            <Link href="/iletisim">
              <button className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-md hover:bg-blue-50 transition duration-300 shadow-md">
                İLETİŞİM
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
