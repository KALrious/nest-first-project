import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdModule } from './bird/bird.module';
import { DogController } from './dog/dog.controller';
import { DogModule } from './dog/dog.module';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BirdModule, DogModule, AuthModule],
  controllers: [AppController, DogController],
  providers: [AppService, UserService],
})
export class AppModule {}
