import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdModule } from './bird/bird.module';
import { DogController } from './dog/dog.controller';
import { DogModule } from './dog/dog.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    BirdModule,
    DogModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', 'env.dev'],
      isGlobal: true,
      ignoreEnvFile: true,
    }),
  ],
  controllers: [AppController, DogController],
  providers: [AppService, UserService],
})
export class AppModule {}
