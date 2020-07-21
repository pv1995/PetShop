<template>
    <div>
        <q-header>
            <q-toolbar
                color="primary"
                class="primary-bg"
            >
                <q-btn
                flat
                dense
                round
                @click="leftDrawerOpen = !leftDrawerOpen"
                aria-label="Menu"
                >
                <q-icon name="menu" />
                </q-btn>

                <q-toolbar-title @click="goToMainLanding" class="cursor-pointer">
                PetStop
                <!-- <div slot="subtitle">Running on Quasar v{{ $q.version }}</div> -->
                </q-toolbar-title>
                <q-space />
                <div class="q-pa-sm">
                <q-btn flat round dense icon="search" />
                </div>
                <div class="q-pa-sm">
                <q-btn flat round dense icon="favorite_border" @click="goToFavorites"/>
                </div>
                <div class="q-pa-sm">
                <q-btn flat round dense icon="shopping_cart" @click="goToCart"/>
                </div>
                <div class="q-pa-sm">
                <q-btn flat round dense icon="person" />
                </div>
            </q-toolbar>
        </q-header>
        <drawer :open="leftDrawerOpen" @closeDrawer="leftDrawerOpen = false"/>
    </div>
</template>
<script>
import drawer from './Drawer.vue';

export default {
    components: {
        "drawer": drawer
    },
    data() {
        return {
            leftDrawerOpen: false
        }
    },
    methods: {
        goToMainLanding() {
            this.$router.push('/');
        },
        goToFavorites() {
            this.$router.push('/shop/favorites');
        },
        goToCart() {
            this.$router.push('/shop/cart'); 
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
