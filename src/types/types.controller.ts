import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @ApiOperation({
    summary: "type yaratish"
  })
  @Post()
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @ApiOperation({
    summary: "barcha type larni ko'rish"
  })
  @Get()
  findAll() {
    return this.typesService.findAll();
  }

  @ApiOperation({
    summary: "type ni ko'rish"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typesService.findOne(+id);
  }

  @ApiOperation({
    summary: "type update qilish"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typesService.update(+id, updateTypeDto);
  }

  @ApiOperation({
    summary: "type ni o'chirish"
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typesService.remove(+id);
  }
}
