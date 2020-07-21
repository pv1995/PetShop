<template>
  <q-layout view="hHh lpR fff">
    <trainingHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <trainingFooter />
  </q-layout>
</template>

<script>
import trainingHeader from '../components/training/TrainingHeader.vue';
import trainingFooter from '../components/shop/ShopFooter.vue';

export default {
    components: {
        trainingHeader,
        trainingFooter
    },
    data () {
        return {}
    }
}
</script>
<style lang="stylus" scoped>


</style>
