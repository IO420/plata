import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductService {
  constructor(private productRepository: Repository<Product>) {}

  find(id_product){
    const product = this.productRepository.find({
      where: { id_product }
    });

    return product;
  }

  findAll() {
    const data = this.productRepository.find({ order: { name: 'ASC' } });

    if (!data) {
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
      throw new HttpException('product not fount', 404);
    }

    return products;
  }

  async register(data) {
    const product = await this.find(data.id_product);

    if(product){
      throw new HttpException('product already exist',404)
    }

    this.productRepository.save(data);
    return { message: 'product register successfully' };
  }

  async modify(id_product,data){
    const product = await this.find(id_product);

    if(!product){
      throw new HttpException('product not fount',404)
    }

    Object.assign(product, data);

    this.productRepository.save(product);


    return {message:'product modify successfully'}
  }

  async remove(id_product) {
    const product = await this.find(id_product);

    if(!product){
      throw new HttpException('product not fount',404)
    }

    this.productRepository.remove(product);
    return { message: 'product delete successfully' };
  }
}
