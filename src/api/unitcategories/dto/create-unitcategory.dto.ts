import { IsNotEmpty } from "class-validator";

export class CreateUnitcategoryDto {
    @IsNotEmpty()
    name: string;
}
