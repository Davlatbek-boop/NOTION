import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { BlockProperty } from "src/block-properties/models/block-property.model"
import { Property } from "src/properties/models/property.model"
import { Type } from "src/types/models/type.model"


interface IBlockCreationAttr{
    typeId: number
    userId: number
    parentId: number
    order_index: number
}

@Table({tableName: 'blocks'})
export class Block extends Model<Block, IBlockCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    declare id: number
    
    @Column({
        type: DataType.INTEGER
    })
    declare userId: number
    @Column({
        type: DataType.INTEGER
    })
    declare parentId: number
    @Column({
        type: DataType.INTEGER
    })
    declare order_index: number

    @ForeignKey(()=> Type)
    @Column({
        type: DataType.INTEGER
    })
    declare typeId: number

    @BelongsTo(()=> Type)
    type: Type

    @BelongsToMany(()=> Property, ()=> BlockProperty)
    properties: Property[]
}
