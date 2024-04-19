import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { CreateProductcategoryDto } from "src/api/productcategories/dto/create-productcategory.dto";

export class CreateProductDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string;
    @IsNumber()
    @ApiProperty()
    qty: number;
    @IsNumber()
    @ApiProperty()
    price: number;
    @ApiProperty()
    unit_id: number;
    @IsNotEmpty()
    @ApiProperty()
    slug: string;
    @ApiProperty()
    image?: string;
    @ApiProperty()
    description?: string;
    @ApiProperty()
    categories: CreateProductcategoryDto[];
}
