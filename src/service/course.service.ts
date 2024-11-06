import { HttpStatus, Injectable, Response } from "@nestjs/common";
import {CourseRepository} from '../repository/course.repository';





@Injectable()
export class CourseService {

    constructor(private readonly courseRepository: CourseRepository) {}



    async createCategory( request: Request, response: Response) {
      const result = await this.courseRepository.createCategory(request.body);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Category created successfully',
        data: result,
      };
    }

    async createCourse() {
        return true;
      }


}