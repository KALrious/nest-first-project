import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { superHeros } from './bdd';
import { SuperHeros } from './super-heros.entity';
import { SuperHeros as ISuperHeros } from './super-heros.interface';
@Injectable()
export class SuperHerosService {
  private readonly favorite: string;
  constructor(
    @InjectRepository(SuperHeros)
    private superHerosRepository: Repository<SuperHeros>,
    private configService: ConfigService,
  ) {
    this.favorite = this.configService.get<string>('FAVORITE_HEROS', '');
  }

  public retrieveAll(): ISuperHeros[] {
    return superHeros;
  }

  public retrieveFavorite(): ISuperHeros {
    return superHeros.find(({ name }) => name === this.favorite);
  }
}
