import { Test, TestingModule } from '@nestjs/testing';
import { StorageDetailsController } from './storage-details.controller';

describe('StorageDetailsController', () => {
  let controller: StorageDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageDetailsController],
    }).compile();

    controller = module.get<StorageDetailsController>(StorageDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
