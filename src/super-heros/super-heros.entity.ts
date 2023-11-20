import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SuperHeros {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
