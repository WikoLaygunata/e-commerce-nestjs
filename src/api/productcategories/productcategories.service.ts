import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(params?: any) {
    let data = await this.categoryrepo.find({relations: {products:false}});
    if(params.name){
      data = (await data).filter(x=>x.name.toLowerCase().includes(params.name.toLowerCase()));
    }
    return data;
  }

  async findOne(id: number) {
    var data = await this.categoryrepo.findOne({where: {id:id}, relations:{products:true}});
    if(!data) throw new NotFoundException();
    return data;
  }

  async update(id: number, updateProductcategoryDto: UpdateProductcategoryDto) {
    var data = await this.categoryrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.categoryrepo.update({id}, {...updateProductcategoryDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    var data = await this.categoryrepo.findOne({where: {id:id}});
    if(!data) throw new NotFoundException();
    return await this.categoryrepo.delete({id});
  }
}
