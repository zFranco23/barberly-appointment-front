<template>
    <div class="rounded-lg bg-white shadow-md">
        <!-- Header -->
        <div class="p-6 flex flex-col gap-4">
            <div class="flex justify-between items-center w-full">
                <div class="flex justify-between w-full md:w-fit">
                    <p class="text-gray-900 font-bold md:text-3xl">Vurve - Bangalore</p>
                    <BarberShopRating class="md:hidden" />
                </div>

                <div class="gap-4 hidden md:flex">
                    <Button variant="secondary">
                        Enquire
                    </Button>

                    <Button>
                        Book now
                    </Button>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-between md:items-center w-full">
                <div class="flex gap-4">
                        <BarberShopRating class="hidden md:flex" />
                        <BarberShopStatus />
                </div>

                <BarberShopEnquirement />
            </div>
        </div>

        <!-- Footer -->
        <BarberShopInfo />

        <div class=" p-6 flex gap-4 md:hidden">
            <Button variant="secondary" class="w-full">
                Enquire
            </Button>

            <Button class="w-full">
                Book now
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import BarberShopEnquirement from './Enquirement/BarberShopEnquirement.vue';
import BarberShopInfo from './Info/BarberShopInfo.vue';
import BarberShopRating from './Rating/BarbeShopRating.vue';
import BarberShopStatus from './Status/BarberShopStatus.vue';


</script>

<style scoped>

</style>