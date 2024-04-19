import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";

export class CreatePaymentDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string;
    @IsEnum(["cash", "credit"])
    @ApiProperty()
    type: "cash" | "credit";
}
