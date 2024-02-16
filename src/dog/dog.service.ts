import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModuleRef } from '@nestjs/core';
import { BirdService } from '../bird/bird.service';
import { ALL_DOG } from './bdd';

interface EnvironmentVariables {
  DATA_BASE_KEY: string;
  DATA_BASE_PORT: number;
}

@Injectable()
export class DogService {
  constructor(
    private readonly moduleRef: ModuleRef,
    private configService: ConfigService<EnvironmentVariables>,
  ) {}
  async findAll(): Promise<string[]> {
    const birdService = await this.moduleRef.create(BirdService);
    const databaseKey = this.configService.get('DATA_BASE_KEY', {
      infer: true,
    });
    const databasePort = this.configService.get('DATA_BASE_PORT', {
      infer: true,
    });
    return Promise.resolve(ALL_DOG);
  }
}
