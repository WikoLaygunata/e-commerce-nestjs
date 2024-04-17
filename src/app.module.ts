import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './api/user/user.module';
import { ProductsModule } from './api/products/products.module';
import { CartsModule } from './api/carts/carts.module';
import { CartdetailsModule } from './api/cartdetails/cartdetails.module';
import { ProductcategoriesModule } from './api/productcategories/productcategories.module';
import { UnitcategoriesModule } from './api/unitcategories/unitcategories.module';
import { PaymentsModule } from './api/payments/payments.module';
import { OrdersModule } from './api/orders/orders.module';
import { OrderdetailsModule } from './api/orderdetails/orderdetails.module';
import { DeliveriesModule } from './api/deliveries/deliveries.module';
import { User } from './typeorm/entities/User';
import { Cart } from './typeorm/entities/Cart';
import { Categories } from './typeorm/entities/Categories';
import { Product } from './typeorm/entities/Product';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: configService.get("DATABASE"),
        autoLoadEntities: true,
        synchronize: true,
      }),
    inject: [ConfigService],
  }),TypeOrmModule.forFeature([User, Cart, Categories, Product]),
    UserModule,
    ProductsModule,
    CartsModule,
    CartdetailsModule,
    ProductcategoriesModule,
    UnitcategoriesModule,
    PaymentsModule,
    OrdersModule,
    OrderdetailsModule,
    DeliveriesModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
