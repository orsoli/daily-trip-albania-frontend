import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Tours from "../pages/Tours.vue";
import Dastinations from "../pages/Destinations.vue";
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
    },
    {
      path: "/tours",
      name: "tours",
      component: Tours,
    },
    {
      path: "/destinations",
      name: "destinations",
      component: Destinations,
    },
    {
      path: "/accommodations",
      name: "accommodations",
      component: Accommodations,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;
