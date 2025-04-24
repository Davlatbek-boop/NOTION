import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Block } from "src/blocks/models/block.model";

interface ITypeCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "types" })
export class Type extends Model<Type, ITypeCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Type ni unique ID si",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ApiProperty({
    example: "Type nomi",
    description: "Qanday Type",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    example: "Type uchun description nomi",
    description: "description izoh",
  })
  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @HasMany(() => Block)
  blocks: Block[];
}
