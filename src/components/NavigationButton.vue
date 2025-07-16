<template>
    <button class="bg-blue-500 p-4 rounded-md mt-6 w-full xl:w-auto text-white" @click="$emit('next')">
        Lanjut
    </button>
</template>

<script setup>
defineEmits(['next'])
</script>