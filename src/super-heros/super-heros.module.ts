import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperHerosController } from './super-heros.controller';
import { SuperHeros } from './super-heros.entity';
import { SuperHerosService } from './super-heros.service';
@Module({
  imports: [TypeOrmModule.forFeature([SuperHeros])],
  providers: [SuperHerosService],
  controllers: [SuperHerosController],
})
export class SuperHerosModule {}
