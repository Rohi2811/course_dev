import { HttpStatus, Injectable, Response } from "@nestjs/common";
import {CourseRepository} from '../repository/course.repository';





@Injectable()
export class CourseService {

    constructor(private readonly courseRepository: CourseRepository) {}



    async createCategory( body: any) {
      console.log("ody is", body)
      
      const {name, description} = body

      const getCategory = await this.courseRepository.getCategory(name);

      console.log(getCategory)
      //const result = await this.courseRepository.createCategory(request.body);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Category created successfully',
        
      };
    }

    async createCourse() {
        return true;
      }


}