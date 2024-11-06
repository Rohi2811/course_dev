// src/repositories/SomeRepository.ts
import { Injectable } from '@nestjs/common';
import { getYourCollection  } from '../config/mongo.config';
import { Collection } from 'mongodb';

@Injectable()
export class CourseRepository {
  private collection: Collection;

  constructor() {
    //for connecting to DB
    getYourCollection().then((collection) => {
      this.collection = collection;
    }).catch((error) => {
      console.error("Failed to connect to MongoDB:", error);
    });
  }



 async createCategory(categoryDto) {
    const data = await this.collection.find({}).toArray();
    return data;
 }


  
}
