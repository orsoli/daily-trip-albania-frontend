import Home from "../pages/Home.vue";
import Tours from "../pages/Tours.vue";
import Accommodations from "../pages/Accommodations.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Destinations from "../pages/Destinations.vue";
import Gallery from "@/pages/Gallery.vue";

import i18n from "../i18n/index.js";

export const routes = [
  {
    path: "/",
    redirect: `/${i18n.global.locale.value}`,
  },
  {
    path: "/:lang",
    children: [
      {
        path: "",
        name: "home",
        component: Home,
        meta: {
          titleKey: "home",
        },
      },
      {
        path: `tours`,
        name: "tours",
        component: Tours,
        meta: {
          titleKey: "tours",
        },
      },
      {
        path: "destinations",
        name: "destinations",
        component: Destinations,
        meta: {
          titleKey: "destinations",
        },
      },
      {
        path: "accommodations",
        name: "accommodations",
        component: Accommodations,
        meta: {
          titleKey: "accommodations",
        },
      },
      {
        path: "about-us",
        name: "about-us",
        component: About,
        meta: {
          titleKey: "about_us",
        },
      },
      {
        path: "contacts",
        name: "contacts",
        component: Contact,
        meta: {
          titleKey: "contacts",
        },
      },
      {
        path: "gallery",
        name: "gallery",
        component: Gallery,
        meta: {
          titleKey: "gallery",
        },
      },
    ],
  },
];
