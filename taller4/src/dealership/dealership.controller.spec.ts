import { Test, TestingModule } from '@nestjs/testing';
import { DealershipController } from './dealership.controller.js';
import { DealershipService } from './dealership.service.js';

describe('DealershipController', () => {
  let controller: DealershipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DealershipController],
      providers: [DealershipService],
    }).compile();

    controller = module.get<DealershipController>(DealershipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
