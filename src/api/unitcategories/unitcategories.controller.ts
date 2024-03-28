import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ValidationPipe } from '@nestjs/common';
import { UnitcategoriesService } from './unitcategories.service';
import { CreateUnitcategoryDto } from './dto/create-unitcategory.dto';
import { UpdateUnitcategoryDto } from './dto/update-unitcategory.dto';

@Controller('unitcategories')
export class UnitcategoriesController {
  constructor(private readonly unitcategoriesService: UnitcategoriesService) {}

  @Post()
  async create(@Body(ValidationPipe) createUnitcategoryDto: CreateUnitcategoryDto) {
    return this.unitcategoriesService.create(createUnitcategoryDto);
  }

  @Get()
  async findAll() {
    return this.unitcategoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.unitcategoriesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body(ValidationPipe) updateUnitcategoryDto: UpdateUnitcategoryDto) {
    return this.unitcategoriesService.update(+id, updateUnitcategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.unitcategoriesService.remove(+id);
  }
}
