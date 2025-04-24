import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { BlockProperty } from "src/block-properties/models/block-property.model";
import { Block } from "src/blocks/models/block.model";

interface IPropertyCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "properties" })
export class Property extends Model<Property, IPropertyCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "property unique ID si"
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;
   @ApiProperty({
      example: "property nomi",
      description: "Qanday property"
    })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;
@ApiProperty({
    example: "description nomi",
    description: "Qanday description"
  })
  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @BelongsToMany(() => Block, () => BlockProperty)
  blocks: Block[];
}
