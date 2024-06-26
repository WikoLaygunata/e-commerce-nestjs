import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/typeorm/entities/Product';
import { CartDetail } from 'src/typeorm/entities/CartDetail';
import { OrderDetail } from 'src/typeorm/entities/OrderDetail';
import { UnitCategory } from 'src/typeorm/entities/UnitCategory';
import { Categories } from 'src/typeorm/entities/Categories';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      UnitCategory,
      CartDetail,
      OrderDetail,
      Categories,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
