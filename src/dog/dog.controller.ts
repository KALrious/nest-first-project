import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ForbiddenException } from '../error/FrobiddenException';
import { CreateDogDto } from './CreateDogDto';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get('all')
  findAll(): Promise<string[]> {
    throw new ForbiddenException();
  }

  @Get(':id')
  findById(
    @Param('id')
    id: number,
  ): string {
    console.log(id);
    console.log(typeof id === 'number');
    return `id: ${id}`;
  }

  @Post('add')
  addDog(@Body() createDogDto: CreateDogDto): string {
    console.log(createDogDto);
    return `id: ${createDogDto.name}`;
  }
}
