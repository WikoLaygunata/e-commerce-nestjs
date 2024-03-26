import { Module } from '@nestjs/common';
import { ProductcategoriesService } from './productcategories.service';
import { ProductcategoriesController } from './productcategories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/typeorm/entities/Product';
import { Categories } from 'src/typeorm/entities/Categories';

@Module({
  imports:[TypeOrmModule.forFeature([Product, Categories])],
  controllers: [ProductcategoriesController],
  providers: [ProductcategoriesService],
})
export class ProductcategoriesModule {}
