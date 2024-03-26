import { IsNumber} from "class-validator";

export class CreateCartdetailDto {
    product_id: number;
    cart_id: number;
    @IsNumber()
    qty: number;
    @IsNumber()
    price: number;
    @IsNumber()
    subtotal: number;
}
