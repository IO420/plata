import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Storage } from './entity/storage.entity';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class StorageService {
  private readonly logger = new Logger(StorageService.name);

  constructor(
    @InjectRepository(Storage)
    private readonly storageRepository: Repository<Storage>,
  ) {}

  @Cron('0 0 0 * * *') // Cron expression for daily at midnight
  async createNewStorage() {
    const newStorage = this.storageRepository.create({
      date: new Date().toISOString().split('T')[0], // Store date in YYYY-MM-DD format
    });

    await this.storageRepository.save(newStorage);
    this.logger.debug('New storage created:', newStorage);
  }

  async createManualStorage() {
    const newStorage = this.storageRepository.create({
      date: new Date().toISOString().split('T')[0], // Store date in YYYY-MM-DD format
    });

    await this.storageRepository.save(newStorage);
    this.logger.debug('Manual storage created:', newStorage);
  }

  findAll() {
    return this.storageRepository.find({ order: { date: 'DESC' } });
  }
}
