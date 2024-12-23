<template>
    <div class="flex gap-2">
      <p class="text-gray-900 font-semibold">{{ stars  }}</p>

      <div> 
        <Icon v-for="(_, idx) in Array.from({length: stars})" :key="idx" name="mdi:star" size="24" class="text-gray-900" />
        <Icon v-for="(_, idx) in Array.from({length: MAX_STARS_ALLOWED - stars})" :key="idx" name="mdi:star-outline" size="24" class="text-gray-900" />
      </div>

      <p class="text-primary">(196)</p>
    </div>
</template>

<script setup lang="ts">
    const MAX_STARS_ALLOWED = 5
    const stars = ref(4)
</script>

<style scoped>

</style>