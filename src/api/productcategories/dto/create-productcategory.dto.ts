import { IsNotEmpty } from "class-validator";

export class CreateProductcategoryDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    slug: string;
}
