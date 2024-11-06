// src/config/mongoClient.ts
import { MongoClient, Db } from 'mongodb';

const url = 'mongodb+srv://rohithkumar1909:IFghXIuTRnZiwCJ6@test1.9lokv.mongodb.net/?retryWrites=true&w=majority&appName=test1';
const db = 'course_dev';

export class MongoDBClient {
  private static isMongoConnected = false;
  private static mongoDb: Db;

  // Update to return a Promise, removing the callback pattern
  public static async getMongoConnection(): Promise<Db> {
    console.log('Getting Mongo connection...');
    
    if (this.isMongoConnected) {
      console.log('Mongo is already connected...');
      return this.mongoDb;
    } else {
      console.log('Getting New Mongo connection...');
      try {
        this.mongoDb = await this.setMongoConnection();
        this.isMongoConnected = true;
        return this.mongoDb;
      } catch (err) {
        console.error('Error occurred while connecting to MongoDB:', err);
        throw err;
      }
    }
  }

  private static async setMongoConnection(): Promise<Db> {
    const client = new MongoClient(url);
    try {
      await client.connect();
      console.log('Established MongoDB connection');
      return client.db(db);
    } catch (err) {
      console.error('Error occurred while connecting to MongoDB:', err);
      throw err;
    }
  }
}
