import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateDogDto {
  @IsString()
  name: string;

  @IsString()
  race: string;

  @IsInt()
  age: number;

  @IsBoolean()
  isBigDog: boolean;
}
