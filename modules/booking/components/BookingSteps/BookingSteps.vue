
<template>
    <div>
        <p class="text-gray-700">Step {{ currentStep + 1  }} of 3 </p>

    </div>
</template>

<script setup>
import { useBookingStore } from '../../stores/booking';

    const bookingStore = useBookingStore();
    const { currentStep } = storeToRefs(bookingStore)

</script>

<style lang="scss" scoped>

</style>