import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { CartdetailsService } from './cartdetails.service';
import { CreateCartdetailDto } from './dto/create-cartdetail.dto';
import { UpdateCartdetailDto } from './dto/update-cartdetail.dto';

@Controller('cartdetails')
export class CartdetailsController {
  constructor(private readonly cartdetailsService: CartdetailsService) {}

  @Post()
  async create(@Body() createCartdetailDto: CreateCartdetailDto) {
    return this.cartdetailsService.create(createCartdetailDto);
  }

  @Get()
  async findAll() {
    return this.cartdetailsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cartdetailsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateCartdetailDto: UpdateCartdetailDto) {
    return this.cartdetailsService.update(id, updateCartdetailDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.cartdetailsService.remove(id);
  }
}
