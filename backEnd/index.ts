import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import adminRouter from './routes/admin';
import userRouter from './routes/user';
import * as dotenv from 'dotenv';
import {connection} from "./connection"
dotenv.config()

//Initializer to Express
const app = express();

//Middleware - Body-Parser/Cors
app.use(cors());
app.use(express.json());

//Routes 
app.use('/admin', adminRouter);
app.use('/user', userRouter);

//connection.js

connection("mongodb+srv://dcode0n1:plokplok@cluster1.yuh8q4d.mongodb.net/").then(()=> {
  console.log("Connected to the Database")
})

app.listen(process.env.PORT, () => console.log('Server running on port', process.env.PORT));
