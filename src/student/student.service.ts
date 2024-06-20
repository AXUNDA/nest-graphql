import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { StudentInputType } from './student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private StudentRepository: Repository<Student>,
  ) {}
  async createStudent(dto: StudentInputType) {
    const student = this.StudentRepository.create({
      id: uuid(),
      firstName: dto.firstName,
      lastName: dto.lastName,
    });

    return await this.StudentRepository.save(student);
  }
  async students() {
    return await this.StudentRepository.find();
  }

  async getStudents(id: string) {
    return await this.StudentRepository.findOneBy({
      id,
    });
  }
  async getManyStudents(studentIds: string[]) {
    const students = await Promise.all(
      studentIds.map((id) => this.getStudents(id)),
    );
    console.log(students);
    return students;
    // return await this.StudentRepository.find({
    //   where: {
    //     id: {
    //       $in: studentIds,
    //     },
    //   },
    // });
  }
}
