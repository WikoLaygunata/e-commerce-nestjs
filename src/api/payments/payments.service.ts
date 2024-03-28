import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/Payment';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentsService {

  constructor(@InjectRepository(Payment) private readonly paymentrepo: Repository<Payment>){}

  async create(createPaymentDto: CreatePaymentDto) {
    const payment = this.paymentrepo.create(createPaymentDto);
    return await this.paymentrepo.save(payment);
  }

  async findAll() {
    return await this.paymentrepo.find();
  }

  async findOne(id: number) {
    var data = await this.paymentrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return data;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    var data = await this.paymentrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.paymentrepo.update({id}, {...updatePaymentDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    var data = await this.paymentrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.paymentrepo.delete({id});
  }
}
