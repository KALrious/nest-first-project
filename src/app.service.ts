import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  getHello(): string {
    return 'Hello World!';
  }
  async save(): Promise<void> {
    const value = await this.cacheManager.set('toto', { toto: 'toto' }, 0);
  }
  async get(): Promise<void> {
    const value = await this.cacheManager.get('toto');
  }
  async delete(): Promise<void> {
    await this.cacheManager.del('toto');
  }
  async reset(): Promise<void> {
    await this.cacheManager.reset();
  }
}
