import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/typeorm/entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Product) private readonly productrepo : Repository<Product>){}

  async create(createProductDto: CreateProductDto) {
    const product = this.productrepo.create(createProductDto);
    return await this.productrepo.save(product);;
  }

  async findAll() {
    return await this.productrepo.find({relations: {unitcategory:true,categories:true}});
  }

  async findOne(id: number) {
    var data = await this.productrepo.findOne({where: {id:id}, relations:{unitcategory:true, categories:true}});
    if(!data) throw new NotFoundException();
    return data;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    var data = await this.productrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.productrepo.update({id}, {...updateProductDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    var data = await this.productrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.productrepo.delete({id});
  }
}
