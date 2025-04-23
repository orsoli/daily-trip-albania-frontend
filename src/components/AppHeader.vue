<script>
import { availableLanguages } from "../i18n/index.js";

export default {
  name: "AppHeader",
  props: {
    isScrolled: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      // Variables
      isMenuOpen: false,
      availableLanguages,
      headerList: [
        { text: "home", url: "home" },
        { text: "tours", url: "tours" },
        { text: "destinations", url: "destinations" },
        { text: "accommodations", url: "accommodations" },
        { text: "about_us", url: "aboutUs" },
        { text: "contacts", url: "contacts" },
      ],
      socialList: [
        {
          name: "Instagram",
          icon: "<i class='bi bi-instagram'></i>",
          url: "https://www.instagram.com/dailytrip.albania/",
        },
        {
          name: "TikTok",
          icon: "<i class='bi bi-tiktok'></i>",
          url: "https://www.tiktok.com/@dailytripalbania?_t=ZM-8vlxVOeDQpT&_r=1",
        },
        {
          name: "Youtube",
          icon: "<i class='bi bi-youtube text-danger'></i>",
          url: "https://www.youtube.com/@dailytripalbania",
        },
      ],
    };
  },

  computed: {
    translatedHeaders() {
      const lang = this.$i18n.locale;
      return this.headerList.map((header) => ({
        navBar: this.$t(header.text),
        url: {
          name: header.url,
          params: { lang: lang },
        },
      }));
    },
  },

  watch: {
    "$i18n.locale"() {
      this.$forceUpdate();
    },
  },

  methods: {
    changeLanguage(newLang) {
      this.$i18n.locale = newLang;
      const pathParts = this.$route.path.split("/");
      pathParts[1] = newLang;
      this.$router.push(pathParts.join("/"));
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<template>
  <header :class="['sticky-top', isScrolled ? 'bg-blured' : 'bg-transparent']">
    <nav class="navbar navbar-expand-lg">
      <div class="container d-flex justify-content-between gap-2">
        <router-link
          class="navbar-brand"
          :to="{ name: 'home', params: { lang: $i18n.locale } }"
        >
          <img
            src="../assets/img/DailyTrip-logo.png"
            alt="daily-trip-albania-logo"
            class="logo"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleMenu"
          aria-controls="navbarSupportedContent"
          :aria-expanded="isMenuOpen.toString()"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Menu -->
        <transition name="fade" mode="out-in">
          <div
            v-show="isMenuOpen"
            class="collapse navbar-collapse fw-bold p-3 rounded-3 d-lg-flex justify-content-between gap-2 w-auto"
            :class="{ show: isMenuOpen }"
            id="navbarSupportedContent"
          >
            <!-- Navbars -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                class="nav-item"
                v-for="(header, i) in translatedHeaders"
                :key="i"
              >
                <router-link
                  class="nav-link text-light text-nowrap text-shadow"
                  :to="header.url"
                  @click="closeMenu"
                >
                  {{ header.navBar }}
                </router-link>
              </li>
            </ul>
            <!-- Socials -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" v-for="(social, i) in socialList" :key="i">
                <a
                  class="nav-link text-light text-nowrap text-shadow"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span v-html="social.icon"></span>
                </a>
              </li>
            </ul>
            <!-- Search input -->
            <div class="text-light">
              <input
                type="text"
                class="form-control rounded-4 bg-transparent text-light text-shadow me-5"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <!-- Language selector -->
            <div
              class="language w-auto position-absolute end-0 my-bg-primary rounded-start-4"
            >
              <select
                v-model="$i18n.locale"
                class="form-select no-arrow bg-transparent border-0 text-light text-shadow w-auto"
                name="lang"
                id="lang"
                @change="changeLanguage($event.target.value)"
              >
                <option
                  v-for="lang in availableLanguages"
                  :key="lang.code"
                  :value="lang.code"
                >
                  {{ lang.flag }}
                  {{ lang.label }}
                </option>
              </select>
            </div>
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  width: 70px;
  height: 70px;
  filter: drop-shadow(0 0 2px rgb(3, 3, 3));
}

.bg-blured {
  backdrop-filter: blur(4px);
  transition: background-color 1s ease-in;
  border-radius: 20px;
}

.bg-transparent {
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.text-shadow {
  text-shadow: 0 0 2px rgb(0, 0, 0);
}

.no-arrow {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: none;
  cursor: pointer;
}
</style>
