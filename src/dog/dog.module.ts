import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BirdModule } from '../bird/bird.module';
import payment from '../environnement/payment';
import { CommonService } from './common.service';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
  controllers: [DogController],
  providers: [DogService, CommonService],
  exports: [DogService],
  imports: [forwardRef(() => BirdModule), ConfigModule.forFeature(payment)],
})
export class DogModule {}
