import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";
import { AuthUserController } from "./user/auth.user.controller";
import { AuthUserService } from "./user/auth.user.service";
import { AuthAdminController } from "./admin/auth.admin.controller";
import { AuthAdminService } from "./admin/auth.admin.service";
import { ConfigModule } from "@nestjs/config";
import { AdminModule } from "src/admin/admin.module";
import { FileModule } from "../file/file.module";

@Module({
  imports: [
    UsersModule, AdminModule, FileModule,
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: process.env.JWT_TIME },
    }),
  ],
  controllers: [AuthUserController, AuthAdminController],
  providers: [AuthUserService, AuthAdminService],
})
export class AuthModule {}
