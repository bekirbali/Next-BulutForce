import Image from "next/image";

export default function Kariyer() {
  return (
    <div>
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/bizkimiz/kariyerBanner.jpg"
          alt="Banner"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "brightness(0.4)" }}
        />
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">CAREER</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16 bg-gray-100">
        <div className="relative">
          <Image
            src="/assets/bizkimiz/kariyer.jpg"
            alt="Banner"
            width={1000}
            height={1000}
            className="object-cover object-center"
            style={{ filter: "brightness(0.8)" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 p-6 rounded-md max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white mb-3">
                OPEN POSITIONS
              </h2>
              <p className="text-white">
                Join our team and be part of our success story. We are looking
                for talented individuals who are passionate about innovation and
                excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
