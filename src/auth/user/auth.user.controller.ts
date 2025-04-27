import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { SignInUser } from "./dto/sign-in-user.dto";
import { AuthUserService } from "./auth.user.service";
import { ApiOperation } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("user/auth")
export class AuthUserController {
  constructor(private readonly authService: AuthUserService) {}

  @ApiOperation({
    summary: "Userni ro'yxatdan o'tishi",
  })
  @UseInterceptors(FileInterceptor("photo"))
  @Post("sign-up")
  signUp(@Body() createUserDto: CreateUserDto, @UploadedFile() photo: any) {
    return this.authService.signUp(createUserDto, photo);
  }

  @ApiOperation({
    summary: "Userni login qilishi",
  })
  @Post("sign-in")
  signIN(@Body() signInUser: SignInUser) {
    return this.authService.signIn(signInUser);
  }
}
