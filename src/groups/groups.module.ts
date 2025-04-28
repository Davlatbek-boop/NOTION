import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Group } from './models/group.model';
import { GroupMember } from './models/group-member.model';

@Module({
  imports: [SequelizeModule.forFeature([Group, GroupMember])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
