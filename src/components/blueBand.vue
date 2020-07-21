<template>
    <div class="blue-band q-px-xl">
        <div class="band-inner row q-px-xl">
            <div class="col-3">
                <q-btn-group spread class=" band-button-wrapper">
                    <q-btn label="Buy Pet Supplies" icon="shopping_basket" class="full-width band-buttons bg-primary text-secondary no-border-radius " @click="goToShop"/>
                </q-btn-group>
            </div>
            <div class="col-3">
                <q-btn-group spread class=" band-button-wrapper">
                    <q-btn label="Stay Connected" icon="local_hospital" class="full-width band-buttons bg-primary text-secondary no-border-radius "/>
                </q-btn-group>
            </div>
            <div class="col-3">
                <q-btn-group spread class=" band-button-wrapper">
                    <q-btn label="Know About Breeds" icon="pets" class="full-width band-buttons bg-primary text-secondary no-border-radius "/>
                </q-btn-group>
            </div>
            <div class="col-3">
                <q-btn-group spread class=" band-button-wrapper">
                    <q-btn label="Train Your Pet" icon="timeline" class="full-width band-buttons bg-primary text-secondary no-border-radius " @click="goToTraining"/>
                </q-btn-group>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goToShop() {
            this.$router.push('/shop');
        },
        goToTraining() {
            this.$router.push('/training');
        }
    }
}
</script>
<style lang="stylus" scoped>
.blue-band
    margin-top: -50px;

.band-buttons
    height:100px

.band-button-wrapper
    border-right: 2px !important;

.band-buttons:hover 
    background: white !important;
    color: #335AB8 !important;
</style>
