import { Course, Category, SubCategory } from '../repository/schema';
import { ObjectId } from 'mongodb';
import { connectToDatabase, getClient } from '../config/mongo.config';
import { Injectable } from '@nestjs/common';


@Injectable()
export class CourseRepository {

};
