<template>
    <img
          :src="src"
          class="w-full h-full object-cover rounded-lg filter grayscale 
          hover:grayscale-0 hover:scale-105 transition-all duration-500"
    />
</template>

<script setup lang="ts">
    defineProps<{src: string}>()
</script>

<style lang="scss" scoped>

</style>