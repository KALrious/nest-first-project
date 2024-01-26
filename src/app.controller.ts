import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @CacheKey('hello')
  @CacheTTL(20)
  @Get('hello/:id')
  getHello(): string {
    return this.appService.getHello();
  }
}
