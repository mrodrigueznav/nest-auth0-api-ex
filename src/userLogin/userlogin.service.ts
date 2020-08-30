import { CreateUserLoginDto } from './dto/userlogin.dto';
import { UserLogin } from './schemas/userlogin.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserLoginService {
  constructor(@InjectModel(UserLogin.name) private readonly userloginModel: Model<UserLogin>) {}

  async createUserLogin(createUserLoginDto: CreateUserLoginDto): Promise<UserLogin> {
    const createUserLogin = new this.userloginModel(createUserLoginDto);
    return createUserLogin.save();
  }

  async getUserLogins(): Promise<UserLogin[]> {
    return this.userloginModel.find().exec();
  }
}
