import { IsEnum, IsNotEmpty } from "class-validator";

export class CreatePaymentDto {
    @IsNotEmpty()
    name: string;
    @IsEnum(["cash", "credit"])
    type: "cash" | "credit";
}
