import { Test, TestingModule } from '@nestjs/testing';
import { AlgService } from '../alg.service';

describe('AlgService', () => {
  let service: AlgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlgService],
    }).compile();

    service = module.get<AlgService>(AlgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
