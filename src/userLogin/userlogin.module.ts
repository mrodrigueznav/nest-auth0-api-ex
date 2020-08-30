import { UserLoginSchema, UserLogin } from './schemas/userlogin.schema';
import { UserLoginService } from './userlogin.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLoginController } from './userlogin.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserLogin.name, schema: UserLoginSchema }])],
  controllers: [UserLoginController],
  providers: [UserLoginService],
})
export class UserLoginModule {}
