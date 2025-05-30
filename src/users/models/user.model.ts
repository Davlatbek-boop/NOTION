import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Workspace } from "../../workspace/models/workspace.model";
import { TeamSpace } from "../../team-space/models/team-space.model";
import { TeamSpaceMember } from "../../team-space-members/models/team-space-member.model";
import { WorkspaceMember } from "../../workspace-members/models/workspace-member.model";
import { Device } from "../../devices/models/device.model";
import { Group } from "../../groups/models/group.model";
import { GroupMember } from "../../groups/models/group-member.model";
import { Block } from "../../blocks/models/block.model";

interface IUserCreationAttr {
  first_name: string;
  last_name: string;
  email: string;
  hashed_password: string;
  photo: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Foydalanuvchini unical ID raqami",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "Firstname",
    description: "Foylanuvchi firstnamesi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare first_name: string;

  @ApiProperty({
    example: "Lastname",
    description: "Foydalanuvchi lastnamesi"
  })
  @Column({
    type: DataType.STRING,
  })
  declare last_name: string;

  @ApiProperty({
    example: "email@mail.uz",
    description: "Foydalanuvchi emaili"
  })
  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @ApiProperty({
    example: "Uzbek1$t@n",
    description: "Foydalanuvchi paroli"
  })
  @Column({
    type: DataType.STRING,
  })
  declare hashed_password: string;

  @ApiProperty({
    example: "file/path/img.png",
    description: "Foydalanuvchi rasmi fayl yo'li"
  })
  @Column({
    type: DataType.STRING,
  })
  declare photo: string;

  @ApiProperty({
    example: "",
    description: "Foydalanuvchi refresh tokeni",
    default: ""
  })
  @Column({
    type: DataType.STRING,
    defaultValue: "",
  })
  declare refresh_token: string;

  @ApiProperty({
    example: false,
    description: "Foydalanuvchi faolligi",
    default: false
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_active: boolean;

  @ApiProperty({
    example: "",
    description: "Foydalanuvchi activatsiya linki",
    default: ""
  })
  @Column({
    type: DataType.STRING,
    defaultValue: "",
  })
  declare activation_link: string;

  @HasMany(() => Block)
  block: Block[];

  @HasMany(() => Workspace)
  workspace: Workspace[];

  @HasMany(()=> TeamSpace)
  teamspace: TeamSpace[]

  @HasMany(()=> TeamSpaceMember)
  teamSpaceMember: TeamSpaceMember[]

  @HasMany(()=> WorkspaceMember)
  workspaceMember: WorkspaceMember[]

  @HasMany(()=> Device)
  device: Device

  @BelongsToMany(()=> Group, ()=> GroupMember)
  group: Group[]
}
