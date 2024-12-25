import type { Barbershop } from "~/interfaces/barbershop";
import bookingService from "../services/booking";
import type { BarbershopService } from "~/interfaces/barbershop-service";
import type { Service } from "~/interfaces/service";

export const useBookingStore = defineStore("booking", () => {
    const currentStep = ref<number>(0);

  const barbershopNotFound = ref<boolean>(false);

  const isLoading = ref<boolean>(false);
  const barbershop = ref<Barbershop | null>(null);
  
  const isLoadingServices = ref<boolean>(false);
  const barbershopServices = ref<BarbershopService[]>([]);

  const getBarbershop = async (id: string) => {
    isLoading.value = true;
    const response = await bookingService.getBarbershop(id);
    isLoading.value = false;

    if (response) {
        getBarbershopServices(id)
      barbershop.value = response;
      currentStep.value = 0;
    } else barbershopNotFound.value = true;
  };

  const getBarbershopServices = async (id: string) => {
    isLoadingServices.value = true;
    const response = await bookingService.getServicesByBarbershop(id);
    isLoadingServices.value = false;

    if (response) {
      barbershopServices.value = response;
    } 
  };

  const servicesList= computed(() => {
    return Array.from(
      new Map(barbershopServices.value.map((item) => [item.service.id, item.service])).values()
    );
  });


  return {
    isLoading,
    barbershop,
    barbershopServices,
    barbershopNotFound,
    currentStep,
    getBarbershop,
    getBarbershopServices,
    servicesList,
  };
});
