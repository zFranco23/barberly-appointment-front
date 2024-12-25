<template>
  <button class="rounded-full py-1 px-4" :class="{
    'bg-primary text-white':  isServiceSelected
  }"  @click="handleUpdateServiceSelected">
    {{ service.name }}
  </button>
</template>

<script setup lang="ts">
import type { Service } from "~/interfaces/service";
import { useCheckoutStore } from "~/modules/booking/stores/checkout";

const { service } = defineProps<{
  service: Service;
}>();

const checkoutStore = useCheckoutStore();

const { servicesSelected } = storeToRefs(checkoutStore);

const handleUpdateServiceSelected = () => {
  checkoutStore.toggleServicesSelected(service);
};

const isServiceSelected = computed(() => servicesSelected.value.find(item => item.id === service.id));


</script>

<style lang="scss" scoped></style>
