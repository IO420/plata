import { Injectable, Logger, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StorageDetails } from './entity/storage-details.entity';
import { Product } from '../product/entity/product.entity';
import { Storage } from '../storage/entity/storage.entity';
import { CreateStorageDetailsDto } from './dto/storage-details.dto';

@Injectable()
export class StorageDetailsService {
  private readonly logger = new Logger(StorageDetailsService.name);

  constructor(
    @InjectRepository(StorageDetails)
    private readonly storageDetailsRepository: Repository<StorageDetails>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Storage)
    private readonly storageRepository: Repository<Storage>,
  ) {}

  findAll() {
    return this.storageDetailsRepository.find({
      order: { quantity: 'ASC' },
      relations: ['storage','product'],
    });
  }

  async registerProductInStorage(
    data: CreateStorageDetailsDto,
  ): Promise<{ message: string }> {
    const product = await this.productRepository.findOne({
      where: { id_product: data.id_product },
    });
    if (!product) {
      throw new HttpException(
        `Product with id ${data.id_product} not found`,
        404,
      );
    }

    this.logger.debug(`Found product: ${JSON.stringify(product)}`);

    const storage = await this.storageRepository.findOne({
      order: { date: 'DESC' },
      where: {},
    });

    if (!storage) {
      throw new HttpException('No storage found', 404);
    }

    this.logger.debug(`Found storage: ${JSON.stringify(storage)}`);

    // Create storage details
    const storageDetails = new StorageDetails();
    storageDetails.product = product;
    storageDetails.storage = storage;
    storageDetails.quantity = data.quantity;

    await this.storageDetailsRepository.save(storageDetails);

    this.logger.debug('Product registered in storage successfully');
    return { message: 'Product registered in storage successfully' };
  }
}
