import { Test, TestingModule } from '@nestjs/testing';
import { KindProductService } from './kind-product.service';

describe('KindProductService', () => {
  let service: KindProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KindProductService],
    }).compile();

    service = module.get<KindProductService>(KindProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
