import { createI18n } from "vue-i18n";

// Import translates languages
import enStatic from "../locales/en/static.json";
import enHome from "../locales/en/home.json";
import sqStatic from "../locales/sq/static.json";
import sqHome from "../locales/sq/home.json";
import itStatic from "../locales/it/static.json";
import itHome from "../locales/it/home.json";

// Importing the i18n library and the translation files for all languages.
export const availableLanguages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "sq", label: "Albanian", flag: "🇦🇱" },
  { code: "it", label: "Italian", flag: "🇮🇹" },
];

// Importing the translation files for each language
const en = {
  ...enStatic,
  ...enHome,
};
const sq = {
  ...sqStatic,
  ...sqHome,
};
const it = {
  ...itStatic,
  ...itHome,
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en", // Selected language
  fallbackLocale: "en", // Fallback language if the selected one is not available

  // Define the available languages
  messages: {
    en, // English
    sq, // Albanian
    it, // Italian
  },
  datetimeFormats: {
    en: en.datetimeFormats,
    sq: sq.datetimeFormats,
    it: it.datetimeFormats,
  },
  numberFormats: {
    en: en.numberFormats,
    sq: sq.numberFormats,
    it: it.numberFormats,
  },
});

export default i18n;
