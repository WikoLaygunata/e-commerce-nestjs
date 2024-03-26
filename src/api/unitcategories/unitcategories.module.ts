import { Module } from '@nestjs/common';
import { UnitcategoriesService } from './unitcategories.service';
import { UnitcategoriesController } from './unitcategories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitCategory } from 'src/typeorm/entities/UnitCategory';
import { Product } from 'src/typeorm/entities/Product';

@Module({
  imports:[TypeOrmModule.forFeature([UnitCategory, Product])],
  controllers: [UnitcategoriesController],
  providers: [UnitcategoriesService],
})
export class UnitcategoriesModule {}
