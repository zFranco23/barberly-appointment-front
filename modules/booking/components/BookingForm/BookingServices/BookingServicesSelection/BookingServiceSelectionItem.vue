<template>
  <button @click="handleToggle">
    <div class="flex items gap-4 p-4 border-b border-gray-200">
        <!-- Icons -->
        <Icon v-if="isSelected" name="mdi:check-circle" size="48" class="text-secondary" />
        <Icon v-else name="mdi:circle-outline" size="48" class="text-gray-400" />

        <div class="flex flex-col h-full">
          <p class="font-bold">
            {{ barbershopService.name }}
          </p>
          <p class="text-left text-sm">
            {{ barbershopService.hours_duration }} h
          </p>
        </div>

        <div>
            <p>
                {{ barbershopService.price }} $
            </p>
        </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { BarbershopService } from '~/interfaces/barbershop-service';
import type { Service } from '~/interfaces/service';
import { useCheckoutStore } from '~/modules/booking/stores/checkout';


const { barbershopService, service } = defineProps<{
    service: Service,
    barbershopService: BarbershopService
}>()

const checkoutStore = useCheckoutStore();

const { barbershopServicePerService } = storeToRefs(checkoutStore);

const handleToggle = () => {
  checkoutStore.updateBarbershopServicePerService(service.id, barbershopService);
}

const isSelected = computed(() => {
    if(barbershopServicePerService.value[service.id]){
        return barbershopServicePerService.value[service.id].id === barbershopService.id
    }else return false
});
</script>

