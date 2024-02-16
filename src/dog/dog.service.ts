import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ModuleRef } from '@nestjs/core';
import { BirdService } from '../bird/bird.service';
import database from '../environnement/database';
import { ALL_DOG } from './bdd';

@Injectable()
export class DogService {
  constructor(
    private readonly moduleRef: ModuleRef,
    @Inject(database.KEY)
    private dbConfig: ConfigType<typeof database>,
  ) {}
  async findAll(): Promise<string[]> {
    const birdService = await this.moduleRef.create(BirdService);
    const dbHost = this.dbConfig.port;
    return Promise.resolve(ALL_DOG);
  }
}
