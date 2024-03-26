import { Module } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesController } from './deliveries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Delivery } from 'src/typeorm/entities/Delivery';
import { Order } from 'src/typeorm/entities/Order';

@Module({
  imports:[TypeOrmModule.forFeature([Delivery, Order])],
  controllers: [DeliveriesController],
  providers: [DeliveriesService],
})
export class DeliveriesModule {}
