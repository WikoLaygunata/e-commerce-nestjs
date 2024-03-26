import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>){}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }

  async findAll() {
    return await this.userRepo.find({relations: ['carts']});
  }

  async findOne(id: number) {
    return await this.userRepo.findOne({where: {id: id}, relations: {carts: true}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update({id}, {...updateUserDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    return await this.userRepo.delete({id});
  }
}
