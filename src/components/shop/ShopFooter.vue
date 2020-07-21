<template>
  <q-footer class="bg-secondary text-accent">
    <q-toolbar class="bg-lightgray text-accent q-pt-lg">
      <q-toolbar-title style="padding-left:3.3rem !important">
        <div class="footer-logo text-weight-bolder text-primary q-px-xl">
          PetStop
          <q-avatar square class="font-25">
            <img src="statics/paw.png">
          </q-avatar>
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <div class="row bg-lightgray text-primary q-pb-lg q-px-xl">
      <div class="col-3 q-px-xl">
        <h6 class="text-left footer-titles q-pl-md">About PetStop</h6>
        <div class="grid-footer-links justify-start">
          <q-btn flat stretch class="text-primary footer-links" label="Who We Are" no-caps align="left"/>
          <q-btn flat stretch class="text-primary footer-links" label="Our Mission" no-caps align="left"/>
          <q-btn flat stretch class="text-primary footer-links" label="Roadmap" no-caps align="left"/>
          <q-btn
            flat
            stretch
            class="text-primary footer-links"
            label="Become A Partner"
            no-caps
            align="left"
          />
          <q-btn
            flat
            stretch
            class="text-primary footer-links"
            label="Become A Sponsor"
            no-caps
            align="left"
          />
          <q-btn flat stretch class="text-primary footer-links" label="FAQ" no-caps align="left"/>
        </div>
      </div>
      <div class="col-3">
        <h6 class="text-left footer-titles q-pl-md">Our Services</h6>
        <div class="grid-footer-links justify-start">
          <q-btn flat stretch class="text-primary footer-links" label="PetShop" no-caps align="left"/>
          <q-btn flat stretch class="text-primary footer-links" label="Pet 101" no-caps align="left"/>
          <q-btn flat stretch class="text-primary footer-links" label="Pet VetCare" no-caps align="left"/>
          <q-btn flat stretch class="text-primary footer-links" label="Pet Training" no-caps align="left"/>
        </div>
      </div>
      <div class="col-6">
        <h6 class="text-left footer-titles">Contact Us</h6>
      </div>
    </div>
  </q-footer>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.font-25
    font-size: 25px;

.footer-titles
    margin-top: 2rem;
    margin-bottom: 1rem;

.footer-logo
    // padding-left: 3rem;

.grid-footer-links
    display: grid;

.footer-links
    // max-width: 100%;
    // margin: 0 auto;
    // padding-left 0
</style>
