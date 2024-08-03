import { Module } from '@nestjs/common';
import { StorageDetailsController } from './storage-details.controller';
import { StorageDetailsService } from './storage-details.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entity/product.entity';
import { StorageDetails } from './entity/storage-details.entity';
import { Storage } from 'src/storage/entity/storage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StorageDetails, Product, Storage])],
  controllers: [StorageDetailsController],
  providers: [StorageDetailsService],
})
export class StorageDetailsModule {}
