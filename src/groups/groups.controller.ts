import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Group } from './models/group.model';

@ApiTags('Groups')
@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new group' })
  @ApiResponse({ status: 201, description: 'Group successfully created', type: Group })
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all groups' })
  @ApiResponse({ status: 200, description: 'List of groups', type: [Group] })
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one group by id' })
  @ApiResponse({ status: 200, description: 'Group found', type: Group })
  @ApiResponse({ status: 404, description: 'Group not found' })
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a group' })
  @ApiResponse({ status: 200, description: 'Group successfully updated', type: Group })
  @ApiResponse({ status: 404, description: 'Group not found' })
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(+id, updateGroupDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a group' })
  @ApiResponse({ status: 200, description: 'Group successfully deleted' })
  @ApiResponse({ status: 404, description: 'Group not found' })
  remove(@Param('id') id: string) {
    return this.groupsService.remove(+id);
  }
}
