import { Controller, Get } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get('all')
  findAll(): Promise<string[]> {
    return this.dogService.findAll();
  }
}
