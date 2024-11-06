import { Body, Controller, Post, Get, Req, Res, UsePipes } from "@nestjs/common";
import {CourseService} from '../service/course.service';
import { Validator } from "src/pipes/joi.pipes";
import { createCategorySchema } from "src/validation/validation.schema";




@Controller('api/v1.0')
export class CourseController{
    constructor(private readonly CourseService: CourseService) {}


    @Post('/category/create')
    @UsePipes(new Validator(createCategorySchema))
    async createCategory(@Body() body: any, ) {
        console.log("in there are bot")
        return this.CourseService.createCategory(body)
    }

    @Post('/course/create')
    async createCourse(@Body() @Req() req: Request, @Res() res: Response) {
        return this.CourseService.createCourse()
    }

}