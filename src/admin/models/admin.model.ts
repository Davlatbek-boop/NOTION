import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdminCreationAttr {
  full_name: string;
  email: string;
  hashed_password: string;
}

@Table({ tableName: "admins" })
export class Admin extends Model<Admin, IAdminCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Admin unique ID si",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "Fullname",
    description: "Admin fullnamesi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare full_name: string;

  @ApiProperty({
    example: "email@mail.uz",
    description: "Admin emaili",
  })
  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @ApiProperty({
    example: "Uzbek1$t@n",
    description: "Admin paroli",
  })
  @Column({
    type: DataType.STRING,
  })
  declare hashed_password: string;

  @Column({
    type: DataType.STRING,
  })
  declare refresh_token: string;

  @Column({
    type: DataType.ENUM,
    values: ["admin", "superadmin"],
    defaultValue: "admin",
  })
  declare role: string;
}
