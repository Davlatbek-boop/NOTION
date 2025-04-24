import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @ApiOperation({
    summary: "yangi property qo'shish"
  })
  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @ApiOperation({
    summary: "barcha propertylarni ko'rish"
  })
  @Get()
  findAll() {
    return this.propertiesService.findAll();
  }

  @ApiOperation({
    summary: "Bitta property ko'rish"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(+id);
  }

  @ApiOperation({
    summary: "property update qilish"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesService.update(+id, updatePropertyDto);
  }

  @ApiOperation({
    summary: "property o'chirish"
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertiesService.remove(+id);
  }
}
