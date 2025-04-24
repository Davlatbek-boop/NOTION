import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BlockPropertiesService } from "./block-properties.service";
import { CreateBlockPropertyDto } from "./dto/create-block-property.dto";
import { UpdateBlockPropertyDto } from "./dto/update-block-property.dto";
import { ApiOperation } from "@nestjs/swagger";

@Controller("block-properties")
export class BlockPropertiesController {
  constructor(
    private readonly blockPropertiesService: BlockPropertiesService
  ) {}

  @ApiOperation({
    summary: "Block-Properties qo'shish",
  })
  @Post()
  create(@Body() createBlockPropertyDto: CreateBlockPropertyDto) {
    return this.blockPropertiesService.create(createBlockPropertyDto);
  }

  @ApiOperation({
    summary: "Block-Properties barchasini ko'rish",
  })
  @Get()
  findAll() {
    return this.blockPropertiesService.findAll();
  }

  @ApiOperation({
    summary: "Block-Properties bittasini ko'rish",
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.blockPropertiesService.findOne(+id);
  }

  @ApiOperation({
    summary: "Block-Properties update qilish",
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBlockPropertyDto: UpdateBlockPropertyDto
  ) {
    return this.blockPropertiesService.update(+id, updateBlockPropertyDto);
  }

  @ApiOperation({
    summary: "Block-Properties o'chirish",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.blockPropertiesService.remove(+id);
  }
}
