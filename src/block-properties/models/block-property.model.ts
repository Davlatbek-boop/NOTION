import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Block } from "src/blocks/models/block.model";
import { Property } from "src/properties/models/property.model";

interface IBlockPropertyCreationAttr {
  blockId: number;
  propertyId: number;
  value: string;
}
@Table({ tableName: "block-properties" })
export class BlockProperty extends Model<
  BlockProperty,
  IBlockPropertyCreationAttr
> {
  @ApiProperty({
    example: 1,
    description: "block-properties ni unique ID si",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ApiProperty({
    example: "Izoh",
    description: "bog'lanishga izoh berish",
  })
  @Column({
    type: DataType.STRING,
  })
  declare value: string;

  @ApiProperty({
    example: 1,
    description: "Propertyning ID si",
  })
  @ForeignKey(() => Property)
  @Column({
    type: DataType.INTEGER,
  })
  declare propertyId: number;

  @ApiProperty({
    example: 1,
    description: "Blockning ID si",
  })
  @ForeignKey(() => Block)
  @Column({
    type: DataType.INTEGER,
  })
  declare blockId: number;

  @BelongsTo(() => Property)
  property: Property;

  @BelongsTo(() => Block)
  block: Block;
}
