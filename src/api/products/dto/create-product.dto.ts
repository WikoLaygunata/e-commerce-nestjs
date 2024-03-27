import { CreateProductcategoryDto } from "src/api/productcategories/dto/create-productcategory.dto";

export class CreateProductDto {
    name: string;
    qty: number;
    price: number;
    unit_id: number;
    slug: string;
    image: string;
    description: string;
    categories: CreateProductcategoryDto[];
}
