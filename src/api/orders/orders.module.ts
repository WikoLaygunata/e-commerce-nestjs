import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { User } from 'src/typeorm/entities/User';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/Payment';
import { Order } from 'src/typeorm/entities/Order';
import { Delivery } from 'src/typeorm/entities/Delivery';
import { OrderDetail } from 'src/typeorm/entities/OrderDetail';

@Module({
  imports:[TypeOrmModule.forFeature([User, Payment, Order, Delivery, OrderDetail])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
