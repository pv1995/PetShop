<template>
    <q-card class="my-card cursor-pointer" @click="clickevent">
        <div class="hot-img-wrapper">
             <q-img :src="breed.photo" width="100%" class="hot-img"/>
            <!-- <div width="100%" class="hot-img">{{breed.title}}</div> -->
        </div>

        <q-card-section>
            <div class="text-h6 text-center">{{breed.name}}</div>
            <div class="text-subtitle2 text-center">{{breed.family}}</div>
        </q-card-section>
    </q-card>    
</template>
<script>
export default {
    props: {
        breed: {
            type: Object,
            required: true
        }
    },
    methods : {
        clickevent() {
            this.$emit("clickfordetails",this.breed.name)
        }
    }
}
</script>
<style lang="stylus" scoped>
.hot-img-wrapper
    overflow: hidden;

.hot-img
    min-height: 250px;
    max-height: 250px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
    opacity: 0.8
    transition: ease 0.3s;

.hot-img-wrapper:hover > .hot-img
    transform:scale(1.1);
    opacity: 1
</style>
