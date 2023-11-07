import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperHerosModule } from './super-heros/super-heros.module';

@Module({
  imports: [ConfigModule.forRoot(), SuperHerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
