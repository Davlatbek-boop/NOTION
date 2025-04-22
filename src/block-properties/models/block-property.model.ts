import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Block } from "src/blocks/models/block.model"
import { Property } from "src/properties/models/property.model"

interface IBlockPropertyCreationAttr{
    blockId: number
    propertyId: number
    value: string
}
@Table({tableName: 'block-properties'})
export class BlockProperty extends Model<BlockProperty, IBlockPropertyCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    declare id: number
    @Column({
        type: DataType.STRING
    })
    declare value: string

    @ForeignKey(()=> Property)
    @Column({
        type: DataType.INTEGER
    })
    declare propertyId: number

    @ForeignKey(()=> Block)
    @Column({
        type: DataType.INTEGER
    })
    declare blockId: number

    @BelongsTo(()=> Property)
    property: Property

    @BelongsTo(()=> Block)
    block: Block
}
