import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../users/models/user.model'; // User modeling to'g'ri import qil!

interface IDevicesCreationAttr {
  userId: number;
  name: string;
  location: string;
  information: object;
}

@Table({ tableName: 'devices' })
export class Device extends Model<Device, IDevicesCreationAttr> {
  
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare location: string;

  @Column({
    type: DataType.JSONB, // Postgres uchun JSONB, boshqa DB uchun JSON bo'ladi
    allowNull: false,
  })
  declare information: object;



  @BelongsTo(()=> User)
  user: User
}
