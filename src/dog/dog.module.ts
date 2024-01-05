import { Module } from '@nestjs/common';
import { LogService } from './Log/Log';
import { DevConfig, ProdConfig } from './config/config';
import { DatabaseConnection } from './database/database';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { tail } from './tail/tail';

const config = {
  provide: 'CONIFG',
  useFactory: () => {
    return process.env.NODE_ENV === 'dev' ? DevConfig : ProdConfig;
  },
};

@Module({
  controllers: [DogController],
  providers: [
    {
      provide: 'TAIL',
      useValue: tail,
    },
    {
      provide: DatabaseConnection,
      useClass: DatabaseConnection,
    },
    LogService,
    {
      provide: 'AliasLog',
      useExisting: LogService,
    },
    config,
    DogService,
  ],
  exports: [DogService, 'TAIL', 'CONIFG', 'AliasLog'],
})
export class DogModule {}
