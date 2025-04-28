import { Injectable } from '@nestjs/common';
import { CreateWorkspaceMemberDto } from './dto/create-workspace-member.dto';
import { UpdateWorkspaceMemberDto } from './dto/update-workspace-member.dto';
import { InjectModel } from '@nestjs/sequelize';
import { WorkspaceMember } from './models/workspace-member.model';

@Injectable()
export class WorkspaceMembersService {
  constructor(@InjectModel(WorkspaceMember) private readonly workspaceMemberModel: typeof WorkspaceMember){}
  create(createWorkspaceMemberDto: CreateWorkspaceMemberDto) {
    return this.workspaceMemberModel.create(createWorkspaceMemberDto);
  }

  findAll() {
    return this.workspaceMemberModel.findAll();
  }

  findOne(id: number) {
    return this.workspaceMemberModel.findByPk(id);
  }

  update(id: number, updateWorkspaceMemberDto: UpdateWorkspaceMemberDto) {
    return this.workspaceMemberModel.update(updateWorkspaceMemberDto, {where:{id}, returning: true});
  }

  remove(id: number) {
    return this.workspaceMemberModel.destroy({where:{id}});
  }
}
