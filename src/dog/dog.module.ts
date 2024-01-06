import { Module, forwardRef } from '@nestjs/common';
import { BirdModule } from '../bird/bird.module';
import { CommonService } from './common.service';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
  controllers: [DogController],
  providers: [DogService, CommonService],
  exports: [DogService],
  imports: [forwardRef(() => BirdModule)],
})
export class DogModule {}
