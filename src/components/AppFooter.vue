<script>
import Highlights from "./utils/Highlights.vue";
export default {
  data() {
    return {
      // Variables
      currentYear: new Date().getFullYear(),
      agencyDetails: {
        text: "agency",
        name: "Daily Trip Albania",
        address: "Rruga Onhezmi, 1",
        postCode: "9701",
        city: "Sarande",
        country: "Albania",
      },
      contactDetails: [
        {
          id: "official",
          text: "customer_care",
          links: [
            {
              id: "celNr",
              href: "#",
              label: "AL +355 69 382 9526",
              icon: "bi bi-telephone",
            },
            {
              id: "whatsApp",
              href: "#",
              label: "AL +355 69 382 9526",
              icon: "bi bi-whatsapp",
            },
            {
              id: "email",
              href: "#",
              label: "dailytripalbania@gmail.com",
              icon: "bi bi-envelope",
            },
          ],
        },
        {
          id: "social",
          text: "follow_us",
          links: [
            {
              id: "fcb",
              href: "#",
              label: "Facebook",
              icon: "bi bi-facebook",
            },
            {
              id: "insta",
              href: "#",
              label: "Instagram",
              icon: "bi bi-instagram",
            },
            {
              id: "tiktok",
              href: "#",
              label: "TikTok",
              icon: "bi bi-tiktok",
            },
            {
              id: "youtube",
              href: "#",
              label: "YouTube",
              icon: "bi bi-youtube",
            },
          ],
        },
      ],
    };
  },

  components: {
    Highlights,
  },

  methods: {},
};
</script>

<template>
  <div class="footer p-5 pb-1">
    <Highlights />
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col text-center">
        <h3>{{ $t(agencyDetails.text) }}</h3>
        <p>
          {{ agencyDetails.address }} <br />
          {{ agencyDetails.postCode }}
          {{ agencyDetails.city }} <br />
          {{ agencyDetails.country }}
        </p>
      </div>
      <div v-for="contact in contactDetails" :key="contact.id" class="col ps-5">
        <h3>{{ $t(contact.text) }}</h3>
        <ul class="list-unstyled">
          <li v-for="link in contact.links" :key="link.id">
            <a :href="link.href" class="text-light text-decoration-none">
              <i v-if="link.icon" :class="link.icon" class="me-1"></i>
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <h5 class="text-center">
      {{ $t("footer", { year: currentYear }) }}
    </h5>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/variables" as *;
.footer {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
  h3 {
    color: $primary;
  }

  li:hover {
    scale: 1.05;
    transition: all 0.3s ease-in-out;
  }
}
</style>
