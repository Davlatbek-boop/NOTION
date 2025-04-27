import { Injectable } from "@nestjs/common";
import { CreateWorkspaceDto } from "./dto/create-workspace.dto";
import { UpdateWorkspaceDto } from "./dto/update-workspace.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Workspace } from "./models/workspace.model";

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectModel(Workspace) private readonly workspaceModule: typeof Workspace
  ) {}
  create(createWorkspaceDto: CreateWorkspaceDto) {
    return this.workspaceModule.create(createWorkspaceDto);
  }

  findAll() {
    return this.workspaceModule.findAll();
  }

  findOne(id: number) {
    return this.workspaceModule.findByPk(id);
  }

  update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    return this.workspaceModule.update(updateWorkspaceDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.workspaceModule.destroy({ where: { id } });
  }
}
