
import { Injectable } from '@nestjs/common';
import { MongoDBClient } from '../config/mongo.config'; 
import { Db } from 'mongodb';

@Injectable()
export class CourseRepository {
  private mongoDb: Db;

  constructor() {
    // Initialize connection asynchronously
    this.initializeMongoConnection();
  }

  private async initializeMongoConnection() {
    try {
      this.mongoDb = await MongoDBClient.getMongoConnection();
      console.log('MongoDB connection established in CourseRepository');
    } catch (err) {
      console.error('Error occurred while initializing MongoDB connection:', err);
    }
  }

  async getCategory(name: string) {
    if (!this.mongoDb) {
      throw new Error('MongoDB connection is not initialized');
    }
    return await this.mongoDb.collection('category').findOne({ name });
  }


}
