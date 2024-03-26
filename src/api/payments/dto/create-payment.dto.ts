import { IsEnum } from "class-validator";

export class CreatePaymentDto {
    name: string;
    @IsEnum(["cash", "credit"])
    type: "cash" | "credit";
}
