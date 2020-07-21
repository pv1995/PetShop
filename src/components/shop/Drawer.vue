<template>
  <q-drawer v-model="open" content-class="secondary-bg" :overlay="true">
    <q-list no-border link inset-delimiter>
        <q-item @click.native="goToShopHome" class="drawer-item cursor-pointer">
          <!-- <q-item-side icon="home" /> -->
          <q-item-section class="q-pa-md accent-color">Home</q-item-section>
        </q-item>
        <q-item @click.native="openURL('https://github.com/quasarframework/')" class="drawer-item cursor-pointer">
          <!-- <q-item-side icon="dogs" /> -->
          <q-item-section class="q-pa-md accent-color">Dogs</q-item-section>
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')" class="drawer-item cursor-pointer">
          <!-- <q-item-side icon="cat" /> -->
          <q-item-section class="q-pa-md accent-color">Cats</q-item-section>
        </q-item>
        <q-item @click.native="goToCategories" class="drawer-item cursor-pointer">
          <!-- <q-item-side icon="record_voice_over" /> -->
          <q-item-section class="q-pa-md accent-color">Categories</q-item-section>
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')" class="drawer-item cursor-pointer">
          <!-- <q-item-side icon="rss feed" /> -->
          <q-item-section class="q-pa-md accent-color">Refunds & Cancellation</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
</template>
<script>
export default {
    props: {
        open: {
            type:Boolean,
            required: true
        }
    },
    data() {
        return {
            leftDrawerOpen: false
        }
    },
    methods: {
      closeDrawer() {
        this.$emit("closeDrawer");
      },
      goToCategories() {
        this.closeDrawer();
        this.$router.push('/shop/categories')
      },
      goToShopHome() {
        this.closeDrawer();
        this.$router.push('/shop');
      }
    }
}
</script>
<style lang="stylus" scoped>
.drawer-item:hover > div 
  color: white !important;

.drawer-item:hover
  background #335ab8
</style>
