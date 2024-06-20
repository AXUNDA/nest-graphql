import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { LessonInputType } from './lesson.input';
import { AssignInputType } from './assign.input';
import { Lesson } from './lesson.entity';
import { StudentService } from 'src/student/student.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => [LessonType])
  lesson() {
    return this.lessonService.lesson();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => LessonType)
  createLesson(
    // @Args('name', { type: () => String }) name: string,
    // @Args('startDate', { type: () => String }) startDate: string,
    // @Args('endDate', { type: () => String }) endDate: string,
    @Args('LessonInputType') dto: LessonInputType,
  ) {
    return this.lessonService.createLesson(dto);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => LessonType)
  getLesson(@Args('id', { type: () => String }) id) {
    return this.lessonService.getLesson(id);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => LessonType)
  assignLessonToStudent(@Args('assign') dto: AssignInputType) {
    return this.lessonService.assignStudentToLesson(dto);
  }

  @ResolveField()
  students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
