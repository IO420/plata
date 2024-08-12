import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { ProductDto } from './dto/product.dto';
import { Kind } from 'src/kind/entity/kind.entity';

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name);

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Kind)
    private readonly kindRepository: Repository<Kind>,
  ) {}

  async find(id_product: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id_product },
      relations: ['kinds'],
    });

    if (!product) {
      this.logger.debug('Product not found');
      throw new HttpException('Product not found', 404);
    }

    return product;
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productRepository.find({
      order: { name: 'ASC' },
      relations: ['kinds'],
    });

    if (!products.length) {
      this.logger.debug('No products found');
      throw new HttpException('No products found', 404);
    }

    return products;
  }

  async findFilter(filters: any):Promise<Product[]>{
    const query = this.productRepository.createQueryBuilder("product");

    if(filters){
      Logger.debug('fiter');
      query.andWhere("product.kinds LIKE :kinds", { kinds: `%${filters.kinds}%` });
    }

    const products = await query.getMany();

    return products;
  }

  async findByFilter(filter: any): Promise<Product[]> {
    const query = this.productRepository.createQueryBuilder('product');

    if (filter.name) {
      query.andWhere('product.name LIKE :name', { name: `%${filter.name}%` });
    }

    if (filter.price) {
      query.andWhere('product.price <= :price', { price: filter.price });
    }

    query.addOrderBy('product.name', 'ASC');

    const products = await query.getMany();

    if (!products.length) {
      this.logger.debug('No products found');
      throw new HttpException('No products found', 404);
    }

    this.logger.debug('Products found successfully');
    return products;
  }

  async register(data: ProductDto) {
    Logger.debug('Registering product:', JSON.stringify(data));
  
    const product = this.productRepository.create({
      name: data.name,
      description: data.description,
      price: data.price,
    });
  
    try {
      const savedProduct = await this.productRepository.save(product);
  
      const { kinds } = data;
      if (kinds && kinds.length > 0) {
        const kindEntities = await Promise.all(
          kinds.map(async (kind) => {
            const kindEntity = await this.kindRepository.findOne({
              where: { id_kind: kind.id_kind },
            });
  
            if (!kindEntity) {
              throw new HttpException(`Kind with id ${kind.id_kind} not found`, 404);
            }
  
            return kindEntity;
          })
        );
  
        savedProduct.kinds = kindEntities;
        await this.productRepository.save(savedProduct);
      }
  
      Logger.debug('Product registered successfully');
      return { message: 'Product registered successfully' };
    } catch (error) {
      Logger.error('Error registering product:', error.message);
      throw error;
    }
  }
  

  async modify(id_product: number, data: ProductDto): Promise<{ message: string }> {
    const product = await this.productRepository.findOne({
      where: { id_product },
      relations: ['kinds'],
    });
  
    if (!product) {
      this.logger.debug('Product not found');
      throw new HttpException('Product not found', 404);
    }
  
    Object.assign(product, {
      name: data.name,
      description: data.description,
      price: data.price,
    });
  
    if (data.kinds && Array.isArray(data.kinds)) {
      const kindEntities = await Promise.all(
        data.kinds.map(async (kindId) => {
          const kind = await this.kindRepository.findOne({
            where: { id_kind: +kindId },
          });
  
          if (!kind) {
            throw new HttpException(`Kind with id ${kindId} not found`, 404);
          }
  
          return kind;
        }),
      );

      product.kinds = kindEntities;
    }
  
    await this.productRepository.save(product);
  
    this.logger.debug('Product modified successfully');
    return { message: 'Product modified successfully' };
  }
  

  async remove(id_product: number): Promise<{ message: string }> {
    const product = await this.productRepository.findOne({
      where: { id_product },
      relations: ['kinds', 'storageDetails'],
    });

    if (!product) {
      this.logger.debug('Product not found');
      throw new HttpException('Product not found', 404);
    }

    await this.productRepository.remove(product);
    this.logger.debug('Product deleted successfully');
    return { message: 'Product deleted successfully' };
  }
}
