import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";
// User va Workspace modellarini to'g'ri import qil:
import { User } from "../../users/models/user.model";
import { Workspace } from "../../workspace/models/workspace.model";

interface IWorkspaceMemberCreationAttr {
  workspaceId: number;
  userId: number;
  is_admin: boolean;
}

@Table({ tableName: "workspace_member" })
export class WorkspaceMember extends Model<
  WorkspaceMember,
  IWorkspaceMemberCreationAttr
> {
  @ApiProperty({ example: 1, description: "Unique ID of the Workspace Member" })
  @IsNumber()
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ApiProperty({ example: 10, description: "Workspace ID" })
  @IsNumber()
  @IsNotEmpty()
  @ForeignKey(() => Workspace)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare workspaceId: number;

  @ApiProperty({ example: 5, description: "User ID" })
  @IsNumber()
  @IsNotEmpty()
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare userId: number;

  @ApiProperty({
    example: true,
    description: "Is the user an admin of the workspace?",
  })
  @IsBoolean()
  @IsNotEmpty()
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  declare is_admin: boolean;


  @BelongsTo(()=>User)
  user: User

  @BelongsTo(()=> Workspace)
  workspace: Workspace
}
