import { Module } from '@nestjs/common';
import { CartdetailsService } from './cartdetails.service';
import { CartdetailsController } from './cartdetails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartDetail } from 'src/typeorm/entities/CartDetail';
import { Cart } from 'src/typeorm/entities/Cart';
import { Product } from 'src/typeorm/entities/Product';

@Module({
  imports:[TypeOrmModule.forFeature([CartDetail, Cart, Product])],
  controllers: [CartdetailsController],
  providers: [CartdetailsService],
})
export class CartdetailsModule {}
