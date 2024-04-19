import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";

export class CreateDeliveryDto {
    @IsNotEmpty()
    @ApiProperty()
    delivery_code: string;
    @ApiProperty()
    description?: string;
    @ApiProperty()
    address?: string;
    @IsEnum(['pending', 'ongoing', 'complete'])
    @ApiProperty()
    status: 'pending' | 'ongoing' | 'complete';
}
