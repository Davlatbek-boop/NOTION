import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Block } from "src/blocks/models/block.model"

interface ITypeCreationAttr{
    name: string
    description: string
}


@Table({tableName: "types"})
export class Type extends Model<Type, ITypeCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    declare id: number

    @Column({
        type: DataType.STRING
    })
    declare name: string

    @Column({
        type: DataType.TEXT
    })
    declare description: string

    @HasMany(()=> Block)
    blocks: Block[]
}
