<template>
    <div>
        <div v-if="isLoading && !barbershop" class="flex items-center justify-center h-full">
            <CircularProgress />
        </div>
        <div v-else-if="barbershop">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="md:col-span-3">
                    <BookingSteps />
                    <BookingForm />
                </div>
                <div class="md:col-span-1">
                    <BookingSummary />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    import BookingForm from '../components/BookingForm/BookingForm.vue';
    import BookingSteps from '../components/BookingSteps/BookingSteps.vue';
    import BookingSummary from '../components/BookingSummary/BookingSummary.vue';
    import { useBookingStore } from '../stores/booking';
  

    const bookingsStore = useBookingStore();
    const {barbershop, barbershopNotFound, isLoading} = storeToRefs(bookingsStore)
    const router = useRouter()
    const route = useRoute();

    onBeforeMount(() => {
        const barbershopId = route.query.barbershop;
        if (barbershopId) bookingsStore.getBarbershop(barbershopId)
        else router.push('/')
    })


    watch(barbershopNotFound, (newValue) => {
        if (newValue) router.push('/')
    })

    

</script>

<style lang="scss" scoped>

</style>