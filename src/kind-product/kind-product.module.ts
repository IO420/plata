import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KindProduct } from './entity/kind-product.entity';
import { KindProductController } from './kind-product.controller';
import { KindProductService } from './kind-product.service';

@Module({
  imports: [TypeOrmModule.forFeature([KindProduct])],
  controllers: [KindProductController],
  providers: [KindProductService],
})
export class KindProductModule {}
