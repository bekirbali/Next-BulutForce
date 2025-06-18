import Image from "next/image";
import Link from "next/link";

export default function SecurityCards({ isMobile = false }) {
  const cards = [
    {
      title: "Information Security Solutions",
      description:
        "With Our Years Of Experience In The Field Of Information Security, We Introduce The Security Of Your Corporate Assets With Operational Excellence.",
      image: "/assets/anasayfa/bulutforceBilgiGuvenligi.jpg",
      link: "/cozumler/bilgi-guvenligi",
      alt: "Information Security Solutions",
    },
    {
      title: "Network Security Solutions",
      description:
        "Considering The Instant Changeability In Network Security, We Work In A Risk-Oriented Manner And Take Precautions Against Possible Malicious Attacks In Advance.",
      image: "/assets/anasayfa/bulutforceAgGuvenligi.jpg",
      link: "/cozumler/ag-guvenligi",
      alt: "Network Security Solutions",
    },
    {
      title: "Content Security Solutions",
      description:
        "We Value Your Corporate Data And Assets And Provide Special Cybersecurity Measures To Ensure Your Workflow Operates In Full Integration.",
      image: "/assets/anasayfa/bulutforceIcerikGuvenligi.jpg",
      link: "/cozumler/icerik-guvenligi",
      alt: "Content Security Solutions",
    },
  ];

  const Card = ({ card }) => (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <Image
          src={card.image}
          alt={card.alt}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-center flex-grow flex flex-col justify-between">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3 uppercase">
          {card.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6">{card.description}</p>
        <Link
          href={card.link}
          className="bg-[#1f4b68] text-white py-2 px-6 rounded-full hover:bg-[#173d57] transition-colors duration-300 uppercase text-sm font-medium mt-auto inline-block"
        >
          Get More Detailed Information
        </Link>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="md:hidden w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-56 w-full max-w-7xl z-30">
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
