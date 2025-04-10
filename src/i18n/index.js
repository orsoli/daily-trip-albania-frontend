import { createI18n } from "vue-i18n";

// Import translates languages
import en from "../locales/en/static.json";
import sq from "../locales/sq/static.json";

// Importing the i18n library and the translation files for all languages.
export const availableLanguages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "sq", label: "Albanian", flag: "🇦🇱" },
];

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en", // Selected language
  fallbackLocale: "en", // Fallback language if the selected one is not available

  // Define the available languages
  messages: {
    en, // English
    sq, // Albanian
  },
  datetimeFormats: {
    en: en.datetimeFormats,
    sq: sq.datetimeFormats,
  },
  numberFormats: {
    en: en.numberFormats,
    sq: sq.numberFormats,
  },
});

export default i18n;
