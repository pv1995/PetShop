<template>
    <q-page class="landing">
        <section class="banner">
            <div class="banner-wrapper">
               <!-- <img alt="Banner" src="~assets/banner-1.png" width="100%"> -->
               <q-carousel
                  animated
                  navigation
                  infinite
                  autoplay
                  class="height-500"
                  v-model="slide"
                >
                  <q-carousel-slide :name="1" img-src="statics/banner-1.jpeg" />
                  <q-carousel-slide :name="2" img-src="statics/banner-3.jpeg" />
                </q-carousel>
            </div>
        </section>
        <div class="container">
            <div class="row category-row">
                <div class="col-sm-6">
                    <div class="dog-category-wrapper">
                        <q-img alt="Dog" src="statics/dog.jpeg" width="100%" class="dog-category-img" />
                        <div class="category-heading-left">
                            <h4 class="text-weight-bold">The Paw Collection</h4>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="right-side-category pb-1">
                        <q-img src="statics/cat.jpeg" width="100%" class="dog-category-img1" />
                        <div class="category-heading-right secondary-color">
                            <h4 class="text-weight-bold">The Cat Collection</h4>
                        </div>
                    </div>
                    <div class="right-side-category">
                        <q-img src="statics/supplies.jpeg" width="100%" class="dog-category-img1" />
                        <div class="category-heading-right secondary-color">
                            <h4 class="text-weight-bold">Supply A-Z</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hot-trending q-pt-md">
                <h4 class="text-center primary-color text-weight-bold">Hot Right Now</h4>
                <div class="row trending-row">
                    <div class="col-3 q-pa-sm" v-for="(hot, i) in hotProducts" :key="i" @click="goToProduct(hot.id)">
                        <product-card :prod="hot" />
                    </div>
                </div>
            </div>
            <div class="categories q-py-xl">
                <h4 class="text-center primary-color text-weight-bold">Explore our categories</h4>
                <div class="row trending-row">
                    <div class="col-4 q-pa-sm cursor-pointer">
                        <div class="category-img-wrapper">
                            <q-img
                                src="statics/category.jpeg"
                                style="width: 100%"
                                class="category-img"
                                >
                                <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
                                    Cat Supplies
                                </div>
                            </q-img>
                        </div>
                    </div>
                    <div class="col-4 q-pa-sm cursor-pointer">
                        <div class="category-img-wrapper">
                            <q-img
                                src="statics/category-1.jpeg"
                                style="width: 100%"
                                class="category-img"
                                >
                                <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
                                    Dog Supplies
                                </div>
                            </q-img>
                        </div>
                    </div>
                    <div class="col-4 q-pa-sm cursor-pointer">
                        <div class="category-img-wrapper">
                            <q-img
                                src="statics/category-2.jpeg"
                                style="width: 100%"
                                class="category-img"
                                >
                                <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
                                    Pet Toys & More
                                </div>
                            </q-img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="newsletter">
            <newsletter />
        </div>
    </q-page>
</template>
<script>
import Newsletter from '../../components/Newsletter.vue';
import productCard from '../../components/shop/product-card.vue';

export default {
    data() {
        return {
            slide:1,
            hotProducts: [
                {
                    id: 1,
                    image: "statics/hot-1.jpeg",
                    name: "Puppy Body Strap",
                    starting_at: "Rs. 299"
                },
                {
                    id: 2,
                    image: "statics/hot-2.jpeg",
                    name: "Dog Heavy Body Strap",
                    starting_at: "Rs. 699"
                },
                {
                    id: 3,
                    image: "statics/hot-3.jpeg",
                    name: "Multi-leash Body Strap",
                    starting_at: "Rs. 1299"
                },
                {
                    id: 4,
                    image: "statics/dog-food.jpg",
                    name: "Dog Food",
                    starting_at: "Rs. 199"
                },
            ]
        }
    },
    components: {
        "newsletter": Newsletter,
        "product-card": productCard
    },
    methods: {
        goToProduct(id) {
            console.log(id);
            this.$router.push(`/shop/product/${id}`)
        }
    }
}
</script>
<style lang="stylus" scoped>
h4 {
  margin-top: 1rem;
}

.pb-1 {
  padding-bottom: 10px;
}

.banner {
  position: relative;
  margin-bottom: 2rem;
}

.banner-wrapper {
  width: 100%;
  max-height: 500px;
}

.banner-wrapper > img {
  max-height: 500px;
  object-fit: cover;
  object-position: center;
}

.banner-heading {
  position: absolute;
  top: 0;
  right: 50px;
}

.banner-heading-big {
  margin-bottom: 0 !important;
}

.dog-category-img 
    max-height: 615px
    object-fit: cover
    object-position: top

.dog-category-img1
    max-height: 300px
    object-fit: cover
    object-position: top

.right-side-category
    padding-left: 10px
    position: relative
.banner-heading-small {
  margin-top: 0.5rem !important;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.height-500 {
  height: 500px;
}

.dog-category-wrapper {
  padding-right: 10px;
  position: relative;
}

.dog-category-wrapper > img {
  max-height: 615px;
  object-fit: cover;
  object-position: top;
}

.right-side-category {
  padding-left: 10px;
  position: relative;
}

.category-img-wrapper
    overflow: hidden;

.category-img
    min-height: 350px;
    max-height: 350px;
    object-fit: cover;
    object-position: center;
    opacity: 0.8
    transition: ease 0.3s;
.right-side-category > img {
  max-height: 300px;
  object-fit: cover;
  object-position: center;
}

.category-heading-left, .category-heading-right {
  position: absolute;
  top: 0;
  left: 25px;
}

.category-row {
  margin-bottom: 2rem;
}

.hot-img-wrapper, .category-img-wrapper {
  overflow: hidden;
}

.hot-img-wrapper > img {
  min-height: 250px;
  max-height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  opacity: 0.8;
  transition: ease 0.3s;
}

.hot-img {
  min-height: 250px;
  max-height: 250px;
  transition: ease 0.3s;
  opacity: 0.8;
}

.hot-img-wrapper:hover > .hot-img {
  transform: scale(1.1);
  opacity: 1;
}

.category-img {
  min-height: 350px;
  max-height: 350px;
  object-fit: cover;
  object-position: center;
  opacity: 0.8;
  transition: ease 0.3s;
}

.category-img-wrapper:hover > .category-img {
  transform: scale(1.1);
  opacity: 1;
}
</style>
