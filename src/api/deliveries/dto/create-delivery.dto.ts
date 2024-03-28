import { IsEnum, IsNotEmpty } from "class-validator";

export class CreateDeliveryDto {
    @IsNotEmpty()
    delivery_code: string;
    description?: string;
    address?: string;
    @IsEnum(['pending', 'ongoing', 'complete'])
    status: 'pending' | 'ongoing' | 'complete';
}
