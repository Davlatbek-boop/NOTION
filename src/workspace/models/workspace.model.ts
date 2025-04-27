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
import { User } from "../../users/models/user.model";
import { TeamSpace } from "../../team-space/models/team-space.model";

interface IWorkspaceCreationAttr {
  userId: number;
  name: string;
  icon: string;
  category: string;
  manegement: string;
}

@Table({ tableName: "workspace" })
export class Workspace extends Model<Workspace, IWorkspaceCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Workspace unical ID raqami",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;
  @ForeignKey(() => User)
  @ApiProperty({
    example: 1,
    description: "Workspace userga bog'langan ID raqami",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare userId: number;

  @ApiProperty({
    example: "rabota",
    description: "Workspace namesi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    example: "icon",
    description: "Workspace icon",
  })
  @Column({
    type: DataType.STRING,
  })
  declare icon: string;

  @ApiProperty({
    example: "category",
    description: "Workspace category",
  })
  @Column({
    type: DataType.STRING,
  })
  declare category: string;

  @ApiProperty({
    example: "menegement",
    description: "Workspace menegement",
  })
  @Column({
    type: DataType.STRING,
  })
  declare manegement: string;

  @BelongsTo(() => User)
  user: User;

  @HasMany(()=> TeamSpace)
  teamSpace: TeamSpace[]
}
