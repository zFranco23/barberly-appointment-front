<template>
    <div>
        <!-- <component :is="currentStepComponent" /> -->
        <BookingServices />
    </div>
</template>

<script setup>
    import { useBookingStore } from '../../stores/booking';
    import BookingServices from './BookingServices/BookingServices.vue';


    const bookingStore = useBookingStore();

    const {barbershop} = storeToRefs(bookingStore)


    // onMounted(() => {
    //     const barbershopId = barbershop.value?.id;
    //     if (barbershopId) {
    //         bookingStore.getBarbershopServices(barbershopId);
    //     }
    // });

</script>

<style lang="scss" scoped>

</style>    