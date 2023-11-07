import { Module } from '@nestjs/common';
import { SuperHerosController } from './super-heros.controller';
import { SuperHerosService } from './super-heros.service';

@Module({
  providers: [SuperHerosService],
  controllers: [SuperHerosController],
})
export class SuperHerosModule {}
