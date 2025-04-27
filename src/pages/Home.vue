<script>
import AppLoader from "@/components/AppLoader.vue";

export default {
  name: "Home",
  data() {
    return {
      title: "Daily Trip Albania",
    };
  },

  components: {
    AppLoader,
  },

  methods: {},
};
</script>

<template>
  <!-- Loader section -->
  <!-- <section>
    <AppLoader />
  </section> -->
  <div class="container text-light">
    <div class="d-lg-flex gap-5 align-items-end">
      <!-- Page content -->
      <div class="col-lg-5">
        <div class="slogan">
          <h1>
            {{ $t("header_title") }}
          </h1>
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
      <div class="col-lg-7 d-flex flex-column gap-5">
        <!-- Filter -->
        <div
          class="filter d-flex justify-content-center gap-1 overflow-x-scroll"
        >
          <button class="btn btn-transparent">
            <div class="my-card text-bg-dark h-75">
              <img
                src="../assets/img/3_islands_ksamil_Albania.webp"
                class="my-card-img"
                alt="3_islands_ksamil_Albania"
              />
              <div class="my-card-img-overlay">
                <h2 class="card-title">North</h2>
              </div>
            </div>
          </button>
          <button class="btn btn-transparent">
            <div class="my-card text-bg-dark h-75">
              <img
                src="../assets/img/3_islands_ksamil_Albania.webp"
                class="my-card-img"
                alt="3_islands_ksamil_Albania"
              />
              <div class="my-card-img-overlay">
                <h2 class="card-title">Central</h2>
              </div>
            </div>
          </button>
          <button class="btn btn-transparent">
            <div class="my-card text-bg-dark h-75">
              <img
                src="../assets/img/3_islands_ksamil_Albania.webp"
                class="my-card-img"
                alt="3_islands_ksamil_Albania"
              />
              <div class="my-card-img-overlay">
                <h2 class="card-title">South</h2>
              </div>
            </div>
          </button>
        </div>
        <!-- Filter resulsts -->
        <div class="filter-results d-flex gap-1 overflow-x-scroll">
          <button class="btn btn-transparent">
            <div class="my-card text-bg-dark">
              <img
                src="../assets/img/3_islands_ksamil_Albania.webp"
                class="my-card-img"
                alt="3_islands_ksamil_Albania"
              />
              <div class="my-card-img-overlay">
                <h2 class="card-title">Ksamil</h2>
              </div>
            </div>
          </button>
          <button class="btn btn-transparent">
            <div class="my-card text-bg-dark">
              <img
                src="../assets/img/3_islands_ksamil_Albania.webp"
                class="my-card-img"
                alt="3_islands_ksamil_Albania"
              />
              <div class="my-card-img-overlay">
                <h2 class="card-title">Ksamil</h2>
              </div>
            </div>
          </button>
          <button class="btn btn-transparent">
            <div class="my-card text-bg-dark">
              <img
                src="../assets/img/3_islands_ksamil_Albania.webp"
                class="my-card-img"
                alt="3_islands_ksamil_Albania"
              />
              <div class="my-card-img-overlay">
                <h2 class="card-title">Ksamil</h2>
              </div>
            </div>
          </button>
          <button class="btn btn-transparent">
            <div class="my-card text-bg-dark">
              <img
                src="../assets/img/3_islands_ksamil_Albania.webp"
                class="my-card-img"
                alt="3_islands_ksamil_Albania"
              />
              <div class="my-card-img-overlay">
                <h2 class="card-title">Ksamil</h2>
              </div>
            </div>
          </button>
          <button class="btn btn-transparent">
            <div class="my-card text-bg-dark">
              <img
                src="../assets/img/3_islands_ksamil_Albania.webp"
                class="my-card-img"
                alt="3_islands_ksamil_Albania"
              />
              <div class="my-card-img-overlay">
                <h2 class="card-title">Ksamil</h2>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slogan h1 {
  font-size: 3rem;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 0 10px #000000;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

figure #logo {
  width: 60%;
  filter: drop-shadow(0 0 10px rgb(0, 0, 0));
}

.my-card {
  width: 10rem;
  height: 18rem;
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  .my-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }
  .my-card-img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: end;
    justify-content: center;
    text-align: center;
    padding-bottom: 5px;
  }
  .my-card-img-overlay h2 {
    font-size: 2rem;
    color: #ffffff;
    text-shadow: 0 0 10px #000000;
  }

  @media (max-width: 768px) {
    width: 6rem;
    height: 12rem;
    .my-card-img-overlay h2 {
      font-size: 1.5rem;
    }
  }

  // :hover {
  //   scale: 1.05;
  //   transition: transform 0.3s ease-in-out;
  // }
  // :active {
  //   transform: scale(0.95);
  //   transition: transform 0.1s ease-in-out;
  // }
}
</style>
