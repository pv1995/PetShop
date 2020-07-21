<template>

<div class="q-pa-md q-pt-xl q-pb-md">
    <q-card>
    
     <div class="q-gutter-y-md">
 <q-tabs
        narrow-indicator
        v-model="tab"
        inline-label
        :breakpoint="0"
        align="justify"
        class="bg-primary text-white shadow-2"
 >
        <q-tab name="general" label="General Info" /> 
        <q-tab name="history" label="History" />
        <q-tab name="temprament" label="Tempramnet" />
        <q-tab name="upkeep" label="Upkeep" />
        <q-tab name="health" label="Health" />
 </q-tabs>
 
        <div class="q-pa-sm">
            <q-tab-panels
            v-model="tab"
            animated
            transition-prev="scale"
            transition-next="scale"
            class="text-primary text-center"
            >
                <q-tab-panel name="general"> 
                    GENERAL INFORMATION
                </q-tab-panel>
                <q-tab-panel name="history">
                    HISTORY
                </q-tab-panel>
                <q-tab-panel name="temprament">
                    TEMPRAMENT
                </q-tab-panel>
                <q-tab-panel name="upkeep">
                    UPKEEP
                </q-tab-panel>
                <q-tab-panel name="health">
                    HEALTH
                </q-tab-panel>
            </q-tab-panels>
        </div>
     </div>
    </q-card>
</div>    
    
</template>
<script>
export default {
    data () {
    return {
      tab: 'general',
      name: ''
    }
    },
    created() {
        this.name = this.$router.currentRoute.params.name;
        this.$store.dispatch('pet101/getBreedDetails', this.name);
        this.$store.dispatch('pet101/getDogTypes');
        this.$store.dispatch('pet101/getDogFamilies');
    },
    computed: {
        breedDetails() {
            return this.$store.getters['pet101/getBreedDetails'];
        },
        dogTypes() {
            return this.$store.getters['pet101/getDogTypes'];
        },
        dogFamilies() {
            return this.$store.getters['pet101/getDogFamilies'];
        }
    }
    
}
</script>
<style lang="stylus" scoped>

</style>
