// src/config/mongoClient.ts
import { MongoClient, Db, Collection } from 'mongodb';


let mongoDb: Db | null = null;

async function connectToMongo(): Promise<void> {
  if (!mongoDb) {
    const client = new MongoClient(process.env.MONGO_URL || 'mongodb+srv://rohithkumar1909:IFghXIuTRnZiwCJ6@test1.9lokv.mongodb.net/?retryWrites=true&w=majority&appName=test1');

    try {
      await client.connect();
      console.log('Mongo connection established.');
      mongoDb = client.db(process.env.DB_NAME);
    } catch (err) {
      console.error('Error occurred while connecting to MongoDB:', err);
      throw err;
    }
  }
}


export async function getYourCollection(): Promise<Collection> {
  await connectToMongo();
  return mongoDb!.collection('course_dev');
}


