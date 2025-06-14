"use client";

import { useEffect } from "react";

const LanguageSelector = () => {
  useEffect(() => {
    // Add Google Translate script
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,tr,de,fr,es", // English, Turkish, German, French, Spanish
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    return () => {
      // Cleanup
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        id="google_translate_element"
        className="bg-white rounded-lg shadow-lg p-2"
      ></div>
    </div>
  );
};

export default LanguageSelector;
