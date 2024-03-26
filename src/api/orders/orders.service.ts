import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/typeorm/entities/Order';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {

  constructor(@InjectRepository(Order) private readonly orderrepo : Repository<Order>){}

  async create(createOrderDto: CreateOrderDto) {
    const order = this.orderrepo.create(createOrderDto);
    return await this.orderrepo.save(order);
  }

  async findAll() {
    return await this.orderrepo.find({relations: {user:true, delivery: true, payment: true}});
  }

  async findOne(id: number) {
    return await this.orderrepo.findOne({where: {id:id}, relations:{user:true, delivery: true, payment: true, orderdetails: true}});
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.orderrepo.update({id}, {...updateOrderDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    return await this.orderrepo.delete({id});
  }
}
