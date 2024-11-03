import { Body, Controller, Post, Get } from "@nestjs/common";
import {CourseService} from '../service/course.service';
import { Course, Category, SubCategory } from '../repository/schema';



@Controller('api/v1.0')
export class CourseController{
    constructor(private readonly CourseService: CourseService) {}


    @Post('/course/create')
    async createCourse(@Body() course: Course) {
        return this.CourseService.createCourse(course)
    }

}