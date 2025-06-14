import Image from "next/image";

export default function Iletisim() {
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
            Communication
          </h1>
        </div>
      </div>
      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-8 justify-items-center">
        {/* Address */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/iletişim/bulutforceadres.png"
            alt="Address Icon"
            width={64}
            height={64}
            className="mb-2"
          />
          <h2 className="font-semibold text-lg mb-1">Address</h2>
          <div>Propa Plus Residence</div>
          <div>Şişli/Istanbul</div>
        </div>
        {/* Telephone */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/iletişim/bulutforcetelefon.png"
            alt="Telephone Icon"
            width={64}
            height={64}
            className="mb-2"
          />
          <h2 className="font-semibold text-lg mb-1">Telephone</h2>
          <div>+90 850 308 0246</div>
        </div>
        {/* E-mail */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/iletişim/bulutforcemail.png"
            alt="E-mail Icon"
            width={64}
            height={64}
            className="mb-2"
          />
          <h2 className="font-semibold text-lg mb-1">E-mail</h2>
          <div>onder.kucuk@bulutforce.com</div>
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-lg overflow-hidden shadow mb-12">
        {/* Left: Image */}
        <div className="h-full w-full">
          <Image
            src="/assets/iletişim/bulutforceiletisimanaresim.jpg"
            alt="Contact Visual"
            width={800}
            height={600}
            className="object-cover w-full h-full min-h-[400px]"
            style={{ height: "100%" }}
          />
        </div>
        {/* Right: Form */}
        <form
          className="p-8 flex flex-col gap-4 justify-between h-full"
          style={{ minHeight: "400px" }}
        >
          <div>
            <label className="block mb-1 font-semibold">Name-Surname</label>
            <input type="text" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              The Institution You Work For
            </label>
            <input type="text" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Your message</label>
            <textarea className="w-full border rounded px-3 py-2 min-h-[120px]" />
          </div>
          <button
            type="submit"
            className="bg-[#1976d2] text-white px-6 py-2 rounded mt-2 w-24"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
