import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private dataSource: DataSource) {}

  async findAll(): Promise<User[]> {
    const queryRunner = this.dataSource.createQueryRunner()

    await queryRunner.connect()
    await queryRunner.startTransaction();
    try {
        await queryRunner.manager.save({ ... });
        await queryRunner.manager.save({ user2 });

        // ...
        await queryRunner.commitTransaction();
    } catch (err) {
        await queryRunner.rollbackTransaction();
    } finally {
await queryRunner.release()
    }

    
  }
}
