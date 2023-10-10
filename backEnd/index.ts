import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import adminRouter from './routes/admin';
import userRouter from './routes/user';
import dotenv from 'dotenv';

dotenv.config()


const app = express();

app.use(cors());
app.use(express.json());

app.use('/admin', adminRouter);
app.use('/user', userRouter);

mongoose.connect(
 "mongodb+srv://dcode0n1:plokplok@cluster1.yuh8q4d.mongodb.net/",
  {
    dbName: 'database',
  }
);

app.listen(4000, () => console.log('Server running on port', process.env.PORT));
