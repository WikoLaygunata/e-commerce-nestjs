import { IsEnum } from "class-validator";

export class CreateOrderDto {
    user_id: number;
    code: string;
    subtotal: number;
    discount: number;
    grandtotal: number;
    tax: number;
    payment_id: number;
    delivery_id: number;
    note?: string;
    @IsEnum(['pending', 'complete'])
    status: 'pending' | 'complete';
}
