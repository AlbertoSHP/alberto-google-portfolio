import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "de", "es", "fr"],
    debug: true,
    interpolation: {
      alwaysFormat: false,
    },
    ns: [
      "common",
      "navbar",
      "footer",
    ],
    load: "languageOnly",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18next;
