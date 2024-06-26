import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ValidationPipe } from '@nestjs/common';
import { OrderdetailsService } from './orderdetails.service';
import { CreateOrderdetailDto } from './dto/create-orderdetail.dto';
import { UpdateOrderdetailDto } from './dto/update-orderdetail.dto';

@Controller('orderdetails')
export class OrderdetailsController {
  constructor(private readonly orderdetailsService: OrderdetailsService) {}

  @Post()
  async create(@Body(ValidationPipe) createOrderdetailDto: CreateOrderdetailDto) {
    return this.orderdetailsService.create(createOrderdetailDto);
  }

  @Get()
  async findAll() {
    return this.orderdetailsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.orderdetailsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body(ValidationPipe) updateOrderdetailDto: UpdateOrderdetailDto) {
    return this.orderdetailsService.update(+id, updateOrderdetailDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.orderdetailsService.remove(+id);
  }
}
