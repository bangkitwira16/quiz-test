<template>
    <div v-if="visible">
        <h1>{{ question.question }}</h1>
        <OptionButton v-for="(opt, index) in question.questionOptions" :key="index" :option="opt"
            :active="currentSelected === opt.mark" @select="$emit('select-answer', opt.mark)" />
    </div>
</template>

<script setup lang="ts">
import OptionButton from './OptionButton.vue'
import type { QuestionAnswerProps, QuestionProps } from '../interfaces/QuestionAnswer'

defineProps<{
    question: QuestionAnswerProps
    visible: boolean
    currentSelected?: QuestionProps['mark']
}>()

defineEmits<{
    (e: 'select-answer', mark: QuestionProps['mark']): void
}>()
</script>
