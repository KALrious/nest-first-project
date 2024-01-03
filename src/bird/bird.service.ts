import { Injectable } from '@nestjs/common';
import { DogService } from '../dog/dog.service';

@Injectable()
export class BirdService {
  constructor(private readonly dogService: DogService) {}
}
