<template>
  <q-layout view="hHh lpR fff">
    <header-shop />
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-shop />
  </q-layout>
</template>

<script>
import headerShop from '../components/shop/ShopHeader.vue';
import footerShop from '../components/shop/ShopFooter.vue';

export default {
  components: {
      "header-shop": headerShop,
      "footer-shop": footerShop
  },
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>

</style>
