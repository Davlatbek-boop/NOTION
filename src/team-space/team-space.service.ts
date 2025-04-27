import { Injectable } from '@nestjs/common';
import { CreateTeamSpaceDto } from './dto/create-team-space.dto';
import { UpdateTeamSpaceDto } from './dto/update-team-space.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TeamSpace } from './models/team-space.model';

@Injectable()
export class TeamSpaceService {
  constructor(@InjectModel(TeamSpace) private readonly teamSpaceModel: typeof TeamSpace){}
  create(createTeamSpaceDto: CreateTeamSpaceDto) {
    return this.teamSpaceModel.create(createTeamSpaceDto);
  }

  findAll() {
    return `This action returns all teamSpace`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamSpace`;
  }

  update(id: number, updateTeamSpaceDto: UpdateTeamSpaceDto) {
    return `This action updates a #${id} teamSpace`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamSpace`;
  }
}
