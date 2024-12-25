<template>
    <div class="flex flex-col gap-4 p-4 ">
        <div v-for="service in servicesToBook" :key="service.id" class="flex items-baseline gap-4 justify-between">
            <div>
                <div class="flex-1">
                    <p class="font-bold">
                        {{ service.name }}
                    </p>
                </div>
                <div class="flex-1">
                    <p class="text-left text-sm">
                        {{ service.hours_duration }} h
                    </p>
                </div>
            </div>
            <div>
                <p class="text-left text-sm">
                    {{ service.price }} $
                </p>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useCheckoutStore } from '~/modules/booking/stores/checkout';

const checkoutStore = useCheckoutStore();

const { barbershopServicePerService } = storeToRefs(checkoutStore);


const servicesToBook = computed(() => {
    return Object.values(barbershopServicePerService.value)
})

</script>