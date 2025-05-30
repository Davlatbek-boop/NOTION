import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { SignInUser } from "./dto/sign-in-user.dto";
import { FileService } from "../../file/file.service";
import { UsersService } from "../../users/users.service";
import { User } from "../../users/models/user.model";
import { CreateUserDto } from "../../users/dto/create-user.dto";

@Injectable()
export class AuthUserService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly fileService: FileService
  ) {}

  private async generateToken(user: User) {
    const payload = {
      id: user.id,
      name: user.first_name,
      email: user.email,
      role: "user",
    };

    return { token: this.jwtService.sign(payload) };
  }

  async signUp(createUserDto: CreateUserDto, image: any) {
    const user = await this.userService.findByEmail(createUserDto.email);

    if (user) {
      throw new BadRequestException("Bunday foydalanuchi mavjud");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.hashed_password, 7);
    createUserDto.hashed_password = hashedPassword;

      const fileName = await this.fileService.saveFile(image);

      const newUser = await this.userService.create(createUserDto, image)
  
      return this.generateToken(newUser);

  }

  async signIn(signInUser: SignInUser) {
    const user = await this.userService.findByEmail(signInUser.email);

    if (!user) {
      throw new UnauthorizedException("Email yoki Password noto'g'ri");
    }

    const verifyPassword = await bcrypt.compare(
      signInUser.password,
      user.hashed_password
    );

    if (!verifyPassword) {
      throw new UnauthorizedException("Email yoki Password noto'g'ri");
    }

    return this.generateToken(user);
  }
}
