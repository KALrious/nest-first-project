import { Controller, Get, Inject } from '@nestjs/common';
import { Tail } from './tail/tail';

@Controller('dog')
export class DogController {
  constructor(@Inject('TAIL') tail: Tail) {}
  @Get('all')
  findAll(): Promise<string[]> {
    return this.tail;
  }
}
