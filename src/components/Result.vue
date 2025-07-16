<template>
    <section>
        <div class="flex border border-gray-400 p-4 w-full my-6">Hasil Akhir: {{ nilai }}</div>
        <div v-for="(user, index) in userAnswer" v-bind:key="index" class="flex flex-col xl:flex-row">
            <div class="border border-gray-400 p-4 w-full xl:w-[25%]">
                <p>{{ index + 1 }}. {{ user.question }}</p>
            </div>
            <div class="border border-gray-400 p-4 w-full xl:w-[25%]"
                :class="user.answer.includes('tidak menjawab') ? 'text-red-500 italic' : ''">
                <p>{{ user.answer }}</p>
            </div>
            <div class="border border-gray-400 p-4 w-full xl:w-[25%]">
                <p>{{ user.isCorrected ? 'Benar' : 'Salah' }}</p>
            </div>
            <div class="border border-gray-400 p-4 w-full xl:w-[25%]">
                <p>{{ user.isCorrected ? user.nilai : 0 }}</p>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { UserAnswer } from '../interfaces/UserAnswer'


defineProps<{
    userAnswer?: UserAnswer[]
    nilai: number
}>()

</script>