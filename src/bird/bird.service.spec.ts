import { Test, TestingModule } from '@nestjs/testing';
import { BirdService } from './bird.service';

describe('BirdService', () => {
  let service: BirdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BirdService],
    }).compile();

    service = module.get<BirdService>(BirdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
