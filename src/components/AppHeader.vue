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
      search: false,
      // Header and social lists
      headerList: [
        { text: "home", url: "home" },
        { text: "tours", url: "tours" },
        { text: "destinations", url: "destinations" },
        { text: "accommodations", url: "accommodations" },
        { text: "about_us", url: "about-us" },
        { text: "contacts", url: "contacts" },
        { text: "gallery", url: "gallery" },
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

    toggleSearch() {
      this.search = !this.search;
    },
    focusSearchInput() {
      if (this.search && this.$refs.searchInput) {
        this.$refs.searchInput.focus();
      }
    },
  },
};
</script>

<template>
  <header
    :class="[
      'sticky-top p-3 pe-0 mb-md-5',
      isScrolled ? 'bg-blured' : 'bg-transparent',
    ]"
  >
    <nav class="navbar navbar-expand-lg">
      <div
        class="container w-lg-75 mx-auto d-lg-flex justify-content-between gap-lg-5"
      >
        <!-- Logo -->
        <router-link
          class="navbar-brand d-block d-lg-none"
          :to="{ name: 'home', params: { lang: $i18n.locale } }"
        >
          <img
            src="../assets/img/DailyTrip-logo.png"
            alt="daily-trip-albania-logo"
            class="logo"
          />
        </router-link>

        <!-- Hamburger menu btn -->
        <button
          class="navbar-toggler border-0 text-light"
          type="button"
          @click="toggleMenu"
          aria-controls="navbarSupportedContent"
          :aria-expanded="isMenuOpen.toString()"
          aria-label="Toggle navigation"
        >
          <transition name="page-opacity" mode="out-in">
            <i v-if="!isMenuOpen" class="bi bi-list fs-1 text-light"></i>
            <i v-else-if="isMenuOpen" class="bi bi-x-lg fs-1 text-light"></i>
          </transition>
        </button>

        <!-- Menu -->
        <transition name="fade">
          <div
            v-show="isMenuOpen"
            class="collapse navbar-collapse fw-bold rounded-3 d-lg-flex justify-content-around gap-5 pe-5"
            :class="{ show: isMenuOpen }"
            id="navbarSupportedContent"
          >
            <!-- Navbars -->
            <ul class="navbar-nav ps-3">
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
            <ul v-if="!search" class="d-flex list-unstyled gap-2 gap-lg-4 m-0">
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
            <!-- Language and search -->
            <div
              class="language w-auto position-absolute end-0 my-bg-primary rounded-start-4 shadow"
            >
              <!-- Search input -->
              <transition
                name="page-opacity"
                mode="out-in"
                @after-enter="focusSearchInput"
              >
                <div v-if="search">
                  <input
                    ref="searchInput"
                    type="text"
                    class="form-control border-0 rounded-4 bg-transparent text-light text-shadow me-5"
                    :placeholder="$t('search_placeholder')"
                    aria-label="Search"
                    id="search"
                    @keyup.enter="toggleSearch"
                    @blur="toggleSearch"
                  />
                </div>
                <!-- Search button -->
                <div v-else-if="!search" class="d-flex">
                  <button
                    class="btn text-light border-end rounded-0"
                    type="button"
                    @click="toggleSearch"
                  >
                    <i class="bi bi-search"></i>
                  </button>
                  <!-- Language selector -->
                  <select
                    v-model="$i18n.locale"
                    class="form-select no-arrow bg-transparent border-0 text-light text-center text-shadow w-auto pe-0"
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
                  <label class="form-label text-light pe-1" for="lang">
                    <i class="bi bi-translate"></i>
                  </label>
                </div>
              </transition>
            </div>
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
.logo {
  width: 70px;
  height: 70px;
  filter: drop-shadow(0 0 2px rgb(3, 3, 3));
}

.bg-blured {
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(5px);
  transition: background-color 0.8s ease-in-out, backdrop-filter 1s ease-in-out,
    box-shadow 0.8s ease-in-out;
  box-shadow: 0 0 10px 3px rgba(2, 2, 2, 0.8);
}

.bg-transparent {
  background-color: transparent;
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

#search::placeholder {
  color: white;
  opacity: 0.5;
}

.nav-link {
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: $secondary !important;
  scale: 1.1;
}

:deep(.router-link-exact-active) {
  color: $secondary !important;
}

.navbar-toggler-icon {
  filter: invert(1);
}
</style>
