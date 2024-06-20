import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from 'src/student/stundent.type';

@ObjectType('Lesson')
export class LessonType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((_type) => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  startDate: string;
  @Field()
  endDate: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [StudentType])
  students: string[];
}
