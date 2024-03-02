import { Test, TestingModule } from '@nestjs/testing';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

describe('DogController', () => {
  let controller: DogController;
  let service: DogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogController],
      providers: [DogService],
    })
      .useMocker((token) => {
        if (token === DogService) {
          return { findAll: jest.fn().mockRejectedValue(['caramel']) };
        }
      })
      .compile();
    controller = module.get<DogController>(DogController);
    service = module.get<DogService>(DogService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('should return array of dog', async () => {
      const spyDog = jest
        .spyOn(service, 'findAll')
        .mockImplementation(() => Promise.resolve(['malko']));
      const result = await controller.findAll();
      expect(spyDog).toHaveBeenCalledTimes(1);
      expect(result).toStrictEqual(['malko']);
    });
  });
});
