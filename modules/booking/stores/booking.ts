import type { Barbershop } from "~/interfaces/barbershop";
import bookingService from "../services/booking";

export const useBookingStore = defineStore("booking", () => {
  const barbershopNotFound = ref<boolean>(false);
  const isLoading = ref<boolean>(false);
  const barbershop = ref<Barbershop | null>(null);
  const currentStep = ref<number>(0);

  const getBarbershop = async (id: string) => {
    isLoading.value = true;
    const response = await bookingService.getBarbershop(id);
    isLoading.value = false;

    if (response) {
      barbershop.value = response;
      currentStep.value = 0;
    } else barbershopNotFound.value = true;
  };

  const getBarbershopServices = async (id: string) => {
    const response = await bookingService.getServicesByBarbershop(id);

    if (response) {
      console.log(response);
    } 
  };

  return {
    isLoading,
    barbershop,
    barbershopNotFound,
    currentStep,
    getBarbershop,
    getBarbershopServices,
  };
});
