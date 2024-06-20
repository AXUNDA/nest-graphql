import { InputType, Field, ID } from '@nestjs/graphql';
import { IsArray, IsUUID, ArrayUnique, IsNotEmpty } from 'class-validator';
@InputType()
export class AssignInputType {
  @IsUUID()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  lessonId: string;
  @IsArray()
  @IsNotEmpty()
  @ArrayUnique()
  @IsUUID('4', { each: true })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [ID])
  studentIds: string[];
}
