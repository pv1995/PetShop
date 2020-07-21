<template>
  <q-layout view="hHh lpR fff">
    <main-header />
    <q-page-container>
      <router-view />
    </q-page-container>
    <main-footer />
    <!-- <footer-lower /> -->
  </q-layout>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import FooterLower from '../components/FooterLower.vue';

export default {
  components: {
      "main-header": Header,
      "main-footer": Footer,
      "footer-lower": FooterLower
  },
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>

</style>
