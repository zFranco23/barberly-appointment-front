
<template>
  <div class="p-4">
    <div class="grid lg:grid-cols-3 gap-4">
      <div class="flex baseline gap-4 text-gray-900">
        <div>
            <Icon name="mdi:map-marker" size="24" />
        </div>
        <p>
          {{  barbershop.address }}
        </p>
      </div>

      <div class="flex baseline gap-4 text-gray-900">
        <div>
          <Icon name="mdi:clock-time-eight" size="24" />
        </div>
        <div class="flex baseline gap-6">
          <div>
            <p>Available</p>
            <p>{{ formatDateToHours(barbershop.start_hour) }} - {{ formatDateToHours(barbershop.end_hour) }}</p> 
          </div>
        </div>
      </div>

      <div class="flex baseline gap-4 text-gray-900">
        <Icon name="mdi:credit-card" size="24" />
        <div>
          <p>Mode of payment</p>
          <p v-for="method in barbershop.payment_methods" :key="method.id">{{ method.payment_method.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Barbershop } from '~/interfaces/barbershop';

const {barbershop} = defineProps<{barbershop: Barbershop}>();




</script>

<style scoped></style>
