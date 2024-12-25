<template>
    <div>
        <!-- <component :is="currentStepComponent" /> -->
        <BookingServices v-if="bookingStore.currentStep === 0" />
        <BookingDate v-if="bookingStore.currentStep === 1" />

        <!-- Check user -->
         <RegisterOrLoginBeforeBooking v-if="bookingStore.currentStep === 2" /> 
    </div>
</template>

<script setup>
    import { useBookingStore } from '../../stores/booking';
import RegisterOrLoginBeforeBooking from '../RegisterOrLoginBeforeBooking/RegisterOrLoginBeforeBooking.vue';
    import BookingDate from './BookingDate/BookingDate.vue';
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