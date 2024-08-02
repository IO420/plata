import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async find(id_product) {
    const product = await this.productRepository.findOne({
      where: { id_product },
    });

    if(!product){
      Logger.debug(`product not fount`);
      throw new HttpException('product not fount', 404);
    }

    return product;
  }

  findAll() {
    const data = this.productRepository.find({ order: { name: 'ASC' } });

    if (!data) {
      Logger.debug(`product not fount`);
      throw new HttpException('product not fount', 404);
    }

    return data;
  }

  async findByFilter(filter: any) {
    const query = this.productRepository.createQueryBuilder('product');

    if (filter.name) {
      query.andWhere('product.name LIKE :name', { name: `%${filter.name}%` });
    }

    if (filter.price) {
      query.andWhere('product.price <= :price', { price: filter.price });
    }

    query.addOrderBy('profesor.name', 'ASC');

    const products = await query.getMany();

    if (!products) {
      Logger.debug(`product not fount`);
      throw new HttpException('product not fount', 404);
    }

    Logger.debug(`find product successfully`);
    return products;
  }

  async register(data) {
    Logger.debug(data);

    this.productRepository.save(this.productRepository.create(data));
    Logger.debug(`product register successfully`);
    return { message: 'product register successfully' };
  }

  async modify(id_product, data) {
    const product = await this.find(id_product);

    if (!product) {
      Logger.debug(`product not fount`);
      throw new HttpException('product not fount', 404);
    }

    Object.assign(product, data);

    this.productRepository.save(product);
    Logger.debug(`product modify successfully`);
    return { message: 'product modify successfully' };
  }

  async remove(id_product) {
    const product = await this.find(id_product);

    if (!product) {
      Logger.debug(`product not fount`);
      throw new HttpException('product not fount', 404);
    }

    this.productRepository.remove(product);
    Logger.debug(`product delete successfully`);
    return { message: 'product delete successfully' };
  }
}
