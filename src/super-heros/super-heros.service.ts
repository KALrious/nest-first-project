import { Injectable } from '@nestjs/common';
import { superHeros } from './bdd';
import { SuperHeros } from './super-heros.interface';

@Injectable()
export class SuperHerosService {
  public retrieveAll(): SuperHeros[] {
    return superHeros;
  }
}
