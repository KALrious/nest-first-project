import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { superHeros } from './bdd';
import { SuperHeros } from './super-heros.interface';

@Injectable()
export class SuperHerosService {
  private readonly favorite: string;
  constructor(private configService: ConfigService) {
    this.favorite = this.configService.get<string>('FAVORITE_HEROS', '');
  }

  public retrieveAll(): SuperHeros[] {
    return superHeros;
  }

  public retrieveFavorite(): SuperHeros {
    return superHeros.find(({ name }) => name === this.favorite);
  }
}
