import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from '../../users/models/user.model';
import { Group } from '../../groups/models/group.model';

interface IGroupMemberCreationAttr {
  userId: number;
  groupId: number;
}

@Table({ tableName: 'group_members' })
export class GroupMember extends Model<GroupMember, IGroupMemberCreationAttr> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @ForeignKey(() => Group)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare groupId: number;
}
