import { Injectable } from '@nestjs/common';
import { CreateUnitcategoryDto } from './dto/create-unitcategory.dto';
import { UpdateUnitcategoryDto } from './dto/update-unitcategory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitCategory } from 'src/typeorm/entities/UnitCategory';
import { Repository } from 'typeorm';

@Injectable()
export class UnitcategoriesService {

  constructor(@InjectRepository(UnitCategory) private readonly unitcategoryrepo : Repository<UnitCategory>){}

  async create(createUnitcategoryDto: CreateUnitcategoryDto) {
    const unitcategory = this.unitcategoryrepo.create(createUnitcategoryDto);
    return await this.unitcategoryrepo.save(unitcategory);  
  }

  async findAll() {
    return await this.unitcategoryrepo.find({relations: {products:true}});
  }

  async findOne(id: number) {
    return await this.unitcategoryrepo.findOne({where: {id:id}, relations:{products:true}});
  }

  async update(id: number, updateUnitcategoryDto: UpdateUnitcategoryDto) {
    return await this.unitcategoryrepo.update({id}, {...updateUnitcategoryDto, updatedAt: new Date()});
  }

  async remove(id: number) {
    return await this.unitcategoryrepo.delete({id});
  }
}
