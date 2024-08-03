import { Body, Controller, Get, Post } from '@nestjs/common';
import { StorageDetailsService } from './storage-details.service';
import { CreateStorageDetailsDto } from './dto/storage-details.dto';

@Controller('storage-details')
export class StorageDetailsController {
  constructor(private readonly storageDetailsService: StorageDetailsService) {}

  @Get()
  findAll(){
    return this.storageDetailsService.findAll();
  }
  @Post()
  async registerProductInStorage(@Body() createStorageDetailsDto: CreateStorageDetailsDto) {
    return this.storageDetailsService.registerProductInStorage(createStorageDetailsDto);
  }
}
