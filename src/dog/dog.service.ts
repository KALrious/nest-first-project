import { Injectable } from '@nestjs/common';
import { ALL_DOG } from './bdd';

@Injectable()
export class DogService {
  constructor() {}
  async findAll(): Promise<string[]> {
    return Promise.resolve(ALL_DOG);
  }
}
