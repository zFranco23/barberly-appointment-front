<template>
    <div class="bg-white rounded-lg">
        <div class="p-4 border-b border-gray-200">
            <div class="flex items-center gap-4">
                <img src="/img/gallery/image1.webp" alt="logo" class="h-20 w-20 aspect-square rounded-lg object-cover">

                <div class="flex flex-col justify-center gap-1">
                    <p><b>{{ barbershop.name }}</b></p>
                    <p>MG Road, Bangalore</p>
                </div>
            </div>
        </div>

        <div>
            <BookingSummaryServices />
        </div>

        <div class="p-4">
            <BookingContinueButton />
        </div>
    </div>
</template>

<script setup>
import { useBookingStore } from '../../stores/booking';
import BookingContinueButton from '../BookingContinueButton/BookingContinueButton.vue';
import BookingSummaryServices from './BookingSummaryServices.vue';


    const bookingStore = useBookingStore();
    const {barbershop} = storeToRefs(bookingStore)
</script>

<style lang="scss" scoped>

</style>