import { IsNotEmpty, IsNumber } from "class-validator";
import { CreateProductcategoryDto } from "src/api/productcategories/dto/create-productcategory.dto";

export class CreateProductDto {
    @IsNotEmpty()
    name: string;
    @IsNumber()
    qty: number;
    @IsNumber()
    price: number;
    unit_id: number;
    @IsNotEmpty()
    slug: string;
    image?: string;
    description?: string;
    categories: CreateProductcategoryDto[];
}
