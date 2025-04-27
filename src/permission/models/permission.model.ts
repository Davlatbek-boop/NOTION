import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { TeamSpace } from "../../team-space/models/team-space.model";

interface IPermissionCreationAttr {
  name: string;
  label: string;
  description: string;
}

@Table({ tableName: "permission" })
export class Permission extends Model<Permission, IPermissionCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Permission unical ID raqami",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "sd",
    description: "Permission Label",
  })
  @Column({
    type: DataType.STRING,
  })
  declare label: string;

  @ApiProperty({
    example: "rabota",
    description: "Permission namesi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    example: "icon",
    description: "Permission description",
  })
  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @HasMany(() => TeamSpace)
  teamSpace: TeamSpace[];
}
