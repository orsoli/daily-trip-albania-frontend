import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes.js";
import i18n from "../i18n/index.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { t, availableLocales } = i18n.global;
  const titleKey = to.meta.titleKey || "app_title";
  document.title =
    titleKey === "home" ? t("app_title") : `${t(titleKey)} - ${t("app_title")}`;

  let lang = to.params.lang;

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
