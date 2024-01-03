import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogController } from './dog/dog.controller';
import { DogService } from './dog/dog.service';
import { BirdModule } from './bird/bird.module';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [BirdModule, DogModule],
  controllers: [AppController, DogController],
  providers: [AppService, DogService],
})
export class AppModule {}
