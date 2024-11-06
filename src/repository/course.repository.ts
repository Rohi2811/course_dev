// src/repositories/SomeRepository.ts
import { Injectable } from '@nestjs/common';
import { MongoDBClient  } from '../config/mongo.config';
import { Db } from 'mongodb';

@Injectable()
export class CourseRepository {
  private mongoDb: Db;
  constructor() {
      MongoDBClient.getMongoConnection(async (connection) => {
          this.mongoDb = connection;
      });
  };


  async getCategory(name) {
    return await this.mongoDb.collection('category').findOne({name})
  }


//  async createCategory(categoryDto) {
//     const data = await this.collection.find({}).toArray();
//     return data;
//  }


  
}
