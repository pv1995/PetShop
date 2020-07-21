<template>
  <q-layout view="hHh lpR fFf">
      <div class="pet101-layout">
    <header-shop />
    <q-page-container>
      <router-view />
    </q-page-container>
      </div>
  </q-layout>
</template>

<script>
import headerShop from '../components/shop/ShopHeader.vue';

export default {
  components: {
      "header-shop": headerShop
  },
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
.pet101-layout
    height : 100vh;
    overflow : hidden;

</style>
