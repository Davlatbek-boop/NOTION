import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TeamSpaceMember } from './models/team-space-member.model';
import { CreateTeamSpaceMemberDto } from './dto/create-team-space-member.dto';
import { UpdateTeamSpaceMemberDto } from './dto/update-team-space-member.dto';

@Injectable()
export class TeamSpaceMembersService {
  constructor(
    @InjectModel(TeamSpaceMember)
    private teamSpaceMemberModel: typeof TeamSpaceMember
  ) {}

  async create(createTeamSpaceMemberDto: CreateTeamSpaceMemberDto) {
    const teamSpaceMember = await this.teamSpaceMemberModel.create(createTeamSpaceMemberDto);
    return teamSpaceMember;
  }

  async findAll() {
    const teamSpaceMembers = await this.teamSpaceMemberModel.findAll();
    return teamSpaceMembers;
  }

  async findOne(id: number) {
    const teamSpaceMember = await this.teamSpaceMemberModel.findByPk(id);
    if (!teamSpaceMember) {
      throw new Error('Team space member not found');
    }
    return teamSpaceMember;
  }

  async update(id: number, updateTeamSpaceMemberDto: UpdateTeamSpaceMemberDto) {
    const teamSpaceMember = await this.teamSpaceMemberModel.findByPk(id);
    if (!teamSpaceMember) {
      throw new Error('Team space member not found');
    }
    await teamSpaceMember.update(updateTeamSpaceMemberDto);
    return teamSpaceMember;
  }

  async remove(id: number) {
    const teamSpaceMember = await this.teamSpaceMemberModel.findByPk(id);
    if (!teamSpaceMember) {
      throw new Error('Team space member not found');
    }
    await teamSpaceMember.destroy();
    return { message: `Team space member with ID ${id} removed successfully` };
  }
}
