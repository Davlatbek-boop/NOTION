import { Module } from '@nestjs/common';
import { WorkspaceMembersService } from './workspace-members.service';
import { WorkspaceMembersController } from './workspace-members.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkspaceMember } from './models/workspace-member.model';

@Module({
  imports: [SequelizeModule.forFeature([WorkspaceMember])],
  controllers: [WorkspaceMembersController],
  providers: [WorkspaceMembersService],
})
export class WorkspaceMembersModule {}
