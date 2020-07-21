<template>
    <q-page class="pack">
        <h2 class="text-center">{{pack.name}}</h2>
        <div class="q-px-xl">
            <div class="row items-center q-px-xl">
                <div class="col-4 q-pa-md" v-for="l in pack.lessons" :key="l.id" @click="goToLesson(l.id)">
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
    created() {
        
    },
    data() {
        return {
            pack: {
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
            }
        }
    },
    methods: {
        goToLesson(i) {
            this.$router.push({name: "Lesson", params: {id: i}})
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
