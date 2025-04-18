import { createRouter, createWebHistory } from "vue-router";

import i18n from "../i18n/index.js";
import { routesByLanguage } from "../locales/routesMap.js";

import Home from "../pages/Home.vue";
import Tours from "../pages/Tours.vue";
import Accommodations from "../pages/Accommodations.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Destinations from "../pages/Destinations.vue";

const routes = [
  {
    path: "/",
    redirect: `/${i18n.global.locale.value}`,
  },
  {
    path: "/:lang",
    name: "home",
    component: Home,
    meta: {
      titleKey: "home",
    },
  },
  {
    path: `/:lang/tours`,
    name: "tours",
    component: Tours,
    meta: {
      titleKey: "tours",
    },
  },
  {
    path: "/:lang/destinations",
    name: "destinations",
    component: Destinations,
    meta: {
      titleKey: "destinations",
    },
  },
  {
    path: "/:lang/accommodations",
    name: "accommodations",
    component: Accommodations,
    meta: {
      titleKey: "accommodations",
    },
  },
  {
    path: "/:lang/about-us",
    name: "aboutUs",
    component: About,
    meta: {
      titleKey: "about_us",
    },
  },
  {
    path: "/:lang/contacts",
    name: "contacts",
    component: Contact,
    meta: {
      titleKey: "contacts",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0, behavior: "smooth" };
    }
  },
});

router.beforeEach((to, from, next) => {
  const { t, availableLocales } = i18n.global;
  const titleKey = to.meta.titleKey || "app_title";
  document.title =
    titleKey === "home" ? t("app_title") : `${t(titleKey)} - ${t("app_title")}`;

  let lang = to.params.lang;

  // Variables to store the routes for each language
  const routeByLang = routesByLanguage[lang];
  console.log(routeByLang);
  to.path = `/${lang}/${routeByLang[to.name]}`;
  console.log(to.path);

  const supportedLanguages = availableLocales;

  // If lang is missing in the URL, try to retrieve it from localStorage
  if (!lang) {
    lang = localStorage.getItem("lang") || "en";
    return next({ ...to, params: { ...to.params, lang } });
  }

  // If the language is not supported, redirect to /en
  if (!supportedLanguages.includes(lang)) {
    return next("/en");
  }

  // Save the language in localStorage
  localStorage.setItem("lang", lang);

  // Set the language in i18n
  i18n.global.locale.value = lang;

  next();
});

export default router;
