import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { StudentService } from './student.service';

import { StudentType } from './stundent.type';
import { StudentInputType } from './student.input';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((of) => StudentType)
  createStudent(@Args('studentInputType') dto: StudentInputType) {
    return this.studentService.createStudent(dto);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => [StudentType])
  students() {
    return this.studentService.students();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => StudentType)
  getStudent(@Args('id') id: string) {
    return this.studentService.getStudents(id);
  }
}
