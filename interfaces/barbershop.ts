export interface Barbershop {
    address:               string;
    end_hour:              string;
    id:                    number;
    name:                  string;
    payment_methods:       PaymentMethodElement[];
    start_hour:            string;
    start_operations_date: Date;
}

export interface PaymentMethodElement {
    id:             number;
    payment_method: PaymentMethodPaymentMethod;
}

export interface PaymentMethodPaymentMethod {
    description: string;
    name:        string;
}
