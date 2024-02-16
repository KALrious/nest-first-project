import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdModule } from './bird/bird.module';
import { DogController } from './dog/dog.controller';
import { DogModule } from './dog/dog.module';
import database from './environnement/database';
import payment from './environnement/payment';
import { UserService } from './user/user.service';

@Module({
  imports: [
    BirdModule,
    DogModule,
    ConfigModule.forRoot({
      load: [database, payment],
      ignoreEnvFile: true,
      cache: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('local', 'dev', 'prod'),
        DATA_BASE_KEY: Joi.string().required(),
        PORT: Joi.number().default(3000),
      }),
    }),
  ],
  controllers: [AppController, DogController],
  providers: [AppService, UserService],
})
export class AppModule {}
