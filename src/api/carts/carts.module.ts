import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Cart } from 'src/typeorm/entities/Cart';
import { CartDetail } from 'src/typeorm/entities/CartDetail';

@Module({
  imports:[TypeOrmModule.forFeature([User, Cart, CartDetail])],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
