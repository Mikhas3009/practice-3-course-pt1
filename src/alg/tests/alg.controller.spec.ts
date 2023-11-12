import { Test, TestingModule } from '@nestjs/testing';
import { AlgController } from '../alg.controller';

describe('AlgController', () => {
  let controller: AlgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlgController],
    }).compile();

    controller = module.get<AlgController>(AlgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
