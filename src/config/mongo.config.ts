import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://rohithkumar1909:IFghXIuTRnZiwCJ6@test1.9lokv.mongodb.net/?retryWrites=true&w=majority&appName=test1';
const client = new MongoClient(uri);

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('course_dev'); // Update with your database name
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export const getClient = () => client;
