<script>
import AppLoader from "@/components/AppLoader.vue";
import RatingStars from "@/components/utils/Rating.vue";
import Carousel from "@/components/utils/Carousel.vue";
import { store } from "@/store/store";

export default {
  name: "Home",
  data() {
    return {
      // Variables
      store,
      itemPositions: [],
    };
  },

  components: {
    AppLoader,
    RatingStars,
    Carousel,
  },

  methods: {
    updatePositions() {
      const carousel = this.$refs.carousel;
      if (!carousel) return;
      const carouselRect = carousel.getBoundingClientRect();
      const centerX = carouselRect.left + carouselRect.width / 2;

      this.itemPositions = Array.from(carousel.querySelectorAll(".item")).map(
        (item) => {
          const itemRect = item.getBoundingClientRect();
          const itemCenter = itemRect.left + itemRect.width / 2;
          const distance = Math.abs(centerX - itemCenter);
          return distance;
        }
      );
    },

    handleScroll() {
      this.updatePositions();
    },

    getStyle(index) {
      const distance = this.itemPositions[index] || 0;
      const scale = Math.max(1, 1.5 - distance / 400);
      const zIndex = Math.round(1000 - distance);
      const brightness = Math.max(0.5, 1 - distance / 400);

      return {
        transform: `scale(${scale})`,
        zIndex: zIndex,
        filter: `brightness(${brightness})`,
      };
    },

    handleImageError(event) {
      // event.target.src = "https://placehold.co/300x200?text=No+Image";
      event.target.src =
        "https://res.cloudinary.com/dmofmp5zg/image/upload/v1740773578/cld-sample-2.jpg";
    },
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updatePositions);
  },

  mounted() {
    window.addEventListener("load", this.updatePositions);
    window.addEventListener("resize", this.updatePositions);

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
  <!-- Loader section -->
  <section v-if="!store.resourcesLoaded">
    <AppLoader />
  </section>
  <div v-else class="container text-light">
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
          <img
            src="../assets/img/DailyTrip-logo.png"
            alt="daily-trip-logo"
            id="logo"
          />
        </figure>
      </div>

      <!-- Page actions -->
      <div class="col-lg-7 d-flex flex-column gap-1">
        <!-- Popular destinations -->
        <div class="border-bottom border-2 w-50 align-self-end">
          <h4>{{ $t("popular_destinations") }}</h4>
        </div>

        <!-- Carousel -->
        <Carousel :items="bestDestinations" />

        <!-- ! -->
        <!-- <div class="carousel" ref="carousel" @scroll="handleScroll"> -->
        <!-- Spacer before -->
        <!-- <div class="spacer"></div>
          <a
            href="#"
            v-for="(destintion, i) in bestDestinations"
            :key="destintion.id"
            class="item position-relative text-decoration-none text-light"
            :style="getStyle(i)"
          >
            <img
              src="../assets/img/3_islands_ksamil_Albania.webp"
              :alt="destintion.slug"
              @error="handleImageError"
            />
            <h5
              class="title position-absolute translate-middle-x start-50 bottom-0 fw-bold no-wrap text-center"
            >
              {{ destintion.name }}
            </h5>
          </a> -->

        <!-- Spacer after -->
        <!-- <div class="spacer"></div>
        </div> -->
        <!-- ! -->
      </div>
    </div>
    <!-- Popular Tours -->
    <div>
      <div class="border-bottom border-2 w-50 mb-5">
        <h4>{{ $t("popular_tours") }}</h4>
      </div>
      <div
        class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center"
      >
        <div v-for="tour in bestTours" :key="tour.id" class="col">
          <div class="card bg-dark bg-opacity-75 border-0 rounded-4 text-light">
            <img
              src="../assets/img/3_islands_ksamil_Albania.webp"
              @error="handleImageError"
              :alt="tour.slug"
              class="card-img-top"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-info">{{ tour.title }}</h5>
              <h5>
                {{ tour.price }}
                {{ tour.currency.code }}
              </h5>
              <RatingStars
                :rating="parseFloat(tour.rating)"
                :view-count="parseInt(tour.view_count)"
              />
              <p class="card-text truncate-multiline">
                {{ tour.description }}
              </p>
              <a
                href="#"
                class="btn btn-transparent text-info border rounded-4 w-50"
              >
                {{ $t("book_now") }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Best Accommodations -->
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
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

figure #logo {
  width: 60%;
  filter: drop-shadow(0 0 5px rgb(0, 0, 0));
}

// .carousel {
//   height: 400px;
//   display: flex;
//   overflow-x: auto;
//   overflow-y: hidden;
//   scroll-snap-type: x mandatory;
//   -webkit-overflow-scrolling: touch;
//   gap: 5px;
//   align-items: center;
//   position: relative;
//   padding: 50px 0;

//   .title {
//     text-shadow: 0 0 3px #000000;
//   }

//   a:hover .title {
//     color: rgba(24, 55, 58, 0.664);
//     scale: 1.3;
//     text-shadow: 0 0 3px rgb(255, 255, 255);
//     transition: scale 0.3s ease-in-out, color 0.5s ease-in-out;
//   }

//   @media (max-width: 768px) {
//     padding: 0;
//   }
// }

// .item {
//   flex: 0 0 auto;
//   width: 250px;
//   height: 200px;
//   scroll-snap-align: center;
//   transition: transform 0.3s, z-index 0.2s;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 10px;
//   box-shadow: 0 0 10px 5px rgba(whitesmoke, 0.3);
//   overflow: hidden;

//   @media (max-width: 768px) {
//     width: 250px;
//     // height: 150px;
//   }
// }

// .item img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// .spacer {
//   flex: 0 0 30%;
// }

.card {
  box-shadow: 0 0 10px 5px rgba(whitesmoke, 0.3);
  transition: all 0.3s ease-in-out;
  a:hover {
    scale: 1.1;
    transition: scale 0.3s ease-in-out;
  }

  .truncate-multiline {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
