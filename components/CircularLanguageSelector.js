import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";

const LANGUAGES = [
  { code: "en", name: "English", flag: "gb" },
  { code: "fr", name: "French", flag: "fr" },
  { code: "it", name: "Italian", flag: "it" },
  { code: "es", name: "Spanish", flag: "es" },
  { code: "tr", name: "Turkish", flag: "tr" },
  { code: "ru", name: "Russian", flag: "ru" },
  { code: "ar", name: "Arabic", flag: "ae" },
  { code: "de", name: "German", flag: "de" },
];

const RADIUS = 32; // px, distance from center (smaller for navbar)
const SIZE = 20; // px, flag size (smaller for navbar)

export default function CircularLanguageSelector({ className = "" }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Hide default gTranslate widget
    const style = document.createElement("style");
    style.innerHTML = `.gtranslate_wrapper { display: none !important; }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleFlagClick = (lang) => {
    setOpen(false);
    if (window.gtranslateSettings && window.gtranslateSettings.switcher) {
      window.gtranslateSettings.switcher.switchTo(lang);
    } else {
      // fallback: set cookie and reload
      document.cookie = `googtrans=/en/${lang}`;
      window.location.reload();
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        position: "relative",
        width: 70,
        height: 70,
        display: "inline-block",
      }}
    >
      {/* Flags in a circle, only if open */}
      {open &&
        LANGUAGES.map((lang, i) => {
          const angle = (2 * Math.PI * i) / LANGUAGES.length - Math.PI / 2;
          const x = 33 + RADIUS * Math.cos(angle) - SIZE / 2;
          const y = 33 + RADIUS * Math.sin(angle) - SIZE / 2;
          return (
            <img
              key={lang.code}
              src={`https://hatscripts.github.io/circle-flags/flags/${lang.flag}.svg`}
              alt={lang.name}
              title={lang.name}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: SIZE,
                height: SIZE,
                cursor: "pointer",
                background: "white",
                transition: "transform 0.2s",
                zIndex: 10,
              }}
              onClick={() => handleFlagClick(lang.code)}
            />
          );
        })}
      {/* Center globe icon */}
      <div
        style={{
          position: "absolute",
          left: 17,
          top: 17,
          width: 32,
          height: 32,
          background: "#fff",
          borderRadius: "50%",
          zIndex: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => setOpen((v) => !v)}
      >
        <FaGlobeAmericas size={34} color="#1f4b68" />
      </div>
    </div>
  );
}
