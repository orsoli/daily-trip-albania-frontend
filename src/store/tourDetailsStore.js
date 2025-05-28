import { reactive } from "vue";
import axios from "axios";

export const TourDetailsStore = reactive({
  apiUrl: "http://localhost:8088/api/tours",
  tour: {},
  loading: true,

  // Methods
  // Get resources
  async fetchResources(slug, extraParams = {}) {
    try {
      this.loading = true;

      const response = await axios.get(`${this.apiUrl}/${slug}`, {
        params: {
          ...extraParams,
        },
      });

      if (this.tour !== undefined) {
        this.tour = response.data.data;
      } else {
        console.warn(`Variable '${this.tour}' not found in store.`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      this.loading = false;
    }
  },
});
