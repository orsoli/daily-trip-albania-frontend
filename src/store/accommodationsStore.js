import { reactive } from "vue";
import axios from "axios";

export const AccommodationsStore = reactive({
  apiUrl: "http://localhost:8088/api/accommodations",
  list: [],
  page: 1,
  loading: true,
  searchQuery: [],
  categories: [],

  // Methods
  // Get resources
  async fetchResources(extraParams = {}) {
    try {
      this.loading = true;

      const response = await axios.get(this.apiUrl, {
        params: {
          page: this.page,
          ...extraParams,
        },
      });

      if (this.list !== undefined) {
        this.list = response.data.data;
      } else {
        console.warn(`Variable '${this.list}' not found in store.`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      this.loading = false;
    }
  },
});
