import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateOrderdetailDto {
    @ApiProperty()
    order_id: number;
    @ApiProperty()
    product_id: number;
    @IsNumber()
    @ApiProperty()
    qty: number;
    @IsNumber()
    @ApiProperty()
    price: number;
    @IsNumber()
    @ApiProperty()
    subtotal: number;
}
