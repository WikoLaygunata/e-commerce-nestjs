import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateProductcategoryDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string;
    @IsNotEmpty()
    @ApiProperty()
    slug: string;
}
