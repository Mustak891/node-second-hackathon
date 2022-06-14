import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { cameraRouter } from './camera.js';
import cors from 'cors';

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(cors({ origin: 'https://second-hackathon.netlify.app',
 credentials: true, 
 methods: 'GET,POST,PUT,DELETE', 
 allowedHeaders: 'Content-Type, Authorization', }));


app.use(express.json());

// connection for monogoDB and nodejs
const Mongo_Url = process.env.Mongo_Url;

// const Mongo_Url = "mongodb://localhost";

async function createConnection(){
    const client = new MongoClient(Mongo_Url);
    await client.connect();
    console.log("Connected to MongoDB 👌");
    return client;
}

export const client = await createConnection();

app.get('/', function (req, res) {
  res.send('Hello World from Express! 👋')
})

app.use('/camera', cameraRouter);


app.listen(PORT, () => console.log(`node app listening on port ${PORT}`))