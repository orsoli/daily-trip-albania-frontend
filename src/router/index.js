import { createRouter, createWebHistory } from "vue-router";

import i18n from "../i18n/index.js";

import Home from "../pages/Home.vue";
import Tours from "../pages/Tours.vue";
import Accommodations from "../pages/Accommodations.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Destinations from "../pages/Destinations.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        titleKey: "home",
      },
    },
    {
      path: "/tours",
      name: "tours",
      component: Tours,
      meta: {
        titleKey: "tours",
      },
    },
    {
      path: "/destinations",
      name: "destinations",
      component: Destinations,
      meta: {
        titleKey: "destinations",
      },
    },
    {
      path: "/accommodations",
      name: "accommodations",
      component: Accommodations,
      meta: {
        titleKey: "accommodations",
      },
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        titleKey: "about",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        titleKey: "contact",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { t } = i18n.global;
  const titleKey = to.meta.titleKey || "app_title";

  document.title = `${t(titleKey)} - ${t("app_title")}`;
  next();
});

export default router;
