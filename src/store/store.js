import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  // - API end-points
  destinations: {
    apiUrl: "http://localhost:8088/api/destinations",
    page: 1,
  },
  tours: {
    apiUrl: "http://localhost:8088/api/tours",
    page: 1,
  },
  categoriesApiUrl: "http://localhost:8088/api/categories",

  // Variables
  loading: true,
  searchQuery: [],
  allDestinations: [],
  allTours: [],

  // Methods
  // Get resources
  async fetchResources(
    url,
    pageNr = 1,
    extraParams = {},
    targetVariable = "variabels"
  ) {
    try {
      this.loading = true;

      const response = await axios.get(url, {
        params: {
          page: pageNr,
          ...extraParams,
        },
      });

      if (this[targetVariable] !== undefined) {
        this[targetVariable] = response.data.data;
      } else {
        console.warn(`Variable '${targetVariable}' not found in store.`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      this.loading = false;
    }
  },
});
