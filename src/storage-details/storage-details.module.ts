import { Module } from '@nestjs/common';
import { StorageDetailsController } from './storage-details.controller';
import { StorageDetailsService } from './storage-details.service';

@Module({
  controllers: [StorageDetailsController],
  providers: [StorageDetailsService]
})
export class StorageDetailsModule {}
