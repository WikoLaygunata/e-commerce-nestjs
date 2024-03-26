import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductcategoriesService } from './productcategories.service';
import { CreateProductcategoryDto } from './dto/create-productcategory.dto';
import { UpdateProductcategoryDto } from './dto/update-productcategory.dto';

@Controller('productcategories')
export class ProductcategoriesController {
  constructor(private readonly productcategoriesService: ProductcategoriesService) {}

  @Post()
  async create(@Body() createProductcategoryDto: CreateProductcategoryDto) {
    return this.productcategoriesService.create(createProductcategoryDto);
  }

  @Get()
  async findAll() {
    return this.productcategoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productcategoriesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductcategoryDto: UpdateProductcategoryDto) {
    return this.productcategoriesService.update(+id, updateProductcategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productcategoriesService.remove(+id);
  }
}
