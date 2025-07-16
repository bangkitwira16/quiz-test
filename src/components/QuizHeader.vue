<template>
    <div class="flex justify-between my-6 flex-col xl:flex-row gap-6">
        <div class="p-4 rounded-md border border-gray-400">Nilai: {{ nilai }}</div>
        <div class="p-4 rounded-full border border-gray-400">Waktu: {{ timer }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    nilai: number
    timer: number
}>()
</script>
