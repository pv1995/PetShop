<template>
    <q-page class="product-detail">
        <section class="product-display secondary-bg q-px-xl">
            <div class="row items-center">
                <div class="col-6">
                    <div class="q-pa-md">
                        <q-carousel
                            v-model="slide"
                            infinite
                            swipeable
                            animated
                            control-color="primary"
                            navigation
                            padding
                            arrows
                            class="text-white rounded-borders prod-carousel"
                        >
                            <q-carousel-slide v-for="(img,i) in product.productImages" :key="i" :name="img.id" class="column no-wrap flex-center" :img-src="img.name"/>
                        </q-carousel>
                    </div>
                </div>
                <div class="col-1"></div>
                <div class="col-5" style="min-height:680px">
                    <div class="q-pa-md">
                        <q-breadcrumbs>
                            <q-breadcrumbs-el label="Home" icon="home" />
                            <q-breadcrumbs-el label="Categories" icon="widgets" />
                            <q-breadcrumbs-el label="Dog Food" icon="grain"/>
                        </q-breadcrumbs>
                        <h4 class="product-name text-weight-bold">{{product.name}}</h4>
                        <q-item-label class="q-py-sm" caption>{{product.tag}}</q-item-label>
                        <h6 class="text-weight-bold product-price q-py-lg">{{product.price}}</h6>
                        <div class="q-pb-lg">
                            <q-item-label caption class="q-py-sm">Size</q-item-label>
                            <q-btn-toggle
                                v-model="selected_size"
                                class="my-custom-toggle sizes"
                                no-caps
                                unelevated
                                toggle-color="primary"
                                color="white"
                                text-color="primary"
                                :options="product_sizes"
                            />
                        </div>
                        <div class="q-pb-lg">
                            <q-item-label caption class="q-py-sm">Quantity</q-item-label>
                            <q-input
                            v-model.number="product_count"
                            type="number"
                            outlined
                            dense
                            style="max-width: 75px"
                            />
                        </div>
                        <q-btn outline color="primary" label="Add to cart" size="xl" class="q-mt-lg q-my-sm q-px-xl"/>
                        <div class="q-py-lg">
                            <q-btn-group flat>
                                <q-btn flat color="primary" label="Add to wishlist" icon="favorite"/>
                                <q-btn flat color="primary" label="Add to favorites" icon="save" />
                            </q-btn-group>   
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="product-description q-px-xl lightgray-bg">
            <div class="q-px-xl q-py-lg">
                <h5 class="q-mt-sm q-mb-lg text-weight-bold">Product Details</h5>
                <div class="" v-for="(p, i) in product.description" :key="i">
                    <p class="text-h6 mb-0 text-capitalize">{{p.heading}}</p>
                    <p class="text-subtitle3 q-pt-sm">{{p.text}}</p>
                </div>
            </div>
        </section>
        <q-separator />
        <section class="product-review q-px-xl lightgray-bg">
            <div class="q-px-xl q-py-lg">
                <div class="row items-center">
                    <div class="col-6 q-pr-xl" style="height:439px">
                        <h5 class="q-mt-sm q-mb-lg text-weight-bold">Reviews</h5>
                        <p>No reviews have been posted yet. Please don't hesitate to share your opinion and write the first review!</p>
                    </div>
                    <div class="col-6 q-px-xl">
                        <h5 class="q-mt-sm q-mb-lg q-px-xl text-weight-bold">Add a review</h5>
                            <q-form
                            class="q-px-xl"
                            >
                            <q-input
                                outlined
                                
                                label="Name *"
                                
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Please type something']"
                            />
                            <q-input v-model="review_email" outlined type="email" label="Email *" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                            <q-input
                                v-model="review"
                                outlined
                                type="textarea"
                                label="Review *"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Please type something']"
                            />

                            <div class="q-mt-md">
                                <q-btn label="Submit" type="submit" color="primary" outline/>
                                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                            </div>
                            </q-form>

                    </div>
                </div>
            </div>
        </section>
        <section class="other-products secondary-bg q-px-xl q-pb-xl">
            <div class="q-py-lg">
                <h4 class="text-center text-weight-bold">Other products you might like</h4>
                <div class="row items-center q-px-xl">
                    <div class="col q-pa-md" v-for="(prod,i) in otherProducts" :key="i">
                        <product-card :prod="prod" />
                    </div>
                </div>
            </div>
        </section>
        <section class="newsletter">
            <newsletter />
        </section>
    </q-page>
</template>
<script>
import productCard from '../../components/shop/product-card';
import Newsletter from '../../components/Newsletter';

export default {
    components: {
        "product-card": productCard,
        "newsletter": Newsletter
    },
    data() {
        return {
            slide: 1,
            selected_size: "",
            product_count: 1,
            review_email: "",
            review: "",
            product: {
                id: 1,
                name: "Royal Canin",
                tag: "Complete feed for dogs Specially for Rottweiler puppies - Up to 18 months old",
                price: "Rs. 699",
                productColors: [],
                productSizes: ['3.0kg','12.0kg'],
                productImages: [
                    {
                        id: 1,
                        name: "statics/rottweiler-junior.jpg"
                    },
                    {
                        id: 2,
                        name: "statics/rottweiler-junior.jpg"
                    },
                    {
                        id: 3,
                        name: "statics/rottweiler-junior.jpg"
                    }
                ],
                description: [
                    {
                        heading: "Muscle and Development",
                        text: "Helps support muscle and bone development thanks to an adapted protein content and adequate levels of calcium and phosphorus. This formula also contains L-carnitine."
                    },
                    {
                        heading: "Natural Defences",
                        text: "This formula helps support the Rottweiler puppy’s natural defences."
                    },
                    {
                        heading: "Digestive Health",
                        text: "This formula contributes to supporting digestive health and promoting a balance in the intestinal flora."
                    },
                    {
                        heading: "Exclusive Kibble : Special Molossoid Jaw",
                        text: "A kibble exclusively designed to make it easier for the Rottweiler puppy to pick up and to encourage him to chew."
                    }
                ]
            },
            otherProducts: [
                {
                    id: 1,
                    name: "Rottweiler Adult",
                    image: "statics/rottweiler-adult.jpg",
                    starting_at: "Rs. 2999"
                },
                {
                    id: 2,
                    name: "Giant Junior",
                    image: "statics/giant-junior.jpg",
                    starting_at: "Rs. 1999"
                },
                {
                    id: 3,
                    name: "Urban Life Junior Wet",
                    image: "statics/urban-life-junior-wet.jpg",
                    starting_at: "Rs. 699"
                },
                {
                    id: 4,
                    name: "Giant Junior",
                    image: "statics/giant-junior.jpg",
                    starting_at: "Rs. 1999"
                }
            ]
        }
    },
    computed: {
        product_sizes() {
            return this.product.productSizes.map(size=> {
                return {
                    label: size,
                    value: size
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>

// .product-display
//     height 100vh

.prod-carousel
    height 70vh

.sizes
    border: 1px solid #335AB8

.product-name
    margin-bottom 0

.product-price
    margin-top 0
    margin-bottom 0
</style>
