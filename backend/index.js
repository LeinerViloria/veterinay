import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './db/db.js';

dotenv.config();

const APP = express();
APP.use(express.json());
APP.use(cors());

APP.listen(process.env.PORT, ()=>{
    console.log("Listening in the port: ", process.env.PORT);
});

dbConnection.dbConnection();