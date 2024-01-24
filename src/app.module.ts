import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdModule } from './bird/bird.module';
import { DogController } from './dog/dog.controller';
import { DogModule } from './dog/dog.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    BirdModule,
    DogModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
  ],
  controllers: [AppController, DogController],
  providers: [AppService, UserService],
})
export class AppModule {}
