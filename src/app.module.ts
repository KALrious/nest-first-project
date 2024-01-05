import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdModule } from './bird/bird.module';
import { ConfigModule } from './config/config.module';
import { DogController } from './dog/dog.controller';
import { DogModule } from './dog/dog.module';
import { DogService } from './dog/dog.service';

@Module({
  imports: [
    BirdModule,
    DogModule,
    ConfigModule.register({
      folder: './config',
    }),
  ],
  controllers: [AppController, DogController],
  providers: [AppService, DogService],
})
export class AppModule {}
