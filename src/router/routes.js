import Home from "../pages/Home.vue";
import Tours from "../pages/tours/Tours.vue";
import TourDetails from "../pages/tours/TourDetails.vue";
import Accommodations from "../pages/Accommodations.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Destinations from "../pages/destinations/Destinations.vue";
import DestinationDetails from "../pages/destinations/DestinationDetails.vue";
import Gallery from "../pages/Gallery.vue";

import i18n from "../i18n/index.js";

export const routes = [
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
    path: "/:lang",
    children: [
      {
        path: "tours",
        children: [
          {
            path: "",
            name: "tours",
            component: Tours,
            meta: {
              titleKey: "tours",
            },
          },
          {
            path: ":slug",
            name: "tour.details",
            component: TourDetails,
            meta: {
              dynamicTitleFromSlug: true,
            },
          },
        ],
      },
      {
        path: "destinations",
        children: [
          {
            path: "",
            name: "destinations",
            component: Destinations,
            meta: {
              titleKey: "destinations",
            },
          },
          {
            path: `:slug`,
            name: "destination.details",
            component: DestinationDetails,
            meta: {
              dynamicTitleFromSlug: true,
            },
          },
        ],
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
