<template>
    <q-page class="favorties">
        <section class="favorite-products q-px-xl q-pb-xl">
            <div class="q-px-xl">
                <h4 class="text-center">Favorites</h4>
                <div class="row items-center">
                    <div class="col-3 q-pa-md" v-for="(prod, i) in favoriteProducts" :key="i">
                        <q-card class="favorite-card q-pa-sm q-pt-md cursor-pointer">
                            <q-img :src="prod.image" style="height:250px"/>
                            <q-card-section class="text-center q-pb-sm product-name">
                                {{prod.name}}
                            </q-card-section>
                            <q-card-actions align="around">
                                <q-btn flat color="primary" icon="delete" label="Remove"/>
                                <q-btn flat color="primary" icon="shopping_cart" label="Add to cart" />
                            </q-card-actions>
                        </q-card>
                    </div>
                </div>
            </div>
        </section>
    </q-page>
</template>
<script>
export default {
    data() {
        return {
            favoriteProducts: [
                {
                    id: 1,
                    name: "Rottweiler Adult",
                    image: "statics/rottweiler-adult.jpg"
                },
                {
                    id: 2,
                    name: "Rottweiler Junior",
                    image: "statics/rottweiler-junior.jpg"
                },
                {
                    id: 3,
                    name: "Giant Junior",
                    image: "statics/giant-junior.jpg"
                },
                {
                    id: 4,
                    name: "Urban Life Junior Wet",
                    image: "statics/urban-life-junior-wet.jpg"
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>

.product-name
    font-size 20px
</style>
