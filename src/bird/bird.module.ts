import { Module, forwardRef } from '@nestjs/common';
import { DogModule } from '../dog/dog.module';
import { BirdController } from './bird.controller';
import { BirdService } from './bird.service';

@Module({
  controllers: [BirdController],
  providers: [BirdService],
  imports: [forwardRef(() => DogModule)],
  exports: [BirdService],
})
export class BirdModule {}
