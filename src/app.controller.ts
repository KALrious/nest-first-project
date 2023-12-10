import { Body, Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id')
  @HttpCode(205)
  getHello(@Query('toto') toto, @Param('id') id, @Body() body): string {
    return this.appService.getHello();
  }
}
