"use client";

import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          institution: "",
          message: "",
        });
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error(
          "An error occurred while sending the message. Please try again.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
          <div>
            Esentepe neighborhood Martyr Mehmet Miktat Uluünlü Str.No:26/26
            34394 Şişli/Istanbul
          </div>
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
          <div>info@bulutforce.com</div>
        </div>
      </div>
      {/* Map Section */}
      <div className="max-w-7xl mx-auto my-12">
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.6596245466!2d28.871754966406247!3d41.005495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zxZ5pxZ9saSwgxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1709912345678!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BulutForce Location"
          ></iframe>
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
        {/* bf: xrbkkdko */}
        {/* my: xvgrrlzn */}
        <form
          action="https://formspree.io/f/xrbkkdko"
          method="POST"
          onSubmit={handleSubmit}
          className="p-8 flex flex-col gap-4 justify-between h-full"
          style={{ minHeight: "400px" }}
        >
          <div>
            <label className="block mb-1 font-semibold">Name-Surname</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              The Institution You Work For
            </label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Your message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 min-h-[120px]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#1f4b68] text-white px-6 py-2 rounded mt-2 w-24 min-w-fit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
