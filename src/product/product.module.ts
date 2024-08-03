import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './entity/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kind } from 'src/kind/entity/kind.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product,Kind])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
