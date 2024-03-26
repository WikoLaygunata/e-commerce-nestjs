import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Delivery } from 'src/typeorm/entities/Delivery';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveriesService {

  constructor(@InjectRepository(Delivery) private readonly deliveryrepo: Repository<Delivery>){}

  async create(createDeliveryDto: CreateDeliveryDto) {
    const delivery = this.deliveryrepo.create(createDeliveryDto);
    return await this.deliveryrepo.save(delivery);  
  }

  async findAll() {
    return await this.deliveryrepo.find({relations: {order:true}});
  }

  async findOne(id: number) {
    return await this.deliveryrepo.findOne({where: {id:id}, relations:{order:true}});
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return await this.deliveryrepo.update({id}, {...updateDeliveryDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    return await this.deliveryrepo.delete({id});
  }
}
