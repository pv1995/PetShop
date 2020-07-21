<template>
    <q-page class="lesson-packs">
        <h2 class="text-center">All lesson packs</h2>
        <div class="q-px-xl">
            <div class="row items-center q-px-xl">
                <div class="col-4 q-pa-md" v-for="l in lessonPacks" :key="l.id" @click="goToIndividualPack(l.id)">
                    <q-card class="my-card cursor-pointer">
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
        </div>
    </q-page>
</template>
<script>
export default {
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
                },
                {
                    id:4,
                    name: 'Silly',
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
                    id:5,
                    name: 'Agility',
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
                    id:6,
                    name: 'Circus',
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
                }
            ]
        }
    },
    methods: {
        goToIndividualPack(i) {
            console.log(i);
            this.$router.push({name: "Pack", params: {id: i}})
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
