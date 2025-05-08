<script>
export default {
  name: "Carousel",
  data() {
    return {
      itemPositions: [],
    };
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  methods: {
    // Update item positions based on the carousel's center
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
    // Handle scroll event
    handleScroll() {
      this.updatePositions();
    },
    // Get style for each item based on its position
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

    // Handle image error
    // This function is called when an image fails to load
    // It sets a placeholder image
    handleImageError(event) {
      event.target.src = "https://placehold.co/300x200?text=No+Image";
    },
  },

  mounted() {
    const images = this.$refs.carousel.querySelectorAll("img");
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === images.length) {
            this.updatePositions();
          }
        });
      }
    });

    window.addEventListener("resize", this.updatePositions);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updatePositions);
  },
};
</script>

<template>
  <div ref="carousel" class="carousel" @scroll="handleScroll">
    <!-- Before spacer -->
    <div class="spacer"></div>
    <div class="d-flex justify-content-center">
      <a
        href="#"
        v-for="(item, index) in items"
        :key="index"
        class="item"
        :style="getStyle(index)"
      >
        <img
          :src="item.thumbnail"
          :alt="item.slug"
          @error="handleImageError"
          @load="updatePositions"
        />
        <h5
          class="title position-absolute translate-middle-x start-50 bottom-0 fw-bold no-wrap text-center"
        >
          {{ item.name }}
        </h5>
      </a>
    </div>
    <!-- After spacer -->
    <div class="spacer"></div>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  height: 400px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 5px;
  align-items: center;
  position: relative;
  padding: 50px 0;
  scrollbar-width: none; /* Firefox */
}
.carousel::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.carousel .title {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 18px;
  text-shadow: 0 0 3px #000000;
}

.carousel a:hover .title {
  color: rgba(24, 55, 58, 0.664);
  scale: 1.2;
  text-shadow: 0 0 3px rgb(255, 255, 255);
  transition: scale 0.3s ease-in-out, color 0.5s ease-in-out;
}
.carousel a:hover img {
  scale: 1.1;
  transition: scale 0.3s ease-in-out, color 0.5s ease-in-out;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .carousel {
    padding: 0;
  }
}

.item {
  flex: 0 0 auto;
  width: 250px;
  height: 200px;
  scroll-snap-align: center;
  transition: transform 0.3s, z-index 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgba(245, 245, 245, 0.3); /* whitesmoke */
  overflow: hidden;
  position: relative;
}

@media (max-width: 768px) {
  .item {
    width: 250px;
    /* height: 150px; */
  }
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.spacer {
  flex: 0 0 calc(50% - 125px);
  pointer-events: none;
}
</style>
