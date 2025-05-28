<script>
import Rating from "@/components/utils/Rating.vue";
import BaseButton from "@/components/utils/BaseButton.vue";
import GoBackButton from "@/components/utils/GoBackButton.vue";
import Map from "@/components/utils/Map.vue";
import { TourDetailsStore } from "@/store/tourDetailsStore";

export default {
  name: "TourDetails",
  data() {
    return {
      imgLoading: true,
      TourDetailsStore,
    };
  },

  computed: {
    tour() {
      return TourDetailsStore.tour;
    },

    tourPrice() {
      const price =
        this.tour.currency.code +
        " " +
        this.tour.price * this.tour.currency.exchange_rate;
      return price;
    },

    services() {
      return this.tour.services;
    },

    categories() {
      return this.tour.categories;
    },

    itineraries() {
      return this.tour.itineraries;
    },

    tourDestinations() {
      return this.tour.destinations;
    },

    tourDestinationsMap() {
      return this.tourDestinations.map((destination) => ({
        latLng: [Number(destination.latitude), Number(destination.longitude)],
        name: destination.name || "No Name",
      }));
    },

    meetingPoints() {
      const details = [
        {
          address: this.$t("meeting_point.details[0].address"),
          map_url: this.$t("meeting_point.details[0].map_url"),
        },
        {
          address: this.$t("meeting_point.details[1].address"),
          map_url: this.$t("meeting_point.details[1].map_url"),
        },
      ];
      return details;
    },
  },

  components: {
    Rating,
    BaseButton,
    GoBackButton,
    Map,
  },

  methods: {
    handleImageError(event) {
      event.target.src = "https://placehold.co/300x200?text=No+Image";
    },
  },

  mounted() {
    const slug = this.$route.params.slug;
    TourDetailsStore.fetchResources(slug);

    // Modal
    const modal = document.getElementById("imageModal");
    modal.addEventListener("show.bs.modal", function (e) {
      const triggerElement = e.relatedTarget;
      const imgUrl = triggerElement.getAttribute("data-img");
      const imgCaption = triggerElement.getAttribute("data-img-caption");
      const modalImage = document.getElementById("modalImg");
      const modalTitle = document.getElementById("imageModalLabel");
      modalImage.src = imgUrl;
      modalTitle.innerText = imgCaption;
    });
  },
};
</script>

