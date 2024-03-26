import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Cart } from 'src/typeorm/entities/Cart';
import { Order } from 'src/typeorm/entities/Order';

@Module({
  imports:[TypeOrmModule.forFeature([User, Cart, Order])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
