import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/typeorm/entities/Product';
import { In, Repository } from 'typeorm';
import { Categories } from 'src/typeorm/entities/Categories';
import { log } from 'console';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productrepo: Repository<Product>,
    @InjectRepository(Categories)
    private readonly categoryrepo: Repository<Categories>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const categoriesslug: string[] = JSON.parse(createProductDto.categories);

    const dt = await this.categoryrepo.find({
      where: { name: In(categoriesslug) },
    });


    const newCreateDto = {
      ...createProductDto,
      categories: dt,
    };
    const product = this.productrepo.create(newCreateDto);
    return await this.productrepo.save(product);
  }

  async findAll(params?: any) {
    let data = await this.productrepo.find({
      relations: { unitcategory: true, categories: true },
    });
    if (params.name) {
      data = (await data).filter((x) =>
        x.name.toLowerCase().includes(params.name.toLowerCase()),
      );
    }
    return data;
  }

  async findOne(id: number) {
    var data = await this.productrepo.findOne({
      where: { id: id },
      relations: { unitcategory: true, categories: true },
    });
    if (!data) throw new NotFoundException();
    return data;
  }

  async findSlug(slug: string) {
    var data = await this.productrepo.findOne({
      where: { slug: slug },
      relations: { unitcategory: true, categories: true },
    });
    if (!data) throw new NotFoundException();
    return data;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    // var data = await this.productrepo.findOne({ where: { id: id } });
    // if (!data) throw new NotFoundException();
    // return await this.productrepo.update(
    //   { id },
    //   { ...updateProductDto, updatedAt: new Date() },
    // );
  }

  async remove(id: number) {
    var data = await this.productrepo.findOne({ where: { id: id } });
    if (!data) throw new NotFoundException();
    return await this.productrepo.delete({ id });
  }
}
