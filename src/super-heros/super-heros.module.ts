import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SuperHerosController } from './super-heros.controller';
import { SuperHerosService } from './super-heros.service';

@Module({
  imports: [ConfigModule],
  providers: [SuperHerosService],
  controllers: [SuperHerosController],
})
export class SuperHerosModule {}
