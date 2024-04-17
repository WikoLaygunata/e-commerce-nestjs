import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'src/typeorm/entities/Cart';
import { Repository } from 'typeorm';

@Injectable()
export class CartsService {

  constructor(@InjectRepository(Cart) private readonly cartRepo: Repository<Cart>){}

  async create(createCartDto: CreateCartDto) {
    const cart = this.cartRepo.create(createCartDto);
    return await this.cartRepo.save(cart);
  }

  async findAll(params?: any) {
    let data = await this.cartRepo.find({relations: {cartdetails:true}});
    if(params.status){
      data = (await data).filter(x=>x.status === params.status);
    }
    return data;
  }

  async findOne(id: number) {
    var data = await this.cartRepo.findOne({where: {id:id}, relations:{cartdetails:true, user:true}});
    if(!data) throw new NotFoundException();
    return data;
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    var data = await this.cartRepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.cartRepo.update({id}, {...updateCartDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    var data = await this.cartRepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.cartRepo.delete({id});
  }
}
