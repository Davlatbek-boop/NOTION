import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { WorkspaceMembersService } from "./workspace-members.service";
import { CreateWorkspaceMemberDto } from "./dto/create-workspace-member.dto";
import { UpdateWorkspaceMemberDto } from "./dto/update-workspace-member.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { WorkspaceMember } from "./models/workspace-member.model"; // Modelni to'g'ri import qilish kerak

@ApiTags("Workspace Members") // Swagger'da group nomi
@Controller("workspace-members")
export class WorkspaceMembersController {
  constructor(
    private readonly workspaceMembersService: WorkspaceMembersService
  ) {}

  @ApiOperation({ summary: "Create a new Workspace Member" })
  @ApiResponse({
    status: 201,
    description: "Workspace Member created successfully",
    type: WorkspaceMember,
  })
  @Post()
  create(@Body() createWorkspaceMemberDto: CreateWorkspaceMemberDto) {
    return this.workspaceMembersService.create(createWorkspaceMemberDto);
  }

  @ApiOperation({ summary: "Get all Workspace Members" })
  @ApiResponse({
    status: 200,
    description: "List of Workspace Members",
    type: [WorkspaceMember],
  })
  @Get()
  findAll() {
    return this.workspaceMembersService.findAll();
  }

  @ApiOperation({ summary: "Get one Workspace Member by ID" })
  @ApiResponse({
    status: 200,
    description: "Single Workspace Member data",
    type: WorkspaceMember,
  })
  @ApiResponse({ status: 404, description: "Workspace Member not found" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.workspaceMembersService.findOne(+id);
  }

  @ApiOperation({ summary: "Update a Workspace Member by ID" })
  @ApiResponse({
    status: 200,
    description: "Workspace Member updated successfully",
    type: WorkspaceMember,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateWorkspaceMemberDto: UpdateWorkspaceMemberDto
  ) {
    return this.workspaceMembersService.update(+id, updateWorkspaceMemberDto);
  }

  @ApiOperation({ summary: "Delete a Workspace Member by ID" })
  @ApiResponse({
    status: 200,
    description: "Workspace Member deleted successfully",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.workspaceMembersService.remove(+id);
  }
}
