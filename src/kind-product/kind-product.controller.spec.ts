import { Test, TestingModule } from '@nestjs/testing';
import { KindProductController } from './kind-product.controller';

describe('KindProductController', () => {
  let controller: KindProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KindProductController],
    }).compile();

    controller = module.get<KindProductController>(KindProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
