<template>
<div class="q-px-xl q-pb-xl height-100">
    <div class="q-px-xl q-pb-md">
            <H3 class="primary-color text-center">  Know Your Shit Thoroughly! </H3>
        </div>
<div class="q-pa-sm" v-for='(faq,index) in faqItems' :key='index'>
    <expansion-band :faqItems='faq' />
</div>
</div>
</template>
<script>
import ExpansionBand from '../components/ExpansionBand.vue';
export default {
    data() {
        return {
            faqItems: [
                {
                    id: 1,
                    title: "Why PetStop?",
                    content: "We da best!"
                },
                {
                    id: 2,
                    title: "Why PetStop?",
                    content: "We da best!"
                },
                {
                    id: 3,
                    title: "Why PetStop?",
                    content: "We da best!"
                },
                {
                    id: 4,
                    title: "Why PetStop?",
                    content: "We da best!"
                }
            ]
        }
    },
  components: {
        "expansion-band": ExpansionBand
    }
}
</script>
<style lang="stylus" scoped>

</style>
