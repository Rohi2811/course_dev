import { Body, Controller, Post, Get, Req, Res } from "@nestjs/common";
import {CourseService} from '../service/course.service';




@Controller('api/v1.0')
export class CourseController{
    constructor(private readonly CourseService: CourseService) {}


    @Post('/category/create')
    async createCategory(@Body() @Req() req: Request, @Res() res: Response) {
        return this.CourseService.createCategory(req,res)
    }

    @Post('/course/create')
    async createCourse(@Body() @Req() req: Request, @Res() res: Response) {
        return this.CourseService.createCourse()
    }

}