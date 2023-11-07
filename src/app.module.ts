import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperHerosModule } from './super-heros/super-heros.module';

@Module({
  imports: [SuperHerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
