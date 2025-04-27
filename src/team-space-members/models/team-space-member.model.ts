import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { TeamSpace } from "../../team-space/models/team-space.model";

interface ITeamSpaceMemberCreationAttr {
  userId: number;
  teamSpaceId: number;
  is_member: boolean;
}

@Table({ tableName: "team_space_member" })
export class TeamSpaceMember extends Model<TeamSpaceMember, ITeamSpaceMemberCreationAttr> {

  @ApiProperty({
    example: 1,
    description: "Unique identifier of the TeamSpaceMember",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  
  @ForeignKey(()=> User)
  @ApiProperty({
    example: 101,
    description: "ID of the user who is a member of the team space",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @ForeignKey(()=> TeamSpace)
  @ApiProperty({
    example: 202,
    description: "ID of the team space to which the user belongs",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare teamSpaceId: number;

  @ApiProperty({
    example: true,
    description: "Flag to indicate whether the user is a member of the team space",
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  declare is_member: boolean;

  @BelongsTo(()=> User)
  user: User

  @BelongsTo(()=> TeamSpace)
  teamSpace: TeamSpace
}
