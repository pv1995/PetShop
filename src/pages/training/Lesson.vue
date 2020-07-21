<template>
    <q-page class="lesson">
        <h2 class="text-center q-mb-sm">{{lesson.name}}</h2>
        <h5 class="text-center q-mt-sm">{{lesson.pack}}</h5>
        <div class="q-px-xl">
            <div class="row items-center q-px-xl">
                <div class="col-3 q-pa-md" style="min-height:80vh">
                    <q-img src="statics/sit.jpg"  /> 
                    <div class="lesson-desc text-body1 text-justify q-py-sm">
                        {{lesson.description}}
                    </div>   
                </div>
                <div class="col-9 q-pa-md" style="min-height:80vh">
                    <q-stepper
                    v-model="step"
                    vertical
                    ref="stepper"
                    color="primary"
                    animated
                    infinite
                    class="q-pa-xl"
                    style="min-height:50vh"
                    >
                        <q-step
                            :name="s.id"
                            :title="s.heading"
                            :done="step > s.id"
                            icon="pets"
                            v-for="s in lesson.steps" :key="s.id"
                            class="text-body1 steps"
                        >
                            {{s.desc}}
                        </q-step>
                        <template v-slot:navigation>
                            <q-stepper-navigation>
                            <q-btn @click="$refs.stepper.next()" color="primary" :label="step === lesson.steps.length ? 'Start Again' : 'Next'" />
                            <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                            </q-stepper-navigation>
                        </template>
                    </q-stepper>
                    <q-card class="tips full-width q-my-sm q-mt-lg bg-primary text-secondary q-py-lg">
                        <q-item>
                            <q-item-section avatar style="padding-right:0;min-width:35px">
                                <q-avatar>
                                    <q-icon name="highlight" color="secondary" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section class="text-h6 text-secondary">
                                Tips
                            </q-item-section>
                        </q-item>
                        <q-item v-for="(t,i) in lesson.tips" :key="i" class="q-pl-lg">
                            <q-item-section avatar style="padding-right:0;min-width:35px">
                                <q-avatar>
                                    <q-icon name="radio_button_unchecked" color="secondary" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section class="text-body1">
                                {{t}}
                            </q-item-section>
                        </q-item>
                    </q-card>
                </div>
            </div>
        </div>
        <newsletter />
    </q-page>
</template>
<script>
import Newsletter from '../../components/Newsletter.vue'
export default {
    components: {
        "newsletter": Newsletter
    },
    created() {
        
    },
    data() {
        return {
            step: 1,
            lesson: {
                name: "Sit",
                id: 1,
                difficulty: 1,
                pack: "Basics",
                description: "Sit is often the first lesson owners teach their dogs, and it's also one of the most important. It's the foundation for many other advanced lessons and can be used in a variety of scenarios.",
                steps: [
                    {
                        id: 1,
                        heading: "Step 1",
                        desc: "Hold a treat close to Marshal's nose."
                    },
                    {
                        id: 2,
                        heading: "Step 2",
                        desc: "Move it back so Marshal's head follows. As his head moves up, his butt will lower."
                    },
                    {
                        id: 3,
                        heading: "Step 3",
                        desc: "When his butt touches the floor, click and reward Marshal with the treat."
                    }
                ],
                tips: [
                    'Have Marshal sit before giving life rewards(mealtime, going out for a walk, etc.',
                    `Hold the treat low enough so he doesn't try to jump to get it.`
                ]
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.steps
    font-size 1.2rem
</style>
