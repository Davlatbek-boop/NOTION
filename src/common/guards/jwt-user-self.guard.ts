import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class JwtUserSelfGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    console.log(req.user.role, req.params.id);

    if (req.user.role == "user") {
      if (req.user.id != req.params.id) {
        throw new ForbiddenException({
          message: "Ruxsat etilmagan foydalanuvchi",
        });
      }
    }

    return true;
  }
}
