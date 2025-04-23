import { Column, DataType, Model, Table } from "sequelize-typescript"



interface IAdminCreationAttr{
    full_name: string
    email: string
    hashed_password: string
}


@Table({tableName: "admins"})
export class Admin extends Model<Admin, IAdminCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @Column({
        type: DataType.STRING
    })
    declare full_name: string

    @Column({
        type: DataType.STRING
    })
    declare email: string

    @Column({
        type: DataType.STRING
    })
    declare hashed_password: string

    @Column({
        type: DataType.STRING
    })
    declare refresh_token: string

    @Column({
        type: DataType.ENUM,
        values: ["admin", "superadmin"],
        defaultValue: "admin"
    })
    declare role: string
}
