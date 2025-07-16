<template>
    <button class="grid grid-cols-2" :class="{ 'bg-green-500 p-2 rounded-md': active }"
        @click="$emit('select', option.mark)">
        <p>{{ option.mark }}. {{ option.label }}</p>
    </button>
</template>

<script setup lang="ts">
import { QuestionProps } from '../interfaces/QuestionAnswer'

defineProps<{
    option: QuestionProps
    active: boolean
}>()

defineEmits(['select'])
</script>
