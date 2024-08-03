import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KindProduct } from './entity/kind-product.entity';
import { Repository } from 'typeorm';
import { KindProductDto } from './dto/kind-product.dto';

@Injectable()
export class KindProductService {
  constructor(
    @InjectRepository(KindProduct)
    private kindProductRepository: Repository<KindProduct>,
  ) {}

  register(data){
    this.kindProductRepository.save(this.kindProductRepository.create(data))
    Logger.debug('kind product register')
    return {message:'kind product register'}
  }
}
