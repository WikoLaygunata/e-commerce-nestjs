import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDto {
    @ApiProperty()
    user_id: number;
    @IsNotEmpty()
    @ApiProperty()
    code: string;
    @IsNumber()
    @ApiProperty()
    subtotal: number;
    @IsNumber()
    @ApiProperty()
    discount: number;
    @IsNumber()
    @ApiProperty()
    grandtotal: number;
    @IsNumber()
    @ApiProperty()
    tax: number;
    @IsNumber()
    @ApiProperty()
    payment_id: number;
    @IsNumber()
    @ApiProperty()
    delivery_id: number;
    @ApiProperty()
    note?: string;
    @IsEnum(['pending', 'complete'])
    @ApiProperty()
    status: 'pending' | 'complete';
}
