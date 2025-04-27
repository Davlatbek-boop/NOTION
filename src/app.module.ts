import { Module } from "@nestjs/common";
import { BlocksModule } from "./blocks/blocks.module";
import { TypesModule } from "./types/types.module";
import { PropertiesModule } from "./properties/properties.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { Type } from "./types/models/type.model";
import { Property } from "./properties/models/property.model";
import { Block } from "./blocks/models/block.model";
import { BlockPropertiesModule } from './block-properties/block-properties.module';
import { BlockProperty } from "./block-properties/models/block-property.model";
import { UsersModule } from './users/users.module';
import { User } from "./users/models/user.model";
import { AdminModule } from './admin/admin.module';
import { Admin } from "./admin/models/admin.model";
import { AuthModule } from './auth/auth.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { Workspace } from "./workspace/models/workspace.model";
import { PermissionModule } from './permission/permission.module';
import { Permission } from "./permission/models/permission.model";
import { TeamSpaceModule } from './team-space/team-space.module';
import { TeamSpace } from "./team-space/models/team-space.model";
import { TeamSpaceMembersModule } from './team-space-members/team-space-members.module';
import { TeamSpaceMember } from "./team-space-members/models/team-space-member.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Type, Property, Block, BlockProperty, User, Admin, Workspace, Permission, TeamSpace, TeamSpaceMember],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),

    BlocksModule,
    TypesModule,
    PropertiesModule,
    BlockPropertiesModule,
    UsersModule,
    AdminModule,
    AuthModule,
    WorkspaceModule,
    PermissionModule,
    TeamSpaceModule,
    TeamSpaceMembersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
