import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { BlockProperty } from "src/block-properties/models/block-property.model";
import { Property } from "src/properties/models/property.model";
import { Type } from "src/types/models/type.model";
import { User } from "src/users/models/user.model";

interface IBlockCreationAttr {
  typeId: number;
  userId: number;
  parentId: number;
  order_index: number;
}

@Table({ tableName: "blocks" })
export class Block extends Model<Block, IBlockCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Block ni unique ID si ",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;
  @ApiProperty({
    example: 1,
    description: "User ni ID si ",
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  declare userId: number;

  @ApiProperty({
    example: 1,
    description: "Blockni uzining ID si ",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare parentId: number;

  @ApiProperty({
    example: 1,
    description: "prosta bilmadim bu nimaligini",
  })
  @Column({
    type: DataType.INTEGER,
  })
  declare order_index: number;

  @ApiProperty({
    example: 1,
    description: "Type ni ID si ",
  })
  @ForeignKey(() => Type)
  @Column({
    type: DataType.INTEGER,
  })
  declare typeId: number;

  @BelongsTo(() => Type)
  type: Type;

  @BelongsTo(() => User)
  user: User;

  @BelongsToMany(() => Property, () => BlockProperty)
  properties: Property[];
}
