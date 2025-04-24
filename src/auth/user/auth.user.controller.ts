import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { SignInUser } from "./dto/sign-in-user.dto";
import { AuthUserService } from "./auth.user.service";
import { ApiOperation } from "@nestjs/swagger";

@Controller("user/auth")
export class AuthUserController {
  constructor(private readonly authService: AuthUserService) {}

  @ApiOperation({
    summary: "Userni ro'yxatdan o'tishi"
  })
  @Post("sign-up")
  signUp(@Body() createUserDto: CreateUserDto){
    return this.authService.signUp(createUserDto)
  }

  @ApiOperation({
    summary: "Userni login qilishi"
  })
  @Post("sign-in")
  signIN(@Body() signInUser: SignInUser){
    return this.authService.signIn(signInUser)
  }
}