<template>
  <div class="container">
    <!-- Go back btn -->
    <GoBackButton class="my-3" />
    <!-- Placeholder -->
    <div v-if="TourDetailsStore.loading">
      <div class="title">
        <h1 class="placeholder-glow text-center">
          <span class="placeholder col-4"></span>
        </h1>
      </div>
      <div
        id="carouselInterval"
        class="carousel slide mx-auto my-4"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner placeholder-glow">
          <div
            class="carousel-item active placeholder"
            data-bs-interval="10000"
          ></div>
        </div>
      </div>
      <div class="description">
        <h4 class="text-decoration-underline placeholder-glow">
          <span class="placeholder col-2"></span>
        </h4>
        <span class="placeholder col-10"></span>
        <span class="placeholder col-10"></span>
        <span class="placeholder col-4"></span>
      </div>
    </div>
    <!-- After loading -->
    <div v-show="!TourDetailsStore.loading">
      <div class="title">
        <h1 class="text-center">{{ tour.title }}</h1>
      </div>
      <!-- Carousel -->
      <div
        v-if="tour.gallery && tour.gallery.length > 0"
        id="carouselInterval"
        class="carousel slide mx-auto my-4"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            v-for="(img, i) in tour.gallery"
            :key="img.id"
            :class="['carousel-item', { active: i === 0 }]"
            data-bs-interval="5000"
          >
            <button
              type="button"
              class="w-100 rounded-4 p-0 m-0"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
              :data-img="img.url"
              :data-img-caption="img.caption"
            >
              <img
                :src="img.url"
                class="d-block w-100 rounded-4"
                :alt="img.caption"
                @error="handleImageError"
                @load="imgLoading = false"
              />
            </button>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselInterval"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark rounded-3 bg-opacity-50"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselInterval"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark rounded-3 bg-opacity-50"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- Description -->
      <div class="row">
        <div class="col-12 col-md-8">
          <h4 class="text-decoration-underline">{{ $t("overview") }}</h4>
          <p>{{ tour.description }}</p>
          <Rating
            :rating="parseFloat(tour.rating)"
            :view-count="tour.view_count"
          />
          <!-- About this tour -->
          <h5 class="my-4 fw-bold">{{ $t("about_this_tour") }}</h5>
          <!-- Tour guide -->
          <div v-if="tour.guide">
            <span class="badge border rounded-pill text-bg-dark p-2">
              <i class="bi bi-person-walking"></i>
              Guide:
              {{ tour.guide.first_name }}
              {{ tour.guide.last_name }}
            </span>
          </div>
          <div class="row row-cols-1 row-cols-md-2">
            <!-- Includes -->
            <div v-if="services && services.length > 0" class="col">
              <p class="about-this-tour">{{ $t("includes") }}</p>
              <ul>
                <li v-for="service in services" :key="service.id">
                  <p class="p-0 m-0">{{ service.name }}</p>
                  <small class="p-0 m-0">{{ service.description }}</small>
                </li>
              </ul>
            </div>
            <!-- Categories -->
            <div v-if="categories && categories.length > 0" class="col">
              <p class="about-this-tour">{{ $t("categories") }}</p>
              <ul>
                <li v-for="category in categories" :key="category.id">
                  <p class="p-0 m-0">{{ category.name }}</p>
                  <small class="p-0 m-0">{{ category.description }}</small>
                </li>
              </ul>
            </div>
          </div>
          <!-- Itineraries -->
          <div
            v-if="tourDestinations && tourDestinations.length > 0"
            class="itineraries my-5"
          >
            <p class="about-this-tour">{{ $t("itinerary") }}</p>

            <!-- Trajectory -->
            <div class="row row-cols-1 row-cols-md-2 align-items-center g-3">
              <div class="col ps-5">
                <div class="point">
                  <div class="circle border"></div>
                  <p>{{ $t("start_at") }}</p>
                  <i
                    ><small> {{ $t("your_location") }} </small></i
                  >
                </div>
                <div
                  v-for="destination in tourDestinations"
                  :key="destination.id"
                  class="point"
                >
                  <i class="bi bi-geo-alt-fill"></i>
                  <p>{{ destination.name }}</p>
                </div>
                <div class="end-point">
                  <div class="circle border"></div>
                  <p>{{ $t("arrive_at") }}</p>
                  <i
                    ><small> {{ $t("your_location") }} </small></i
                  >
                </div>
              </div>
              <!-- MAP -->
              <div class="col">
                <Map :markers="tourDestinationsMap" />
              </div>
            </div>
            <div class="hr"></div>
            <!-- Tour badges -->
            <div class="row row-cols-3 mb-4">
              <div class="col">
                <span class="badge border rounded-pill text-bg-dark p-2">
                  <i class="bi bi-clock-history"></i>
                  {{ $t("duration") }}:
                  {{ tour.duration }}
                </span>
              </div>
              <div class="col">
                <span class="badge border rounded-pill text-bg-dark p-2">
                  <i class="bi bi-speedometer2"></i>
                  {{ $t("difficulty") }}:
                  {{ tour.difficulty }}
                </span>
              </div>
              <div class="col">
                <span class="badge border rounded-pill text-bg-dark p-2">
                  <i class="bi bi-people"></i>
                  {{ $t("popularity") }}:
                  {{ tour.popularity }}
                </span>
              </div>
            </div>
            <!-- Highlights -->
            <ul class="list-unstyled">
              <li>
                <div class="hr"></div>
                <div class="row row-cols-1 row-cols-md-2">
                  <div class="col-md-4">
                    <h4>
                      {{ $t("highlights") }}
                    </h4>
                  </div>
                  <div class="col-md-8">
                    <ul>
                      <li
                        v-for="destination in tourDestinations"
                        :key="destination.id"
                      >
                        {{ destination.description }}
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <!-- Full Description -->
              <li v-if="itineraries && itineraries.length > 0">
                <div class="hr"></div>
                <div class="row row-cols-1 row-cols-md-2">
                  <div class="col-md-4">
                    <h4>
                      {{ $t("full_description") }}
                    </h4>
                  </div>
                  <div class="col-md-8">
                    <ul>
                      <li v-for="itinerary in itineraries" :key="itinerary.id">
                        {{ itinerary.activities }}
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <!-- Meeting Point -->
              <li>
                <div class="hr"></div>
                <div class="row row-cols-1 row-cols-md-2">
                  <div class="col-md-4">
                    <h4>
                      {{ $t("meeting_point.text") }}
                    </h4>
                  </div>
                  <div class="col-md-8">
                    <ul class="list-unstyled">
                      <li v-for="(detail, i) in meetingPoints" :key="i">
                        {{ detail.address }}
                        <i>
                          <a
                            :href="detail.map_url"
                            class="text-info"
                            target="_blank"
                            >{{ $t("meeting_point.go_to_map") }}</a
                          >
                        </i>
                      </li>
                    </ul>
                    <p class="p-2">
                      {{ $t("meeting_point.description") }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- Action section -->
        <div v-if="!TourDetailsStore.loading" class="col-4 d-none d-lg-block">
          <div
            class="tour-action border rounded-4 d-flex flex-wrap justify-content-around align-items-center p-3 gap-2"
          >
            <div class="price">
              <p class="card-text p-0 m-0">From</p>
              <h5 class="card-title fst-italic fw-bold p-0 m-0">
                {{ tourPrice }}
              </h5>
              <p class="card-text p-0 m-0">Per Person</p>
            </div>
            <div class="book-now">
              <BaseButton color="white" href="#" text="book_now" />
            </div>
            <div class="col-12 d-flex align-items-center gap-3">
              <span>
                <i class="bi bi-calendar2-date"></i>
              </span>
              <span class="card-subtitle">
                <small>{{ $t("book_now_pay_later") }}</small>
              </span>
            </div>
          </div>
        </div>
        <!-- Mobile tour action -->
        <div
          v-if="!TourDetailsStore.loading"
          class="action-box d-block d-lg-none position-absolute bottom-0 start-0 end-0"
        >
          <div
            class="tour-action border rounded-4 d-flex flex-wrap justify-content-between align-items-center p-2 gap-2"
          >
            <div class="price">
              <h5 class="card-title fst-italic fw-bold p-0 m-0">
                {{ tourPrice }} per person
              </h5>
            </div>
            <div class="book-now">
              <BaseButton color="white" href="#" text="book_now" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- IMG Modal -->
    <div
      class="modal fade"
      id="imageModal"
      tabindex="-1"
      aria-labelledby="imageModalLabel"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content bg-dark bg-opacity-75">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="imageModalLabel"></h1>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img id="modalImg" src="" class="d-block w-100 rounded-4" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/variables" as *;
#carouselInterval {
  @media (min-width: 992px) {
    width: 50%;
  }
}

.carousel-item.active.placeholder {
  height: 400px;
  border-radius: 20px;
}

.about-this-tour {
  color: $secondary;
  font-weight: bold;
}

.action-box {
  z-index: 9999;
}

.tour-action {
  background-color: rgba(black, 0.3);
  backdrop-filter: blur(5px);

  .card-title {
    color: $secondary;
  }
}

.hr {
  border-top: 1px solid $secondary;
  margin: 1rem 0;
}

.point,
.end-point {
  position: relative;
  border-left: 10px solid $secondary;
  padding-left: 10px;

  p {
    margin: 0;
    padding: 0;
  }

  .circle {
    position: absolute;
    left: -15px;
    width: 20px;
    height: 20px;
    background-color: $secondary;
    border-radius: 50%;
  }
}

.point {
  padding-bottom: 20px;

  .bi {
    position: absolute;
    left: -15px;
    font-size: 20px;
  }

  .circle {
    top: -5px;
  }
}

.end-point {
  padding-top: 20px;

  .circle {
    bottom: -5px;
  }
}
</style>
