"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    arrows: true,
    pauseOnHover: true,
    customPaging: function (i) {
      return (
        <div
          style={{
            display: "none",
          }}
        />
      );
    },
    dotsClass: "custom-dots-container",
  };

  // Images for the slider
  const images = [
    {
      src: "/assets/hizmetler/bulutforceozelcozum1.jpg",
      alt: "Advanced Support Image 1",
      title: "Customized Solutions",
    },
    {
      src: "/assets/hizmetler/bulutforceozelcozum2.jpg",
      alt: "Advanced Support Image 2",
      title: "Mastery of Technology",
    },
    {
      src: "/assets/hizmetler/bulutforceozelcozum3.jpg",
      alt: "Advanced Support Image 3",
      title: "Proactive Monitoring",
    },
    {
      src: "/assets/hizmetler/bulutforceozelcozum4.jpg",
      alt: "Advanced Support Image 3",
      title: "Complex Problems",
    },
  ];

  return (
    <div className="w-full overflow-hidden relative pb-16">
      <style jsx global>{`
        .custom-dots-container {
          position: absolute;
          bottom: -30px;
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
        .slick-prev,
        .slick-next {
          font-size: 0;
          line-height: 0;
          position: absolute;
          top: 50%;
          display: block;
          width: 40px;
          height: 40px;
          padding: 0;
          transform: translate(0, -50%);
          cursor: pointer;
          color: transparent;
          border: none;
          outline: none;
          background: transparent;
          border-radius: 50%;
          z-index: 1;
        }
        .slick-prev:before,
        .slick-next:before {
          font-size: 30px;
          color: white;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        .slick-prev {
          left: 20px;
        }
        .slick-next {
          right: 20px;
        }
      `}</style>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[500px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 flex flex-col justify-start items-center text-white p-8 pt-16"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <h3 className="text-3xl font-bold mb-4">{image.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
