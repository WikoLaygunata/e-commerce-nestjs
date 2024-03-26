import { Injectable } from '@nestjs/common';
import { CreateProductcategoryDto } from './dto/create-productcategory.dto';
import { UpdateProductcategoryDto } from './dto/update-productcategory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from 'src/typeorm/entities/Categories';
import { Repository } from 'typeorm';

@Injectable()
export class ProductcategoriesService {

  constructor(@InjectRepository(Categories) private readonly categoryrepo: Repository<Categories>){}

  async create(createProductcategoryDto: CreateProductcategoryDto) {
    const unitcategory = this.categoryrepo.create(createProductcategoryDto);
    return await this.categoryrepo.save(unitcategory);
    }

  async findAll() {
    return await this.categoryrepo.find({relations: {products:false}});
  }

  async findOne(id: number) {
    return await this.categoryrepo.findOne({where: {id:id}, relations:{products:true}});
  }

  async update(id: number, updateProductcategoryDto: UpdateProductcategoryDto) {
    return await this.categoryrepo.update({id}, {...updateProductcategoryDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    return await this.categoryrepo.delete({id});
  }
}
