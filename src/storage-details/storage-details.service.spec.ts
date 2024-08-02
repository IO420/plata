import { Test, TestingModule } from '@nestjs/testing';
import { StorageDetailsService } from './storage-details.service';

describe('StorageDetailsService', () => {
  let service: StorageDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageDetailsService],
    }).compile();

    service = module.get<StorageDetailsService>(StorageDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
