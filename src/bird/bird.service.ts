import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { DogService } from '../dog/dog.service';

@Injectable()
export class BirdService {
  constructor(
    @Inject(forwardRef(() => DogService))
    private readonly dogService: DogService,
  ) {}
}
