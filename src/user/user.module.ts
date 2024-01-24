import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './entities/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSubscriber } from './user.subscribers';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [UserService, UserSubscriber],
})
export class UserModule {}
