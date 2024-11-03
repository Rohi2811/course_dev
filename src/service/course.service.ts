import { Injectable } from "@nestjs/common";
import {CourseRepository} from '../repository/course.repository';
import { Course } from "src/repository/schema";




@Injectable()
export class CourseService {

    constructor(private readonly CourseRepository: CourseRepository) {}

    createCourse(course: Course) {
        return true;
      }


}