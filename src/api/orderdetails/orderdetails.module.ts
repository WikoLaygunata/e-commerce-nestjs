import { Module } from '@nestjs/common';
import { OrderdetailsService } from './orderdetails.service';
import { OrderdetailsController } from './orderdetails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetail } from 'src/typeorm/entities/OrderDetail';
import { Order } from 'src/typeorm/entities/Order';
import { Product } from 'src/typeorm/entities/Product';

@Module({
  imports:[TypeOrmModule.forFeature([OrderDetail, Order, Product])],
  controllers: [OrderdetailsController],
  providers: [OrderdetailsService],
})
export class OrderdetailsModule {}
