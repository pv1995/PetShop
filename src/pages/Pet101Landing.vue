s<template>
<div class="">
    <div class="landing-bg">
         <div class='text-center'>
                <p class='pet-101-header text-h2'> KNOW ABOUT YOUR PETS! </p>
            </div>
        <div class="row">
           
            <div class="q-pa-xl col-md-6"> 
                <transition
                appear
                enter-active-class="animated slideInLeft"
                leave-active-class="animated slideInLeft"
                class = "transition-style"
                >
                    <div class="q-pa-xl">
                        <q-card class="my-card dog-card-style" @click="goToAllDogs">
                            <q-img src="statics/dog101.jpg" basic>
                                <div class="absolute-bottom text-subtitle2 text-center">
                                    DOGS
                                </div>
                            </q-img>
                        </q-card>
                    </div>
                </transition> 
            </div>
            <div class="q-pa-xl col-md-6"> 
                <transition
                appear
                enter-active-class="animated slideInRight"
                leave-active-class="animated slideInRight"
                >
                    <div class="q-pa-xl">
                        <q-card class="my-card dog-card-style" @click="goToAllCats">
                            <q-img src="statics/cat101.jpg" basic>
                                <div class="absolute-bottom text-subtitle2 text-center">
                                    CATS
                                </div>
                            </q-img>
                        </q-card>
                    </div>
                </transition> 
            </div>
        </div>
    </div>
</div>    
</template>
<script>

export default {
    data(){
        return{
           
        }
    },
    methods: {
        goToAllDogs() {
            this.$router.push({name:'AllDogs'})
        },
        goToAllCats() {
            this.$router.push({name:'AllCats'})
        }
    }
};
</script>
<style lang="stylus" scoped>
.landing-bg
    background-image : url("/statics/pet101landing.jpg");
    background-size: cover;
    background-position : center;
    height: 95vh;
    background-repeat: no-repeat;
.dog-card-style
    margin-bottom : 5rem
    border-radius : 50%
    width: 600px
.transition-style
    transition-delay : 2s;
    transition-duration : 5s;
.pet-101-header
    font-size: 30px
.pet-101-header
    padding-top: 3rem
    font-size : 3.75rem
</style>
