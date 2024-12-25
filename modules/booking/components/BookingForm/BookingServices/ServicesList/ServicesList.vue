<template>
  <div class="w-full bg-white p-4 rounded-lg max-w-full overflow-auto mt-4">
    <div class="flex items-center gap-4">
        <ServiceItem v-for="service in servicesList" :key="service.id" :service="service" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookingStore } from "~/modules/booking/stores/booking";
import ServiceItem from "./ServiceItem.vue";

const bookingStore = useBookingStore();

const { barbershopServices, servicesList } = storeToRefs(bookingStore);


</script>

<style lang="scss" scoped></style>
