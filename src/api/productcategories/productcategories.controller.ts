import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { ProductcategoriesService } from './productcategories.service';
import { CreateProductcategoryDto } from './dto/create-productcategory.dto';
import { UpdateProductcategoryDto } from './dto/update-productcategory.dto';

@Controller('productcategories')
export class ProductcategoriesController {
  constructor(
    private readonly productcategoriesService: ProductcategoriesService,
  ) {}

  @Post()
  async create(
    @Body(ValidationPipe) createProductcategoryDto: CreateProductcategoryDto,
  ) {
    return this.productcategoriesService.create(createProductcategoryDto);
  }

  @Get()
  async findAll(@Query() params: any) {
    return this.productcategoriesService.findAll(params);
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    return this.productcategoriesService.findOne(slug);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateProductcategoryDto: UpdateProductcategoryDto,
  ) {
    return this.productcategoriesService.update(+id, updateProductcategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productcategoriesService.remove(+id);
  }
}
