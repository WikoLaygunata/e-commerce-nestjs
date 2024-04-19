import { ApiProperty } from "@nestjs/swagger";
import { IsNumber} from "class-validator";

export class CreateCartdetailDto {
    @ApiProperty()
    product_id: number;
    @ApiProperty()
    cart_id: number;
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
