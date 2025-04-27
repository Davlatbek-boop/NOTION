import { Module } from '@nestjs/common';
import { TeamSpaceMembersService } from './team-space-members.service';
import { TeamSpaceMembersController } from './team-space-members.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeamSpaceMember } from './models/team-space-member.model';

@Module({
  imports:[SequelizeModule.forFeature([TeamSpaceMember])],
  controllers: [TeamSpaceMembersController],
  providers: [TeamSpaceMembersService],
})
export class TeamSpaceMembersModule {}
