<script>
export default {
  name: "AppHeader",
  data() {
    return {
      headerList: [
        {
          text: "home",
          url: "/",
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
          text: "about",
          url: "about",
        },
        {
          text: "contact",
          url: "contact",
        },
      ],

      languages: [
        {
          code: "en",
          name: "English",
          icon: "🇬🇧",
        },
        {
          code: "sq",
          name: "Albanian",
          icon: "🇦🇱",
        },
      ],
    };
  },

  components: {},

  computed: {
    translatedHeaders() {
      return this.headerList.map((header) => ({
        text: this.$t(header.text),
        url: header.url,
      }));
    },
  },
  watch: {
    "$i18n.locale"() {
      this.$forceUpdate();
    },
  },

  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <header class="my-header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid d-flex justify-content-between gap-2">
          <router-link class="navbar-brand" :to="{ name: 'home' }">
            <img
              src="../assets/img/DailyTrip-logo.png"
              alt="logo"
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
                  {{ header.text }}
                </router-link>
              </li>
            </ul>
            <div class="search">
              <input
                class="form-control me-2 bg-transparent text-light"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div class="language py-3 w-auto">
              <select
                class="form-select bg-transparent border-0 text-light"
                name="lang"
                id="lang"
                @change="changeLanguage($event.target.value)"
              >
                <option
                  v-for="(language, i) in languages"
                  :key="i"
                  :value="language.code"
                >
                  {{ language.icon }}
                  {{ language.name }}
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
  </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;
.logo {
  width: 50px;
  height: 50px;
}

.my-header {
}
</style>
