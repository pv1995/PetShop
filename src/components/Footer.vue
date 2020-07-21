<template>
  <q-footer class="primary-bg secondary-color absolute-bottom">
    <q-toolbar class="primary-bg secondary-color q-pt-lg">
      <q-toolbar-title>
        <div class="footer-logo text-weight-bolder">
          PetStop
          <q-avatar square class="font-25">
            <img src="statics/paw-white.png">
          </q-avatar>
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <div class="row primary-bg secondary-color q-pb-lg">
      <div class="col-3">
        <h6 class="text-center footer-titles">About PetStop</h6>
        <div class="grid-footer-links">
          <q-btn flat stretch class="secondary-color footer-links" label="Who We Are" no-caps/>
          <q-btn flat stretch class="secondary-color footer-links" label="Our Mission" no-caps/>
          <q-btn flat stretch class="secondary-color footer-links" label="Roadmap" no-caps/>
          <q-btn
            flat
            stretch
            class="secondary-color footer-links"
            label="Become A Partner"
            no-caps
          />
          <q-btn
            flat
            stretch
            class="secondary-color footer-links"
            label="Become A Sponsor"
            no-caps
          />
          <q-btn flat stretch class="secondary-color footer-links" label="FAQ" no-caps/>
        </div>
      </div>
      <div class="col-3">
        <h6 class="text-center footer-titles">Our Services</h6>
        <div class="grid-footer-links">
          <q-btn flat stretch class="secondary-color footer-links" label="PetShop" no-caps/>
          <q-btn flat stretch class="secondary-color footer-links" label="Pet 101" no-caps/>
          <q-btn flat stretch class="secondary-color footer-links" label="Pet Social" no-caps/>
          <q-btn flat stretch class="secondary-color footer-links" label="Pet Training" no-caps/>
        </div>
      </div>
      <div class="col-6">
        <h6 class="text-center footer-titles">Contact Us</h6>
      </div>
    </div>
  </q-footer>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.font-25 {
  font-size: 25px;
}

.footer-titles {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.footer-logo {
  padding-left: 6.5rem;
}

.grid-footer-links {
  display: grid;
}

.footer-links {
  max-width: 100%;
  margin: 0 auto;
}
</style>
