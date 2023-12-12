import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogController } from './dog/dog.controller';
import { DogService } from './dog/dog.service';

@Module({
  imports: [],
  controllers: [AppController, DogController],
  providers: [AppService, DogService],
})
export class AppModule {}
