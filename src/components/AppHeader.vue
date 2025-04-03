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
        { code: "en", name: "English" },
        { code: "sq", name: "Albanian" },
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
      console.log("Language changed to: ", lang);
    },
  },
};
</script>

<template>
  <div class="container bg-transparent">
    <header>
      <nav class="navbar-nav">
        <!-- Left Side -->
        <div class="left-navs">
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
        </div>
        <!-- Right Side -->
        <div class="language">
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
    </header>
  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

.logo {
  width: 50px;
  height: 50px;
}
</style>
