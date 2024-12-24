<template>
    <div class="rounded-lg bg-white shadow-md">
        <!-- Header -->
        <div class="p-6 flex flex-col gap-4">
            <div class="flex justify-between items-center w-full">
                <div class="flex justify-between w-full md:w-fit">
                    <p class="text-gray-900 font-bold md:text-3xl">{{ barbershop.name }}</p>
                    <BarberShopRating class="md:hidden" />
                </div>

                <div class="gap-4 hidden md:flex">
                    <Button variant="secondary">
                        Enquire
                    </Button>

                    <NuxtLink :to="{
                        path: '/booking',
                        query: {
                            barbershop: barbershop.id
                        }
                    }">
                        <Button>
                            Book now
                        </Button>
                    </NuxtLink>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-between md:items-center w-full">
                <div class="flex gap-4">
                        <BarberShopRating class="hidden md:flex" />
                        <BarberShopStatus :start-hour="barbershop.start_hour" :end-hour="barbershop.end_hour" />
                </div>

                <BarberShopEnquirement />
            </div>
        </div>

        <!-- Footer -->
        <BarberShopDetails :barbershop="barbershop" />

        <div class=" p-6 flex gap-4 md:hidden">
            <Button variant="secondary" class="w-full">
                Enquire
            </Button>

            <NuxtLink :to="{
                        path: '/booking',
                        query: {
                            barbershop: barbershop.id
                        }
                    }">
                <Button class="w-full">
                    Book now
                </Button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import BarberShopEnquirement from './Enquirement/BarberShopEnquirement.vue';
import BarberShopDetails from './Details/BarberShopDetails.vue';
import BarberShopRating from './Rating/BarbeShopRating.vue';
import BarberShopStatus from './Status/BarberShopStatus.vue';
import type { Barbershop } from '~/interfaces/barbershop';

const { barbershop} = defineProps<{barbershop: Barbershop}>();


</script>

<style scoped>

</style>