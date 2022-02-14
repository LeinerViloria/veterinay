import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './db/db.js';

import role from './routes/role.js';
import user from './routes/user.js';
import animal from './routes/animal.js';

dotenv.config();

const APP = express();
APP.use(express.json());
APP.use(cors());
APP.use("/api/role", role);
APP.use("/api/user", user);
APP.use("/api/animal", animal);

APP.listen(process.env.PORT, ()=>{
    console.log("Listening in the port: ", process.env.PORT);
});

dbConnection.dbConnection();