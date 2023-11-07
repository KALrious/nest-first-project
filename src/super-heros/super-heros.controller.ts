import { Controller, Get } from '@nestjs/common';
import { SuperHeros } from './super-heros.interface';
import { SuperHerosService } from './super-heros.service';

@Controller('super-heros')
export class SuperHerosController {
  constructor(private readonly superHeroService: SuperHerosService) {}

  @Get()
  retrieveAll(): SuperHeros[] {
    return this.superHeroService.retrieveAll();
  }
}
