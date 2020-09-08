import { CreateUserLoginDto } from './dto/userlogin.dto';
import { UserLoginService } from './userlogin.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserLogin } from './schemas/userlogin.schema';

@Controller('userlogin')
export class UserLoginController {
  constructor(private readonly userLoginService: UserLoginService) {}

  @Post()
  async create(@Body() createUserLoginDto: CreateUserLoginDto) {
    await this.userLoginService.createUserLogin(createUserLoginDto);
  }

  @Get()
  async getAll(): Promise<UserLogin[]> {
    return this.userLoginService.getUserLogins();
  }
}
