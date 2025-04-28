import { BelongsTo, BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { User } from '../../users/models/user.model';
import { GroupMember } from './group-member.model';

interface IGroupCreationModelAttr {
  name: string;
  icon: string;
  description: string;
}

@Table({ tableName: 'groups' })
export class Group extends Model<Group, IGroupCreationModelAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare icon: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare description: string;

  @BelongsToMany(()=> User, ()=> GroupMember)
  user: User[]
}
