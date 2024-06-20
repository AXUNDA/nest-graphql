import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';
@InputType()
export class StudentInputType {
  @IsString()
  @IsNotEmpty()
  @Field()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  @Field()
  lastName: string;
}
