import { Module } from '@nestjs/common';
import { SuperHerosService } from './super-heros.service';
import { SuperHerosController } from './super-heros.controller';

@Module({
  providers: [SuperHerosService],
  controllers: [SuperHerosController],
})
export class SuperHerosModule {}
