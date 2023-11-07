import { SuperHeros } from './super-heros.interface';

const SUPER_MAN: SuperHeros = {
  id: 1,
  name: 'Superman',
};

const BAT_MAN: SuperHeros = {
  id: 2,
  name: 'Batman',
};

const SPIDER_MAN: SuperHeros = {
  id: 3,
  name: 'Spiderman',
};

export const superHeros: SuperHeros[] = [SUPER_MAN, BAT_MAN, SPIDER_MAN];
