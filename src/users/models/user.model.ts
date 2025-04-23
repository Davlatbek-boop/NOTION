import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Block } from "src/blocks/models/block.model";

interface IUserCreationAttr {
  first_name: string;
  last_name: string;
  email: string;
  hashed_password: string;
  photo: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare first_name: string;

  @Column({
    type: DataType.STRING,
  })
  declare last_name: string;

  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare hashed_password: string;

  @Column({
    type: DataType.STRING,
  })
  declare photo: string;

  @Column({
    type: DataType.STRING,
    defaultValue: ""
  })
  declare refresh_token: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  declare is_active: boolean;

  @Column({
    type: DataType.STRING,
    defaultValue: ""
  })
  declare activation_link: string;

  @HasMany(()=> Block)
  block: Block[]
}
