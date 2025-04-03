<script>
export default {
  name: "AppHeader",
  data() {
    return {
      headerList: [
        {
          text: this.$t("home"),
          url: "{name:'home'}",
        },
        {
          text: this.$t("tours"),
          url: "name: 'tours'",
        },
        {
          text: this.$t("destinations"),
          url: "name: 'destinations'",
        },
        {
          text: this.$t("accommodations"),
          url: "name: 'accommodations'",
        },
        {
          text: this.$t("about"),
          url: "name: 'about'",
        },
        {
          text: this.$t("contact"),
          url: "name: 'contact'",
        },
      ],

      languages: [
        { code: "en", name: "English" },
        { code: "sq", name: "Albanian" },
      ],
    };
  },

  components: {},

  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
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
            <li v-for="(header, i) in headerList" :key="i">
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
