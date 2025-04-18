<script>
import { availableLanguages } from "../i18n/index.js";

export default {
  name: "AppHeader",
  data() {
    return {
      // Variables
      availableLanguages,

      headerList: [
        {
          text: "home",
          url: "home",
        },
        {
          text: "tours",
          url: "tours",
        },
        {
          text: "destinations",
          url: "destinations",
        },
        {
          text: "accommodations",
          url: "accommodations",
        },
        {
          text: "about_us",
          url: "aboutUs",
        },
        {
          text: "contacts",
          url: "contacts",
        },
      ],
    };
  },

  components: {},

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
      const newPath = pathParts.join("/");

      this.$router.push(newPath);
    },
  },
};
</script>

<template>
  <header class="sticky-top bg-primary">
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
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-lg-flex justify-content-between gap-2"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              v-for="(header, i) in translatedHeaders"
              :key="i"
            >
              <router-link class="nav-link text-light" :to="header.url">
                {{ header.navBar }}
              </router-link>
            </li>
          </ul>
          <div class="search">
            <input
              class="form-control me-2 bg-transparent text-light placeholder-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div class="language py-3 w-auto">
            <select
              v-model="$i18n.locale"
              class="form-select bg-transparent border-0 text-light"
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
      </div>
    </nav>
  </header>

  <!-- ! -->
  <!-- <header> -->
  <!-- <nav class="navbar-nav"> -->
  <!-- Left Side -->
  <!-- <div class="left-navs">
            <ul class="list-unstyled d-flex gap-3">
              <li>
                <router-link
                  :to="{ name: 'home' }"
                  class="nav-link active"
                  aria-current="page"
                >
                  <img
                    src="../assets/img/DailyTrip-logo.png"
                    alt="logo"
                    class="logo"
                  />
                </router-link>
              </li>
              <li v-for="(header, i) in translatedHeaders" :key="i">
                <router-link :to="header.url">
                  {{ header.text }}
                </router-link>
              </li>
            </ul>
          </div> -->
  <!-- Right Side -->
  <!-- <div class="language">
            <select
              name="lang"
              id="lang"
              @change="changeLanguage($event.target.value)"
            >
              <option
                v-for="(language, i) in languages"
                :key="i"
                :value="language.code"
              >
                {{ language.name }}
              </option>
            </select>
          </div>
        </nav>
      </header> -->
  <!-- ! -->
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
.logo {
  width: 50px;
  height: 50px;
}
</style>
