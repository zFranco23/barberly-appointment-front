import type { Barbershop } from "~/interfaces/barbershop";
import type { BarbershopService } from "~/interfaces/barbershop-service";

class BookingService {
    async getBarbershop(id: string): Promise<Barbershop | undefined> {
        try {
           return await $fetch<Barbershop>(`http://localhost:5000/api/barbershops/${id}`)
        }catch(err){            
            console.error(err);
        }

    }

    async getServicesByBarbershop(id: string): Promise<BarbershopService[] | undefined> {
        try {
           return await $fetch<BarbershopService[]>(`http://localhost:5000/api/barbershops/${id}/service`)
        }catch(err){            
            console.error(err);
        }

    }
}

const bookingService = new BookingService();

export default bookingService