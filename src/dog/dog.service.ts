import { Injectable } from '@nestjs/common';
import dog from './bdd';

@Injectable()
export class DogService {
  constructor() {}
  async findAll(): Promise<string[]> {
    return Promise.resolve(dog.allDog());
  }
}
