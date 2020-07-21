<template>
    <q-card class="my-card cursor-pointer">
        <div class="hot-img-wrapper">
            <q-img :src="prod.image" width="100%" class="hot-img"/>
        </div>

        <q-card-section>
            <div class="text-h6 text-center">{{prod.name}}</div>
            <div class="text-subtitle2 text-center">{{prod.starting_at}}</div>
        </q-card-section>
    </q-card>    
</template>
<script>
export default {
    props: {
        prod: {
            type: Object,
            required: true
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
