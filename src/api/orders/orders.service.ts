import { Injectable, NotFoundException } from '@nestjs/common';
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
    await this.orderrepo.save(order);
  }

  async findAll(params? : any) {
    let data = await this.orderrepo.find({relations: {user:true, delivery: true, payment: true}});
    if(params.status){
      data = (await data).filter(x=>x.status === params.status);
    }
    return data;
  }

  async findOne(id: number) {
    var data = await this.orderrepo.findOne({where: {id:id}, relations:{user:true, delivery: true, payment: true, orderdetails: true}});
    if(!data) throw new NotFoundException();
    return data;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    var data = await this.orderrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.orderrepo.update({id}, {...updateOrderDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    var data = await this.orderrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.orderrepo.delete({id});
  }
}
