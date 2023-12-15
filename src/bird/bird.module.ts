import { Module } from '@nestjs/common';
import { BirdController } from './bird.controller';
import { BirdService } from './bird.service';

@Module({
  controllers: [BirdController],
  providers: [BirdService],
})
export class BirdModule {}
