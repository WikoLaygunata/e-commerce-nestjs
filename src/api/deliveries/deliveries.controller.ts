import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ValidationPipe } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Controller('deliveries')
export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @Post()
  async create(@Body(ValidationPipe) createDeliveryDto: CreateDeliveryDto) {
    return this.deliveriesService.create(createDeliveryDto);
  }

  @Get()
  async findAll() {
    return this.deliveriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.deliveriesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body(ValidationPipe) updateDeliveryDto: UpdateDeliveryDto) {
    return this.deliveriesService.update(+id, updateDeliveryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.deliveriesService.remove(+id);
  }
}
