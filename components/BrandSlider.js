"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const BrandSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: true,
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: "white",
            borderRadius: "50%",
            display: "inline-block",
            margin: "0 5px",
          }}
        />
      );
    },
    dotsClass: "custom-dots-container",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const brands = [
    { name: "Pulse Secure", logo: "/assets/markalar/logos/pulseSecure.png" },
    { name: "RAPID7", logo: "/assets/markalar/logos/vectra.png" },
    { name: "Recorded Future", logo: "/assets/markalar/logos/skyron.png" },
    { name: "Brand 4", logo: "/assets/markalar/logos/paloalto.png" },
    { name: "Brand 5", logo: "/assets/markalar/logos/recorded.png" },
    { name: "Brand 6", logo: "/assets/markalar/logos/rapid.png" },
    { name: "Brand 7", logo: "/assets/markalar/logos/tripwire.png" },
    { name: "Brand 8", logo: "/assets/markalar/logos/proofpoint.png" },
  ];

  return (
    <div className="w-full overflow-hidden relative pb-16">
      <style jsx global>{`
        .custom-dots-container {
          position: absolute;
          bottom: -45px;
          width: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
          text-align: center;
          display: flex !important;
          justify-content: center;
        }
        .custom-dots-container li {
          position: relative;
          display: inline-block;
          margin: 0 5px;
          padding: 0;
          cursor: pointer;
        }
        .custom-dots-container li.slick-active div {
          opacity: 1;
        }
        .custom-dots-container li div {
          opacity: 0.5;
        }
      `}</style>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="px-4">
            <div className="text-center flex items-center justify-center h-10">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={50}
                className="mx-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSlider;
