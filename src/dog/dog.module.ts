import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
  controllers: [DogController],
  providers: [DogService],
  exports: [DogService],
})
export class DogModule {}
