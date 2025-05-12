<script>
export default {
  name: "Highlights",
  data() {
    return {
      // Variables
      highlights: [
        {
          id: "teamwork",
          title: "teamwork.title",
          description: "teamwork.description",
        },
        {
          id: "ourVision",
          title: "our_vision.title",
          description: "our_vision.description",
        },
        {
          id: "ourMission",
          title: "our_mission.title",
          description: "our_mission.description",
        },
      ],

      whyUs: [
        {
          id: "frendlyGuide",
          title: "why_us.friendly_guide.title",
          description: "why_us.friendly_guide.description",
          icon: "bi bi-person-heart",
        },
        {
          id: "fullFacility",
          title: "why_us.full_facility.title",
          description: "why_us.full_facility.description",
          icon: "bi bi-luggage-fill",
        },
        {
          id: "easyBooking",
          title: "why_us.easy_booking.title",
          description: "why_us.easy_booking.description",
          icon: "bi bi-calendar-day",
        },
      ],
    };
  },

  computed: {
    translatedHighlights() {
      return this.highlights.map((highlight) => ({
        ...highlight,
        title: this.$t(highlight.title),
        description: this.$t(highlight.description),
      }));
    },

    translatedWhyUs() {
      return this.whyUs.map((highlight) => ({
        ...highlight,
        title: this.$t(highlight.title),
        description: this.$t(highlight.description),
      }));
    },
  },
};
</script>

<template>
  <div class="g-2 my-5 py-2">
    <div class="row row-cols-1 row-cols-md-3">
      <div
        v-for="highlight in translatedHighlights"
        :key="highlight.id"
        class="col"
      >
        <h2>
          {{ highlight.title }}
        </h2>
        <div class="hr"></div>
        <p>
          {{ highlight.description }}
        </p>
      </div>
    </div>
    <!-- Whu Us -->
    <div class="my-5">
      <div class="d-flex flex-column align-items-center">
        <h2>
          {{ $t("why_us.title") }}
        </h2>
        <h5>
          {{ $t("why_us.subtitle") }}
        </h5>
        <div class="hr"></div>
      </div>
      <div class="row row-cols-1 row-cols-md-3">
        <div
          v-for="highlight in translatedWhyUs"
          :key="highlight.id"
          class="col"
        >
          <i :class="highlight.icon"></i>
          <h5>
            {{ highlight.title }}
          </h5>
          <p>{{ highlight.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/variables" as *;
h2 {
  display: inline-block;
  color: $secondary;
  font-weight: bold;
}

h5 {
  color: $secondary;
}

.hr {
  width: 100px;
  border: 2px solid $secondary;
  margin-bottom: 10px;
}

i {
  color: $secondary;
  font-size: 50px;
  padding-left: 20px;
}
</style>
