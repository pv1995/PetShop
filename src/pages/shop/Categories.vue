<template>
    <q-page class="categories">
        <section class="banner q-mb-lg">
            <div class="banner-wrapper">
                <q-img
                src="statics/banner-2.jpeg"
                spinner-color="white"
                class="banner-image"
                />
            </div>
            <div class="category-heading">
              <h3 class="accent-color banner-heading-big q-pa-sm secondary-bg">Explore Our Categories</h3>
            </div>
        </section>
        <section class="category-options">
            <h4 class="accent-color">All Categories</h4>
            <div class="row items-center q-mb-lg">
                <div class="col-6 q-pa-md" v-for="category in categories" :key="category.id">
                    <div class="cat-single">
                        <q-img
                        :src="category.image"
                        class="cat-img"
                        spinner-color="accent"
                        />
                        <!-- <div class="cat-overlay"></div>
                        <div class="cat-description">
                            <h5 class="secondary-color">{{category.name}}</h5>
                            <p class="secondary-color">{{category.starting_at}}</p>
                        </div> -->
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
            categories: [
                {
                    id: 1,
                    name: "Dog Food",
                    image: "statics/dog-food1.jpg",
                    starting_at: "Rs. 399"
                },
                {
                    id: 2,
                    name: "Cat Food",
                    image: "statics/cat-food.jpg",
                    starting_at: "Rs. 149"
                },
                {
                    id: 3,
                    name: "Dog Leashes",
                    image: "statics/dog-leash.jpg",
                    starting_at: "Rs. 199"
                },
                {
                    id: 4,
                    name: "Cat Tinklets & Bells",
                    image: "statics/cat-tinklet.jpg",
                    starting_at: "Rs. 99"
                },
                {
                    id: 5,
                    name: "Dog Treats",
                    image: "statics/dog-treats.jpg",
                    starting_at: "Rs. 99"
                },
                {
                    id: 6,
                    name: "Cat Treats",
                    image: "statics/cat-treats.jpg",
                    starting_at: "Rs. 69"
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>

.category-banner-img
    opacity 0.8

.category-heading
    position absolute;
    top 30px
    left 5%

.category-options > .row
    padding-left 5rem
    padding-right 5rem

.category-options > h4
    padding-left 5rem

.cat-img
    min-height 450px
    max-height 450px

// .cat-single:hover > .cat-overlay
//     opacity 1

// .cat-overlay
//     background rgba(0,0,0,0.7)
//     position absolute
//     height 99%
//     width 100%
//     left 0
//     top 0
//     bottom 0
//     right 0
//     opacity 0
//     -webkit-transition all 0.4s ease-in-out 0s
//     -moz-transition all 0.4s ease-in-out 0s
//     transition all 0.4s ease-in-out 0s
</style>
