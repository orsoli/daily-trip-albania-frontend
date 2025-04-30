<script>
import AppLoader from "@/components/AppLoader.vue";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      // Variables
      isLoading: true,
      categoriesUrl: "http://localhost:8088/api/categories",
      categories: [],

      images: [
        "path/to/image1.jpg",
        "path/to/image2.jpg",
        "path/to/image3.jpg",
        "path/to/image4.jpg",
      ],
      itemPositions: [],
    };
  },

  components: {
    AppLoader,
  },

  methods: {
    // Fetch categories from the API
    getCategories() {
      axios
        .get(this.categoriesUrl)
        .then((response) => {
          this.categories = response.data.categories;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

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
  },

  mounted() {
    this.updatePositions();
    window.addEventListener("resize", this.updatePositions);

    this.getCategories();
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updatePositions);
  },
};
</script>

<template>
  <!-- Loader section -->
  <section v-if="isLoading">
    <AppLoader />
  </section>
  <div class="container text-light" v-else>
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
        <div class="carousel" ref="carousel" @scroll="handleScroll">
          <!-- Spacer before -->
          <div class="spacer"></div>

          <!-- Fotot -->
          <div
            v-for="(image, index) in images"
            :key="index"
            class="item"
            :style="getStyle(index)"
          >
            <a
              href="#"
              class="position-relative text-decoration-none text-light"
            >
              <img
                src="../assets/img/3_islands_ksamil_Albania.webp"
                alt="Destination"
              />
              <div
                class="position-absolute translate-middle-x start-50 bottom-0 fs-5 fw-bold"
              >
                <h5>Destination</h5>
              </div>
            </a>
          </div>

          <!-- Spacer after -->
          <div class="spacer"></div>
        </div>
      </div>
    </div>
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

.carousel {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 5px;
  align-items: center;
  position: relative;
  padding: 50px 0;

  a:hover div {
    color: rgba(24, 55, 58, 0.664);
    scale: 1.5;
    text-shadow: 0 0 3px rgb(255, 255, 255);
    transition: scale 0.3s ease-in-out, color 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
}

.item {
  flex: 0 0 auto;
  width: 300px;
  height: 350px;
  scroll-snap-align: center;
  transition: transform 0.3s, z-index 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 200px;
    height: 250px;
  }
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgba(whitesmoke, 0.3);
}

.spacer {
  flex: 0 0 30%;
}
</style>
