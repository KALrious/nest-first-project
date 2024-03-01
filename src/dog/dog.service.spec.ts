import { DogService } from './dog.service';

describe('DogService', () => {
  let service: DogService;

  beforeEach(async () => {
    service = new DogService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of dogs', async () => {
      const results = ['caramel', 'malko', 'golden', 'labrador'];
      const expectedResult = await service.findAll();
      expect(expectedResult).toStrictEqual(results);
    });
  });
});
