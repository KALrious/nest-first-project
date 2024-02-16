import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { BirdService } from '../bird/bird.service';
import { ALL_DOG } from './bdd';

@Injectable()
export class DogService {
  constructor(private readonly moduleRef: ModuleRef) {}
  async findAll(): Promise<string[]> {
    const birdService = await this.moduleRef.create(BirdService);
    return Promise.resolve(ALL_DOG);
  }
}
