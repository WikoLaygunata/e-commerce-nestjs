import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ValidationPipe, Query } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  async create(@Body(ValidationPipe) createCartDto: CreateCartDto) {
    return this.cartsService.create(createCartDto);
  }

  @Get()
  async findAll(@Query() params: any) {
    return this.cartsService.findAll(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cartsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body(ValidationPipe) updateCartDto: UpdateCartDto) {
    return this.cartsService.update(+id, updateCartDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.cartsService.remove(+id);
  }
}
