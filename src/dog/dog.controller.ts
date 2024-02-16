import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ForbiddenException } from '../error/FrobiddenException';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get('all')
  findAll(): Promise<string[]> {
    throw new ForbiddenException();
  }

  @Get(':id')
  finddById(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.FORBIDDEN,
      }),
    )
    id: number,
  ): string {
    console.log(id);
    return `id: ${id}`;
  }
}
