import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { Roles } from '../guards/roles';
import { CreateDogDto } from './CreateDogDto';
import { DogService } from './dog.service';

@Controller('dog')
@UseGuards(new AuthGuard())
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get('all')
  findAll(): Promise<string[]> {
    return this.dogService.findAll();
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
  @Roles(['admin'])
  addDog(@Body() createDogDto: CreateDogDto): string {
    console.log(createDogDto);
    return `id: ${createDogDto.name}`;
  }
}
