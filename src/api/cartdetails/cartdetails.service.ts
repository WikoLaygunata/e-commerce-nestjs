import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartdetailDto } from './dto/create-cartdetail.dto';
import { UpdateCartdetailDto } from './dto/update-cartdetail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartDetail } from 'src/typeorm/entities/CartDetail';
import { Repository } from 'typeorm';

@Injectable()
export class CartdetailsService {

  constructor(@InjectRepository(CartDetail) private readonly cartdetailrepo: Repository<CartDetail>){}

  async create(createCartdetailDto: CreateCartdetailDto) {
    const cartdetail = this.cartdetailrepo.create(createCartdetailDto);
    return await this.cartdetailrepo.save(cartdetail);
  }

  async findAll() {
    return await this.cartdetailrepo.find({relations: {cart:true, product: true}});
  }

  async findOne(id: number) {
    var data = await this.cartdetailrepo.findOne({where: {id:id}, relations:{cart:true, product: true}});
    if(!data) throw new NotFoundException();
    return data;
  }

  async update(id: number, updateCartdetailDto: UpdateCartdetailDto) {
    var data = await this.cartdetailrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.cartdetailrepo.update({id}, {...updateCartdetailDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    var data = await this.cartdetailrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.cartdetailrepo.delete({id});
  }
}
