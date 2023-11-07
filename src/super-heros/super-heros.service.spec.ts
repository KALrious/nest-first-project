import { Test, TestingModule } from '@nestjs/testing';
import { SuperHerosService } from './super-heros.service';

describe('SuperHerosService', () => {
  let service: SuperHerosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperHerosService],
    }).compile();

    service = module.get<SuperHerosService>(SuperHerosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
