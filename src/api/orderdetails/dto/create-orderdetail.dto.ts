import { IsNumber } from "class-validator";

export class CreateOrderdetailDto {
    order_id: number;
    product_id: number;
    @IsNumber()
    qty: number;
    @IsNumber()
    price: number;
    @IsNumber()
    subtotal: number;
}
