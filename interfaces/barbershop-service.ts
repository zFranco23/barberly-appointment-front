import type { Service } from "./service"

export interface BarbershopService {
    barbershop_id: number,
    hours_duration: number,
    id: number,
    name: string,
    price: number,
    service: Service
    service_id: 2
}