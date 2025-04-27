import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Workspace } from "../../workspace/models/workspace.model";
import { User } from "../../users/models/user.model";
import { Permission } from "../../permission/models/permission.model";
import { TeamSpaceMember } from "../../team-space-members/models/team-space-member.model";

interface ITeamoSpaceCreationAttr {
  name: string;
  description: string;
  icon: string;
  workspaceId: number;
  userId: number;
  permissionId: number;
}

@Table({ tableName: "team-space" })
export class TeamSpace extends Model<TeamSpace, ITeamoSpaceCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "TeamSpace ni unique ID si",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ApiProperty({
    example: 1,
    description: "TeamSpace name",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    example: "asdf",
    description: "TeamSpace description",
  })
  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @ApiProperty({
    example: "adsf",
    description: "TeamSpace icon",
  })
  @Column({
    type: DataType.STRING,
  })
  declare icon: string;

  @ForeignKey(() => Workspace)
  @ApiProperty({
    example: 1,
    description: "TeamSpace workspace id",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare workspaceId: number;

  @ForeignKey(() => User)
  @ApiProperty({
    example: 1,
    description: "TeamSpace user id",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare userId: number;

  @ForeignKey(() => Permission)
  @ApiProperty({
    example: 1,
    description: "TeamSpace permission id",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare permissionId: number;

  @BelongsTo(() => Workspace)
  workspace: Workspace;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Permission)
  permission: Permission;

  @HasMany(()=> TeamSpaceMember)
  teamSpaceMember: TeamSpaceMember[]

}
