import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDto {
    user_id: number;
    @IsNotEmpty()
    code: string;
    @IsNumber()
    subtotal: number;
    @IsNumber()
    discount: number;
    @IsNumber()
    grandtotal: number;
    @IsNumber()
    tax: number;
    @IsNumber()
    payment_id: number;
    @IsNumber()
    delivery_id: number;
    note?: string;
    @IsEnum(['pending', 'complete'])
    status: 'pending' | 'complete';
}
