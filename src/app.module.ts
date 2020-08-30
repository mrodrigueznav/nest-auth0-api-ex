import { UserLoginModule } from './userLogin/userlogin.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [AuthModule, MongooseModule.forRoot(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.uzbvj.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`
    ), UserLoginModule],
})

export class AppModule {}
