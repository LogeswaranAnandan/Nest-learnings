
import { Controller, Get, Query, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/interface/cat';

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: Cat): Cat {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll(@Query() query: any): Cat[] {
    // return this.catsService.findAll();
    throw new HttpException('test', HttpStatus.BAD_REQUEST);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `This action returns a #${id} cat`;
    // throw new Error('test error');
    throw new HttpException('ad', HttpStatus.CONFLICT);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: Cat) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}