<template>
    <div>
        <div class="q-px-xl q-pb-sm vertical-center" style="min-width: 500px" >
            <q-expansion-item
            group="FAQGroup"
            class="shadow-1 overflow-hidden"
            style="border-radius: 30px"
            icon="info"
            :label= "faqItems.name"
            header-class="bg-primary text-white"
            expand-icon-class="text-white"
            >
            <q-card>
                <q-card-section>
                {{faqItems.content}}
                </q-card-section>
            </q-card>
            </q-expansion-item>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        faqItems:{
            type: Array,
            required: true
        }
       
      },
    methods: {
 
  }
    
}
</script>
<style lang="stylus" scoped>

</style>
