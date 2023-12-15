import { Test, TestingModule } from '@nestjs/testing';
import { BirdController } from './bird.controller';

describe('BirdController', () => {
  let controller: BirdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BirdController],
    }).compile();

    controller = module.get<BirdController>(BirdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
