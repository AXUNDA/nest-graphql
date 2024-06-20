import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { LessonInputType } from './lesson.input';
import { AssignInputType } from './assign.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private LessonRepository: Repository<Lesson>,
  ) {}
  async createLesson(dto: LessonInputType) {
    const lesson = this.LessonRepository.create({
      id: uuid(),
      name: dto.name,
      startDate: dto.startDate,
      endDate: dto.endDate,
      students: dto.students,
    });

    return await this.LessonRepository.save(lesson);
  }
  async getLesson(id: string) {
    return await this.LessonRepository.findOneBy({ id });
  }

  async lesson() {
    const lessons = await this.LessonRepository.find();
    console.log(lessons);
    return lessons;
  }
  async assignStudentToLesson(dto: AssignInputType) {
    const lesson = await this.LessonRepository.findOneBy({ id: dto.lessonId });
    lesson.students = [...lesson.students, ...dto.studentIds];
    return await this.LessonRepository.save(lesson);
  }
}
