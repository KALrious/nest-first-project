import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  getCustomHello(): string {
    return this.appService.getCustomHello();
  }

  @Post('message')
  postMessage(@Body() { name }: { name: string }): string {
    return this.appService.postMessage(name);
  }
}
