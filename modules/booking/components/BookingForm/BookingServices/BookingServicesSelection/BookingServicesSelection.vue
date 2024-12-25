<template>
  <div class="my-4">
    <div v-if="servicesSelected.length === 0">
      <h3>You don't have any service selected</h3>
    </div>
    <div v-else v-for="service in servicesSelected" :key="service.id" class="mt-4">
      <h2 class="font-bold text-gray-900 text-xl">
        {{ service.name }}
      </h2>
      <!-- Items from barbershop items -->
       <div class="bg-white rounded-lg mt-4 flex flex-col">
           <BookingServiceSelectionItem
             v-for="barbershopService in getBarbershopService(service.id)"
             :key="barbershopService.id"
             :service="service"
             :barbershop-service="barbershopService"
           />

       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookingStore } from "~/modules/booking/stores/booking";
import { useCheckoutStore } from "~/modules/booking/stores/checkout";
import BookingServiceSelectionItem from "./BookingServiceSelectionItem.vue";

const bookingStore = useBookingStore();
const checkoutStore = useCheckoutStore();
const { barbershopServices } = storeToRefs(bookingStore);
const { servicesSelected } = storeToRefs(checkoutStore);

const getBarbershopService = (serviceId: number) => {
  return barbershopServices.value.filter(
    (item) => item.service.id === serviceId
  );
};
</script>
