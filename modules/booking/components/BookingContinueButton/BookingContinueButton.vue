
<template>
        <Button class="w-full" :disabled="!isBookingReady" @click="handleContinue">
            Continue
        </Button>
</template>

<script setup>
import { useBookingStore } from '../../stores/booking';
import { useCheckoutStore } from '../../stores/checkout';

const bookingStore = useBookingStore()
const checkoutStore = useCheckoutStore()
const {currentStep } = storeToRefs(bookingStore)

const {barbershopServicePerService} = storeToRefs(checkoutStore)


const isBookingReady = computed(() => {
    switch(currentStep.value){
        case 0:
            return Object.keys(barbershopServicePerService.value).length > 0
        // case 1:
        //     return false
        default:
            return true
    }
})


const handleContinue = () => {
    bookingStore.goToNextStep()
    // switch(currentStep.value){
    //     case 0:
    //         bookingStore.goToNextStep()
    //         break
    //     // case 1:
    //     //     break
    //     default:
    //         break
    // }
}

</script>

<style lang="scss" scoped>

</style>