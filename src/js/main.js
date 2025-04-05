// Import styles and bootstrap
import "../style/general.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap";

import { createApp } from "vue";
import App from "../App.vue";
import router from "../router";
import i18n from "../i18n/index.js";

import { createHead } from "@vueuse/head";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(i18n);
app.use(head);

app.mount("#app");
