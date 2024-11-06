// src/config/mongoClient.ts
import { MongoClient, Db, Collection } from 'mongodb';

const url = 'mongodb+srv://rohithkumar1909:IFghXIuTRnZiwCJ6@test1.9lokv.mongodb.net/?retryWrites=true&w=majority&appName=test1';
const db = 'course_dev';


export class MongoDBClient {
  private static isMongoConnected = false;
  private static mongoDb;

public static getMongoConnection(result: (mongoConnection) => void) {
  console.log('Getting Mongo connection...');
    
  if (this.isMongoConnected) {
    console.log('Mongo is connected...');
    return result(this.mongoDb);
  } else {
    console.log('Getting New Mongo connection...');
    this.mongoDb = this.setMongoConnection();
    this.isMongoConnected = true
    return result(this.mongoDb);
  }
}

static setMongoConnection(){

  let client = new MongoClient(url);
  return new Promise((resolve, reject) => {
    client.connect().then(() => {
        console.log('Established: Mongo connection');
        this.mongoDb = client.db(db);
        resolve(this.mongoDb);
    }).catch(function(err){
        console.error('Error occurred while connecting to MongoDB:', err);
        reject(err);
    });
  });
}
}


