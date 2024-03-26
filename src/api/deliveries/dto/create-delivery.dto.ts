import { IsEnum } from "class-validator";

export class CreateDeliveryDto {
    delivery_code: string;
    description: string;
    address: string;
    @IsEnum(['pending', 'ongoing', 'complete'])
    status: 'pending' | 'ongoing' | 'complete';
}
