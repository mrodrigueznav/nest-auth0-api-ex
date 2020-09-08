import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserLogin extends Document {
  @Prop()
  given_name: string;

  @Prop()
  family_name: string;

  @Prop()
  email: string;

  @Prop()
  date: Date;
}

export const UserLoginSchema = SchemaFactory.createForClass(UserLogin);
