import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(params? : any) {
    let data = await this.deliveryrepo.find({relations: {order:true}});
    if(params.status){
      data = (await data).filter(x=>x.status === params.status);
    }
    if(params.delivery_code){
      data = (await data).filter(x=>x.delivery_code.toLowerCase().includes(params.delivery_code.toLowerCase()));
    }
    return data;
  }

  async findOne(id: number) {
    var data = await this.deliveryrepo.findOne({where: {id:id}, relations:{order:true}});
    if(!data) throw new NotFoundException();
    return data;
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    var data = await this.deliveryrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.deliveryrepo.update({id}, {...updateDeliveryDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    var data = await this.deliveryrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.deliveryrepo.delete({id});
  }
}
