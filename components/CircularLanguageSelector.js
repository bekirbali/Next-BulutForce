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

const RADIUS = 28; // px, distance from center
const SIZE = 20; // px, flag size

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

  const handleFlagClick = (langCode) => {
    setOpen(false);
    const targetPair = `en|${langCode}`;

    // Set cookie correctly for Google Translate (googtrans=/en/langCode)
    const cookieVal = langCode === "en" ? "" : `/en/${langCode}`;
    const expires = langCode === "en" ? "; expires=Thu, 01 Jan 1970 00:00:00 GMT" : "";

    document.cookie = `googtrans=${cookieVal}; path=/${expires}`;
    if (typeof window !== "undefined" && window.location.hostname && window.location.hostname !== "localhost") {
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${window.location.hostname}${expires}`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=.${window.location.hostname}${expires}`;
    }

    // 1. Try global doGTranslate function from float.js
    if (typeof window.doGTranslate === "function") {
      window.doGTranslate(targetPair);
      const gtSelect = document.querySelector(".gt_selector");
      if (gtSelect) {
        gtSelect.value = targetPair;
      }
      return;
    }

    // 2. Try triggering select dropdown if present
    const gtSelect = document.querySelector(".gt_selector");
    if (gtSelect) {
      gtSelect.value = targetPair;
      gtSelect.dispatchEvent(new Event("change"));
      return;
    }

    // 3. Fallback: Page reload with set cookie
    window.location.reload();
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        width: 76,
        height: 76,
      }}
    >
      {/* Flags in a circle, only if open */}
      {open &&
        LANGUAGES.map((lang, i) => {
          const angle = (2 * Math.PI * i) / LANGUAGES.length - Math.PI / 2;
          const x = 38 + RADIUS * Math.cos(angle) - SIZE / 2;
          const y = 38 + RADIUS * Math.sin(angle) - SIZE / 2;
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
                zIndex: 10,
              }}
              className="hover:scale-125 transition-transform duration-150 rounded-full shadow-sm"
              onClick={() => handleFlagClick(lang.code)}
            />
          );
        })}
      {/* Center globe icon */}
      <button
        type="button"
        aria-label="Toggle language menu"
        style={{
          width: 34,
          height: 34,
          background: "#fff",
          borderRadius: "50%",
          zIndex: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: open ? "0 0 0 2px rgba(31, 75, 104, 0.25)" : "none",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
        }}
        className="hover:scale-110 active:scale-95 border-0 p-0"
        onClick={() => setOpen((v) => !v)}
      >
        <FaGlobeAmericas size={30} className="text-primary" />
      </button>
    </div>
  );
}
