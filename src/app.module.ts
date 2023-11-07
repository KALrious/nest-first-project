import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperHerosModule } from './super-heros/super-heros.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        NAME: Joi.string().required(),
        FAVORITE_HEROS: Joi.string().default('Superman'),
      }),
    }),
    SuperHerosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
