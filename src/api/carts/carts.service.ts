import { Injectable } from '@nestjs/common';
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

  async findAll() {
    return await this.cartRepo.find({relations: {cartdetails:true}});
  }

  async findOne(id: number) {
    return await this.cartRepo.findOne({where: {id:id}, relations:{cartdetails:true, user:true}});
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    return await this.cartRepo.update({id}, {...updateCartDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    return await this.cartRepo.delete({id});
  }
}
