import { PartialType } from '@nestjs/swagger';
import { CreateTeamSpaceMemberDto } from './create-team-space-member.dto';

export class UpdateTeamSpaceMemberDto extends PartialType(CreateTeamSpaceMemberDto) {}
