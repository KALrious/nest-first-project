import { Controller, Get } from '@nestjs/common';

@Controller('dog')
export class DogController {
  @Get('all')
  findAll(): string {
    return 'find all dog';
  }
}
