<template>
    <q-page class="landing">
        <div>
            <q-img src="statics/dogwithball.jpg" position="top" style="height:750px"/>
            <div class="banner-text">
                <div class="text-h2 q-py-sm">TRAIN YOUR PET</div>
                <div class="text-h2 text-center q-py-sm">at</div>
                <div class="text-h2 text-center text-uppercase q-py-sm ">PetStop</div>
                <div class="text-center q-py-lg">
                    <q-btn filled label="Start Training" class="q-px-xl q-py-md" color="primary" icon-right="arrow_right_alt"/>
                </div>
            </div>
        </div>
        <section class="lessons q-px-xl q-pb-xl">
            <div class="q-pt-xl">
                <h2 class="text-center q-mt-lg">Lesson Packs</h2>
            </div>
            <div class="row items-center q-px-xl">
                <div class="col-4 q-pa-md cursor-pointer" v-for="l in lessonPacks" :key="l.id" @click="goToIndividualPack(l.id)">
                    <q-card class="my-card">
                        <q-img
                            src="https://cdn.quasar.dev/img/parallax2.jpg"
                            basic
                        >
                            <div class="absolute-bottom text-subtitle2 text-center">
                            {{l.name}}
                            </div>
                        </q-img>
                    </q-card>
                </div>
            </div>
            <div class="row items-center q-px-xl justify-end">
                <q-btn flat label="View all packs" icon-right="arrow_right_alt" color="primary" @click="goToPacks"/>
            </div>
        </section>
        <newsletter />
    </q-page>
</template>
<script>
import Newsletter from '../../components/Newsletter.vue';
export default {
    components: {
        "newsletter": Newsletter
    },
    data() {
        return {
            lessonPacks: [
                {
                    id:1,
                    name: 'New Dog Basics',
                    lessons: [
                        {
                            id: 1,
                            name: 'Crate Training',
                            steps: [
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            ]
                        },
                        {
                            id: 2,
                            name: 'Potty Training',
                            steps: [
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            ]
                        }
                    ]
                },
                {
                    id:2,
                    name: 'Grooming',
                    lessons: [
                        {
                            id: 1,
                            name: 'Brushing Teeth',
                            steps: [
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            ]
                        },
                        {
                            id: 2,
                            name: 'Brushing Coat',
                            steps: [
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            ]
                        },
                        {
                            id: 3,
                            name: 'Grooming Nails',
                            steps: [
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            ]
                        }
                    ]
                },
                {
                    id:3,
                    name: 'Basics',
                    lessons: [
                        {
                            id: 1,
                            name: 'Sit',
                            steps: [
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            ]
                        },
                        {
                            id: 2,
                            name: 'Stay',
                            steps: [
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            ]
                        },
                        {
                            id: 3,
                            name: 'Bark',
                            steps: [
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        goToPacks() {
            this.$router.push({name: "LessonPacks"});
        },
        goToIndividualPack(i) {
            console.log(i);
            this.$router.push({name: "Pack", params: {id: i}})
        }
    }
}
</script>
<style lang="stylus" scoped>
.landing
    min-height 100vh
.banner-text
    position absolute
    top 200px
    right 100px
</style>
