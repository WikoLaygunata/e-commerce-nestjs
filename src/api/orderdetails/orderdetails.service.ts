import { Injectable } from '@nestjs/common';
import { CreateOrderdetailDto } from './dto/create-orderdetail.dto';
import { UpdateOrderdetailDto } from './dto/update-orderdetail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from 'src/typeorm/entities/OrderDetail';
import { Repository } from 'typeorm';

@Injectable()
export class OrderdetailsService {

  constructor(@InjectRepository(OrderDetail) private readonly orderdetailrepo : Repository<OrderDetail>){}

  async create(createOrderdetailDto: CreateOrderdetailDto) {
    const orderdetail = this.orderdetailrepo.create(createOrderdetailDto);
    return await this.orderdetailrepo.save(orderdetail);
  }

  async findAll() {
    return await this.orderdetailrepo.find({relations: {product:true}});
  }

  async findOne(id: number) {
    return await this.orderdetailrepo.findOne({where: {id:id}, relations:{product:true}});
  }

  async update(id: number, updateOrderdetailDto: UpdateOrderdetailDto) {
    return await this.orderdetailrepo.update({id}, {...updateOrderdetailDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    return await this.orderdetailrepo.delete({id});
  }
}
