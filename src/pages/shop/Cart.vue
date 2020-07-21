<template>
    <q-page class="cart">
        <section class="cart-page q-px-xl q-pb-xl">
            <div class="q-px-xl">
                <h4 class="text-center">Shopping Cart</h4>
                <div class="row items-center q-pt-lg">
                    <div class="col-7 height-450">
                        <q-table
                        :data="cartProducts"
                        :columns="columns"
                        row-key="product"
                        hide-bottom
                        class="no-shadow"
                        bordered
                        >
                            <template v-slot:body="props">
                                <q-tr :props='props' class='cursor-pointer'>
                                    <q-td key="product" :props="props">
                                        <q-item>
                                            <q-item-section avatar>
                                            <q-item-label class='no-padding'>
                                                <q-avatar size='100px' square color='primary'>
                                                <img :src='props.row.image'/>
                                                </q-avatar>
                                            </q-item-label>
                                            </q-item-section>
                                            <q-item-section top class="q-pt-md">
                                                <q-item-label style="font-size:20px" class="text-left">{{props.row.name}}</q-item-label>
                                                <q-item-label caption class="text-left">{{props.row.tag}}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-td>
                                    <q-td key="price" :props="props">
                                        <q-item >
                                            <q-item-section>
                                                <q-item-label>Rs. {{props.row.price}}</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-td>
                                    <q-td key="quantity" :props="props">
                                        <q-item>
                                            <q-item-section>
                                                <q-input type="number" dense v-model="props.row.quantity" style="max-width:60px;margin:0 auto" outlined/>
                                            </q-item-section>
                                        </q-item>
                                    </q-td>
                                    <q-td key="delete" :props="props">
                                        <q-item class="justify-end" >
                                            <q-item-section avatar>
                                                <q-icon color="primary" name="delete" />
                                            </q-item-section>
                                        </q-item>
                                    </q-td>
                                </q-tr>
                            </template>
                        </q-table>
                    </div>
                <div class="col-5 subtotal-card row justify-end q-px-xl height-450">
                    <q-card flat bordered class="cart-subtotal bg-grey-1">
                        <q-card-section>
                            <div class="text-h6 q-pl-md">Shopping Summary</div>
                        </q-card-section>

                        <q-card-section>
                            <q-item>
                                <q-item-section>
                                    Subtotal
                                </q-item-section>
                                <q-item-section side>
                                    Rs. {{getCartSubTotal}}
                                </q-item-section>
                            </q-item>
                        </q-card-section>
                        <q-card-section>
                            <q-item>
                                <q-item-section>
                                    Shipping & Handling
                                </q-item-section>
                                <q-item-section side>
                                    Rs. {{shipping}}
                                </q-item-section>
                            </q-item>
                        </q-card-section>
                        <q-card-section>
                            <q-item>
                                <q-item-section>
                                    Tax
                                </q-item-section>
                                <q-item-section side>
                                    Rs. {{taxes}}
                                </q-item-section>
                            </q-item>
                        </q-card-section>
                        <q-card-section>
                            <!-- <q-btn flat label="Add a discount coupon" color="primary" /> -->
                            <q-item>
                                <q-item-section>
                                    <q-input outlined dense v-model="discount_code" label="Discount code"/>
                                </q-item-section>
                                
                                <q-item-section side>
                                    <q-btn label="Apply" filled color="primary" text-color="white" />
                                </q-item-section>
                            </q-item>
                        </q-card-section>
                        <q-card-section>
                            <q-item>
                                <q-item-section class="text-weight-bold" style="font-size:16px">
                                    Grand Total
                                </q-item-section>
                                <q-item-section side>
                                    Rs. {{getGrandTotal}}
                                </q-item-section>
                            </q-item>
                        </q-card-section>
                        
                        <!-- <q-separator /> -->

                        <q-card-actions class="justify-between q-px-lg">
                            <q-btn flat label="Continue shopping" color="primary" icon="arrow_back" @click="goToShop"/>
                            <q-btn outline label="Proceed to checkout" color="primary" icon-right="arrow_right"/>
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
            columns: [
                {
                    name: 'product',
                    required: true,
                    label: 'Product',
                    align: 'center'
                },
                {
                    name: 'price',
                    required: true,
                    label: 'Price',
                    align: 'center'
                },
                {
                    name: 'quantity',
                    required: true,
                    label: 'Quantity',
                    align: 'center'
                },
                {
                    name: 'delete',
                    required: true,
                    label: '',
                    align: 'right'
                }
            ],
            cartProducts: [
                {
                    id: 1,
                    image: "statics/rottweiler-adult.jpg",
                    name: "Rottweiler Adult",
                    tag: "Complete feed for dogs Specially for Rottweiler Adults",
                    price: "2999",
                    quantity: "1"
                },
                {
                    id: 2,
                    image: "statics/urban-life-junior-wet.jpg",
                    name: "Urban Life Junior Wet",
                    tag: "Supports intense city life",
                    price: "699",
                    quantity: "1"
                }
            ],
            shipping: "50",
            taxes: "100",
            discount_code: ""
        }
    },
    computed: {
        getCartPrices() {
            return this.cartProducts.map(cart=> {
                return parseInt(cart.price)
            })
        },
        getCartSubTotal() {
            if(this.getCartPrices) {
                return this.getCartPrices.reduce((a,b) => a + b)
            }
        },
        getGrandTotal() {
            return this.getCartSubTotal + parseInt(this.shipping) + parseInt(this.taxes)
        }
    },
    methods: {
        goToShop() {
            this.$router.push('/shop')
        }
    }
}

</script>
<style lang="stylus" scoped>
.cart-subtotal
    width 500px

.height-450
    height 450px
</style>
