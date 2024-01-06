import { Injectable } from '@nestjs/common';
import { BirdService } from '../bird/bird.service';

@Injectable()
export class CommonService {
  constructor(private readonly birdService: BirdService) {}
}
