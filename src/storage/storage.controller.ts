import { Controller, Get, Post } from '@nestjs/common';
import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(private storageService: StorageService) {}

  @Post()
  createDate(){
    return this.storageService.createManualStorage();
  }

  @Get()
  findAll() {
    return this.storageService.findAll();
  }
}
