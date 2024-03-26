import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './typeorm/entities/User';
import { Cart } from './typeorm/entities/Cart';
import { Product } from './typeorm/entities/Product';
import { Categories } from './typeorm/entities/Categories';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(User) private userrepo: Repository<User>,
    @InjectRepository(Cart) private cartrepo: Repository<Cart>,
    @InjectRepository(Product) private productrepo: Repository<Product>,
    @InjectRepository(Categories) private categoryrepo: Repository<Categories>
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async seed(){
    const product = await this.productrepo.findOne({where:{id:1}, relations:['categories']});
    //const category = this.categoryrepo.create({name:"halo", slug:"world"});
    const category = this.categoryrepo.findOne({where:{id:1}, relations:{products:true}});
    (await category).products = [product];
    await this.categoryrepo.save(await category);
    //(await product).categories = [category];
    //await this.productrepo.save(product as any);
    return category;

    
    //const user = this.userrepo.findOne({where:{username: 'g'},relations:['carts']})
    //const cart = this.cartrepo.create({status: 'closed'});
    //(await user).carts.push(cart);
    //user.carts = [cart];
    //await this.userrepo.save(user);
    //await this.cartrepo.save(cart);
    //await this.userrepo.save(user);


  }
}
