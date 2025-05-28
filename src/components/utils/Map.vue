<script>
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix për ikona që mungojnë në Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
    .href,
});

export default {
  name: "Map",
  props: {
    markers: {
      type: Array,
      required: true,
    },
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
  computed: {
    bounds() {
      if (!this.markers.length) return null;
      const latLngs = this.markers.map((marker) => marker.latLng);
      return L.latLngBounds(latLngs);
    },

    center() {
      if (!this.markers.length) return [0, 0];
      const latSum = this.markers.reduce((sum, m) => sum + m.latLng[0], 0);
      const lngSum = this.markers.reduce((sum, m) => sum + m.latLng[1], 0);
      return [latSum / this.markers.length, lngSum / this.markers.length];
    },
  },
};
</script>

<template>
  <LMap
    v-if="markers"
    :zoom="8"
    :center="center"
    :bounds="bounds"
    :use-global-leaflet="false"
    style="height: 300px; width: 100%"
    class="map-container"
  >
    <!-- Map Overlay -->
    <LTileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      attribution="Tiles &copy; Esri"
    />

    <!-- Labels Overlay -->
    <LTileLayer
      url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
      attribution="Labels &copy; Esri"
    />

    <!-- Markers -->
    <LMarker
      v-for="(marker, index) in markers"
      :key="index"
      :lat-lng="marker.latLng"
    >
      <LTooltip>{{ marker.name }}</LTooltip>
    </LMarker>
  </LMap>
</template>

<style scoped>
.map-container {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px 1px whitesmoke;
}
</style>
