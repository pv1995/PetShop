<template>
  <q-page class="landing">
    <section class="banner">
      <div class="banner-wrapper">
        <!-- <img alt="Banner" src="statics/banner-1.png" width="100%"> -->
        <img src="statics/main-banner-3.png" width="100%">
      </div>
      <div class="banner-heading">
        <h3 class="accent-color banner-heading-big">One-Stop Solution</h3>
        <h6
          class="accent-color banner-heading-small text-center text-uppercase"
        >for your most loved ones</h6>
      </div>
    </section>
    <blue-band/>
    <section class="hot-products q-pa-xl">
      <h4 class="text-weight-bold service-heading text-center primary-color">TRENDING PRODUCTS</h4>
      <div class="row">
        <div class="col-3 q-pa-sm">
          <q-card class="my-card">
            <div class="hot-img-wrapper">
              <img src="statics/hot-1.png" width="100%">
            </div>
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-3 q-pa-sm">
          <q-card class="my-card">
            <div class="hot-img-wrapper">
              <img src="statics/hot-2.png" width="100%">
            </div>

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-3 q-pa-sm">
          <q-card class="my-card">
            <div class="hot-img-wrapper">
              <img src="statics/hot-3.png" width="100%">
            </div>

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-3 q-pa-sm">
          <q-card class="my-card">
            <div class="hot-img-wrapper">
              <img src="statics/hot-1.png" width="100%">
            </div>

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section class="vet-care q-pa-xl">
      <h4 class="primary-color text-center text-weight-bold">PLANNING FOR A VET CONSULTATION?</h4>
      <div class="row q-py-lg">
        <div class="col-4 text-center">
          <q-icon name="schedule" class="accent-color vet-icons"/>
          <div class="vet-service-details q-pa-lg accent-color">
            <p>Schedule your pet's vaccinations and other appointments on our website. Subscribe now to be our exclusive member!</p>
          </div>
        </div>
        <div class="col-4 text-center">
          <q-icon name="local_hospital" class="accent-color vet-icons"/>
          <div class="vet-service-details q-pa-lg accent-color">
            <p>Consult the best veterenians in the city to get your pet's health checked. We have collaborations with the best pet hospitals in Bangalore.</p>
          </div>
        </div>
        <div class="col-4 text-center">
          <q-icon name="calendar_today" class="accent-color vet-icons"/>
          <div class="vet-service-details q-pa-lg accent-color">
            <p>Book an appointment with your regular veterenian or a new doctor with just a click, to avoid hassle to you and your loved ones!</p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>
<script>
import blueBand from "../components/blueBand.vue";

export default {
  components: {
    "blue-band": blueBand
  },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
.landing {
  margin-top: -50px;
}

.banner-wrapper {
  min-height: 500px;
  max-height: 500px;
}

.banner-wrapper > img {
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  opacity: 0.8;
}

.banner-heading {
  position: absolute;
  top: 0;
  right: 50px;
}

.banner-heading-big {
  margin-bottom: 1rem !important;
}

.banner-heading-small {
  margin-top: 1rem !important;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.hot-img-wrapper > img {
  min-height: 250px;
  max-height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
}

.vet-icons {
  font-size: 5rem;
}

.vet-service-details > p {
  font-size: 1.2rem;
}
</style>
