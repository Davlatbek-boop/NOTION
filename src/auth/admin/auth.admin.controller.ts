import { Body, Controller, Post } from "@nestjs/common";
import { AuthAdminService } from "./auth.admin.service";
import { CreateAdminDto } from "src/admin/dto/create-admin.dto";
import { SignInAdmin } from "./dto/sign-in-admin.dto";

@Controller("admin/auth")
export class AuthAdminController {
  constructor(private readonly authAdminService: AuthAdminService) {}

  @Post("sign-up")
  signIn(@Body() createAdminDto: CreateAdminDto){
    return this.authAdminService.signUp(createAdminDto)
  }

  @Post("sign-in")
  sign(@Body() signInAdmin: SignInAdmin ){
    return this.authAdminService.signIn(signInAdmin)
  }
}
