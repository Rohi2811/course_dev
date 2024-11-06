import { Module } from '@nestjs/common';
import {CourseController} from './controller/course.controller'
import { CourseService } from './service/course.service';
import { CourseRepository } from './repository/course.repository';




@Module({
  imports: [],
  controllers: [CourseController],
  providers: [CourseService,CourseRepository]
})
export class AppModule {}
