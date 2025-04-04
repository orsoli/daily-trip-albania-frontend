// Import styles and bootstrap
import "../style/general.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap";

import { createApp } from "vue";
import App from "../App.vue";
import router from "../router";
import { createI18n } from "vue-i18n";

// Import translates languages
import en from "../locales/en/static.json";
import sq from "../locales/sq/static.json";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en", // Selected language
  messages: {
    en, // English
    sq, // Albanian
  },
});

const app = createApp(App);
app.use(router);
app.use(i18n);

app.mount("#app");
