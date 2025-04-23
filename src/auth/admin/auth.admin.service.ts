import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminService } from "src/admin/admin.service";
import { CreateAdminDto } from "src/admin/dto/create-admin.dto";
import { SignInAdmin } from "./dto/sign-in-admin.dto";
import * as bcrypt from "bcrypt";
import { Admin } from "src/admin/models/admin.model";

@Injectable()
export class AuthAdminService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService
  ) {}

  async generateToken(admin: Admin) {
    const payload = {
      name: admin.full_name,
      email: admin.email,
      role: admin.role,
    };
    return {token: this.jwtService.sign(payload)}
  }

  async signUp(createAdminDto: CreateAdminDto) {
    const admin = await this.adminService.findByEmail(createAdminDto.email);

    if (admin) {
      throw new BadRequestException("Bunday foydalanuvchi mavjud");
    }

    const hashPassword = await bcrypt.hash(createAdminDto.hashed_password, 7);
    createAdminDto.hashed_password = hashPassword;

    const newAdmin = await this.adminService.create(createAdminDto);

    return newAdmin;
  }

  async signIn(signInAdmin: SignInAdmin) {
    const admin = await this.adminService.findByEmail(signInAdmin.email);

    if (!admin) {
      throw new UnauthorizedException("Email yoki Password xato");
    }

    const verifyPassword = await bcrypt.compare(
      signInAdmin.password,
      admin.hashed_password
    );

    if (!verifyPassword) {
      throw new UnauthorizedException("Email yoki Password xato");
    }

    return this.generateToken(admin)
  }
}
