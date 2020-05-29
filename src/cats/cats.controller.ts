
import { Controller, Get, Query, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/models/cat';

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: Cat): Cat {
    console.log('Entering :: Controller');
    const cat: Cat= this.catsService.create(createCatDto);
    console.log('Exiting :: Controller');
    return cat;
  }

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
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