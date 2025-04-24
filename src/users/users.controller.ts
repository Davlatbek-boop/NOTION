import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { JwtUserSelfGuard } from 'src/common/guards/jwt-user-self.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles-auth.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({summary: "Foydalanuvchini qo'shish"})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Roles("admin", "superadmin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({summary: "Foydalanuvchilarni olish"})
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtUserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({summary: "Bitta foydalanuvchini olish"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({summary: "Foydalanuvchini yangilash"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({summary: "Foydalanuvchini o'chirish"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
