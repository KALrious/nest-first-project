import { Controller, Get, UseFilters } from '@nestjs/common';
import { HttpExceptionfilter } from '../error/Filter';
import { ForbiddenException } from '../error/FrobiddenException';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get('all')
  @UseFilters(HttpExceptionfilter)
  findAll(): Promise<string[]> {
    throw new ForbiddenException();
  }
}
