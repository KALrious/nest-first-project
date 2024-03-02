import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { DogModule } from '../src/dog/dog.module';
import { DogService } from '../src/dog/dog.service';

describe('DogController (e2e)', () => {
  let app: INestApplication;

  let dogService = { findAll: () => ['malko'] };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DogModule],
    })
      .overrideProvider(DogService)
      .useValue(dogService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/dog/findAll (GET)', async () => {
    const spy = jest.spyOn(dogService, 'findAll');
    await request(app.getHttpServer())
      .get('/dog/all')
      .expect(200)
      .expect(['malko']);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
