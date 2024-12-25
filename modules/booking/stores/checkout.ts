import type { BarbershopService } from "~/interfaces/barbershop-service";
import type { Service } from "~/interfaces/service";


type BarbershopServicePerService = Record<number, BarbershopService>;

export const useCheckoutStore = defineStore("checkout", () => {

    const servicesSelected = ref<Service[]>([]); 

    const barbershopServicePerService = ref<BarbershopServicePerService>({})


    const toggleServicesSelected = (service: Service) => {
        const serviceItem = servicesSelected.value.find(item => item.id === service.id);
        if(serviceItem){
            servicesSelected.value = servicesSelected.value.filter(item => item.id !== service.id)
        }else servicesSelected.value.push(service)
    };

    const updateBarbershopServicePerService = (serviceId: number, barbershopService: BarbershopService) => {
        barbershopServicePerService.value[serviceId] = barbershopService;
    }

    return {
        servicesSelected,
        toggleServicesSelected,
        barbershopServicePerService,
        updateBarbershopServicePerService
    }
});