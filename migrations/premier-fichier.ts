import { MigrationInterface, QueryRunner } from 'typeorm';

export class PremierMigration implements MigrationInterface {
  name = 'PremierMigration';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `isActive` bool DEFAULT true, PRIMARY KEY(`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `user`');
  }
}
