<script>
import RatingStars from "@/components/utils/Rating.vue";
import Carousel from "@/components/utils/Carousel.vue";
import { store } from "@/store/store";
import TourCard from "@/components/tours/TourCard.vue";
import TourCardLoader from "@/components/tours/TourCardLoader.vue";

export default {
  name: "Home",
  data() {
    return {
      // Variables
      store,
      itemPositions: [],
      imgLoading: true,
    };
  },

  components: {
    RatingStars,
    Carousel,
    TourCard,
    TourCardLoader,
  },

  methods: {},

  mounted() {
    // Get Resources
    store.fetchResources(store.destinations.apiUrl, 1, {}, "allDestinations");
    store.fetchResources(store.tours.apiUrl, 1, {}, "allTours");
  },

  computed: {
    bestDestinations() {
      return store.allDestinations.data;
    },
    bestTours() {
      return store.allTours.data;
    },
  },
};
</script>

<template>
  <div class="container text-light">
    <div class="d-lg-flex align-items-center gap-5">
      <!-- Page content -->
      <div class="col-lg-5 mb-5 mb-lg-0">
        <div class="slogan">
          <h1>{{ $t("destinations_country.al") }}</h1>
          <h2>
            {{ $t("header_title") }}
          </h2>
          <p>
            {{ $t("app_slogan") }}
          </p>
          <a
            href="#"
            class="btn text-light border rounded-4 bg-dark bg-opacity-50 shadow"
          >
            {{ $t("explore_albania") }}
          </a>
        </div>
        <figure class="d-none d-lg-block p-0">
          <div v-if="imgLoading" id="logo " class="placeholder-glow">
            <!-- Logo Loader -->
            <div class="placeholder col-9"></div>
          </div>
          <!-- Logo -->
          <img
            src="../assets/img/DailyTrip-logo.png"
            alt="daily-trip-logo"
            @load="imgLoading = false"
            id="logo"
          />
        </figure>
      </div>

      <!-- Popular destinations -->
      <div class="col-lg-7 d-flex flex-column gap-1">
        <div class="border-bottom border-2 w-50 align-self-end">
          <h4>{{ $t("popular_destinations") }}</h4>
        </div>
        <div
          v-if="store.loading"
          class="carousel placeholder-glow d-flex justify-content-center align-items-center"
        >
          <!-- Carousel Loader -->
          <div v-for="n in 4" :key="n" class="placeholder col-12"></div>
        </div>
        <!-- Carousel -->
        <Carousel v-else :items="bestDestinations" />
      </div>
    </div>

    <!-- Feature section -->
    <div class="feature border-top rounded-4 p-4 mb-5">
      <h3 class="fw-bold">{{ $t("dedication_to_safety") }}</h3>
      <div class="row row-cols-1 row-cols-lg-3 g-3">
        <!-- Safety -->
        <div class="col">
          <i class="bi bi-shield-fill-check"></i>
          <h5>{{ $t("safety.title") }}</h5>
          <p>{{ $t("safety.description") }}</p>
        </div>
        <!-- Comfortable cars -->
        <div class="col px-lg-5">
          <i class="bi bi-car-front-fill"></i>
          <h5>{{ $t("comfortable_cars.title") }}</h5>
          <p>{{ $t("comfortable_cars.description") }}</p>
        </div>
        <!-- Local Expertise -->
        <div class="col">
          <i class="bi bi-map-fill"></i>
          <h5>{{ $t("local_guides.title") }}</h5>
          <p>{{ $t("local_guides.description") }}</p>
        </div>
      </div>
    </div>

    <!-- Popular Tours -->
    <div class="popular-tours mb-5">
      <div class="border-bottom border-2 w-50 mb-5">
        <h4>{{ $t("popular_tours") }}</h4>
      </div>
      <div
        v-if="store.loading"
        class="row row-cols-1 row-cols-md-2 row-cols-lg-4 flex-nowrap overflow-x-scroll"
      >
        <!-- Tours Loader -->
        <div v-for="n in 8" :key="n" class="col">
          <TourCardLoader />
        </div>
      </div>
      <div
        v-else
        class="row row-cols-1 row-cols-md-2 row-cols-lg-4 flex-nowrap overflow-x-scroll pe-5"
      >
        <!-- Popular Tours -->
        <TourCard v-for="tour in bestTours" :key="tour.id" :tour="tour" />
      </div>
    </div>

    <!-- Best Accommodations -->
  </div>
</template>

<style lang="scss" scoped>
@use "../style/variables" as *;
.slogan {
  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 0 0 10px #000000;
  }

  a:hover {
    scale: 1.1;
    transition: scale 0.3s ease-in-out;
  }
}

figure {
  #logo {
    width: 60%;
    filter: drop-shadow(0 0 5px rgb(0, 0, 0));
  }

  .placeholder {
    height: 300px;
    border-radius: 20px;
    margin: 20px;
  }
}

.carousel {
  height: 400px;
  .placeholder {
    width: 250px;
    height: 200px;
    border-radius: 20px;
    margin: 5px;
  }
  .placeholder:first-child {
    width: 400px;
    height: 300px;
    border-radius: 20px;
    position: absolute;
  }
}

.feature .col {
  i {
    font-size: 5rem;
    color: $secondary;
    text-shadow: 0 0 5px #0e0e0e;
  }
  h5 {
    font-weight: 600;
    color: $secondary;
    text-shadow: 0 0 15px #000000;
  }
  p {
    text-shadow: 0 1px 15px #000000;
  }
}
</style>
