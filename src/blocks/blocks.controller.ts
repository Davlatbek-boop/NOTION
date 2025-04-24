import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @ApiOperation({
    summary: "Yangi Block yaratish"
  })
  @Post()
  create(@Body() createBlockDto: CreateBlockDto) {
    return this.blocksService.create(createBlockDto);
  }

  @ApiOperation({
    summary: "Barcha blocklarni ko'rish"
  })
  @Get()
  findAll() {
    return this.blocksService.findAll();
  }

  @ApiOperation({
    summary: "Bitta blockni ID si bilan ko'rish"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blocksService.findOne(+id);
  }

  @ApiOperation({
    summary: "Blockni update qilish"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlockDto: UpdateBlockDto) {
    return this.blocksService.update(+id, updateBlockDto);
  }

  @ApiOperation({
    summary: "Blockni o'chirish"
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blocksService.remove(+id);
  }
}
